



import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/LandingPage.css";
import { SiTiktok, SiInstagram, SiX, SiYoutube, SiFacebook, SiLinkedin } from "react-icons/si";
// You can swap these with real assets later


export default function A0001() {

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
      {/* Top nav (logo, how it works, etc.) */}
      {/* <header
        className="py-3"
        style={{
          borderBottom: "1px solid #E6EFF7",
          background: "#fff",
        }}
      >
        <Container className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <Logo />
            <div className="d-none d-md-flex align-items-center gap-4 ms-3">
              <a href="#how" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>
                How it Works
              </a>
              <a href="#faqs" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>
                FAQs
              </a>
              <a href="#partner" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>
                Partner Program
              </a>
              <a href="#contact" className="text-decoration-none" style={{ color: "#004985", fontWeight: 600 }}>
                Contact
              </a>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a
              href="tel:+18883297069"
              className="text-decoration-none small d-none d-md-block"
              style={{ color: "#004985", fontWeight: 700 }}
            >
              1-(888)-329-7069
            </a>
            <button
              className="btn btn-outline-primary btn-sm d-none d-sm-inline-flex"
              style={{ borderRadius: 999, color: "#004985", borderColor: "#004985" }}
            >
              <i className="bi bi-chat-dots me-2" />
              Live Chat
            </button>
            <a
              href="/login"
              className="btn btn-primary btn-sm"
              style={{ background: "#0B4D8A", border: "none", borderRadius: 999, fontWeight: 700 }}
            >
              <i className="bi bi-box-arrow-in-right me-2" />
              Login
            </a>
          </div>
        </Container>
      </header> */}

      {/* 3 EASY STEPS BAR */}
      <div style={{ background: "#0B4D8A", color: "#fff", fontWeight: 700 }}>
        <Container className="py-2 d-flex flex-column flex-md-row align-items-center gap-3 gap-md-6">
          <div className="me-md-2 text-center" style={{ fontSize: "18px" }}>3 EASY STEPS!</div>
          <div className="d-flex flex-column flex-sm-row align-items-center gap-3 gap-sm-4 gap-md-6">
            <StepBadge n={1} text="SIGN UP" />
            <div className="d-none d-sm-block">
              <svg width="32" height="12" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 7H0.5V9H1.5V8V7ZM42.2071 8.70711C42.5976 8.31658 42.5976 7.68342 42.2071 7.29289L35.8431 0.928932C35.4526 0.538408 34.8195 0.538408 34.4289 0.928932C34.0384 1.31946 34.0384 1.95262 34.4289 2.34315L40.0858 8L34.4289 13.6569C34.0384 14.0474 34.0384 14.6805 34.4289 15.0711C34.8195 15.4616 35.4526 15.4616 35.8431 15.0711L42.2071 8.70711ZM1.5 8V9H41.5V8V7H1.5V8Z" fill="white"/>
              </svg>
            </div>
            <StepBadge n={2} text="COMPLETE THE COURSE ONLINE" />
            <div className="d-none d-sm-block">
              <svg width="32" height="12" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 7H0.5V9H1.5V8V7ZM42.2071 8.70711C42.5976 8.31658 42.5976 7.68342 42.2071 7.29289L35.8431 0.928932C35.4526 0.538408 34.8195 0.538408 34.4289 0.928932C34.0384 1.31946 34.0384 1.95262 34.4289 2.34315L40.0858 8L34.4289 13.6569C34.0384 14.0474 34.0384 14.6805 34.4289 15.0711C34.8195 15.4616 35.4526 15.4616 35.8431 15.0711L42.2071 8.70711ZM1.5 8V9H41.5V8V7H1.5V8Z" fill="white"/>
              </svg>
            </div>
            <StepBadge n={3} text="GET YOUR CERTIFICATE" />
          </div>
        </Container>
      </div>

      {/* MAIN WELCOME SECTION */}
      <main className="py-5" style={{ background: "#fff" }}>
        <Container>
          <Row className="g-4">
            {/* LEFT: Accordion menu */}
            <Col lg={4} xl={3}>
              <Accordion>
              {/* <Accordion defaultActiveKey="0" alwaysOpen> */}
                {[
                  { h: "Course Info", b: "Everything you need to know before you begin our online traffic school." },
                  { h: "About The Content", b: "Interactive chapters written for clarity and retention." },
                  { h: "About The Quizzes", b: "Short quizzes help reinforce the material as you go." },
                  { h: "Program Guarantee", b: "Lowest priced online traffic school—Guaranteed." },
                  { h: "Student Comments", b: "Thousands of real reviews from satisfied students." },
                ].map((item, i) => (
                  <Accordion.Item eventKey={String(i)} key={i} style={{ border: "1px solid #E6EFF7", }}>
                    <Accordion.Header>
                      <span style={{ color: "#004985", fontWeight: 700 }}>{item.h}</span>
                    </Accordion.Header>
                    <Accordion.Body style={{ color: "#004985", fontSize: "18px" }}>
                      {item.b}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>

            {/* RIGHT: Copy */}
            <Col lg={8} xl={9}>
              <h1 style={{ color: "#004985", fontWeight: 800, marginBottom: 16, fontSize: "clamp(28px, 5vw, 40px)" }}>
                Welcome to GoToTrafficSchool.Com
              </h1>

              <p style={{ color: "#004985", marginBottom: 16, fontSize: "18px", lineHeight: 1.6 }}>
                Welcome to GoToTrafficSchool.com, one of the Internet&apos;s most popular online traffic school course. We
                provide licensed online traffic school programs for insurance reduction, safe driver points, mature drivers and
                fleet driver safety programs.
              </p>

              <p style={{ color: "#004985", marginBottom: 16, fontSize: "18px", lineHeight: 1.6 }}>
                This online traffic school program is best suited for those who have received a traffic ticket and would like to
                take online traffic school so that the traffic does not appear on their record, those who would like to lower
                their insurance premiums, and those who need to take a driver safety course for their work.
              </p>

              <p style={{ color: "#004985", marginBottom: 16, fontSize: "18px", lineHeight: 1.6 }}>
                GoToTrafficSchool is one of the best and most convenient way to attend online traffic school on the Internet.
                Unlike other Internet courses you do not have to struggle to get through this course. Our courses are also the
                lowest priced online traffic school courses in the industry. <strong>Guaranteed.</strong>
              </p>

              <p style={{ color: "#004985", marginBottom: 16, fontSize: "18px", lineHeight: 1.6 }}>
                The course is easy to read and follow. You do not need to own various types of computer software to take this
                course. Our course is 100% interactive. Anybody who has a computer with internet access can take this course
                from the comfort of home.
              </p>

              <button
                className="btn btn-danger mt-2"
                style={{ borderRadius: 20, padding: "12px 24px", fontWeight: 700, fontSize: "18px" }}
              >
                Register Now
              </button>
            </Col>
          </Row>
        </Container>
      </main>

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

/* Helper components */

/* Helper components */
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
      <div className="text-uppercase d-none d-sm-block" style={{ fontWeight: 800, fontSize: "14px" }}>{text}</div>
      <div className="text-uppercase d-block d-sm-none text-center" style={{ fontWeight: 800, fontSize: "12px", marginTop: "4px" }}>{text}</div>
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
