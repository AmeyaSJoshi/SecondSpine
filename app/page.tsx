"use client";

import ClientInit from "./ClientInit";

export default function Home() {
  return (
    <>
      <ClientInit />

      {/* ===== Header / Nav ===== */}
      <header className="site-header">
        <div className="nav-wrap">
          <a
            href="#top"
            className="brand"
            title="Back to top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <svg
              className="brand-logo"
              viewBox="0 0 54 52"
              width="48"
              height="46"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="43" width="46" height="6" rx="2" fill="#ffffff18" />
              <rect x="5" y="38" width="44" height="9" rx="2.5" fill="#efe7d9" />
              <rect x="5" y="38" width="6" height="9" rx="2.5" fill="#d9bcaf" />
              <line x1="14" y1="40" x2="46" y2="40" stroke="#c8a29360" strokeWidth="1.2" />
              <line x1="14" y1="44" x2="46" y2="44" stroke="#c8a29330" strokeWidth="1" />
              <rect x="8" y="28" width="38" height="9" rx="2.5" fill="#6f3a2c" />
              <rect x="8" y="28" width="6" height="9" rx="2.5" fill="#5a2e22" />
              <line x1="17" y1="30" x2="43" y2="30" stroke="#ffffff35" strokeWidth="1.2" />
              <line x1="17" y1="34" x2="43" y2="34" stroke="#ffffff20" strokeWidth="1" />
              <rect x="3" y="18" width="46" height="9" rx="2.5" fill="#7c8d5f" />
              <rect x="3" y="18" width="6" height="9" rx="2.5" fill="#657548" />
              <line x1="12" y1="20" x2="46" y2="20" stroke="#ffffff35" strokeWidth="1.2" />
              <line x1="12" y1="24" x2="46" y2="24" stroke="#ffffff20" strokeWidth="1" />
              <rect x="7" y="8" width="40" height="9" rx="2.5" fill="#3e5230" />
              <rect x="7" y="8" width="6" height="9" rx="2.5" fill="#2f3f25" />
              <line x1="16" y1="10" x2="44" y2="10" stroke="#ffffff35" strokeWidth="1.2" />
              <line x1="16" y1="14" x2="44" y2="14" stroke="#ffffff20" strokeWidth="1" />
              <rect x="7" y="8" width="2" height="9" rx="1" fill="#ffffff30" />
            </svg>
            <span className="brand-text">
              <span className="brand-mark">SECOND</span>
              <span className="brand-mark">SPINE</span>
            </span>
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="main-nav">
            <ul>
              <li>
                <a href="#mission">What We Do</a>
              </li>
              <li>
                <a href="#impact">Our Impact</a>
              </li>
              <li>
                <a href="#involved">Get Involved</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="mailto:admin@secondspine.org">Contact</a>
              </li>
            </ul>
            <div className="nav-social">
              <a
                href="https://instagram.com/secondspineorganization"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="19" height="19">
                  <path
                    fill="currentColor"
                    d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.64 4.13.34 4.9.14 5.77.08 7.04.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"
                  />
                </svg>
              </a>
              <a href="mailto:admin@secondspine.org" aria-label="Email">
                <svg viewBox="0 0 24 24" width="19" height="19">
                  <path
                    fill="currentColor"
                    d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.2L3.6 6H20.4L12 11.2ZM3 7.9V18h18V7.9l-9 5.6-9-5.6Z"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      {/* Nebula canvas lives here so it persists behind both intro and main hero */}
      <div id="cb-bg" aria-hidden="true"></div>

      <section className="hero" id="hero-section">
        <div className="hero-overlay"></div>

        {/* Book layer — visible immediately, text lives on the cover */}
        <div className="book-layer visible" id="book-layer" aria-hidden="true">
          <div className="cb-scene">
            <div className="cb-wrapper" id="cb-wrapper">
              <div className="cb-book">
                {/* Spine — left 3D face */}
                <div className="cb-spine"></div>
                {/* Page edges — right 3D face */}
                <div className="cb-edge"></div>
                {/* Interior pages (revealed when cover opens) */}
                <div className="cb-interior"></div>
                {/* Pages that flip after cover opens. DOM order = paint order: --25 bottom, --1 top */}
                <div className="cb-pages-flip">
                  <div className="cb-fp cb-fp--25">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--24">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--23">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--22">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--21">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--20">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--19">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--18">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--17">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--16">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--15">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--14">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--13">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--12">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--11">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--10">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--9">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--8">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--7">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--6">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--5">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--4">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--3">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--2">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                  <div className="cb-fp cb-fp--1">
                    <div className="cb-fp-front"></div>
                    <div className="cb-fp-back"></div>
                  </div>
                </div>
                {/* Front cover (rotates open around left/spine edge) */}
                <div className="cb-cover" id="cb-cover">
                  {/* Exterior face — visible when closed */}
                  <div className="cb-cover-face">
                    <div className="cb-cover-inset"></div>
                    <div className="cb-cover-titles">
                      <span className="cb-title-word">SECOND</span>
                      <span className="cb-title-word">SPINE</span>
                    </div>
                    <p className="cb-cover-tagline">Nonprofit &middot; Restored books</p>
                    <p className="cb-cover-stat">
                      We collect discarded books, restore them by hand, and{" "}
                      <strong>return them free</strong> to libraries and
                      communities that need them.
                    </p>
                    <button className="get-started-btn" id="get-started-btn">
                      Learn More
                    </button>
                  </div>
                  {/* Interior face — visible when open */}
                  <div className="cb-cover-inside"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Permanent hero revealed after intro animation */}
        <div
          className="hero-site-layer"
          id="hero-site-layer"
          aria-hidden="true"
        >
          <div className="hsl-inner">
            <p className="hsl-eyebrow">Saratoga, CA &nbsp;&middot;&nbsp; Book Restoration</p>
            <h1 className="hsl-title" aria-label="Second Spine">
              <span className="hsl-word">SECOND</span>
              <span className="hsl-word">SPINE</span>
            </h1>
            <div className="hsl-shelf" aria-hidden="true">
              <div className="hsl-book b1"></div>
              <div className="hsl-book b2"></div>
              <div className="hsl-book b3"></div>
              <div className="hsl-book b4"></div>
              <div className="hsl-book b5"></div>
              <div className="hsl-book b6"></div>
              <div className="hsl-book b7"></div>
            </div>
            <p className="hsl-tagline">
              Every year, millions of books are discarded — torn, damaged,
              forgotten.
              <br />
              We restore them. We return them to the shelves they belong on.
            </p>
            <div className="hsl-cta-row">
              <a href="#mission" className="hsl-btn hsl-ghost">
                Our Story
              </a>
              <a
                href="https://www.gofundme.com/f/support-second-spine/qr/o?attribution_id=sl:26cdb99f-29e6-4d58-b4ff-e73b4a359507&lang=en_US&ts=1780894651&utm_campaign=man_sharesheet_dash&utm_content=amp17_tb-amp20_t1&utm_medium=customer&utm_source=qr_code"
                className="hsl-btn hsl-solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Today
              </a>
            </div>
          </div>
          <div className="hsl-scroll" aria-hidden="true">
            <span className="hsl-scroll-label">Scroll</span>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== 3 Quick CTAs ===== */}
      <section className="quick-cta">
        <div className="container">
          <div className="qcta-grid">
            <a className="qcta-card" href="#mission">
              <span className="qcta-label">Learn More</span>
              <span className="qcta-title">About Our Mission</span>
              <span className="qcta-arrow">→</span>
            </a>
            <a
              className="qcta-card qcta-featured"
              href="https://www.gofundme.com/f/support-second-spine/qr/o?attribution_id=sl:26cdb99f-29e6-4d58-b4ff-e73b4a359507&lang=en_US&ts=1780894651&utm_campaign=man_sharesheet_dash&utm_content=amp17_tb-amp20_t1&utm_medium=customer&utm_source=qr_code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="qcta-label">Support Us</span>
              <span className="qcta-title">Donate to Second Spine Today</span>
              <span className="qcta-arrow">→</span>
            </a>
            <a
              className="qcta-card"
              href="https://instagram.com/secondspineorganization"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="qcta-label">Stay Connected</span>
              <span className="qcta-title">Follow Us on Instagram</span>
              <span className="qcta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section className="mission" id="mission">
        <div className="container">
          <p className="section-eyebrow">What Do We Do?</p>
          <h2 className="section-title">
            We rescue, restore, and return books to the community.
          </h2>
          <p className="mission-lead">
            Our goal is to collect torn up, damaged, or unwanted books from the
            community. We restore them by binding hardcovers — a
            &ldquo;second spine&rdquo; — then we redistribute them back to
            local libraries and neighborhoods.
          </p>

          <div className="cards three">
            <article className="card">
              <div className="card-icon">📚</div>
              <h3>Collect</h3>
              <p>
                We gather damaged and unwanted books donated by people across
                the community.
              </p>
            </article>
            <article className="card">
              <div className="card-icon">🛠️</div>
              <h3>Restore</h3>
              <p>
                In our workshops we bind new hardcovers, giving each book a
                sturdy second spine.
              </p>
            </article>
            <article className="card">
              <div className="card-icon">🤝</div>
              <h3>Redistribute</h3>
              <p>
                Restored books return to local libraries and neighborhoods for
                everyone to enjoy.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Impact stats ===== */}
      <section className="impact" id="impact">
        <div className="container">
          <p className="section-eyebrow light">Our Impact</p>
          <h2 className="section-title light">
            Books deserve a second chapter.
          </h2>
          <div className="stats">
            <div className="stat">
              <span
                className="stat-num"
                data-target="1200"
                data-suffix="+"
              >
                0
              </span>
              <span className="stat-label">Books restored</span>
            </div>
            <div className="stat">
              <span
                className="stat-num"
                data-target="15"
                data-suffix=""
              >
                0
              </span>
              <span className="stat-label">
                Libraries &amp; neighborhoods served
              </span>
            </div>
            <div className="stat">
              <span
                className="stat-num"
                data-target="40"
                data-suffix="+"
              >
                0
              </span>
              <span className="stat-label">Volunteers in our workshops</span>
            </div>
            <div className="stat">
              <span
                className="stat-num"
                data-target="3"
                data-suffix=""
                data-prefix=""
              >
                0
              </span>
              <span className="stat-label">Tons of paper kept from landfill</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quote / About ===== */}
      <section className="quote" id="about">
        <div className="container quote-grid">
          <div className="quote-art" aria-hidden="true">
            <div className="book book-1"></div>
            <div className="book book-2"></div>
            <div className="book book-3"></div>
            <div className="book book-4"></div>
          </div>
          <blockquote>
            <p>
              &ldquo;A worn-out book isn&rsquo;t the end of a story — it&rsquo;s
              the start of another. By binding a new spine, we give a book the
              strength to be read again and again, by someone new.&rdquo;
            </p>
            <cite>— The Second Spine Team</cite>
          </blockquote>
        </div>
      </section>

      {/* ===== Get Involved ===== */}
      <section className="involved" id="involved">
        <div className="container">
          <p className="section-eyebrow">Get Involved</p>
          <h2 className="section-title">Three ways to give a book new life.</h2>

          <div className="cards three involved-cards">
            <article className="card support">
              <h3>Support</h3>
              <p>
                Help fund the materials for our nonprofit through our GoFundMe.
              </p>
              <a
                className="btn btn-primary"
                href="https://www.gofundme.com/f/support-second-spine/qr/o?attribution_id=sl:26cdb99f-29e6-4d58-b4ff-e73b4a359507&lang=en_US&ts=1780894651&utm_campaign=man_sharesheet_dash&utm_content=amp17_tb-amp20_t1&utm_medium=customer&utm_source=qr_code"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Funds
              </a>
            </article>
            <article className="card">
              <h3>Donate Books</h3>
              <p>
                Drop your unwanted books in our donation boxes at the Saratoga
                Library.
              </p>
              <a className="btn btn-ghost" href="#contact">
                Find a Box
              </a>
            </article>
            <article className="card">
              <h3>Volunteer</h3>
              <p>
                Sign our interest form if you&rsquo;d like to help out in our
                workshops!
              </p>
              <a className="btn btn-ghost" href="#contact">
                Sign Up
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">SECOND</span>
            <span className="brand-mark">SPINE</span>
            <p className="footer-tag">Restoring books, rebuilding community.</p>
            <div className="footer-social">
              <a
                href="https://instagram.com/secondspineorganization"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="currentColor"
                    d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.64 4.13.34 4.9.14 5.77.08 7.04.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z"
                  />
                </svg>
              </a>
              <a href="mailto:admin@secondspine.org" aria-label="Email">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="currentColor"
                    d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.2L3.6 6H20.4L12 11.2ZM3 7.9V18h18V7.9l-9 5.6-9-5.6Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li>
                <a
                  href="https://www.gofundme.com/f/support-second-spine/qr/o?attribution_id=sl:26cdb99f-29e6-4d58-b4ff-e73b4a359507&lang=en_US&ts=1780894651&utm_campaign=man_sharesheet_dash&utm_content=amp17_tb-amp20_t1&utm_medium=customer&utm_source=qr_code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support our GoFundMe
                </a>
              </li>
              <li>
                <a href="#involved">Donate Books</a>
              </li>
              <li>
                <a href="#involved">Volunteer</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Z"
                  />
                </svg>
                <a
                  href="https://instagram.com/secondspineorganization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @secondspineorganization
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 7.2L3.6 6H20.4L12 11.2Z"
                  />
                </svg>
                <a href="mailto:admin@secondspine.org">
                  admin@secondspine.org
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay in the Loop</h4>
            <p className="footer-tag">
              Interested in our workshops? Reach out and we&rsquo;ll send you
              the interest form.
            </p>
            <a
              className="btn btn-outline-light"
              href="mailto:admin@secondspine.org?subject=Volunteer%20Interest"
            >
              Email Us
            </a>
            <a
              className="btn btn-outline-light"
              href="https://www.gofundme.com/f/support-second-spine/qr/o?attribution_id=sl:26cdb99f-29e6-4d58-b4ff-e73b4a359507&lang=en_US&ts=1780894651&utm_campaign=man_sharesheet_dash&utm_content=amp17_tb-amp20_t1&utm_medium=customer&utm_source=qr_code"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoFundMe
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; <span id="year"></span> Second Spine &middot; secondspine.org
            &middot; A community book-restoration nonprofit.
          </p>
        </div>
      </footer>
    </>
  );
}
