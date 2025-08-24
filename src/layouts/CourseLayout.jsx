import { useState } from 'react'
import { Container, Navbar, Nav, Button, Row, Col, Image, Card, ProgressBar } from 'react-bootstrap'
import '../styles/CourseLayout.css';

export default function CoursePage({ children }) {
  // Demo state for audio slider
  const [progress, setProgress] = useState(12) // %
  const elapsed = '00:32'
  const total = '03:48'

  // Paint red-filled background for slider
  const sliderBg = {
    background: `linear-gradient(to right, #FF4E4E 0%, #FF4E4E ${progress}%, #e0e0e0 ${progress}%, #e0e0e0 100%)`
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="bg-white">
        {/* Mini banner */}
        <div className="mini-bar">
          <Container className="d-flex justify-content-end align-items-center">
            <i className="bi bi-telephone me-2" aria-hidden="true" />
            <a className="mini-phone" href="tel:+1234567890">(+1) 234-567-890</a>
          </Container>
        </div>

        {/* Main nav */}
        <Navbar bg="white" expand="lg" className="py-3 border-bottom">
          <Container className="align-items-center">
            {/* LEFT: Logo */}
            <Navbar.Brand href="/">
              <img
                src="/src/assets/gttsonline.png"
                alt="Logo"
                className="img-fluid logo"
                style={{ height: 100, objectFit: 'contain' }}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="mainnav" />
            <Navbar.Collapse id="mainnav" className="main-nav">
              {/* RIGHT: Menu + Logout */}
              <div className="ms-auto d-flex align-items-center">
                <Nav className="me-3 gap-2">
                  <Nav.Link href="#home">My homepage</Nav.Link>
                  <Nav.Link href="#profile">My profile</Nav.Link>
                  <Nav.Link href="#support">Contact Support</Nav.Link>
                  <Nav.Link href="#money">Make Money</Nav.Link>
                  <Nav.Link href="#upgrades">Upgrades</Nav.Link>
                  <Nav.Link href="#uploads">Uploads</Nav.Link>
                </Nav>
                <Button className="logout-btn">Logout</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* HEADER SECTION */}
      <section className="header-wrap">
        <Container>
          {/* Row 1 */}
          <Row className="gy-3 align-items-center">
            {/* Col 1: Profile circle */}
            <Col md={3} lg={2} className="d-flex justify-content-md-start justify-content-center">
              <div className="profile-circle">
                <Image
                  src="https://via.placeholder.com/96"
                  alt="Profile"
                  width={96}
                  height={96}
                />
              </div>
            </Col>

            {/* Col 2: Name + status + progress */}
            <Col md={6} lg={5}>
              <div className="mb-2">
                <h3 className="m-0">Firstname</h3>
              </div>

              <div className="mb-2 d-flex align-items-center" style={{ color: '#1C274C' }}>
               <Image src="/src/assets/dashboard-dart-image.png" />
                <span>Currently on chapter 1 page: 2 of 2.</span>
              </div>

              <div className="progress-wrap">
                <ProgressBar now={5} label="5%" />
              </div>
            </Col>

            {/* Col 3: Two side-by-side metrics */}
            <Col md={6} lg={5}>
              <Row xs={2} className="g-2">
                <Col>
                  <div className="metric h-100">
                    <div className="d-flex align-items-center mb-1">
                      <i className="bi bi-clock me-2" aria-hidden="true" />
                      <span>Time required for this school</span>
                    </div>
                    <div className="fw-semibold">6 Hours</div>
                  </div>
                </Col>
                <Col>
                  <div className="metric h-100">
                    <div className="d-flex align-items-center mb-1">
                      <i className="bi bi-clock me-2" aria-hidden="true" />
                      <span>Required time remaining</span>
                    </div>
                    <div className="fw-semibold">05:52:42</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Row 2 (card with shadow, no top border) */}
          <Card className="mt-4 header-card">
            <Card.Body>
              <Row className="g-3">
                {/* Left item card */}
                <Col md={6}>
                  <Card className="soft-card h-100">
                    <Card.Body>
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src="https://via.placeholder.com/125"
                          alt="Course"
                          width={125}
                          height={125}
                          style={{ borderRadius: 16, objectFit: 'cover' }}
                        />
                        <div>
                          <div className="fs-5 fw-semibold mb-2">Get Started today</div>
                          <div className="d-flex align-items-center" style={{ color: '#1C274C' }}>
                            <i className="bi bi-lock me-2" aria-hidden="true" />
                            <span>Audio read along</span>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Right item card: audio controls */}
                <Col md={6}>
                  <Card className="soft-card h-100">
                    <Card.Body>
                      {/* Controls row (centered) */}
                      <div className="audio-ctrls d-flex justify-content-center gap-2 mb-3">
                        <Button variant="outline-secondary" aria-label="Rewind 15s">
                          <i className="bi bi-skip-backward-fill" aria-hidden="true" />
                        </Button>
                        <Button variant="outline-secondary" aria-label="Forward 15s">
                          <i className="bi bi-skip-forward-fill" aria-hidden="true" />
                        </Button>
                        <Button variant="outline-secondary" aria-label="Stop">
                          <i className="bi bi-stop-fill" aria-hidden="true" />
                        </Button>
                        <Button variant="outline-secondary" aria-label="Play">
                          <i className="bi bi-play-fill" aria-hidden="true" />
                        </Button>
                      </div>

                      {/* Slider */}
                      <div className="mb-2">
                        <input
                          className="audio-range"
                          type="range"
                          min="0"
                          max="100"
                          value={progress}
                          onChange={(e) => setProgress(parseInt(e.target.value, 10))}
                          style={sliderBg}
                          aria-label="Audio progress"
                        />
                      </div>

                      {/* Times + repeat/shuffle */}
                      <div className="time-row d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                          <span>{elapsed}</span>
                          <Button variant="link" className="p-0 text-decoration-none" aria-label="Repeat">
                            <i className="bi bi-arrow-repeat" />
                          </Button>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <Button variant="link" className="p-0 text-decoration-none" aria-label="Shuffle">
                            <i className="bi bi-shuffle" />
                          </Button>
                          <span>{total}</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ==== MODULAR PAGE CONTENT GOES HERE ==== */}
      <section className="content-wrap">
        <Container>
          {children}
        </Container>
      </section>
    </>
  )
}
