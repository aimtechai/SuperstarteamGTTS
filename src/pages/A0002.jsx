import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/LandingPage.css";
import { SiTiktok, SiInstagram, SiX, SiYoutube, SiFacebook, SiLinkedin } from "react-icons/si";

/** CONTACT PAGE */
export default function A0002() {
  const Logo = () => (
    <img
      src="/src/assets/gttsonline.png"
      alt="Go To Traffic School"
      style={{ height: 100, objectFit: 'contain' }}
    />
  );
  
  return (
    <ExternalLayout>

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

      {/* MAIN CONTENT */}
      <main className="py-5" style={{ background: "#fff" }}>
        <Container>
          <Row className="g-4">
            {/* LEFT: Accordion */}
            <Col lg={4} xl={3}>
              <Accordion>
                {[
                  { h: "Contact Us", b: "Reach us for any questions, comments, or assistance with your account." },
                  { h: "Hours of Operation", b: "We’re available every day. Response times may vary during peak hours." },
                  { h: "Customer Service", b: "Friendly, knowledgeable representatives ready to help you succeed." },
                ].map((item, i) => (
                  <Accordion.Item
                    eventKey={String(i)}
                    key={i}
                    style={{ border: "1px solid #E6EFF7"}}
                  >
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

            {/* RIGHT: Copy + contact blocks */}
            <Col lg={8} xl={9}>
              <h2 style={{ color: "#004985", fontWeight: 800, marginBottom: 8 }}>
                Please send us your feedback
              </h2>
              <div className="mb-3" style={{ color: "#6B86A4", fontStyle: "italic" }}>
                The cheapest and best online traffic school course on the Internet!
              </div>

              <p style={{ color: "#004985" }}>
                We’re here to help you get the most out of GoToTrafficSchool.Com. If you have a question or comment,
                please feel free to contact us. If you have questions about your course please visit our Help Desk and
                if you need Technical Support please drop us a line at our Support page.
              </p>

              <div className="mt-4">

              <div className="d-flex align-items-start gap-3 mb-3">
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: "#FFC04D",
                    display: "grid",
                    placeItems: "center",
                    color: "#8A5B00",
                    flex: "0 0 28px",
                    marginTop: 6
                  }}
                >
                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5434 0.5C8.96673 0.568481 9.39395 0.617787 9.81227 0.70873C12.9037 1.38422 15.3562 3.95527 15.8898 7.02869C16.1744 8.66675 15.8853 10.2215 15.2799 11.7396C14.5825 13.4873 13.5888 15.0705 12.4709 16.5826C11.226 18.2661 9.84235 19.8324 8.34121 21.299C8.0666 21.5669 7.93682 21.5675 7.66277 21.2979C5.55895 19.2276 3.65676 16.9968 2.11719 14.4827C1.26162 13.0857 0.554778 11.6235 0.186595 10.0194C-0.563696 6.74929 0.999828 3.24964 3.95699 1.58255C5.0025 0.99361 6.11763 0.630388 7.32021 0.533419C7.367 0.529584 7.41323 0.511505 7.45946 0.5C7.82096 0.5 8.1819 0.5 8.5434 0.5ZM11.6705 8.37256C11.6627 6.37401 10.0161 4.75787 7.9953 4.76608C5.95554 4.7743 4.32684 6.39264 4.33297 8.40543C4.3391 10.3854 6.00511 11.9927 8.03875 11.9818C10.0362 11.9708 11.6777 10.3393 11.6699 8.37256H11.6705Z" fill="white"/>
                </svg>

                </span>
                <div style={{ color: "#004985" }}>
                  <div style={{ fontWeight: 800, fontSize: "18px" }}>Corporate Headquarters:</div>
                  <div style={{ fontSize: "16px" }}>
                    8034 Garden Grove Blvd Suite C
                  </div>
                  <div style={{ fontSize: "16px" }}>
                    Garden Grove, CA 92844
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: "#FFC04D",
                    display: "grid",
                    placeItems: "center",
                    color: "#8A5B00",
                    flex: "0 0 28px",
                    marginTop: 6
                  }}
                >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4865 22C15.4197 21.9008 14.4995 21.6571 13.6007 21.3252C11.4623 20.5353 9.56479 19.3364 7.80893 17.9018C5.3517 15.894 3.29911 13.539 1.74496 10.767C0.934465 9.32136 0.326291 7.79731 0.0399827 6.15323C-0.0452353 5.66399 -0.00477185 5.22619 0.26437 4.79695C1.2735 3.18962 2.43896 1.71577 3.89932 0.4893C3.99251 0.410924 4.09612 0.344793 4.19544 0.273152C4.79993 -0.159756 5.2953 -0.0513757 5.88324 0.410311C5.96049 0.470931 6.031 0.545633 6.08801 0.625847C7.09653 2.04642 8.06887 3.48965 8.8015 5.07739C8.91247 5.31865 8.99278 5.57521 9.07248 5.82932C9.20123 6.2408 9.12582 6.6339 8.83583 6.94129C8.48086 7.31786 8.09094 7.66321 7.70102 8.00488C7.18604 8.45616 7.17439 8.45126 7.44537 9.08317C8.58631 11.7443 10.5108 13.599 13.2065 14.662C13.4535 14.7594 13.6087 14.752 13.784 14.5267C14.093 14.1293 14.4357 13.7576 14.7747 13.3847C15.2486 12.863 15.8262 12.7007 16.4736 13.002C17.2197 13.3492 17.9701 13.6982 18.6758 14.1183C19.5739 14.6528 20.4316 15.2553 21.3004 15.8383C21.6498 16.0728 21.8595 16.412 21.9655 16.821C22.0268 17.0574 22.0097 17.2803 21.8871 17.4835C21.7381 17.7309 21.591 17.9869 21.4015 18.2024C20.1343 19.642 18.6653 20.8403 17.0033 21.7979C16.8175 21.9051 16.5986 21.9565 16.4865 21.9988V22Z" fill="white"/>
                </svg>


                </span>
                <div style={{ color: "#004985" }}>
                  <div style={{ fontWeight: 800, fontSize: "18px" }}>Phone:</div>
                  <div style={{ fontSize: "18px" }}>
                    1-888-329-7069
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: "#FFC04D",
                    display: "grid",
                    placeItems: "center",
                    color: "#8A5B00",
                    flex: "0 0 28px",
                    marginTop: 6
                  }}
                >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4865 22C15.4197 21.9008 14.4995 21.6571 13.6007 21.3252C11.4623 20.5353 9.56479 19.3364 7.80893 17.9018C5.3517 15.894 3.29911 13.539 1.74496 10.767C0.934465 9.32136 0.326291 7.79731 0.0399827 6.15323C-0.0452353 5.66399 -0.00477185 5.22619 0.26437 4.79695C1.2735 3.18962 2.43896 1.71577 3.89932 0.4893C3.99251 0.410924 4.09612 0.344793 4.19544 0.273152C4.79993 -0.159756 5.2953 -0.0513757 5.88324 0.410311C5.96049 0.470931 6.031 0.545633 6.08801 0.625847C7.09653 2.04642 8.06887 3.48965 8.8015 5.07739C8.91247 5.31865 8.99278 5.57521 9.07248 5.82932C9.20123 6.2408 9.12582 6.6339 8.83583 6.94129C8.48086 7.31786 8.09094 7.66321 7.70102 8.00488C7.18604 8.45616 7.17439 8.45126 7.44537 9.08317C8.58631 11.7443 10.5108 13.599 13.2065 14.662C13.4535 14.7594 13.6087 14.752 13.784 14.5267C14.093 14.1293 14.4357 13.7576 14.7747 13.3847C15.2486 12.863 15.8262 12.7007 16.4736 13.002C17.2197 13.3492 17.9701 13.6982 18.6758 14.1183C19.5739 14.6528 20.4316 15.2553 21.3004 15.8383C21.6498 16.0728 21.8595 16.412 21.9655 16.821C22.0268 17.0574 22.0097 17.2803 21.8871 17.4835C21.7381 17.7309 21.591 17.9869 21.4015 18.2024C20.1343 19.642 18.6653 20.8403 17.0033 21.7979C16.8175 21.9051 16.5986 21.9565 16.4865 21.9988V22Z" fill="white"/>
                </svg>


                </span>
                <div style={{ color: "#004985" }}>
                  <div style={{ fontWeight: 800, fontSize: "18px" }}>TDD:</div>
                  <div style={{ fontSize: "18px" }}>
                    1-800-735-2929
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-3">
                <span
                  aria-hidden="true"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: "#FFC04D",
                    display: "grid",
                    placeItems: "center",
                    color: "#8A5B00",
                    flex: "0 0 28px",
                    marginTop: 6
                  }}
                >
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9994 5.39031V15.4877C21.9914 15.4992 21.9788 15.5096 21.9753 15.5222C21.6837 16.6874 20.9754 17.2414 19.774 17.2414C13.9237 17.2414 8.07398 17.2414 2.22368 17.2414C2.15193 17.2414 2.08018 17.2425 2.00901 17.2396C0.855249 17.1989 0.00342264 16.331 0.00227463 15.1772C-0.00174343 11.9691 0.000552042 8.76148 0.00170006 5.55333C0.00170006 5.50167 0.0120315 5.45058 0.0189196 5.38916C0.0573782 5.4104 0.0768949 5.41901 0.0946891 5.43106C3.06576 7.41198 6.03625 9.39289 9.00732 11.3738C10.3402 12.2624 11.6598 12.2641 12.9938 11.375C15.6497 9.60585 18.304 7.83502 20.9599 6.06592C21.3043 5.83689 21.6533 5.61475 22 5.38973L21.9994 5.39031Z" fill="white"/>
                <path d="M21.9989 3.0701C21.9168 3.28937 21.8732 3.53448 21.744 3.72103C21.5684 3.97474 21.3612 4.23362 21.1092 4.40353C18.1226 6.412 15.1286 8.40898 12.1282 10.3974C11.3883 10.8876 10.6077 10.8858 9.86778 10.3956C6.8617 8.40324 3.86308 6.39994 0.864461 4.39607C0.144654 3.91505 -0.153255 3.08158 0.0757739 2.25099C0.309395 1.40145 1.03724 0.821697 1.9436 0.763148C2.00788 0.75913 2.07217 0.758556 2.13704 0.758556C8.04473 0.758556 13.9518 0.757982 19.8595 0.758556C20.8382 0.758556 21.6028 1.28205 21.8921 2.14537C21.9323 2.26591 21.9639 2.3899 21.9989 2.51216V3.07067V3.0701Z" fill="white"/>
                </svg>


                </span>
                <div style={{ color: "#004985" }}>
                  <div style={{ fontWeight: 800, fontSize: "18px" }}>Email:</div>
                  <div style={{ fontSize: "18px" }}>
                    info@gototrafficschool.com
                  </div>
                </div>
              </div>
              
                <button
                  className="btn btn-danger mt-3"
                  style={{ borderRadius: 20, padding: "12px 24px", fontWeight: 700, fontSize: "18px" }}
                >
                  Live Chat
                </button>
              </div>
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

/* ---------- helpers (JSX, no TypeScript types) ---------- */

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
