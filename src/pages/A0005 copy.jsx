import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/LandingPage.css";
import { SiTiktok, SiInstagram, SiX, SiYoutube, SiFacebook, SiLinkedin } from "react-icons/si";

// If you have real assets, import and replace the placeholders in the sections below.
// import heroBg from "@/assets/insurance-hero.jpg";
// import devicesImg from "@/assets/devices.png";
// import partnerThumb from "@/assets/partner-video.jpg";

export default function InsurancePremiumsPage() {
  const Logo = () => (
    // <div className="d-flex align-items-center gap-2">
    //   <div
    //     style={{
    //       width: 46,
    //       height: 46,
    //       borderRadius: 6,
    //       background: "#0B4D8A",
    //       display: "grid",
    //       placeItems: "center",
    //       color: "#fff",
    //       fontWeight: 800,
    //       fontSize: 12,
    //       lineHeight: 1,
    //     }}
    //   >
    //     GTTS
    //   </div>
    //   <div className="d-flex flex-column">
    //     <div style={{ color: "#0B4D8A", fontWeight: 800, fontSize: 16 }}>
    //       Go To Traffic
    //     </div>
    //     <div style={{ color: "#0B4D8A", fontWeight: 800, fontSize: 16 }}>
    //       School Online
    //     </div>
    //   </div>
    // </div>
    <img
      src="/src/assets/gttsonline.png"
      alt="Go To Traffic School"
      style={{ height: 100, objectFit: 'contain' }}
    />
  );

  return (
    <ExternalLayout>
      {/* Top bar (remove if ExternalLayout already renders it) */}
      {/* <header className="py-3" style={{ borderBottom: "1px solid #E6EFF7", background: "#fff" }}>
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <Logo />
            <nav className="d-none d-md-flex align-items-center gap-4 ms-3">
              <a href="#how" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>How it Works</a>
              <a href="#faqs" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>FAQs</a>
              <a href="#partner" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>Partner Program</a>
              <a href="#contact" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>Contact</a>
            </nav>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href="tel:+18883297069" className="text-decoration-none small d-none d-md-block" style={{ color: "#004985", fontWeight: 700 }}>
              1-(888)-329-7069
            </a>
            <button className="btn btn-outline-primary btn-sm d-none d-sm-inline-flex" style={{ borderRadius: 999, color: "#004985", borderColor: "#004985" }}>
              <i className="bi bi-chat-dots me-2" /> Live Chat
            </button>
            <a href="/login" className="btn btn-primary btn-sm" style={{ background: "#0B4D8A", border: "none", borderRadius: 999, fontWeight: 700 }}>
              <i className="bi bi-box-arrow-in-right me-2" /> Login
            </a>
          </div>
        </Container>
      </header> */}

      {/* 3 EASY STEPS BAR */}
      <div style={{ background: "#0B4D8A", color: "#fff", fontWeight: 700 }}>
        <Container className="py-2 d-flex flex-wrap align-items-center gap-6">
          <div className="me-2">3 EASY STEPS!</div>
          <div className="d-flex align-items-center gap-8">
            <StepBadge n={1} text="SIGN UP" />
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 7H0.5V9H1.5V8V7ZM42.2071 8.70711C42.5976 8.31658 42.5976 7.68342 42.2071 7.29289L35.8431 0.928932C35.4526 0.538408 34.8195 0.538408 34.4289 0.928932C34.0384 1.31946 34.0384 1.95262 34.4289 2.34315L40.0858 8L34.4289 13.6569C34.0384 14.0474 34.0384 14.6805 34.4289 15.0711C34.8195 15.4616 35.4526 15.4616 35.8431 15.0711L42.2071 8.70711ZM1.5 8V9H41.5V8V7H1.5V8Z" fill="white"/>
            </svg>
            <StepBadge n={2} text="COMPLETE THE COURSE ONLINE" />
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 7H0.5V9H1.5V8V7ZM42.2071 8.70711C42.5976 8.31658 42.5976 7.68342 42.2071 7.29289L35.8431 0.928932C35.4526 0.538408 34.8195 0.538408 34.4289 0.928932C34.0384 1.31946 34.0384 1.95262 34.4289 2.34315L40.0858 8L34.4289 13.6569C34.0384 14.0474 34.0384 14.6805 34.4289 15.0711C34.8195 15.4616 35.4526 15.4616 35.8431 15.0711L42.2071 8.70711ZM1.5 8V9H41.5V8V7H1.5V8Z" fill="white"/>
            </svg>
            <StepBadge n={3} text="GET YOUR CERTIFICATE" />
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(90deg, rgba(6,36,72,0.88) 0%, rgba(6,36,72,0.7) 40%, rgba(6,36,72,0) 75%), url('/assets/insurance-hero.jpg') center/cover no-repeat",
        }}
      >
        <Container className="py-5">
          <Row className="align-items-center g-4">
            {/* Left copy */}
            <Col md={7} lg={6} className="text-white">
              <div className="mb-2" style={{ fontSize: 36, fontWeight: 900, letterSpacing: 0.3 }}>
                LOWER YOUR
              </div>
              <div
                className="d-inline-block px-3 py-2 mb-3"
                style={{
                  background: "#E02424",
                  borderRadius: 12,
                  fontWeight: 900,
                  fontSize: 28,
                  boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                }}
              >
                INSURANCE PREMIUMS
              </div>

              <ul className="list-unstyled m-0">
                {[
                  "Insurance & Mature Driver Discount Courses Online",
                  "Earn a Safe Driver Discount on your Auto Insurance Liability Premium!",
                  "Fast, Easy, and Inexpensive",
                  "Includes latest safety videos from IIHS and NHTSA!",
                ].map((t, i) => (
                  <li key={i} className="d-flex align-items-start gap-2 mb-2">
                    <span
                      aria-hidden="true"
                      style={{
                        width: 26,
                        height: 26,
                        background: "#04B8FC",
                        borderRadius: 999,
                        display: "grid",
                        placeItems: "center",
                        flex: "0 0 26px",
                      }}
                    >
                      <i className="bi bi-check-lg" />
                    </span>
                    <span style={{ fontWeight: 600 }}>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 d-flex align-items-center gap-3">
                <a
                  href="#get-started"
                  className="btn"
                  style={{
                    background: "#04B8FC",
                    color: "#062448",
                    fontWeight: 800,
                    borderRadius: 12,
                    padding: "10px 16px",
                    border: "none",
                  }}
                >
                  Get Started
                </a>
                <div className="small" style={{ color: "#CFE8FF" }}>
                  * Varies by county
                </div>
              </div>
            </Col>

            {/* Right devices mock */}
            <Col md={5} lg={6}>
              <div className="position-relative">
                <div
                  style={{
                    width: "100%",
                    height: 320,
                    background:
                      "url('/assets/devices.png') center/contain no-repeat, linear-gradient(180deg,#f0f6ff, #ffffff)",
                    borderRadius: 12,
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 6 BENEFITS ICON ROW */}
      <section className="py-4 bg-white">
        <Container>
          <Row className="g-4 text-center" xs={2} sm={3} lg={6}>
            <Benefit icon="bi-tag" label="Lowest Price" />
            <Benefit icon="bi-people-fill" label="Over 4M Satisfied Students" />
            <Benefit icon="bi-lightning-charge-fill" label="Same Day Processing" />
            <Benefit icon="bi-controller" label="Fun & Interactive" />
            <Benefit icon="bi-award-fill" label="State Licensed" />
            <Benefit icon="bi-phone" label="Can Be Done On Any Device" />
          </Row>
        </Container>
      </section>

      {/* EXPLAINER PANEL */}
      <section className="py-4 bg-white">
        <Container>
          <div
            className="p-3 p-md-4"
            style={{
              background: "#F3F9FF",
              border: "1px solid #DCEBFA",
              borderRadius: 10,
            }}
          >
            <h4 className="m-0 mb-2" style={{ color: "#004985", fontWeight: 800 }}>
              Lower your Insurance Premiums
            </h4>
            <p className="m-0" style={{ color: "#004985" }}>
              Did you know that, in many states, insurance companies offer policy holders a safe driving discount for taking an
              online <strong>Insurance Reduction</strong> course? In fact, insurance companies are required by law in some states to give drivers
              5–15% and other auto liability insurance discounts for completing a <strong>Mature Driver</strong> course. In some cases, the discount can
              be as much as 15%! Different states have different rules on whether a course qualifies a senior driver and/or
              mature driver for discounts, so select your state below to find out if you are eligible to start saving money today.
              <br />
              <br />
              <em>Note: For specific information about obtaining an insurance discount, you must contact your insurance agent.</em>
            </p>
          </div>
        </Container>
      </section>

      {/* WE ALSO OFFER */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(0deg, rgba(7,46,96,0.9), rgba(7,46,96,0.9)), url('/assets/section-offer-bg.jpg') center/cover no-repeat",
        }}
      >
        <Container>
          <h3 className="text-center text-white fw-bold mb-4">We Also Offer</h3>
          <Row className="g-4 justify-content-center">
            <Col xs={6} md={3}><OfferCard title="Insurance Reduction" /></Col>
            <Col xs={6} md={3}><OfferCard title="Mature Driver Courses" /></Col>
            <Col xs={6} md={3}><OfferCard title="Fleet Driver Training Courses" /></Col>
            <Col xs={6} md={3}><OfferCard title="Driver's Ed Courses" /></Col>
          </Row>
        </Container>
      </section>

      {/* PARTNER / VIDEO */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-4 align-items-start">
            <Col lg={6}>
              <h3 style={{ color: "#004985", fontWeight: 800 }}>
                Become A GTTS Partner And<br />Make Money!
              </h3>
              <ul className="mt-3" style={{ color: "#004985" }}>
                <li>Do you own a brick and mortar traffic school?</li>
                <li>Has your school been losing customers daily?</li>
                <li>Do you want to start offering an online traffic school course to get your customers back?</li>
              </ul>
              <p className="small mt-3" style={{ color: "#6B86A4" }}>
                If you answered yes to all of those above questions then you must watch this short video. It will change your business
              </p>
              <a className="btn btn-danger" style={{ borderRadius: 20, padding: "10px 18px", fontWeight: 700 }}>See How</a>
            </Col>
            <Col lg={6}>
              <div
                className="position-relative"
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src="/assets/partner-video.jpg"
                  alt="Partner program"
                  className="img-fluid w-100"
                  style={{ display: "block", maxHeight: 320, objectFit: "cover" }}
                />
                <button
                  aria-label="Play video"
                  className="position-absolute top-50 start-50 translate-middle btn"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "#ffffff",
                    color: "#E02424",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <i className="bi bi-play-fill" style={{ fontSize: 34 }} />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BLUE CTA BAND */}
      <section className="py-4" style={{ background: "#0B4D8A" }}>
        <Container className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <h4 className="m-0 text-white fw-bold">Enroll in Our Online Traffic School Course</h4>
          <a className="btn btn-danger" style={{ borderRadius: 20, padding: "10px 18px", fontWeight: 700 }}>Register Now</a>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ background: "#E7F4FF" }}>
        <Container className="py-5 px-3 px-md-5">
          <Row className="align-items-start g-4">
            {/* Left Column: Logo + Phone + Buttons */}
            <Col xs={12} lg={4} className="text-center text-lg-start">
              <div className="mb-3">
                <img
                  src="/src/assets/logo.png"
                  alt="Go To Traffic School"
                  style={{ maxHeight: 80 }}
                />
              </div>
              <div
                style={{
                  color: "#004985",
                  fontWeight: 700,
                  fontSize: "18px",
                  marginBottom: "1rem",
                }}
              >
              </div>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <button
                  style={{
                    border: "1.5px solid #004985",
                    background: "transparent",
                    borderRadius: 30,
                    padding: "8px 24px",
                    color: "#004985",
                    fontWeight: 600,
                  }}
                >
                  Partner with Us
                </button>
                <button
                  style={{
                    border: "1.5px solid #004985",
                    background: "transparent",
                    borderRadius: 30,
                    padding: "8px 24px",
                    color: "#004985",
                    fontWeight: 600,
                  }}
                >
                  Refer a Friend
                </button>
              </div>
            </Col>

            {/* Middle Column: Navigation */}
            <Col xs={12} lg={5}>
              <Row className="g-4 text-center text-lg-start">
                {/* <Col xs={6}>
                  <ul className="list-unstyled m-0" style={{ lineHeight: 2 }}>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Driving</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Home</a></li>
                  </ul>
                </Col> */}
                <Col xs={12}>
                  <ul className="list-unstyled m-0" style={{ lineHeight: 2 }}>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Driving</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Home</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Careers</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Partnership</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Help Center</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Contact</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Our Blog</a></li>
                    <li><a href="/" style={{ color: "#004985", textDecoration: "none" }}>Accessibility Statement</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>

            {/* Right Column: Social Icons */}
            <Col xs={12} lg={3} className="text-center text-lg-start">
              <ul className="list-unstyled m-0" style={{ lineHeight: 2 }}>
                <li>
                  <a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}>
                    <SiTiktok size={18} />
                    <span>Tiktok</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}>
                    <SiInstagram size={18} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}>
                    <SiX size={18} />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}>
                    <SiYoutube size={18} />
                    <span>Youtube</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}>
                    <SiFacebook size={18} />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}>
                    <SiLinkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </Col>

          </Row>
        </Container>

        {/* Bottom Bar */}
        <div style={{ background: "#fff" }}>
          <Container className="py-3">
            <div className="text-center" style={{ color: "#555", fontSize: 18 }}>
              {/* © {new Date().getFullYear()} GoToTrafficSchool */}
              © Copyright 2005-2025 CyberActive
            </div>
          </Container>
        </div>
      </footer>
    </ExternalLayout>
  );
}

/* ----------------------- helpers (plain JSX) ----------------------- */

function StepBadge({ n, text }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div
        style={{
          width: 28,
          height: 28,
          background: "#04B8FC",
          color: "#0B4D8A",
          borderRadius: 999,
          display: "grid",
          placeItems: "center",
          fontWeight: 800,
          fontSize: 18,
        }}
      >
        {n}
      </div>
      <div className="text-uppercase" style={{ fontWeight: 800 }}>{text}</div>
    </div>
  );
}

function Benefit({ icon, label }) {
  return (
    <Col>
      <div className="d-flex flex-column align-items-center gap-2">
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: "#E7F4FF",
            color: "#0B4D8A",
            display: "grid",
            placeItems: "center",
            fontSize: 26,
          }}
        >
          <i className={`bi ${icon}`} />
        </div>
        <div style={{ color: "#004985", fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>{label}</div>
      </div>
    </Col>
  );
}

function OfferCard({ title }) {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <div
        style={{
          width: 112,
          height: 112,
          background: "#F39C12",
          borderRadius: 12,
          display: "grid",
          placeItems: "center",
          color: "#fff",
          fontSize: 34,
          boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
        }}
      >
        <i className="bi bi-shield-check" />
      </div>
      <div className="mt-2" style={{ color: "#FFFFFF", fontWeight: 700 }}>{title}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li className="mb-2">
      <a href={href} className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>
        {children}
      </a>
    </li>
  );
}

function Logo() {
  return (
    <div className="d-flex align-items-center gap-2">
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 6,
          background: "#0B4D8A",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          fontWeight: 800,
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        GTTS
      </div>
      <div className="d-flex flex-column">
        <div style={{ color: "#0B4D8A", fontWeight: 800, fontSize: 18 }}>Go To Traffic</div>
        <div style={{ color: "#0B4D8A", fontWeight: 800, fontSize: 18 }}>School Online</div>
      </div>
    </div>
  );
}
