import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "../styles/LandingPage.css";
import { SiTiktok, SiInstagram, SiX, SiYoutube, SiFacebook, SiLinkedin } from "react-icons/si";

/** HELP DESK (light theme) */
export default function A0002() {
  return (
    <ExternalLayout>
      {/* 3 EASY STEPS BAR (unchanged) */}
      <div style={{ background: "#0B4D8A", color: "#fff", fontWeight: 700 }}>
        <Container className="py-2 d-flex flex-column flex-md-row align-items-center gap-3 gap-md-6">
          <div className="me-md-2 text-center" style={{ fontSize: "18px" }}>3 EASY STEPS!</div>
          <div className="d-flex flex-column flex-sm-row align-items-center gap-3 gap-sm-4 gap-md-6">
            <StepBadge n={1} text="SIGN UP" />
            <ArrowSep />
            <StepBadge n={2} text="COMPLETE THE COURSE ONLINE" />
            <ArrowSep />
            <StepBadge n={3} text="GET YOUR CERTIFICATE" />
          </div>
        </Container>
      </div>

      {/* MAIN CONTENT — Help Desk (LIGHT) */}
      <main className="py-5" style={{ background: "#FFFFFF" }}>
        <Container>
          <Row className="g-4">
            {/* LEFT: narrow accordion */}
            <Col lg={4} xl={3}>
              <Accordion className="help-left">
                {[
                  { h: "Contact Us", b: <>Reach us for any questions, comments, or assistance with your account.</> },
                  { h: "Hours of Operation", b: <>We’re available every day. Response times may vary during peak hours.</> },
                  { h: "Customer Service", b: <>Friendly, knowledgeable representatives ready to help you succeed.</> },
                ].map((item, i) => (
                  <Accordion.Item
                    eventKey={String(i)}
                    key={i}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E6EFF7",
                      borderRadius: 8,
                    }}
                  >
                    <Accordion.Header>
                      <span style={{ color: "#004985", fontWeight: 700 }}>{item.h}</span>
                    </Accordion.Header>
                    <Accordion.Body style={{ color: "#5B7896", fontSize: "18px" }}>
                      {item.b}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>

            {/* RIGHT: Help Desk FAQ */}
            <Col lg={8} xl={9}>
              <h2 style={{ color: "#0B4D8A", fontWeight: 700, marginBottom: 6, fontSize: "clamp(24px, 4vw, 32px)" }}>
                Traffic School Help Desk
              </h2>
              <div style={{ color: "#7A97B8", fontWeight: 700, marginBottom: 16, fontSize: "18px" }}>
                Questions
              </div>

              {/* FAQ accordion */}
              <Accordion alwaysOpen flush defaultActiveKey={["0"]}>
                {FAQ_ITEMS.map((q, i) => (
                  <Accordion.Item
                    eventKey={String(i)}
                    key={i}
                    style={{
                      background: "transparent",
                      borderBottom: "1px solid #E6EFF7",
                    }}
                  >
                    <Accordion.Header>
                      <span
                        style={{
                          color: "#0B4D8A",          // link-blue heading
                          fontWeight: 700,
                          
                        }}
                      >
                        {i + 1}. {q.h}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body style={{ color: "#2A3D5E", lineHeight: 1.7, fontSize: "18px" }}>
                      {q.b}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer (kept as in your file) */}
      <footer style={{ background: "#E7F4FF" }}>
        <Container className="py-5 px-3 px-md-5">
          <Row className="align-items-start g-4">
            <Col xs={12} lg={4} className="text-center text-lg-start">
              <div className="mb-3">
                <img src="/src/assets/logo.png" alt="Go To Traffic School" style={{ maxHeight: 80 }} />
              </div>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <button style={{ border: "1.5px solid #004985", background: "transparent", borderRadius: 30, padding: "8px 24px", color: "#004985", fontWeight: 600 }}>
                  Partner with Us
                </button>
                <button style={{ border: "1.5px solid #004985", background: "transparent", borderRadius: 30, padding: "8px 24px", color: "#004985", fontWeight: 600 }}>
                  Refer a Friend
                </button>
              </div>
            </Col>

            <Col xs={12} lg={5}>
              <Row className="g-4 text-center text-lg-start">
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

            <Col xs={12} lg={3} className="text-center text-lg-start">
              <ul className="list-unstyled m-0" style={{ lineHeight: 2 }}>
                <li><a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}><SiTiktok size={18} /><span>Tiktok</span></a></li>
                <li><a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}><SiInstagram size={18} /><span>Instagram</span></a></li>
                <li><a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}><SiX size={18} /><span>Twitter</span></a></li>
                <li><a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}><SiYoutube size={18} /><span>Youtube</span></a></li>
                <li><a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}><SiFacebook size={18} /><span>Facebook</span></a></li>
                <li><a href="/" className="d-inline-flex align-items-center gap-2" style={{ color: "#004985", textDecoration: "none" }}><SiLinkedin size={18} /><span>LinkedIn</span></a></li>
              </ul>
            </Col>
          </Row>
        </Container>

        <div style={{ background: "#fff" }}>
          <Container className="py-3">
            <div className="text-center" style={{ color: "#555", fontSize: 18 }}>
              © Copyright 2005-2025 CyberActive
            </div>
          </Container>
        </div>
      </footer>
    </ExternalLayout>
  );
}

/* ---------- data & helpers ---------- */

const FAQ_ITEMS = [
  {
    h: "What is a defensive driving or traffic school course?",
    b: (
      <>
        In many states, courts allow eligible defendants to take an approved defensive driving or traffic school course
        to dismiss or hide a ticket and keep their insurance rates low. Although the names are different, traffic school
        and defensive driving are essentially the same thing and may be referred to differently in certain states.
        <br /><br />
        <em>*In the State of California, tickets are not dismissed but can be “masked” if you complete an online traffic school course.</em>
      </>
    ),
  },
  {
    h: "How Much Does a Speeding Ticket Affect My Insurance?",
    b: (
      <>
        A single moving violation can increase your auto insurance premiums by as much as 20%.
        Therefore, if you are eligible to take online traffic school to dismiss or, in California, mask a ticket it will
        save you a lot of money on your insurance!
        <br /><br />
        <em>*In California, tickets are “masked” if you complete an online traffic school course. This hides the ticket on your record and prevents the point from being applied.</em>
      </>
    ),
  },
  {
    h: "How Do I Know if I Am Eligible for Online Traffic School?",
    b: (
      <>
        While some states allow defendants to attend online traffic school, others do not.
        Once you select the state where you received a ticket, Go To Traffic School will tell you what your options are for traffic school.
      </>
    ),
  },
  {
    h: "How Long Does an Online Defensive Driving Course Take?",
    b: (
      <>
        The length of an online traffic school course varies by state, but it’s generally between 4 and 8 hours long.
        Fortunately, you don’t have to complete the entire course in one sitting and you can start‑and‑stop the program as often as you need.
        <br /><br />
        <em>*In California, the online traffic school course is the equivalent of an 8‑hour classroom course. It is a self‑timed program.</em>
      </>
    ),
  },
  {
    h: "Is there a time limit to complete this course?",
    b: (
      <>If you are taking traffic school for a moving violation, the court that issued your citation must be notified
        that you have completed the online traffic school course by or before the due date printed on your citation.</>
    ),
  },
  {
    h: "Will the chapter quizzes affect my ability to pass the course?",
    b: (
      <>In general, the quiz questions are designed to prepare you for the final exam at the end of the traffic school course and will not count against your overall course score.</>
    ),
  },
  {
    h: "What will happen if I fail the final exam?",
    b: (
      <>
        In most states, you have an unlimited number of attempts* to pass the traffic school final exam.
        Once you select the state where you received a ticket, Go To Traffic School will tell you exactly how the final exam works.
        <br /><br />
        <em>*In California, you will only have 2 chances to pass the final exam before failing the course.</em>
      </>
    ),
  },
  {
    h: "How do I make my payment?",
    b: (
      <>
        You can pay for your online traffic school by credit card, online check or paper check.
        Go To Traffic School is also one of the only traffic schools in the country that allows you to take the entire course,
        up until the final exam, without paying (this excludes the State of Arizona, where you must pay before starting the course).
      </>
    ),
  },
  {
    h: "What are my traffic school certificate delivery options?",
    b: (
      <>
        Go To Traffic School offers several convenient expedited shipping options,* including Federal Express, Email delivery and Certified US Mail.
        Once you select the state where you received a ticket, you will be able to choose your shipping method.
        <br /><br />
        <em>*In California, your completion information will be transmitted electronically to your court upon your successful completion of the course.
          Additionally, you will receive an email receipt with your completion information for your records. There is no charge for this service.</em>
      </>
    ),
  },
  {
    h: "What if I am in a hurry - how quickly can I get my certificate delivered?",
    b: (
      <>
        In some states like California, we will notify your court directly via email once you complete the course.
        In other states where you are required to furnish a signed hard copy of your certificate of completion to the court,
        you can get next day delivery from Federal Express if you are in a hurry. Once you select the state where you received a ticket,
        you will be able to choose the shipping method for your certificate of completion.
      </>
    ),
  },
  {
    h: "I would like to have a copy of my certificate of completion. How can I get one?",
    b: (
      <>
        You may order a copy of your certificate of completion at any time by ordering it during registration, or by calling our customer service center at 888-329-7069.
        <br /><br />
        <em>*In California, you will automatically receive an emailed completion receipt at no charge once you complete the course.</em>
      </>
    ),
  },
  {
    h: "What is the course completion policy?",
    b: (
      <>
        You have 90 days from the date of enrollment to complete your traffic school course online.
        If you do not complete your course within this time, your account will be de-activated and no refunds shall be issued.
        In order to re-activate your account, you will either have to pay a re-activation fee or re-enroll in the traffic school course.
      </>
    ),
  },
  {
    h: "What is the course cancellation/refund policy?",
    b: (
      <>
        You are entitled to a full course refund at any point prior to the processing and shipment of your certificate of completion.
        This refund policy does not include third-party services such as Experian, which is required for identity verification in certain states.
      </>
    ),
  },
];

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
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        {n}
      </div>
      <div className="text-uppercase d-none d-sm-block" style={{ fontWeight: 800, fontSize: "14px" }}>
        {text}
      </div>
      <div className="text-uppercase d-block d-sm-none text-center" style={{ fontWeight: 800, fontSize: "12px", marginTop: "4px" }}>
        {text}
      </div>
    </div>
  );
}

function ArrowSep() {
  return (
    <div className="d-none d-sm-block">
      <svg width="32" height="12" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 7H0.5V9H1.5V8V7ZM42.2071 8.70711C42.5976 8.31658 42.5976 7.68342 42.2071 7.29289L35.8431 0.928932C35.4526 0.538408 34.8195 0.538408 34.4289 0.928932C34.0384 1.31946 34.0384 1.95262 34.4289 2.34315L40.0858 8L34.4289 13.6569C34.0384 14.0474 34.0384 14.6805 34.4289 15.0711C34.8195 15.4616 35.4526 15.4616 35.8431 15.0711L42.2071 8.70711ZM1.5 8V9H41.5V8V7H1.5V8Z" fill="white"/>
      </svg>
    </div>
  );
}
