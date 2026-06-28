"use client";

import { useEffect } from "react";
import * as THREE from "three";

export default function ClientInit() {
  useEffect(() => {
    // ===== Celestial background shader (muted olive, non-distracting) =====
    const mount = document.getElementById("cb-bg");
    let stopped = false;
    let raf: number;

    if (mount && typeof THREE !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: false,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(1);
      mount.appendChild(renderer.domElement);

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        precision mediump float;
        varying vec2 vUv;
        uniform vec2  u_resolution;
        uniform float u_time;
        uniform vec2  u_mouse;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }
        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.y * u.x;
        }
        float fbm(vec2 st) {
          float v = 0.0; float a = 0.5;
          for (int i = 0; i < 3; i++) { v += a * noise(st); st *= 2.0; a *= 0.5; }
          return v;
        }
        vec3 hsl2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.y, u_resolution.x);
          uv *= 1.4;

          vec2 m = (u_mouse / u_resolution - 0.5) * 0.12;
          uv += m;

          float f = fbm(uv + vec2(u_time * 0.06, u_time * 0.03));
          float t = fbm(uv + f * 0.5 + vec2(u_time * 0.03, u_time * 0.015));
          float nebula = pow(t, 1.8);

          vec3 base  = hsl2rgb(vec3(0.278, 0.30, 0.06));
          vec3 glow  = hsl2rgb(vec3(0.292, 0.45, 0.38));
          vec3 color = mix(base, glow, nebula);

          float sv = random(vUv * 900.0);
          if (sv > 0.9982) {
            color += vec3((sv - 0.9982) / 0.0018 * 0.55);
          }

          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 4.2 },
          u_resolution: { value: new THREE.Vector2() },
          u_mouse: { value: new THREE.Vector2() },
        },
      });

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);

      const resize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        renderer.setSize(w, h);
        material.uniforms.u_resolution.value.set(w, h);
      };

      const TARGET_FPS = 20;
      const FRAME_MS = 1000 / TARGET_FPS;
      let lastFrameTime = 0;

      const animate = (now: number) => {
        if (stopped) return;
        raf = requestAnimationFrame(animate);
        if (now - lastFrameTime < FRAME_MS) return;
        lastFrameTime = now;
        material.uniforms.u_time.value += 0.012;
        renderer.render(scene, camera);
      };

      const onMouseMove = (e: MouseEvent) => {
        const r = mount.getBoundingClientRect();
        material.uniforms.u_mouse.value.set(
          e.clientX - r.left,
          mount.clientHeight - (e.clientY - r.top)
        );
      };

      window.addEventListener("mousemove", onMouseMove, { passive: true });
      window.addEventListener("resize", resize);
      resize();
      raf = requestAnimationFrame(animate);

      // Cleanup for this block done in main cleanup below
    }

    // Mobile nav toggle
    const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
    const nav = document.querySelector<HTMLElement>(".main-nav");
    const handleToggle = () => {
      if (!nav || !toggle) return;
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    const handleNavLinkClick = () => {
      if (!nav || !toggle) return;
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    if (toggle && nav) {
      toggle.addEventListener("click", handleToggle);
      nav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", handleNavLinkClick)
      );
    }

    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Count-up stats when scrolled into view
    const nums = document.querySelectorAll<HTMLElement>(".stat-num");
    const animateStat = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.target || "0") || 0;
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const value = Math.round(target * eased);
        el.textContent = prefix + value.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    let statObs: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      statObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateStat(entry.target as HTMLElement);
              statObs?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      nums.forEach((n) => statObs?.observe(n));
    } else {
      nums.forEach((n) => animateStat(n));
    }

    // ===== Hero intro sequence =====
    const hero = document.getElementById("hero-section");
    const btn = document.getElementById("get-started-btn");
    const bookLayer = document.getElementById("book-layer");

    if (hero && btn && bookLayer) {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      let triggered = false;

      const handleBtnClick = () => {
        if (triggered) return;
        triggered = true;
        (btn as HTMLButtonElement).disabled = true;

        if (prefersReduced) {
          const siteLayerA = document.getElementById("hero-site-layer");
          if (siteLayerA) {
            siteLayerA.classList.add("visible");
            siteLayerA.removeAttribute("aria-hidden");
          }
          setTimeout(() => document.body.classList.remove("intro-mode"), 650);
          return;
        }

        fadeInBook();
      };

      btn.addEventListener("click", handleBtnClick);

      const fadeInBook = () => {
        const wrapper = document.getElementById("cb-wrapper");
        const cover = document.getElementById("cb-cover");

        setTimeout(() => {
          if (wrapper) wrapper.classList.add("cb-is-opening");
          if (cover) cover.classList.add("cb-is-opening");

          const onDone = () => exitToSite();
          const zoomTrigger = document.querySelector(".cb-fp--8");
          if (zoomTrigger) {
            zoomTrigger.addEventListener("animationend", onDone, {
              once: true,
            });
          } else if (cover) {
            cover.addEventListener("animationend", onDone, { once: true });
          } else {
            setTimeout(onDone, 5600);
          }
        }, 300);
      };

      const exitToSite = () => {
        const siteLayer = document.getElementById("hero-site-layer");
        const book = document.querySelector<HTMLElement>(".cb-book");

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (book && !reducedMotion) {
          const rect = book.getBoundingClientRect();
          const originX = rect.left + rect.width * 0.5;
          const originY = rect.top + rect.height * 0.25;
          bookLayer!.style.transformOrigin = `${originX}px ${originY}px`;
          bookLayer!.classList.add("cb-camera-zoom");

          setTimeout(() => {
            const flash = document.createElement("div");
            flash.style.cssText =
              "position:fixed;inset:0;z-index:99999;background:#fff;opacity:0;pointer-events:none;transition:opacity 0.08s ease;";
            document.body.appendChild(flash);
            requestAnimationFrame(() => {
              flash.style.opacity = "1";
            });

            setTimeout(() => {
              stopped = true;
              bookLayer!.style.opacity = "0";
              if (siteLayer) {
                siteLayer.classList.add("visible");
                siteLayer.removeAttribute("aria-hidden");
              }
              document.body.classList.remove("intro-mode");
              window.scrollTo(0, 0);
              flash.style.transition = "opacity 0.35s ease";
              flash.style.opacity = "0";
              setTimeout(() => flash.remove(), 400);
            }, 120);
          }, 800);
        } else {
          stopped = true;
          bookLayer!.style.transition = "opacity 0.85s ease";
          bookLayer!.style.opacity = "0";
          if (siteLayer) {
            siteLayer.classList.add("visible");
            siteLayer.removeAttribute("aria-hidden");
          }
          window.scrollTo(0, 0);
          setTimeout(() => {
            document.body.classList.remove("intro-mode");
          }, 950);
        }
      }
    }

    // ===== Cursor-proximity animation for hero title =====
    const title = document.querySelector<HTMLElement>(".hero-title");
    if (
      title &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const wordEls = title.querySelectorAll<HTMLElement>(".hero-word");
      const letters: HTMLElement[] = [];

      wordEls.forEach((word) => {
        const text = word.textContent || "";
        word.textContent = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.className = "hero-letter";
          span.textContent = char;
          word.appendChild(span);
          letters.push(span);
        });
      });

      const RADIUS = 160;
      const MAX_SCALE = 0.12;
      const C_DEF = [247, 244, 236];
      const C_ACT = [217, 189, 181];

      let mouseX = -9999;
      let mouseY = -9999;
      let rafId: number | null = null;

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const gaussian = (d: number) =>
        Math.exp(-(d * d) / (2 * RADIUS * RADIUS));

      const updateLetters = () => {
        letters.forEach((letter) => {
          const rect = letter.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = mouseX - cx;
          const dy = mouseY - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const p = gaussian(dist);
          const scale = 1 + MAX_SCALE * p;
          const r = Math.round(lerp(C_DEF[0], C_ACT[0], p));
          const g = Math.round(lerp(C_DEF[1], C_ACT[1], p));
          const b = Math.round(lerp(C_DEF[2], C_ACT[2], p));
          letter.style.transform = `scale(${scale.toFixed(4)})`;
          letter.style.color = `rgb(${r},${g},${b})`;
        });
        rafId = null;
      }

      const scheduleUpdate = () => {
        if (!rafId) rafId = requestAnimationFrame(updateLetters);
      };

      if (window.matchMedia("(hover: hover)").matches) {
        title.addEventListener(
          "mousemove",
          (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            scheduleUpdate();
          },
          { passive: true }
        );
        title.addEventListener("mouseleave", () => {
          mouseX = -9999;
          mouseY = -9999;
          scheduleUpdate();
        });
      }
    }

    // Cleanup
    return () => {
      stopped = true;
      if (raf) cancelAnimationFrame(raf);
      statObs?.disconnect();
      if (toggle) toggle.removeEventListener("click", handleToggle);
    };
  }, []);

  return null;
}
