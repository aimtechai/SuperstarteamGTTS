import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/LandingPage.css";

export default function A0003() {
  const states = [
    "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
    "District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
    "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota",
    "Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
    "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon",
    "Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah",
    "Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
  ];

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
      {/* Top bar (remove if your ExternalLayout already renders it) */}
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
        <Container className="py-2 d-flex flex-wrap align-items-center gap-3">
          <div className="me-2">3 EASY STEPS!</div>
          <div className="d-flex align-items-center gap-3">
            <StepBadge n={1} text="SIGN UP" />
            <i className="bi bi-arrow-right" />
            <StepBadge n={2} text="COMPLETE THE COURSE ONLINE" />
            <i className="bi bi-arrow-right" />
            <StepBadge n={3} text="GET YOUR CERTIFICATE" />
          </div>
        </Container>
      </div>

      {/* MAIN CONTENT */}
      <main className="py-5" style={{ background: "#fff" }}>
        <Container>
          <Row className="g-4">
            <Col>
              <h2 style={{ color: "#004985", fontWeight: 800 }}>Please select your state</h2>
              <p style={{ color: "#6B86A4" }}>
                If order to give you the most accurate information about the courses and services available in your area,
                please select your state from the drop down window below.
              </p>

              {/* Select control with red border + red caret pill */}
              <div style={{ position: "relative", maxWidth: 880 }}>
                <select
                  defaultValue=""
                  aria-label="Select your state"
                  style={{
                    width: "100%",
                    padding: "14px 18px",
                    paddingRight: 70,
                    border: "2px solid #E02424",
                    borderRadius: 999,
                    outline: "none",
                    color: "#004985",
                    background: "#fff",
                    fontWeight: 600,
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="" disabled>-Select One-</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Red caret pill on the right */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    bottom: 2,
                    width: 64,
                    background: "#E02424",
                    borderRadius: "0 999px 999px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    pointerEvents: "none",
                  }}
                >
                  <i className="bi bi-caret-down-fill" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#F4F9FF", borderTop: "1px solid #E6EFF7" }}>
        <Container className="py-4">
          {/* <Row className="g-4 align-items-center">
            <Col md={4} className="d-flex align-items-center gap-3">
              <Logo />
            </Col>
            <Col md={8} className="text-md-end">
              <div className="d-inline-flex align-items-center gap-3">
                <a href="#tiktok" className="text-decoration-none" style={{ color: "#004985" }}>
                  <i className="bi bi-tiktok" /> Tiktok
                </a>
                <a href="#instagram" className="text-decoration-none" style={{ color: "#004985" }}>
                  <i className="bi bi-instagram" /> Instagram
                </a>
                <a href="#twitter" className="text-decoration-none" style={{ color: "#004985" }}>
                  <i className="bi bi-twitter-x" /> Twitter
                </a>
                <a href="#youtube" className="text-decoration-none" style={{ color: "#004985" }}>
                  <i className="bi bi-youtube" /> Youtube
                </a>
                <a href="#facebook" className="text-decoration-none" style={{ color: "#004985" }}>
                  <i className="bi bi-facebook" /> Facebook
                </a>
                <a href="#linkedin" className="text-decoration-none" style={{ color: "#004985" }}>
                  <i className="bi bi-linkedin" /> LinkedIn
                </a>
              </div>
            </Col>
          </Row> */}

          <Row className="mt-4 g-4">
            <Col sm={6} md={3} className="text-sm-start">
              <Logo />  
              {/* <div className="small" style={{ color: "#004985", fontWeight: 600 }}>
                1-(888)-329-7069
              </div> */}
              <div className="mt-2">
                <a href="#partner" className="btn btn-outline-primary btn-sm me-2" style={{ borderRadius: 999, borderWidth: 2, fontWeight: 600, borderColor: "#004985", color: "#004985" }}>
                  Partner with Us
                </a>
                <a href="#refer" className="btn btn-outline-primary btn-sm" style={{ borderRadius: 999, borderWidth: 2, fontWeight: 600, borderColor: "#004985", color: "#004985" }}>
                  Refer a Friend
                </a>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <ul className="list-unstyled m-0">
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">Traffic School Registration</FooterLink>
                <FooterLink href="#">Log In</FooterLink>
                <FooterLink href="#">About The Company</FooterLink>
                <FooterLink href="#">Course Info</FooterLink>
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <ul className="list-unstyled m-0">
                <FooterLink href="#">Affiliate Program</FooterLink>
                <FooterLink href="#">Contact Us</FooterLink>
                <FooterLink href="#">Certificate Delivery</FooterLink>
                <FooterLink href="#">Site Map</FooterLink>
                <FooterLink href="#">Program Guarantee</FooterLink>
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <ul className="list-unstyled m-0">
                <FooterLink href="#">Student Comments</FooterLink>
                <FooterLink href="#">Court Directory</FooterLink>
                <FooterLink href="#">Articles</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Use</FooterLink>
              </ul>
            </Col>
          </Row>

          <div className="text-center small mt-4" style={{ color: "#7A95B2" }}>
            © Copyright 2005-{new Date().getFullYear()} CyberActive
          </div>
        </Container>
      </footer>
    </ExternalLayout>
  );
}

/* ---------- helpers (plain JSX) ---------- */

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
