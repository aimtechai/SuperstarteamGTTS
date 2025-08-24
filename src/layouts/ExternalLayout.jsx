import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap'
// import { Container, Row, Col, Accordion } from "react-bootstrap";
// import "../styles/LandingPage.css";

// You can swap these with real assets later
const Logo = () => (
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
        fontSize: 12,
        lineHeight: 1,
      }}
    >
      GTTS
    </div>
    <div className="d-flex flex-column">
      <div style={{ color: "#0B4D8A", fontWeight: 800, fontSize: 16 }}>
        Go To Traffic
      </div>
      <div style={{ color: "#0B4D8A", fontWeight: 800, fontSize: 16 }}>
        School Online
      </div>
    </div>
  </div>
);

export default function ExternalLayout({ children }) {
  const brandColor = "#004985";

  return (
    // <Container fluid style={{padding:0}}>

    //   <Container
    //     fluid
    //     style={{ height: '40px', borderBottom: '0.6px solid #323841', paddingTop: 15 }}
    //   >
    //     <Container className="d-flex" style={{padding:"0 100px"}}>
    //       <div style={{ marginLeft: 'auto' }}>
    //         <span style={{ marginRight: 10 }}>
    //           <i className="bi bi-telephone-fill"></i>
    //         </span>
    //         <span>1-(888)-329-7069</span>
    //       </div>
    //     </Container>
    //   </Container>


    //   <Navbar bg="white" expand="lg">
    //     <Container style={{padding:"0 100px"}}>
     
    //       <Navbar.Brand href="/">
    //         <img
    //           src="/src/assets/gttsonline.png"
    //           alt="Go To Traffic School"
    //           style={{ height: 100, objectFit: 'contain' }}
    //         />
    //       </Navbar.Brand>

    //       <Navbar.Toggle aria-controls="mainnav" />
    //       <Navbar.Collapse id="mainnav">
 
    //         <Nav className="ms-auto align-items-center">
    //           <Nav.Link href="#how" style={{ color: '#004985' }}>How it works</Nav.Link>
    //           <Nav.Link href="#faqs" style={{ color: '#004985' }}>FAQs</Nav.Link>
    //           <Nav.Link href="#partner" style={{ color: '#004985' }}>Partner Program</Nav.Link>
    //           <Nav.Link href="#contact" style={{ color: '#004985' }}>Contact</Nav.Link>
    //           <Button
    //             href="#login"
    //             className="ms-2"
    //             style={{
    //               borderRadius: 16,
    //               background: '#04B8FC',
    //               border: 'none',
    //               color: '#fff',
    //               padding: '8px 16px'
    //             }}
    //           >
    //             Login
    //           </Button>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    //   {children}
    // </Container>
    <Container fluid style={{padding:0}}>
      <Navbar bg="white" expand="lg" className="py-0">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Brand */}
          <Navbar.Brand href="/" className="py-0 d-flex align-items-center">
            <img
              src="/src/assets/gttsonline.png"
              alt="Go To Traffic School"
              style={{ height: 100, objectFit: "contain" }}
            />
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="offcanvasNav" />

          {/* Desktop: centered menu + right actions */}
          <Navbar.Collapse id="offcanvasNav" className="w-100 d-none d-lg-block">
            {/* Centered Menu */}
            <div className="flex-grow-1 d-flex justify-content-center align-items-center gap-4">
              <a
                href="#how"
                className="text-decoration-none"
                style={{ color: brandColor, fontWeight: 600 }}
              >
                How it Works
              </a>
              <a
                href="#faqs"
                className="text-decoration-none"
                style={{ color: brandColor, fontWeight: 600 }}
              >
                FAQs
              </a>
              <a
                href="#partner"
                className="text-decoration-none"
                style={{ color: brandColor, fontWeight: 600 }}
              >
                Partner Program
              </a>
              <a
                href="#contact"
                className="text-decoration-none"
                style={{ color: brandColor, fontWeight: 600 }}
              >
                Contact
              </a>
            </div>

            {/* Right Actions */}
            <div className="d-flex align-items-center gap-3 ms-lg-3">
              <button
                className="btn btn-md d-none d-sm-inline-flex align-items-center"
                style={{
                  background: "#0B4D8A",
                  border: "none",
                  borderRadius: 10,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {/* Chat Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="me-2"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8 1a7 7 0 0 0-6.326 10.033L1 15l3.967-.674A7 7 0 1 0 8 1zM4.285 6.567c.168-.168.377-.252.615-.252s.447.084.615.252a.869.869 0 0 1 0 1.232.869.869 0 0 1-1.23 0 .869.869 0 0 1 0-1.232zm3 0c.168-.168.377-.252.615-.252s.447.084.615.252a.869.869 0 0 1 0 1.232.869.869 0 0 1-1.23 0 .869.869 0 0 1 0-1.232zm3 0c.168-.168.377-.252.615-.252s.447.084.615.252a.869.869 0 0 1 0 1.232.869.869 0 0 1-1.23 0 .869.869 0 0 1 0-1.232z" />
                </svg>
                Live Chat
              </button>

              <a
                href="/login"
                className="btn btn-md d-inline-flex align-items-center"
                style={{
                  background: "#04B8FC",
                  border: "none",
                  borderRadius: 10,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {/* Login Icon */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="me-2"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 2A1.5 1.5 0 0 1 3 0.5h6A1.5 1.5 0 0 1 10.5 2v3a.5.5 0 0 1-1 0V2A.5.5 0 0 0 9 1.5H3A.5.5 0 0 0 2.5 2v12A.5.5 0 0 0 3 14.5h6a.5.5 0 0 0 .5-.5v-3a.5.5 0 1 1 1 0v3A1.5 1.5 0 0 1 9 16H3A1.5 1.5 0 0 1 1.5 14V2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.146 11.354a.5.5 0 0 1 0-.708L8.793 9H5.5a.5.5 0 0 1 0-1h3.293L7.146 5.354a.5.5 0 1 1 .708-.708l2.999 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0z"
                  />
                </svg> */}
                Login
              </a>
            </div>
          </Navbar.Collapse>

          {/* Mobile: Offcanvas menu (organized) */}
          <Navbar.Offcanvas
            id="offcanvasNav"
            aria-labelledby="offcanvasNavLabel"
            placement="end"
            className="d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavLabel" className="fw-bold" style={{ color: brandColor }}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column justify-content-between gap-3">
              {/* Link list */}
              <nav>
                <ul className="list-unstyled mb-3">
                  <li className="border-bottom">
                    <a
                      href="#how"
                      className="d-flex align-items-center py-3 px-1 text-decoration-none fw-semibold"
                      style={{ color: brandColor }}
                    >
                      {/* Bullet icon */}
                      <svg width="16" height="16" viewBox="0 0 24 24" className="me-2" aria-hidden="true">
                        <circle cx="12" cy="12" r="6" fill={brandColor} opacity="0.15" />
                        <path d="M9 12h6" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      How it Works
                    </a>
                  </li>
                  <li className="border-bottom">
                    <a
                      href="#faqs"
                      className="d-flex align-items-center py-3 px-1 text-decoration-none fw-semibold"
                      style={{ color: brandColor }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" className="me-2" aria-hidden="true">
                        <circle cx="12" cy="12" r="6" fill={brandColor} opacity="0.15" />
                        <path d="M9 12h6" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      FAQs
                    </a>
                  </li>
                  <li className="border-bottom">
                    <a
                      href="#partner"
                      className="d-flex align-items-center py-3 px-1 text-decoration-none fw-semibold"
                      style={{ color: brandColor }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" className="me-2" aria-hidden="true">
                        <circle cx="12" cy="12" r="6" fill={brandColor} opacity="0.15" />
                        <path d="M9 12h6" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Partner Program
                    </a>
                  </li>
                  <li className="border-bottom">
                    <a
                      href="#contact"
                      className="d-flex align-items-center py-3 px-1 text-decoration-none fw-semibold"
                      style={{ color: brandColor }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" className="me-2" aria-hidden="true">
                        <circle cx="12" cy="12" r="6" fill={brandColor} opacity="0.15" />
                        <path d="M9 12h6" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Actions pinned at bottom */}
              <div className="mt-auto d-grid gap-2">
                <button
                  className="btn btn-lg d-inline-flex align-items-center justify-content-center"
                  style={{
                    background: "#0B4D8A",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {/* Chat Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="me-2"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M8 1a7 7 0 0 0-6.326 10.033L1 15l3.967-.674A7 7 0 1 0 8 1zM4.285 6.567c.168-.168.377-.252.615-.252s.447.084.615.252a.869.869 0 0 1 0 1.232.869.869 0 0 1-1.23 0 .869.869 0 0 1 0-1.232zm3 0c.168-.168.377-.252.615-.252s.447.084.615.252a.869.869 0 0 1 0 1.232.869.869 0 0 1-1.23 0 .869.869 0 0 1 0-1.232zm3 0c.168-.168.377-.252.615-.252s.447.084.615.252a.869.869 0 0 1 0 1.232.869.869 0 0 1-1.23 0 .869.869 0 0 1 0-1.232z" />
                  </svg>
                  Live Chat
                </button>

                <a
                  href="/login"
                  className="btn btn-lg d-inline-flex align-items-center justify-content-center"
                  style={{
                    background: "#04B8FC",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {/* Login Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="me-2"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 2A1.5 1.5 0 0 1 3 0.5h6A1.5 1.5 0 0 1 10.5 2v3a.5.5 0 0 1-1 0V2A.5.5 0 0 0 9 1.5H3A.5.5 0 0 0 2.5 2v12A.5.5 0 0 0 3 14.5h6a.5.5 0 0 0 .5-.5v-3a.5.5 0 1 1 1 0v3A1.5 1.5 0 0 1 9 16H3A1.5 1.5 0 0 1 1.5 14V2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.146 11.354a.5.5 0 0 1 0-.708L8.793 9H5.5a.5.5 0 0 1 0-1h3.293L7.146 5.354a.5.5 0 1 1 .708-.708l2.999 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.707 0z"
                    />
                  </svg>
                  Login
                </a>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {children}
    </Container>
  )
}
