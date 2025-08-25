import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

import heroBg from "@/assets/bg.png";
import section2Image from "@/assets/section2Image.png";
import section3Image from "@/assets/section3Image.jpg";
import section5Image from "@/assets/section5Image.png";
import section7Image1 from "@/assets/section7image-1.jpg";
import section7Image2 from "@/assets/section7Image-2.jpg";
import section8Image from "@/assets/section8Image.jpg";
import { SiTiktok, SiInstagram, SiX, SiYoutube, SiFacebook, SiLinkedin } from "react-icons/si";


const STATES = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["DC", "District of Columbia"], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"],
  ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"],
  ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"],
  ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"],
  ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"],
  ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
];

export default function LandingPage() {

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Filter states as user types (matches name or abbreviation)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return STATES;
    return STATES.filter(([abbr, name]) =>
      abbr.toLowerCase().includes(q) || name.toLowerCase().includes(q)
    );
  }, [query]);

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Navigate helper
  const goToState = (stateName) => {
    setOpen(false);
    setQuery(stateName);
    // Ensure spaces etc are safe in URL
    navigate(`/course-enrollment/select-upgrade/${encodeURIComponent(stateName)}`);
  };

  // Keyboard support
  const onKeyDown = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const sel = filtered[highlight];
      if (sel) goToState(sel[1]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <ExternalLayout>
      <section
        style={{
          backgroundImage: `
            linear-gradient(90deg, #072E60 0%, rgba(7,46,96,0.92) 30%, rgba(7,46,96,0.75) 45%, rgba(7,46,96,0.35) 58%, rgba(7,46,96,0.00) 70%),
            url(${heroBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="px-3 px-sm-4 px-lg-5">
          <section
            className="py-5"
            style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}
          >
            <Container>
              <Row className="align-items-center g-4">
                {/* LEFT */}
                <Col xs={12} lg={6} className="order-1 order-lg-0">
                  <div className="d-flex flex-column gap-3" style={{ maxWidth: 680 }}>
                    {/* Headline */}
                    <div>
                      <div
                        style={{
                          fontSize: "clamp(28px, 5vw, 40px)",
                          color: "#BFE8FF",
                          fontWeight: 600,
                          lineHeight: 1.1,
                        }}
                      >
                        America&apos;s Original
                      </div>
                      <h1
                        className="m-0"
                        style={{
                          fontWeight: 800,
                          color: "#FFFFFF",
                          fontSize: "clamp(36px, 7vw, 54px)",
                          lineHeight: 1.05,
                        }}
                      >
                        Online Traffic School
                      </h1>
                    </div>

                    {/* Bullets */}
                    <div className="d-flex flex-column gap-2">
                      {[
                        "For Traffic Tickets",
                        "Auto Insurance Discounts",
                        "100% Online",
                        "State Licensed Courses",
                      ].map((text, i) => (
                        <div
                          key={i}
                          className="d-flex align-items-center gap-2"
                          style={{ flexWrap: "wrap" }}
                        >
                          <span
                            aria-hidden="true"
                            style={{
                              width: "clamp(22px, 6vw, 28px)",
                              height: "clamp(22px, 6vw, 28px)",
                              borderRadius: 999,
                              background: "#04B8FC",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flex: "0 0 auto",
                            }}
                          >
                            {/* ✅ White check inside */}
                            {/* <i className="bi bi-check2" style={{ color: "#fff", fontSize: 18 }} /> */}
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0818 2.56687L8.09599 13.404C7.90554 13.6567 7.62154 13.8223 7.30782 13.8635C6.9941 13.9048 6.67695 13.8182 6.42766 13.6234L0.724994 9.06404C0.221771 8.66133 0.140286 7.92693 0.542994 7.4237C0.945702 6.92048 1.6801 6.83899 2.18333 7.2417L6.93866 11.0462L14.2035 1.1867C14.4417 0.829224 14.8571 0.631582 15.2848 0.672246C15.7124 0.71291 16.0831 0.9853 16.2497 1.38127C16.4163 1.77724 16.3518 2.23272 16.0818 2.56687Z" fill="white"/>
                            </svg>

                          </span>
                          <span
                            style={{
                              color: "#FFFFFF",
                              fontWeight: 600,
                              fontSize: "clamp(15px, 1.7vw, 18px)",
                            }}
                          >
                            {text}
                          </span>
                        </div>
                      ))}

                      {/* Fastest sign-up + brand icons */}
                      <div
                        className="d-flex align-items-center gap-2"
                        style={{ flexWrap: "wrap" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            width: "clamp(22px, 6vw, 28px)",
                            height: "clamp(22px, 6vw, 28px)",
                            borderRadius: 999,
                            background: "#04B8FC",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flex: "0 0 auto",
                          }}
                        >
                          {/* <i className="bi bi-check2" style={{ color: "#fff", fontSize: 18 }} />
                           */}
                           <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0818 2.56687L8.09599 13.404C7.90554 13.6567 7.62154 13.8223 7.30782 13.8635C6.9941 13.9048 6.67695 13.8182 6.42766 13.6234L0.724994 9.06404C0.221771 8.66133 0.140286 7.92693 0.542994 7.4237C0.945702 6.92048 1.6801 6.83899 2.18333 7.2417L6.93866 11.0462L14.2035 1.1867C14.4417 0.829224 14.8571 0.631582 15.2848 0.672246C15.7124 0.71291 16.0831 0.9853 16.2497 1.38127C16.4163 1.77724 16.3518 2.23272 16.0818 2.56687Z" fill="white"/>
                            </svg>
                        </span>
                        <span
                          style={{
                            color: "#FFFFFF",
                            fontWeight: 600,
                            fontSize: "clamp(15px, 1.7vw, 18px)",
                          }}
                        >
                          Fastest sign-up
                        </span>

                        {/* ✅ Brand icons row */}
                        <span
                          className="ms-2 d-inline-flex align-items-center"
                          aria-label="Sign-up providers"
                          style={{ gap: 10, color: "#FFFFFF", fontSize: 22 }}
                        >
                          {/* <i className="bi bi-apple" /> */}
                          <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.4434 23.885C16.0959 25.1913 14.6246 24.985 13.2084 24.3663C11.7096 23.7338 10.3346 23.7063 8.75337 24.3663C6.77337 25.2188 5.72837 24.9713 4.54587 23.885C-2.16413 16.9688 -1.17413 6.43625 6.44337 6.05125C8.29962 6.1475 9.59212 7.06875 10.6784 7.15125C12.3009 6.82125 13.8546 5.8725 15.5871 5.99625C17.6634 6.16125 19.2309 6.98625 20.2621 8.47125C15.9721 11.0425 16.9896 16.6938 20.9221 18.275C20.1384 20.3375 19.1209 22.3863 17.4296 23.8988L17.4434 23.885ZM10.5409 5.96875C10.3346 2.9025 12.8234 0.3725 15.6834 0.125C16.0821 3.6725 12.4659 6.3125 10.5409 5.96875Z" fill="white"/>
                          </svg>
                          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.4967 1.08565C8.19946 2.22949 5.35595 4.40052 3.38381 7.27986C1.41167 10.1592 0.414842 13.5951 0.539755 17.0828C0.664667 20.5706 1.90473 23.9263 4.0778 26.6572C6.25088 29.3881 9.24241 31.3502 12.613 32.2552C15.3456 32.9603 18.2086 32.9913 20.9558 32.3454C23.4445 31.7864 25.7454 30.5907 27.6332 28.8753C29.5979 27.0354 31.024 24.6948 31.7582 22.1051C32.5561 19.2889 32.6981 16.3274 32.1732 13.4478H16.8282V19.8132H25.715C25.5374 20.8284 25.1568 21.7974 24.596 22.6621C24.0352 23.5268 23.3057 24.2695 22.4511 24.8457C21.3659 25.5635 20.1427 26.0465 18.8598 26.2636C17.5732 26.5029 16.2535 26.5029 14.9668 26.2636C13.6628 25.994 12.4292 25.4558 11.3446 24.6832C9.60214 23.4498 8.29381 21.6976 7.60629 19.6765C6.90714 17.6176 6.90714 15.3855 7.60629 13.3266C8.09568 11.8834 8.90472 10.5694 9.973 9.4826C11.1955 8.21609 12.7433 7.31078 14.4465 6.866C16.1496 6.42123 17.9424 6.45416 19.6281 6.9612C20.9449 7.36543 22.1491 8.07169 23.1446 9.0237C24.1467 8.02682 25.147 7.02737 26.1456 6.02534C26.6612 5.48651 27.2232 4.97346 27.7311 4.42175C26.2115 3.00758 24.4277 1.90719 22.4821 1.18362C18.939 -0.102889 15.0622 -0.137463 11.4967 1.08565Z" fill="white"/>
                          </svg>
                          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M33 16.5C33 7.38736 25.6126 0 16.5 0C7.38736 0 0 7.38736 0 16.5C0 24.7356 6.03384 31.5618 13.9219 32.7995V21.2695H9.73242V16.5H13.9219V12.8648C13.9219 8.72953 16.3853 6.44531 20.1542 6.44531C21.9594 6.44531 23.8477 6.76758 23.8477 6.76758V10.8281H21.7671C19.7174 10.8281 19.0781 12.1 19.0781 13.405V16.5H23.6543L22.9228 21.2695H19.0781V32.7995C26.9662 31.5618 33 24.7357 33 16.5Z" fill="#1877F2"/>
                          <path d="M22.9228 21.2695L23.6543 16.5H19.0781V13.405C19.0781 12.0999 19.7174 10.8281 21.7671 10.8281H23.8477V6.76758C23.8477 6.76758 21.9594 6.44531 20.1541 6.44531C16.3853 6.44531 13.9219 8.72953 13.9219 12.8648V16.5H9.73242V21.2695H13.9219V32.7996C14.7747 32.9332 15.6367 33.0002 16.5 33C17.3633 33.0002 18.2253 32.9332 19.0781 32.7996V21.2695H22.9228Z" fill="white"/>
                          </svg>


                          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.9062 0.773557H3.09375C2.48539 0.767365 1.89943 1.00276 1.46442 1.4281C1.02942 1.85343 0.780917 2.43396 0.773438 3.04231V29.9631C0.78227 30.5705 1.03137 31.1497 1.46622 31.574C1.90108 31.9982 2.48627 32.2329 3.09375 32.2267H29.9062C30.5146 32.2315 31.1002 31.9953 31.535 31.5697C31.9698 31.1441 32.2184 30.5637 32.2266 29.9554V3.03457C32.2157 2.42801 31.9659 1.85025 31.5314 1.42687C31.0969 1.00349 30.5129 0.768704 29.9062 0.773557Z" fill="#0076B2"/>
                          <path d="M5.42984 12.563H10.0988V27.5857H5.42984V12.563ZM7.76563 5.08643C8.30114 5.08643 8.82462 5.24526 9.26984 5.54282C9.71507 5.84039 10.062 6.26332 10.2668 6.75812C10.4717 7.25291 10.5251 7.79734 10.4205 8.32252C10.3158 8.8477 10.0577 9.33005 9.67887 9.70853C9.30003 10.087 8.81744 10.3446 8.29216 10.4488C7.76688 10.5529 7.2225 10.499 6.7279 10.2937C6.2333 10.0884 5.8107 9.74103 5.51356 9.29553C5.21642 8.85002 5.05808 8.32639 5.05859 7.79088C5.05928 7.07338 5.34478 6.38549 5.85238 5.87839C6.35997 5.37128 7.04812 5.08643 7.76563 5.08643ZM13.0276 12.563H17.5032V14.6255H17.5651C18.189 13.4447 19.7101 12.1995 21.9814 12.1995C26.7097 12.1892 27.5863 15.301 27.5863 19.3357V27.5857H22.9173V20.2767C22.9173 18.5365 22.8863 16.2961 20.4913 16.2961C18.0962 16.2961 17.6888 18.1936 17.6888 20.1633V27.5857H13.0276V12.563Z" fill="white"/>
                          </svg>
                          
                          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6835 15.6835H0V0H15.6835V15.6835Z" fill="#F1511B"/>
                          <path d="M32.9998 15.6835H17.3164V0H32.9998V15.6835Z" fill="#80CC28"/>
                          <path d="M15.6831 33.0004H0V17.3169H15.6831V33.0004Z" fill="#00ADEF"/>
                          <path d="M32.9998 33.0004H17.3164V17.3169H32.9998V33.0004Z" fill="#FBBC09"/>
                          </svg>


                        </span>
                      </div>
                    </div>

                    {/* Select State + dropdown button */}
                    {/* <div className="d-flex mt-2" style={{ maxWidth: 500 }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select State"
                        aria-label="Select State"
                        style={{
                          borderTopLeftRadius: 12,
                          borderBottomLeftRadius: 12,
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          padding: "12px 14px",
                          borderColor: "transparent",
                        }}
                      />
                      <button
                        className="btn d-inline-flex align-items-center justify-content-center"
                        style={{
                          background: "#04B8FC",
                          color: "#fff",
                          borderTopRightRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          padding: "0 16px",
                        }}
                        aria-label="Open state menu"
                      >
                        <img src="./src/assets/down.png" alt="Down arrow" style={{ width: 20 }} />
                        
                        
                      </button>
                    </div> */}

                    <div ref={boxRef} className="d-flex mt-2" style={{ maxWidth: 500, position: "relative" }}>
                      {/* 🔹 your existing INPUT (unchanged layout, just value/handlers added) */}
                      <input
                        ref={inputRef}
                        type="text"
                        className="form-control"
                        placeholder="Select State"
                        aria-label="Select State"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setOpen(true); setHighlight(0); }}
                        onKeyDown={onKeyDown}
                        style={{
                          borderTopLeftRadius: 12,
                          borderBottomLeftRadius: 12,
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          padding: "12px 14px",
                          borderColor: "transparent",
                        }}
                      />

                      {/* 🔹 your existing BUTTON (unchanged layout, just toggles/open focus) */}
                      <button
                        className="btn d-inline-flex align-items-center justify-content-center"
                        style={{
                          background: "#04B8FC",
                          color: "#fff",
                          borderTopRightRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          padding: "0 16px",
                        }}
                        aria-label="Open state menu"
                        onClick={() => {
                          setOpen((o) => !o);
                          inputRef.current?.focus();
                        }}
                      >
                        <img src="./src/assets/down.png" alt="Down arrow" style={{ width: 20 }} />
                        {/* <i className="bi bi-caret-down-fill" /> */}
                      </button>

                      {/* 🔹 data dropdown (added below input/button; layout intact) */}
                      {open && (
                        <div
                          role="listbox"
                          aria-label="States"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            marginTop: 6,
                            zIndex: 50,
                            background: "#fff",
                            borderRadius: 12,
                            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                            border: "1px solid rgba(0,0,0,0.06)",
                            maxHeight: 320,
                            overflowY: "auto",
                          }}
                        >
                          {filtered.length === 0 ? (
                            <div style={{ padding: "10px 14px", color: "#6b7280" }}>No matches</div>
                          ) : (
                            filtered.map(([abbr, name], idx) => (
                              <button
                                key={abbr}
                                role="option"
                                aria-selected={idx === highlight}
                                onMouseEnter={() => setHighlight(idx)}
                                onClick={() => goToState(name)}
                                className="w-100 text-start"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  padding: "10px 14px",
                                  background: idx === highlight ? "rgba(4,184,252,0.08)" : "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                }}
                              >
                                <span style={{ fontWeight: 600 }}>{name}</span>
                                <span style={{ color: "#6b7280", marginLeft: 8 }}>({abbr})</span>
                              </button>
                            ))
                          )}
                        </div>
                      )}
                    </div>

                    {/* Free line */}
                    <p
                      className="m-0"
                      style={{ color: "#FFFFFF", fontSize: "clamp(14px, 1.6vw, 16px)" }}
                    >
                      <strong>TRY OUR COURSE FOR FREE!</strong> IF YOU&apos;RE NOT TOTALLY
                      SATISFIED BEFORE TAKING THE FINAL EXAM, DON&apos;T PAY!*
                    </p>

                    {/* Spanish line */}
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(14px, 1.6vw, 16px)",
                        textDecoration: "underline",
                      }}
                    >
                      Curso Ofrecido en Español También
                    </div>

                    <div
                      className="border-top"
                      style={{ borderColor: "rgba(255,255,255,0.25)" }}
                    />

                    {/* Disclaimer */}
                    <div
                      className="small"
                      style={{
                        color: "#DDE7F0",
                        fontSize: "clamp(12px, 1.5vw, 14px)",
                      }}
                    >
                      *Except for Arizona, and courts that have set prices.
                    </div>
                  </div>
                </Col>

                {/* RIGHT */}
                <Col xs={12} lg={6} className="order-0 order-lg-1 mt-3 mt-lg-0">
                  <div
                    className="position-relative w-100"
                    style={{ minHeight: "clamp(260px, 45vh, 420px)" }}
                  >
                    {/* Main (phone) */}
                    <div
                      className="position-absolute end-0 top-50 translate-middle-y"
                      style={{
                        width: "clamp(220px, 40vw, 320px)",
                        right: "4%",
                        borderRadius: 24,
                        overflow: "hidden",
                        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
                      }}
                    >
                      {/* <img
                        src={heroPhone}
                        alt="GTTS App on phone"
                        className="w-100 h-100"
                        style={{ display: "block", objectFit: "cover" }}
                      /> */}
                    </div>

                    {/* Secondary (laptop/tablet) */}
                    <div
                      className="position-absolute start-0 bottom-0"
                      style={{
                        transform: "translate(-6%, 20%)",
                        width: "clamp(180px, 26vw, 260px)",
                        borderRadius: 16,
                        overflow: "hidden",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
                      }}
                    >
                      {/* <img
                        src={heroSecondary}
                        alt="GTTS website on device"
                        className="w-100 h-100"
                        style={{ display: "block", objectFit: "cover" }}
                      /> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </section>




      {/* We Also Offer */}
      <section className="py-5 bg-white">
        <Container>
          <h1 className="text-center fw-bold mb-4" style={{ color: "#004985", fontSize: "40px" }}>
            We Also Offer
          </h1>

          <Row
            className="g-4 justify-content-center"
            style={{ paddingTop: 50 }}
          >
            {/* Item 1 */}
            <Col xs={6} md={3}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg
                    width="53"
                    height="48"
                    viewBox="0 0 53 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.7478 18.0952C34.1763 20.1342 36.6446 21.9902 40.7784 23.33C44.9121 21.9902 47.3804 20.1342 48.809 18.0952C50.2421 16.0515 50.6423 13.7919 50.6423 11.6824V2.63264L40.7762 0L30.9101 2.63264V11.6824C30.9101 13.7918 31.3104 16.0514 32.7435 18.0952H32.7478ZM36.2098 12.5319C35.8832 12.2785 35.821 11.8046 36.0672 11.4714C36.3156 11.1382 36.7803 11.0748 37.1069 11.3259L40.0605 13.616L44.3207 8.20054C44.5783 7.87439 45.0453 7.82277 45.365 8.08557C45.6848 8.34836 45.7354 8.8247 45.4778 9.1508L40.7667 15.1388L40.7644 15.1365C40.5137 15.4556 40.0582 15.5142 39.7384 15.2655L36.2098 12.5296L36.2098 12.5319ZM26.4291 36.9722C26.0196 36.9534 25.7022 36.6015 25.7183 36.1838C25.7367 35.7662 26.0817 35.4423 26.4912 35.4588L28.2555 35.5386C28.665 35.5574 28.9825 35.9093 28.9663 36.327C28.9479 36.7446 28.6029 37.0684 28.1934 37.052L26.4291 36.9722ZM51.758 39.1121H50.2099V40.0014C50.2099 40.2736 50.295 40.5129 50.4308 40.6795C50.5389 40.8109 50.6769 40.8907 50.8218 40.8907H51.857C51.8501 40.5059 51.834 40.0859 51.804 39.6565C51.7902 39.4735 51.7741 39.2904 51.7557 39.1121L51.758 39.1121ZM1.3486 36.876H2.36306C2.43898 36.876 2.52638 36.8103 2.6023 36.7024C2.72881 36.5287 2.80473 36.2753 2.80473 35.9867V35.0974H1.56254C1.45443 35.6629 1.3923 36.273 1.3486 36.876ZM46 45.8765H52.4111C52.5721 45.8765 52.7194 45.8085 52.8252 45.6982C52.9333 45.5879 53 45.4401 53 45.2758C53 45.1116 52.9333 44.9614 52.8252 44.8535C52.7171 44.7432 52.5721 44.6751 52.4111 44.6751H46.1154C46.1177 44.7221 46.1177 44.769 46.1177 44.8159C46.1177 45.1796 46.0763 45.5339 46.0004 45.8741L46 45.8765ZM44.2701 46.2988C44.2747 46.2895 44.2793 46.2801 44.2839 46.2707C44.5048 45.8343 44.629 45.3392 44.629 44.8159C44.629 43.936 44.2793 43.1406 43.7157 42.5657C43.1499 41.9885 42.37 41.6342 41.5097 41.6342C40.6471 41.6342 39.8673 41.9908 39.3037 42.5657C38.7378 43.1429 38.3905 43.9384 38.3905 44.8159C38.3905 45.3391 38.5147 45.8342 38.7355 46.2707C38.7401 46.2801 38.7447 46.2895 38.7493 46.2988C38.8965 46.5828 39.0852 46.8432 39.306 47.0684C39.8719 47.6456 40.6517 48 41.512 48C42.3746 48 43.1545 47.6433 43.718 47.0684C43.9389 46.8432 44.1275 46.5827 44.2747 46.2988H44.2701ZM36.8973 44.6752H14.5039C14.5062 44.7221 14.5062 44.769 14.5062 44.8159C14.5062 45.1796 14.4648 45.5339 14.3889 45.8741H37.0102C36.9343 45.5339 36.8929 45.1796 36.8929 44.8159C36.8929 44.769 36.8929 44.7221 36.8952 44.6752H36.8973ZM5.28616 44.6752H0.588882C0.427858 44.6752 0.280638 44.7432 0.174827 44.8535C0.0667146 44.9638 0 45.1116 0 45.2758C0 45.4401 0.0667087 45.5902 0.174827 45.6982C0.28294 45.8085 0.427864 45.8765 0.588882 45.8765H5.40116C5.32525 45.5363 5.28385 45.182 5.28385 44.8183C5.28385 44.7714 5.28385 44.7244 5.28615 44.6775L5.28616 44.6752ZM1.29048 43.1547H5.57824C5.81057 42.5235 6.17401 41.9581 6.63181 41.4912C7.46684 40.6394 8.61928 40.1138 9.89139 40.1138C11.1635 40.1138 12.3182 40.6417 13.151 41.4912C13.6087 41.9581 13.9722 42.5259 14.2045 43.1547H37.1845C37.4168 42.5235 37.7802 41.9581 38.238 41.4912C39.0731 40.6394 40.2255 40.1138 41.4976 40.1138C42.7697 40.1138 43.9244 40.6417 44.7572 41.4912C45.2149 41.9581 45.5784 42.5259 45.8108 43.1547H51.8056C51.8148 42.9975 51.8217 42.8427 51.8286 42.6948C51.8332 42.601 51.8355 42.5071 51.8401 42.4109H50.8164C50.2138 42.4109 49.6755 42.12 49.289 41.6531C48.9324 41.2213 48.7116 40.6371 48.7116 40.0012V38.3517C48.7116 37.9317 49.0451 37.5915 49.4569 37.5915H51.4581C51.3569 37.2207 51.2281 36.8125 51.051 36.437C50.821 35.949 50.5104 35.5032 50.0757 35.2639C49.795 35.109 48.6357 34.7664 47.2808 34.4027C45.4704 33.9147 43.3564 33.4055 42.4685 33.2366C39.8093 32.7274 38.1485 31.6411 36.4207 30.5124C34.7714 29.4354 33.0576 28.3138 30.2928 27.6967C29.3864 27.4949 27.8061 27.326 26.0763 27.2016C24.006 27.0538 21.754 26.9717 20.1804 26.9764C18.7795 26.9811 17.2452 27.0562 15.7615 27.1805C14.2203 27.3096 12.7595 27.4902 11.5933 27.6944C10.4846 27.8891 9.64724 28.105 8.90655 28.3936C8.17734 28.6799 7.53098 29.0412 6.80636 29.5339C6.1646 29.968 5.47219 30.4913 4.82118 31.0075C3.90794 31.7325 3.06372 32.4552 2.53467 32.9268C2.34144 33.1004 2.17812 33.321 2.0424 33.5767H3.53993C3.95169 33.5767 4.28522 33.917 4.28522 34.3369V35.9865C4.28522 36.6035 4.09659 37.1761 3.79065 37.5984C3.4364 38.0888 2.92806 38.3938 2.35296 38.3938H1.26258C1.25108 38.6637 1.23958 38.9171 1.22808 39.1189C1.17747 39.9588 1.17747 40.7824 1.20277 41.5661C1.21888 42.0988 1.24878 42.636 1.28329 43.1523L1.29048 43.1547ZM7.11716 46.2707C6.89633 45.8343 6.77212 45.3392 6.77212 44.816C6.77212 43.9361 7.12176 43.1406 7.68535 42.5658C8.25123 41.9886 9.03107 41.6342 9.89136 41.6342C10.754 41.6342 11.5338 41.9909 12.0974 42.5658C12.6633 43.143 13.0106 43.9384 13.0106 44.816C13.0106 45.3392 12.8864 45.8343 12.6656 46.2707C12.661 46.2801 12.6564 46.2895 12.6518 46.3012C12.5045 46.5851 12.3182 46.8432 12.0974 47.0685C11.5315 47.6457 10.7517 48 9.89137 48C9.02878 48 8.24892 47.6434 7.68536 47.0685C7.46453 46.8432 7.27591 46.5828 7.12869 46.2989C7.12408 46.2895 7.11948 46.2825 7.11488 46.2731L7.11716 46.2707ZM21.8946 33.0865H7.60064C8.26772 32.026 9.30056 31.1249 12.9075 30.4867C14.2462 30.2497 15.6471 30.0761 17.0527 29.9564C18.5801 29.8274 20.0914 29.7664 21.5245 29.7617H21.8926V33.0842L21.8946 33.0865ZM23.3851 29.7969C23.9786 29.8203 24.5721 29.8602 25.1656 29.9142C26.3594 30.0245 27.5579 30.2028 28.7471 30.4703C29.6167 30.665 30.4126 30.8997 31.1809 31.1976C31.9561 31.498 32.7106 31.864 33.4835 32.3169C33.9114 32.5679 34.238 32.8213 34.5417 33.0841H23.3877V29.7944L23.3851 29.7969ZM22.5133 28.2576C22.5547 28.2506 22.5961 28.2459 22.6398 28.2459C22.695 28.2459 22.7479 28.2529 22.7985 28.2623C23.6313 28.2834 24.4662 28.3304 25.299 28.4078C26.5803 28.5251 27.8431 28.7128 29.0669 28.9874C29.9916 29.1962 30.8543 29.4496 31.7031 29.7804C32.545 30.1066 33.3685 30.5078 34.2219 31.0076C34.9994 31.4628 35.4502 31.8734 35.9357 32.3169C36.2439 32.5961 36.5659 32.8918 36.9938 33.2085C37.1986 33.3446 37.3343 33.5793 37.3343 33.8468C37.3343 34.2668 37.0007 34.607 36.589 34.607H6.31458C5.90282 34.607 5.56929 34.2667 5.56929 33.8468C5.56929 33.6849 5.6199 33.5323 5.70501 33.408C5.77632 33.2813 5.85453 33.1405 5.93044 32.9997C6.84827 31.315 7.63036 29.879 12.659 28.9897C14.0461 28.7433 15.4907 28.565 16.9399 28.443C18.465 28.314 20.0177 28.2529 21.529 28.2483C21.858 28.2459 22.1869 28.2506 22.5159 28.2553L22.5133 28.2576Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Insurance Reduction &<br />
                  Mature Drivers
                </div>
              </div>
            </Col>

            {/* Item 2 */}
            <Col xs={6} md={3}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg
                    width="41"
                    height="46"
                    viewBox="0 0 41 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.7013 3.44967C28.6774 3.4277 28.6536 3.40574 28.6317 3.37979L26.1823 0.916055V5.65982C26.1823 5.68977 26.1943 5.71573 26.2122 5.73569C26.2301 5.75366 26.2559 5.76364 26.2838 5.76364H31.0014L28.6993 3.44768L28.7013 3.44967ZM33.1981 22.1212V6.41056H33.1961C33.1961 6.24684 33.1344 6.08113 33.0091 5.95535L30.6731 3.60539H34.6148C34.7024 3.60539 34.7839 3.64133 34.8416 3.70123C34.9013 3.75913 34.9372 3.84099 34.9372 3.92883V22.5764L33.1981 22.1192L33.1981 22.1212ZM32.2709 44.4008C31.5566 44.1791 30.896 43.9396 30.2791 43.686L3.27634 43.688V45.6766C3.27634 45.7644 3.31216 45.8463 3.37185 45.9042C3.42955 45.9641 3.51113 46 3.59868 46H34.6128C34.7003 46 34.7819 45.9641 34.8396 45.9042C34.8993 45.8463 34.9351 45.7644 34.9351 45.6766V43.5682C34.2387 43.8677 33.4806 44.1492 32.6529 44.4048C32.5216 44.4447 32.3882 44.4407 32.2669 44.4028L32.2709 44.4008ZM28.5143 33.9249C28.2317 33.7093 28.178 33.306 28.3909 33.0225C28.6058 32.739 29.0077 32.6851 29.2903 32.8987L31.8451 34.8474L35.5301 30.2393C35.7529 29.9618 36.1568 29.9179 36.4334 30.1415C36.7099 30.3651 36.7537 30.7704 36.5309 31.0479L32.4559 36.1431L32.4539 36.1411C32.237 36.4127 31.8431 36.4626 31.5665 36.2509L28.5142 33.923L28.5143 33.9249ZM28.0845 24.4115C28.0507 24.4235 28.0168 24.4315 27.981 24.4395L23.9339 25.5016V33.2021C23.9339 34.997 24.2801 36.9197 25.5197 38.6588C26.7554 40.3938 28.8904 41.9731 32.466 43.1131C33.5126 42.7796 34.4359 42.4083 35.2497 42.005C35.2795 41.987 35.3094 41.971 35.3432 41.959C37.2573 40.9967 38.5526 39.8666 39.4142 38.6588C40.6538 36.9198 41 34.9971 41 33.2021V25.5016L35.4723 24.0502C35.4365 24.0442 35.4027 24.0342 35.3688 24.0222L32.4678 23.2615L28.0864 24.4115L28.0845 24.4115ZM6.52178 14.1514H5.76964V14.385C5.76964 14.4489 5.79551 14.5068 5.83928 14.5507C5.88306 14.5946 5.94076 14.6206 6.00443 14.6206H6.38447L6.52375 14.1514H6.52178ZM25.5259 14.6206H25.906C25.9696 14.6206 26.0273 14.5946 26.0711 14.5507C26.1149 14.5068 26.1407 14.4489 26.1407 14.385V14.1514H25.3886L25.5279 14.6206H25.5259ZM24.4276 15.4412C24.4256 15.4332 24.4236 15.4252 24.4216 15.4152L23.9182 13.7242C23.9103 13.7002 23.9023 13.6782 23.8983 13.6543L23.1721 11.2205C23.0806 10.915 22.9035 10.6635 22.6727 10.4898C22.4399 10.3161 22.1494 10.2182 21.829 10.2182H10.0855C9.76513 10.2182 9.47464 10.3161 9.24186 10.4898C9.01105 10.6635 8.83197 10.915 8.74243 11.2205L8.01617 13.6543C8.0102 13.6782 8.00423 13.7022 7.99627 13.7242L7.49287 15.4152C7.49088 15.4232 7.48889 15.4312 7.4869 15.4412H24.4317H24.4276ZM7.81344 19.6958C7.68212 19.5641 7.50304 19.4842 7.30407 19.4842C7.1051 19.4842 6.92602 19.5641 6.7947 19.6958C6.66338 19.8276 6.58379 20.0073 6.58379 20.2069C6.58379 20.4066 6.66338 20.5863 6.7947 20.7181C6.92602 20.8498 7.1051 20.9297 7.30407 20.9297C7.50304 20.9297 7.68212 20.8498 7.81344 20.7181C7.94476 20.5863 8.02435 20.4066 8.02435 20.2069C8.02435 20.0073 7.94476 19.8276 7.81344 19.6958ZM7.30407 18.1904C7.85919 18.1904 8.36061 18.416 8.72476 18.7814C9.08888 19.1467 9.31369 19.6499 9.31369 20.2069C9.31369 20.764 9.08885 21.2671 8.72476 21.6325C8.36064 21.9979 7.85924 22.2234 7.30407 22.2234C6.74891 22.2234 6.24753 21.9978 5.88338 21.6325C5.51926 21.2671 5.29445 20.764 5.29445 20.2069C5.29445 19.6499 5.51929 19.1468 5.88338 18.7814C6.2475 18.416 6.74891 18.1904 7.30407 18.1904ZM25.1142 19.6958C24.9829 19.5641 24.8038 19.4842 24.6049 19.4842C24.4059 19.4842 24.2268 19.5641 24.0955 19.6958C23.9642 19.8276 23.8846 20.0073 23.8846 20.2069C23.8846 20.4066 23.9642 20.5863 24.0955 20.7181C24.2268 20.8498 24.4059 20.9297 24.6049 20.9297C24.8038 20.9297 24.9829 20.8498 25.1142 20.7181C25.2436 20.5863 25.3252 20.4066 25.3252 20.2069C25.3252 20.0073 25.2456 19.8276 25.1142 19.6958ZM24.6049 18.1904C25.16 18.1904 25.6614 18.416 26.0256 18.7814C26.3897 19.1467 26.6145 19.6499 26.6145 20.2069C26.6145 20.764 26.3897 21.2671 26.0256 21.6325C25.6614 21.9979 25.16 22.2234 24.6049 22.2234C24.0497 22.2234 23.5483 21.9978 23.1842 21.6325C22.8201 21.2671 22.5953 20.764 22.5953 20.2069C22.5953 19.6499 22.8201 19.1468 23.1842 18.7814C23.5483 18.416 24.0497 18.1904 24.6049 18.1904ZM5.99906 26.2466V27.4905C5.99906 27.4945 6.00105 27.4985 6.00304 27.5005L6.00503 27.4985C6.00901 27.5025 6.011 27.5025 6.01498 27.5025H8.29722C8.3012 27.5025 8.30518 27.5005 8.30717 27.4985L8.30518 27.4965C8.30916 27.4925 8.30916 27.4905 8.30916 27.4865V26.2426H5.99905L5.99906 26.2466ZM9.59848 26.2466H22.645V31.6052H4.25772C3.90156 31.6052 3.61306 31.8947 3.61306 32.252C3.61306 32.6094 3.90158 32.8989 4.25772 32.8989H22.645V33.2024C22.645 33.999 22.7067 34.8216 22.8699 35.6482L4.25793 35.6462C3.90177 35.6462 3.61327 35.9357 3.61327 36.293C3.61327 36.6504 3.90179 36.9399 4.25793 36.9399H23.2122C23.4947 37.7765 23.9006 38.605 24.4717 39.4056C25.2357 40.4778 26.2903 41.492 27.7348 42.3945H0.316366C0.228815 42.3945 0.149231 42.3585 0.0935155 42.3026C0.0358139 42.2447 0 42.1649 0 42.075L0.00198925 0.319447C0.00198925 0.229603 0.0378051 0.149742 0.0955052 0.0918426C0.15122 0.0359367 0.230804 0 0.318355 0H24.8976V5.6601C24.8976 6.04343 25.0548 6.39283 25.3055 6.6444C25.5582 6.89769 25.9064 7.05769 26.2884 7.05769H31.9113V22.0758L28.5168 22.9663V18.8015C28.5168 17.8771 28.1408 17.0366 27.5339 16.4276C27.2593 16.1521 26.935 15.9225 26.5808 15.7548C26.732 15.6809 26.8673 15.5811 26.9847 15.4633C27.2593 15.1878 27.4324 14.8044 27.4324 14.3831V13.8361C27.4324 13.5686 27.323 13.325 27.1459 13.1453L27.1439 13.1433C26.9668 12.9656 26.7221 12.8558 26.4555 12.8558H25.0049L24.408 10.8492C24.2349 10.2722 23.8927 9.79107 23.439 9.45164C22.9873 9.11422 22.4302 8.92253 21.8313 8.92253H10.0878C9.48885 8.92253 8.93175 9.1142 8.48009 9.45164C8.02644 9.78906 7.6842 10.2722 7.51112 10.8492L6.91418 12.8558H5.46365C5.19702 12.8558 4.95229 12.9656 4.77518 13.1433L4.77319 13.1453C4.5961 13.323 4.48667 13.5665 4.48667 13.8361V14.3831C4.48667 14.8044 4.65779 15.1857 4.93436 15.4633C5.05175 15.5811 5.18905 15.6809 5.33828 15.7548C4.98211 15.9225 4.65979 16.1501 4.38519 16.4276C3.77833 17.0366 3.40226 17.8771 3.40226 18.8015V25.0366C3.40226 25.366 3.53756 25.6675 3.75643 25.8891L3.75842 25.8911C3.97729 26.1107 4.27772 26.2465 4.60805 26.2465H4.71748V27.4904C4.71748 27.8477 4.86274 28.1752 5.09951 28.4108V28.4128C5.33629 28.6504 5.66064 28.7961 6.02076 28.7961H8.303C8.65916 28.7961 8.98546 28.6504 9.22028 28.4128H9.22227C9.45904 28.1752 9.60429 27.8497 9.60429 27.4884V26.2445L9.59848 26.2466ZM8.95184 24.9529H5.3544H5.35241H4.68386V18.8016C4.68386 18.2346 4.91467 17.7175 5.28874 17.3421C5.66281 16.9668 6.17617 16.7352 6.74325 16.7352H25.1662C25.7313 16.7352 26.2466 16.9668 26.6207 17.3421C26.9948 17.7175 27.2256 18.2326 27.2256 18.8016V23.3058L23.1785 24.368C22.892 24.4179 22.6691 24.6575 22.6472 24.9549H8.95377H8.95178L8.95184 24.9529ZM18.5983 21.4909H12.7543V22.631H18.5983V21.4909ZM12.1099 20.1972C11.7538 20.1972 11.4653 20.4867 11.4653 20.844V23.2758C11.4653 23.6332 11.7538 23.9227 12.1099 23.9227H19.2432C19.5993 23.9227 19.8878 23.6332 19.8878 23.2758V20.844C19.8878 20.4867 19.5993 20.1972 19.2432 20.1972H12.1099Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Curso Ofrecido en Español También
                </div>
              </div>
            </Col>

            {/* Item 3 */}
            <Col xs={6} md={3}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg
                    width="43"
                    height="48"
                    viewBox="0 0 43 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99945 12.0006V48H41.9997C42.5497 48 42.9997 47.55 42.9997 47V11.8206C42.6797 11.9306 42.3497 12.0006 41.9997 12.0006H7.99945ZM17.6495 36.5002C15.8495 36.5002 14.3895 35.0402 14.3895 33.2402C14.3895 31.4403 15.8495 29.9803 17.6495 29.9803C19.4495 29.9803 20.9096 31.4403 20.9096 33.2402C20.9096 35.0402 19.4495 36.5002 17.6495 36.5002ZM32.3496 36.5002C30.5496 36.5002 29.0896 35.0402 29.0896 33.2402C29.0896 31.4403 30.5496 29.9803 32.3496 29.9803C34.1497 29.9803 35.6097 31.4403 35.6097 33.2402C35.6097 35.0402 34.1497 36.5002 32.3496 36.5002ZM38.9997 32.2402C38.9997 32.7902 38.5497 33.2402 37.9997 33.2402H37.6097C37.6097 30.3403 35.2497 27.9803 32.3496 27.9803C29.4496 27.9803 27.0896 30.3403 27.0896 33.2402H22.9096C22.9096 30.3403 20.5495 27.9803 17.6495 27.9803C14.7495 27.9803 12.3895 30.3403 12.3895 33.2402H11.9995C11.4495 33.2402 10.9995 32.7902 10.9995 32.2402V26.5903C10.9995 26.5803 11.0095 26.5603 11.0095 26.5503C11.0095 26.4403 11.0295 26.3403 11.0695 26.2403C11.0795 26.2203 11.0795 26.2003 11.0895 26.1803C11.0895 26.1703 11.0895 26.1603 11.0995 26.1503L13.1095 22.0004C13.3795 21.1104 14.1995 20.5004 15.1395 20.5004H27.5796C28.4496 20.5004 29.2296 21.0304 29.5496 21.8404L31.7896 25.5903H34.6097C37.0297 25.5903 38.9997 27.5603 38.9997 29.9803V32.2402Z"
                      fill="white"
                    />
                    <path
                      d="M15.0199 22.5998C14.9999 22.6698 14.9799 22.7298 14.9499 22.7898L13.5899 25.5897H19.4799V22.4998H15.1399C15.0799 22.4998 15.0299 22.5398 15.0199 22.5998Z"
                      fill="white"
                    />
                    <path
                      d="M0 9.88965V41.2992C0 44.7591 2.63002 47.6091 6.00005 47.9691V11.9996H5.00004C3.04002 11.9996 1.27001 11.1896 0 9.88965Z"
                      fill="white"
                    />
                    <path
                      d="M27.6993 22.5898C27.6793 22.5398 27.6293 22.4998 27.5793 22.4998H21.4793V25.5897H29.4593L27.7893 22.7798C27.7493 22.7198 27.7193 22.6598 27.6993 22.5898Z"
                      fill="white"
                    />
                    <path
                      d="M42.6003 1.79997C42.9403 1.53998 43.0803 1.08998 42.9503 0.679989C42.8103 0.279996 42.4303 0 42.0003 0H5.00004C2.24002 0 0 2.23997 0 4.99992C0 7.75988 2.24002 9.99985 5.00004 9.99985H42.0003C42.4303 9.99985 42.8103 9.71985 42.9503 9.31986C43.0803 8.90986 42.9403 8.45987 42.6003 8.19987C42.4403 8.07987 41.0003 6.93989 41.0003 4.99992C41.0003 4.79993 41.0403 2.96995 42.6003 1.79997Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Fleet Driver Training Courses
                </div>
              </div>
            </Col>

            {/* Item 4 */}
            <Col xs={6} md={3}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.6347 31.1034C43.0151 29.8641 41.7692 29.0933 40.3831 29.0933H29.4322C28.0461 29.0933 26.8003 29.8641 26.1806 31.1034L22.929 37.6092C22.6785 38.1123 22.5446 38.6737 22.5446 39.2351V42.9121C22.5446 43.86 23.1535 44.6589 23.9999 44.959V45.8205C23.9999 47.0231 24.9779 48.0034 26.1828 48.0034H27.638C28.8406 48.0034 29.8209 47.0253 29.8209 45.8205V45.0928H39.2754V45.8205C39.2754 47.0231 40.2535 48.0034 41.4583 48.0034H42.9136C44.1162 48.0034 45.0964 47.0253 45.0964 45.8205V45.0928C46.2991 45.0928 47.2793 44.1148 47.2793 42.9099V39.2329C47.2793 38.6716 47.1454 38.1102 46.895 37.6071L43.6412 31.1013L43.6347 31.1034ZM28.3609 45.8203C28.3609 46.2219 28.0349 46.5479 27.6333 46.5479H26.1781C25.7765 46.5479 25.4504 46.2219 25.4504 45.8203V45.0926H28.3588V45.8203H28.3609ZM43.6347 45.8203C43.6347 46.2219 43.3087 46.5479 42.9071 46.5479H41.4519C41.0503 46.5479 40.7242 46.2219 40.7242 45.8203V45.0926H43.6326V45.8203H43.6347ZM45.8154 42.9119C45.8154 43.3135 45.4894 43.6395 45.0878 43.6395H24.7228C24.3212 43.6395 23.9951 43.3135 23.9951 42.9119V39.2349C23.9951 38.898 24.075 38.559 24.2262 38.2589L27.4778 31.7531C27.8492 31.0103 28.5984 30.5462 29.4296 30.5462H40.3805C41.2117 30.5462 41.9588 31.0082 42.3323 31.7531L45.5861 38.2589C45.7372 38.5612 45.8171 38.898 45.8171 39.2349V42.9119H45.8154Z"
                      fill="white"
                    />
                    <path
                      d="M37.0909 34.9128H27.6363C27.2347 34.9128 26.9087 35.2389 26.9087 35.6405C26.9087 36.0421 27.2347 36.3681 27.6363 36.3681H37.0909C37.4925 36.3681 37.8185 36.0421 37.8185 35.6405C37.8185 35.2389 37.4925 34.9128 37.0909 34.9128Z"
                      fill="white"
                    />
                    <path
                      d="M39.2731 36.3659H41.456C41.8576 36.3659 42.1836 36.0399 42.1836 35.6383C42.1836 35.2367 41.8576 34.9106 41.456 34.9106H39.2731C38.8715 34.9106 38.5455 35.2367 38.5455 35.6383C38.5455 36.0399 38.8715 36.3659 39.2731 36.3659Z"
                      fill="white"
                    />
                    <path
                      d="M28.6886 41.2082C28.3173 40.4654 27.5681 40.0012 26.7368 40.0012H25.4543C25.0527 40.0012 24.7267 40.3273 24.7267 40.7289C24.7267 41.1305 25.0527 41.4565 25.4543 41.4565H26.7368C27.0153 41.4565 27.2636 41.6098 27.3867 41.8581L27.7128 42.508C27.8401 42.7628 28.0971 42.9096 28.3648 42.9096C28.4749 42.9096 28.5851 42.8837 28.6887 42.8319C29.0471 42.6527 29.1939 42.2144 29.0147 41.856L28.6887 41.206L28.6886 41.2082Z"
                      fill="white"
                    />
                    <path
                      d="M44.3624 40.0037H43.0799C42.2486 40.0037 41.4994 40.4657 41.128 41.2106L40.802 41.8606C40.6228 42.219 40.7675 42.6573 41.128 42.8365C41.2317 42.8883 41.344 42.9142 41.4519 42.9142C41.7197 42.9142 41.9744 42.7674 42.104 42.5126L42.43 41.8627C42.5531 41.6144 42.8035 41.4611 43.0799 41.4611H44.3624C44.764 41.4611 45.0901 41.1351 45.0901 40.7335C45.0901 40.3319 44.764 40.0058 44.3624 40.0058L44.3624 40.0037Z"
                      fill="white"
                    />
                    <path
                      d="M39.2718 41.4568H38.5442C38.1426 41.4568 37.8166 41.7828 37.8166 42.1844C37.8166 42.586 38.1426 42.9121 38.5442 42.9121H39.2718C39.6734 42.9121 39.9995 42.586 39.9995 42.1844C39.9995 41.7828 39.6734 41.4568 39.2718 41.4568Z"
                      fill="white"
                    />
                    <path
                      d="M31.2702 41.4568H30.5426C30.141 41.4568 29.815 41.7828 29.815 42.1844C29.815 42.586 30.141 42.9121 30.5426 42.9121H31.2702C31.6718 42.9121 31.9979 42.586 31.9979 42.1844C31.9979 41.7828 31.6718 41.4568 31.2702 41.4568Z"
                      fill="white"
                    />
                    <path
                      d="M47.2724 33.4575C46.8708 33.4575 46.5448 33.7835 46.5448 34.1852V35.6404C46.5448 36.042 46.8708 36.368 47.2724 36.368C47.674 36.368 48 36.042 48 35.6404V34.1852C48 33.7835 47.674 33.4575 47.2724 33.4575Z"
                      fill="white"
                    />
                    <path
                      d="M23.271 35.638V34.1827C23.271 33.7811 22.9449 33.4551 22.5434 33.4551C22.1418 33.4551 21.8157 33.7811 21.8157 34.1827V35.638C21.8157 36.0396 22.1418 36.3656 22.5434 36.3656C22.9449 36.3656 23.271 36.0396 23.271 35.638Z"
                      fill="white"
                    />
                    <path
                      d="M37.8175 7.27517H11.636C10.0296 7.27517 8.72767 8.57716 8.72767 10.1835V38.5482H5.09171C4.69226 38.5482 4.36408 38.8764 4.36408 39.2758V45.0946C4.36408 46.701 5.66606 48.0029 7.27242 48.0029H23.2736C22.9541 47.5819 22.7274 47.0875 22.6194 46.5477H7.27209C6.47106 46.5477 5.81684 45.8935 5.81684 45.0924V40.0011H21.0906V39.2303C21.0906 38.6409 21.2008 38.045 21.4037 37.4858C20.7776 37.0993 20.363 36.4234 20.363 35.6375V34.1822C20.363 32.9817 21.3454 31.9993 22.5459 31.9993C23.0468 31.9993 23.5067 32.1742 23.8759 32.4657L24.8799 30.4512C25.7522 28.7131 27.4903 27.6357 29.4335 27.6357H36.3643V10.1811C36.3643 9.38005 37.0185 8.72582 37.8195 8.72582C38.6206 8.72582 39.2748 9.38005 39.2748 10.1811V13.8171C39.2748 14.2165 39.603 14.5447 40.0024 14.5447C40.4018 14.5447 40.73 14.2165 40.73 13.8171V10.1811C40.73 8.5747 39.4281 7.27271 37.8217 7.27271L37.8175 7.27517ZM16.7273 12.3664H28.363C28.7624 12.3664 29.0906 12.6946 29.0906 13.0941C29.0906 13.4935 28.7624 13.8217 28.363 13.8217H16.7273C16.3278 13.8217 15.9997 13.4935 15.9997 13.0941C15.9997 12.6946 16.3278 12.3664 16.7273 12.3664ZM16.7273 36.3655H13.8189C13.4195 36.3655 13.0913 36.0373 13.0913 35.6379C13.0913 35.2384 13.4195 34.9102 13.8189 34.9102H16.7273C17.1267 34.9102 17.4549 35.2384 17.4549 35.6379C17.4549 36.0373 17.1267 36.3655 16.7273 36.3655ZM16.7273 34.1848H13.8189C13.4195 34.1848 13.0913 33.8566 13.0913 33.4571C13.0913 33.0577 13.4195 32.7295 13.8189 32.7295H16.7273C17.1267 32.7295 17.4549 33.0577 17.4549 33.4571C17.4549 33.8566 17.1267 34.1848 16.7273 34.1848ZM16.7273 32.0019H13.8189C13.4195 32.0019 13.0913 31.6737 13.0913 31.2742C13.0913 30.8748 13.4195 30.5466 13.8189 30.5466H16.7273C17.1267 30.5466 17.4549 30.8748 17.4549 31.2742C17.4549 31.6737 17.1267 32.0019 16.7273 32.0019ZM23.2717 26.9106H13.8171C13.4177 26.9106 13.0895 26.5824 13.0895 26.183C13.0895 25.7835 13.4177 25.4553 13.8171 25.4553H23.2717C23.6711 25.4553 23.9993 25.7835 23.9993 26.183C23.9993 26.5824 23.6711 26.9106 23.2717 26.9106ZM31.2715 24.0022H13.8171C13.4177 24.0022 13.0895 23.674 13.0895 23.2746C13.0895 22.8751 13.4177 22.547 13.8171 22.547H31.2715C31.6709 22.547 31.9991 22.8751 31.9991 23.2746C31.9991 23.674 31.6709 24.0022 31.2715 24.0022ZM31.2715 21.0938H13.8171C13.4177 21.0938 13.0895 20.7656 13.0895 20.3662C13.0895 19.9668 13.4177 19.6386 13.8171 19.6386H31.2715C31.6709 19.6386 31.9991 19.9668 31.9991 20.3662C31.9991 20.7656 31.6709 21.0938 31.2715 21.0938ZM31.2715 18.1833H16.7256C16.3262 18.1833 15.998 17.8551 15.998 17.4557C15.998 17.0562 16.3262 16.728 16.7256 16.728H31.2715C31.6709 16.728 31.9991 17.0562 31.9991 17.4557C31.9991 17.8551 31.6709 18.1833 31.2715 18.1833Z"
                      fill="white"
                    />
                    <path
                      d="M15.999 3.99359V5.33875C15.999 5.49852 15.999 5.6583 15.9925 5.81808H11.6354C9.22795 5.81808 7.27182 7.7743 7.27182 10.1817V18.5746C2.77651 15.7245 0 10.6831 0 5.33692V3.99176C0 3.01799 0.626141 2.18025 1.55673 1.89735L7.78995 0.0275292C7.92814 -0.00917639 8.0728 -0.00917639 8.21098 0.0275292L14.4442 1.89735C15.3748 2.1802 16.0009 3.01793 16.0009 3.99176L15.999 3.99359Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Driver Ed Courses
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Anywhere / Reviews section */}
      {/* Anywhere / Reviews section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center g-4">
            {/* LEFT: Image with caption */}
            <Col lg={6}>
              <div className="d-flex flex-column">
                <img
                  src={section2Image} /* replace with your path */
                  alt="Take the course anywhere, anytime"
                  className="img-fluid rounded"
                />
                <div
                  className="small mt-2 text-center"
                  style={{ color: "#004985", fontSize: 20, fontWeight: "bold" }}
                >
                  Take the course anywhere, anytime.
                </div>
              </div>
            </Col>

            {/* RIGHT: Headline, quote, stars, CTA (left-aligned) */}
            <Col lg={6}>
              <div className="d-flex flex-column align-items-start text-start">
                <div
                  style={{
                    color: "#004985",
                    fontSize: 32,
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  Join 10M+ Smart Drivers Who Chose Us First
                </div>

                <div
                  className="mt-3"
                  style={{ fontSize: 18, color: "#004985" }}
                >
                  <div>
                    “All in all, it was a good course, I liked the format of the
                    ebook and how you could play games afterwards”
                  </div>
                  <div className="mt-1 fw-semibold">Immaculee L.</div>
                </div>

                <div className="mt-2" aria-label="5-star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className="bi bi-star-fill me-1"
                      style={{ color: "#FFC107" }}
                    />
                  ))}
                </div>

                <button
                  className="mt-3 btn btn-lg"
                  style={{
                    borderRadius: 16,
                    background: "#004985",
                    border: "none",
                    color: "#fff",
                    padding: "10px 18px",
                    fontWeight: 600,
                  }}
                >
                  Get started
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Reviews Marquee Section */}
      <section
        className="reviews-section py-5"
        style={{
          position: "relative",
          backgroundImage: `url(${section3Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#072E60",
            opacity: 0.9,
          }}
        />

        {/* <Container style={{ position: "relative", zIndex: 1 }}>
          <h2 className="text-center text-white fw-bold mb-4">
            Real Time Reviews
          </h2>
          <div className="marquee" role="region" aria-label="Student reviews">
            <div className="marquee-track">
             
              <div className="marquee-seq">
                {[
                  {
                    q: "Great course—clear, concise, and easy to follow!",
                    n: "Alex P.",
                  },
                  {
                    q: "The ebook format was perfect for studying on my phone.",
                    n: "Maya J.",
                  },
                  {
                    q: "Finished over a weekend. Super convenient.",
                    n: "Chris D.",
                  },
                  {
                    q: "Loved the games after each chapter—kept me engaged.",
                    n: "Imani K.",
                  },
                  {
                    q: "Exactly what I needed for my insurance discount.",
                    n: "Jordan R.",
                  },
                  {
                    q: "Support was fast and helpful at 2am. Wow.",
                    n: "Priya S.",
                  },
                  {
                    q: "The audio option made it easy on my commute.",
                    n: "Diego L.",
                  },
                  {
                    q: "State-approved and painless—highly recommend.",
                    n: "Sam T.",
                  },
                  {
                    q: "Clean UI and my progress saved flawlessly.",
                    n: "Noah W.",
                  },
                  {
                    q: "Simple sign-up with Apple—done in seconds.",
                    n: "Leah M.",
                  },
                ].map((r, i) => (
                  <div key={`a-${i}`} className="review-card">
                    <div className="review-quote">“{r.q}”</div>
                    <div className="review-name">— {r.n}</div>
                    <div className="review-stars" aria-label="5-star rating">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <i
                          key={s}
                          className="bi bi-star-fill me-1"
                          style={{ color: "#FFC107" }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="marquee-seq">
                {[
                  {
                    q: "Great course—clear, concise, and easy to follow!",
                    n: "Alex P.",
                  },
                  {
                    q: "The ebook format was perfect for studying on my phone.",
                    n: "Maya J.",
                  },
                  {
                    q: "Finished over a weekend. Super convenient.",
                    n: "Chris D.",
                  },
                  {
                    q: "Loved the games after each chapter—kept me engaged.",
                    n: "Imani K.",
                  },
                  {
                    q: "Exactly what I needed for my insurance discount.",
                    n: "Jordan R.",
                  },
                  {
                    q: "Support was fast and helpful at 2am. Wow.",
                    n: "Priya S.",
                  },
                  {
                    q: "The audio option made it easy on my commute.",
                    n: "Diego L.",
                  },
                  {
                    q: "State-approved and painless—highly recommend.",
                    n: "Sam T.",
                  },
                  {
                    q: "Clean UI and my progress saved flawlessly.",
                    n: "Noah W.",
                  },
                  {
                    q: "Simple sign-up with Apple—done in seconds.",
                    n: "Leah M.",
                  },
                ].map((r, i) => (
                  <div key={`b-${i}`} className="review-card">
                    <div className="review-quote">“{r.q}”</div>
                    <div className="review-name">— {r.n}</div>
                    <div className="review-stars" aria-label="5-star rating">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <i
                          key={s}
                          className="bi bi-star-fill me-1"
                          style={{ color: "#FFC107" }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container> */}

        <Container style={{ position: "relative", zIndex: 1, padding: 30}}>
          <h1 className="text-center text-white fw-bold mb-4">
            Real Time Reviews
          </h1>
          <div className="marquee" role="region" aria-label="Student reviews">
            <div className="marquee-track">
              {/* sequence A */}
              <div className="marquee-seq">
                {[
                  { q: "Great course—clear, concise, and easy to follow!", n: "Alex P." },
                  { q: "The ebook format was perfect for studying on my phone.", n: "Maya J." },
                  { q: "Finished over a weekend. Super convenient.", n: "Chris D." },
                  { q: "Loved the games after each chapter—kept me engaged.", n: "Imani K." },
                  { q: "Exactly what I needed for my insurance discount.", n: "Jordan R." },
                  { q: "Support was fast and helpful at 2am. Wow.", n: "Priya S." },
                  { q: "The audio option made it easy on my commute.", n: "Diego L." },
                  { q: "State-approved and painless—highly recommend.", n: "Sam T." },
                  { q: "Clean UI and my progress saved flawlessly.", n: "Noah W." },
                  { q: "Simple sign-up with Apple—done in seconds.", n: "Leah M." },
                ].map((r, i) => (
                  <div key={`a-${i}`} className="review-card text-center">
                    <div className="review-quote">“{r.q}”</div>

                    {/* Name (centered) */}
                    <div className="review-name mt-2">— {r.n}</div>

                    {/* Stars BELOW the name (centered) */}
                    <div
                      className="review-stars d-flex justify-content-center mt-1"
                      aria-label="5-star rating"
                    >
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: s < 4 ? 4 : 0 }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.392 0.256421L13.2457 6.32115L19.625 7.2939C19.7902 7.31957 19.9272 7.44082 19.9786 7.60687C20.03 7.77292 19.9871 7.9551 19.8677 8.07711L15.2524 12.7968L16.3421 19.4624C16.3708 19.6343 16.3034 19.8083 16.1685 19.911C16.0336 20.0138 15.8545 20.0273 15.7068 19.9461L10.0007 16.7996L4.29447 19.947C4.14686 20.0286 3.96771 20.0152 3.8327 19.9125C3.6977 19.8098 3.63038 19.6357 3.65919 19.4638L4.74886 12.7968L0.132336 8.07711C0.0129373 7.9551 -0.0300433 7.77292 0.0213977 7.60687C0.0728387 7.44082 0.209821 7.31957 0.374968 7.2939L6.75426 6.32115L9.60931 0.256421C9.68196 0.0996028 9.83397 0 10.0007 0C10.1673 0 10.3193 0.0996028 10.392 0.256421Z"
                            fill="#FAC831"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* sequence B (duplicate for seamless infinite scroll) */}
              <div className="marquee-seq">
                {[
                  { q: "Great course—clear, concise, and easy to follow!", n: "Alex P." },
                  { q: "The ebook format was perfect for studying on my phone.", n: "Maya J." },
                  { q: "Finished over a weekend. Super convenient.", n: "Chris D." },
                  { q: "Loved the games after each chapter—kept me engaged.", n: "Imani K." },
                  { q: "Exactly what I needed for my insurance discount.", n: "Jordan R." },
                  { q: "Support was fast and helpful at 2am. Wow.", n: "Priya S." },
                  { q: "The audio option made it easy on my commute.", n: "Diego L." },
                  { q: "State-approved and painless—highly recommend.", n: "Sam T." },
                  { q: "Clean UI and my progress saved flawlessly.", n: "Noah W." },
                  { q: "Simple sign-up with Apple—done in seconds.", n: "Leah M." },
                ].map((r, i) => (
                  <div key={`b-${i}`} className="review-card text-center">
                    <div className="review-quote">“{r.q}”</div>

                    {/* Name (centered) */}
                    <div className="review-name mt-2">— {r.n}</div>

                    {/* Stars BELOW the name (centered) */}
                    <div
                      className="review-stars d-flex justify-content-center mt-1"
                      aria-label="5-star rating"
                    >
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: s < 4 ? 4 : 0 }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.392 0.256421L13.2457 6.32115L19.625 7.2939C19.7902 7.31957 19.9272 7.44082 19.9786 7.60687C20.03 7.77292 19.9871 7.9551 19.8677 8.07711L15.2524 12.7968L16.3421 19.4624C16.3708 19.6343 16.3034 19.8083 16.1685 19.911C16.0336 20.0138 15.8545 20.0273 15.7068 19.9461L10.0007 16.7996L4.29447 19.947C4.14686 20.0286 3.96771 20.0152 3.8327 19.9125C3.6977 19.8098 3.63038 19.6357 3.65919 19.4638L4.74886 12.7968L0.132336 8.07711C0.0129373 7.9551 -0.0300433 7.77292 0.0213977 7.60687C0.0728387 7.44082 0.209821 7.31957 0.374968 7.2939L6.75426 6.32115L9.60931 0.256421C9.68196 0.0996028 9.83397 0 10.0007 0C10.1673 0 10.3193 0.0996028 10.392 0.256421Z"
                            fill="#FAC831"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>



      </section>

      {/* Highlights (3-up, like "We Also Offer") */}
      <section className="py-5 bg-white">
        <Container>
          <Row
            className="g-4 justify-content-center"
            xs={2}
            sm={3}
            md={4}
            lg={6}
          >
            {/* Item 1 — Lowest Price */}
            <Col>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_944_9591"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                    >
                      <rect width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_944_9591)">
                      <path
                        d="M38.3972 28.2735L28.9167 12.0038L28.0894 12.4921C27.9429 12.5773 27.7559 12.5294 27.6713 12.382C27.5866 12.2346 27.6342 12.0464 27.7806 11.9611L28.608 11.4728L27.9218 10.2955C27.86 10.1889 27.7842 10.1019 27.696 10.038C27.6078 9.97227 27.5019 9.9261 27.3819 9.89946L22.8499 8.87306C22.9628 8.9512 23.0599 9.04176 23.1445 9.14476C23.2627 9.29037 23.3509 9.45908 23.4092 9.65087L24.6546 13.8169C24.7887 13.7707 24.9422 13.824 25.0181 13.9519C25.1027 14.0992 25.0551 14.2875 24.9087 14.3727L24.8346 14.4171L25.6232 17.0524C25.6831 17.2531 25.7008 17.452 25.6778 17.6473C25.6549 17.8426 25.5896 18.0309 25.4838 18.2138L24.7605 19.4568C24.7693 19.5367 24.7534 19.6202 24.7111 19.6948C24.667 19.7694 24.6035 19.8244 24.5294 19.8546L20.3589 27.0128L25.5259 35.8794C25.6423 36.08 25.8311 36.215 26.0393 36.2683C26.2474 36.3233 26.4768 36.2984 26.6761 36.1812L38.1044 29.4331C38.3038 29.3159 38.4378 29.1259 38.4908 28.9164C38.5455 28.7068 38.5208 28.476 38.4043 28.2753L38.3972 28.2735ZM25.5472 13.6358C25.4625 13.4884 25.5101 13.3002 25.6566 13.2149L26.7186 12.5881C26.865 12.5028 27.052 12.5508 27.1367 12.6982C27.2214 12.8456 27.1737 13.0338 27.0273 13.119L25.9653 13.7459C25.8189 13.8311 25.6319 13.7832 25.5472 13.6358ZM22.0718 25.4891C21.966 25.3044 22.0277 25.0682 22.2112 24.9617L30.0527 20.4052C30.2362 20.2986 30.4708 20.3608 30.5767 20.5455C30.6825 20.7301 30.6208 20.9663 30.4373 21.0729L22.5958 25.6312C22.4123 25.7377 22.1777 25.6756 22.0718 25.4909V25.4891ZM23.3191 27.6307C23.2132 27.446 23.275 27.2098 23.4584 27.1033L31.2999 22.545C31.4834 22.4384 31.718 22.5006 31.8239 22.6852C31.9298 22.8699 31.868 23.1061 31.6845 23.2127L23.843 27.7692C23.6596 27.8757 23.4249 27.8135 23.3191 27.6289V27.6307ZM32.9336 25.3559L25.0921 29.9142C24.9087 30.0207 24.674 29.9586 24.5682 29.7739C24.4623 29.5892 24.5241 29.3531 24.7075 29.2465L32.549 24.6882C32.7325 24.5816 32.9671 24.6438 33.073 24.8285C33.1789 25.0131 33.1171 25.2493 32.9336 25.3559ZM14.9234 26.1213C15.0028 26.4267 14.9517 26.7357 14.8052 26.9878C14.6588 27.24 14.4154 27.4353 14.1137 27.5153C13.8103 27.5952 13.5033 27.5437 13.2528 27.3963C13.0023 27.2489 12.8083 27.0038 12.7289 26.7002C12.6495 26.3948 12.7006 26.0858 12.8471 25.8336C12.9935 25.5815 13.2369 25.3861 13.5386 25.3062C13.842 25.2263 14.149 25.2778 14.3995 25.4252C14.65 25.5726 14.844 25.8176 14.9234 26.1213ZM11.1905 20.7583C11.1217 20.4618 11.1746 20.1634 11.3158 19.9201C11.4587 19.6751 11.6915 19.4833 11.9826 19.3998C12.0003 19.3963 12.0197 19.3909 12.0355 19.3856C12.3302 19.3164 12.6265 19.3696 12.8682 19.5117C13.1188 19.6591 13.3128 19.9042 13.3922 20.2078C13.4716 20.5132 13.4204 20.8222 13.274 21.0744C13.1276 21.3265 12.8841 21.5219 12.5825 21.6018C12.2791 21.6817 11.9721 21.6302 11.7216 21.4828C11.4782 21.339 11.2876 21.1046 11.2047 20.8115C11.2012 20.7938 11.1958 20.7743 11.1905 20.7583ZM23.261 19.2862C23.0793 19.1779 23.0175 18.9434 23.1251 18.7587C23.2328 18.5758 23.4656 18.5137 23.6491 18.622L24.3054 19.0091L24.9511 17.8993C25.0128 17.7945 25.0498 17.6844 25.064 17.5725C25.0781 17.4606 25.0657 17.3452 25.0304 17.2262L22.8165 9.82304C22.7829 9.70939 22.7318 9.61172 22.6647 9.53003C22.5977 9.44834 22.513 9.37909 22.4089 9.32226L20.6501 8.37042L20.0309 8.23013C20.0185 8.22658 20.0062 8.2248 19.9938 8.22303C19.9815 8.2248 19.9691 8.22836 19.9568 8.23013L19.3111 8.37575C19.3023 8.3793 19.2917 8.38107 19.2829 8.38285L18.556 8.548C18.5031 8.24256 18.4749 7.9176 18.4749 7.58374C18.4749 5.80974 19.2705 4.31096 20.2126 4.31096C21.1352 4.31096 21.945 5.88252 21.945 7.67607C21.945 7.84477 22.0808 7.97973 22.2466 7.97973C22.4142 7.97973 22.5483 7.84299 22.5483 7.67607C22.5483 5.48475 21.5004 3.70361 20.2108 3.70361C18.8983 3.70361 17.8698 5.40837 17.8698 7.58374C17.8698 9.7591 18.8983 11.4639 20.2108 11.4639C20.3784 11.4639 20.5125 11.3271 20.5125 11.1602C20.5125 10.9915 20.3766 10.8565 20.2108 10.8565C19.8227 10.8565 19.4593 10.5991 19.1664 10.1746C19.1964 10.1533 19.2193 10.1249 19.2511 10.1072C19.6004 9.90117 19.9991 9.85677 20.3625 9.95089C20.7259 10.0468 21.0523 10.2812 21.2587 10.6328C21.4633 10.9844 21.5074 11.3875 21.4139 11.7515C21.3187 12.1173 21.0858 12.4476 20.7365 12.6536C20.3872 12.8596 19.9885 12.904 19.6251 12.8099C19.2617 12.714 18.9336 12.4796 18.7289 12.128C18.5243 11.7764 18.4802 11.3751 18.5737 11.0093C18.579 10.9897 18.5843 10.9684 18.5913 10.9489C18.4731 10.8068 18.362 10.6452 18.2614 10.4694C17.9915 9.99705 17.7921 9.40575 17.6898 8.74689L12.6127 9.89758C12.4928 9.92422 12.3869 9.97216 12.2987 10.0361C12.2105 10.1018 12.1346 10.187 12.0729 10.2936L11.4254 11.4052L12.2528 11.8936C12.4345 12.0019 12.4963 12.2363 12.3887 12.421C12.281 12.6039 12.0464 12.666 11.8647 12.5577L11.0373 12.0694L1.59572 28.2737C1.47929 28.4744 1.45459 28.7052 1.50928 28.9148C1.56396 29.1243 1.69627 29.3126 1.89562 29.4315L13.3239 36.1797C13.5233 36.2969 13.7526 36.3217 13.9608 36.2667C14.1689 36.2116 14.3559 36.0784 14.4741 35.8778L19.7297 26.8585C19.7314 26.8549 19.7332 26.8531 19.7349 26.8496L23.916 19.6737L23.2597 19.2865L23.261 19.2862ZM14.915 13.911C15.0226 13.7281 15.2573 13.6659 15.439 13.7742L16.3599 14.3176C16.5416 14.4259 16.6033 14.6603 16.4957 14.845C16.3881 15.0279 16.1535 15.0901 15.9718 14.9818L15.0509 14.4384C14.8692 14.3301 14.8074 14.0957 14.915 13.911ZM12.7928 12.6573C12.9004 12.4743 13.1332 12.4122 13.3167 12.5205L14.3788 13.1474C14.5605 13.2557 14.6222 13.4901 14.5146 13.6748C14.407 13.8577 14.1741 13.9199 13.9906 13.8115L12.9286 13.1847C12.7469 13.0764 12.6852 12.842 12.7928 12.6573ZM10.6564 19.5295C10.9034 19.1068 11.3091 18.7801 11.8172 18.6451C12.3252 18.512 12.8368 18.599 13.2567 18.8458C13.6766 19.0944 14.0012 19.5028 14.1335 20.0143C14.2658 20.5257 14.1794 21.0407 13.9341 21.4633C13.6889 21.886 13.2814 22.2127 12.7733 22.3459C12.2653 22.4791 11.7537 22.3921 11.3338 22.1452C10.9139 21.8966 10.5893 21.4882 10.4553 20.9768C10.3229 20.4653 10.4094 19.9504 10.6546 19.5277L10.6564 19.5295ZM15.4652 27.3768C15.2183 27.7995 14.8125 28.1262 14.3044 28.2594C13.7964 28.3926 13.2848 28.3056 12.8649 28.0587C12.445 27.8101 12.1204 27.4017 11.9881 26.8903C11.8558 26.3806 11.9422 25.8639 12.1875 25.4412C12.4327 25.0186 12.8402 24.6919 13.3483 24.5587C13.8563 24.4255 14.3679 24.5125 14.7878 24.7593C15.2077 25.0079 15.5323 25.4164 15.6646 25.9278C15.7969 26.4392 15.7105 26.9542 15.4652 27.3768ZM17.808 22.6071L8.50553 25.0471C8.30088 25.1004 8.09272 24.9761 8.03981 24.7701C7.98689 24.5641 8.11038 24.3545 8.31502 24.3013L17.6175 21.8613C17.8222 21.8081 18.0303 21.9324 18.085 22.1384C18.138 22.3443 18.0145 22.5539 17.8098 22.6071L17.808 22.6071ZM18.4784 16.0154C18.3708 16.1983 18.1379 16.2605 17.9544 16.1521L17.0335 15.6088C16.8518 15.5004 16.7901 15.266 16.8977 15.0813C17.0053 14.8984 17.2382 14.8363 17.4217 14.9446L18.3426 15.488C18.5243 15.5963 18.586 15.8307 18.4784 16.0154ZM20.6007 17.2691C20.4931 17.452 20.2584 17.5142 20.0767 17.4058L19.0147 16.779C18.833 16.6707 18.7712 16.4363 18.8788 16.2516C18.9864 16.0687 19.2193 16.0065 19.4028 16.1148L20.4648 16.7417C20.6465 16.85 20.7083 17.0844 20.6007 17.2691ZM22.7229 18.521C22.6153 18.7039 22.3824 18.7661 22.199 18.6578L21.1369 18.0309C20.9552 17.9226 20.8935 17.6882 21.0011 17.5035C21.1087 17.3206 21.3433 17.2584 21.5251 17.3668L22.5871 17.9936C22.7688 18.1019 22.8305 18.3363 22.7229 18.521Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Lowest Price
                </div>
              </div>
            </Col>

            {/* Item 2 — Over 7M Satisfied Users */}
            <Col>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4189 43.5374H29.6635C29.8656 43.5374 30.0595 43.4571 30.2025 43.3142C30.3454 43.1712 30.4257 42.9774 30.4257 42.7752C30.4562 41.672 30.0603 40.5996 29.3204 39.7808C28.5805 38.962 27.5536 38.4598 26.453 38.3787L25.7045 38.2849C25.3638 39.3093 24.3599 40.4885 22.0412 40.4885C19.7225 40.4885 18.7187 39.3093 18.3779 38.2849L17.6317 38.3787C16.5308 38.4594 15.5034 38.9614 14.763 39.7802C14.0227 40.5991 13.6265 41.6717 13.6567 42.7752C13.6567 42.9774 13.737 43.1712 13.88 43.3142C14.0229 43.4571 14.2168 43.5374 14.4189 43.5374Z"
                      fill="white"
                    />
                    <path
                      d="M27.3364 4.74304C27.3529 4.73065 27.3648 4.71322 27.3705 4.69341C27.3761 4.67359 27.3751 4.65248 27.3677 4.63328C27.3604 4.60924 27.3459 4.58805 27.3261 4.57262C27.3063 4.55719 27.2822 4.54829 27.2571 4.54715L24.132 4.10353C24.011 4.08563 23.8962 4.03888 23.7971 3.96724C23.698 3.89561 23.6175 3.80118 23.5626 3.69193L22.1654 0.928089C22.1524 0.905967 22.1338 0.887635 22.1114 0.874901C22.0891 0.862166 22.0639 0.855469 22.0382 0.855469C22.0125 0.855469 21.9872 0.862166 21.9649 0.874901C21.9426 0.887635 21.9239 0.905967 21.9109 0.928089L20.5137 3.69193C20.4584 3.80165 20.3774 3.89639 20.2776 3.96806C20.1778 4.03972 20.0621 4.0862 19.9405 4.10353L16.8154 4.54715C16.7903 4.54829 16.7662 4.55719 16.7464 4.57262C16.7266 4.58805 16.7121 4.60924 16.7048 4.63328C16.6974 4.65248 16.6964 4.67359 16.702 4.69341C16.7077 4.71322 16.7196 4.73065 16.7361 4.74304L18.9953 6.89786C19.0866 6.98472 19.1549 7.09284 19.1941 7.21255C19.2334 7.33227 19.2423 7.45984 19.2202 7.58386L18.6866 10.6259C18.6824 10.6465 18.6847 10.6679 18.6931 10.6872C18.7016 10.7064 18.7158 10.7226 18.7339 10.7334C18.7562 10.7511 18.7833 10.7617 18.8117 10.7639C18.8401 10.7661 18.8685 10.7597 18.8932 10.7456L21.6868 9.30879C21.7945 9.25342 21.9139 9.22453 22.0351 9.22453C22.1563 9.22453 22.2757 9.25342 22.3834 9.30879L25.1763 10.7448C25.2012 10.7586 25.2296 10.7649 25.258 10.7629C25.2864 10.7608 25.3136 10.7506 25.3363 10.7334C25.3544 10.7225 25.3687 10.7062 25.3772 10.6868C25.3856 10.6674 25.3879 10.6459 25.3836 10.6252L24.85 7.58386C24.8284 7.45952 24.8379 7.33175 24.8778 7.21202C24.9177 7.09228 24.9868 6.98433 25.0787 6.89786L27.3364 4.74304Z"
                      fill="white"
                    />
                    <path
                      d="M22.7949 36.5494C22.3068 36.7198 21.7753 36.7198 21.2872 36.5494C20.8641 36.3995 20.4522 36.2197 20.0547 36.0112L19.7582 37.4976C19.7879 37.8406 20.041 38.9641 22.0449 38.9641C24.0754 38.9641 24.3033 37.7842 24.3315 37.4991L24.035 36.0112C23.6375 36.2197 23.2256 36.3995 22.8025 36.5494H22.7949Z"
                      fill="white"
                    />
                    <path
                      d="M26.6128 29.8137C26.6138 29.6122 26.6945 29.4193 26.8374 29.2772C26.9802 29.135 27.1735 29.0553 27.375 29.0553C27.576 29.0553 27.7688 28.9759 27.9116 28.8344C28.0543 28.693 28.1354 28.5009 28.1372 28.2999V28.293C28.1391 28.1839 28.1174 28.0757 28.0735 27.9758C28.0296 27.8759 27.9647 27.7867 27.8831 27.7143C27.8014 27.6419 27.7051 27.588 27.6007 27.5563C27.4963 27.5246 27.3863 27.5159 27.2782 27.5308C26.5676 27.5587 25.8678 27.3508 25.2877 26.9396C24.7076 26.5283 24.2797 25.9368 24.0707 25.2571C21.9381 26.7832 19.37 27.5806 16.748 27.5308C16.5643 27.5282 16.3852 27.5887 16.2407 27.7022C16.0962 27.8156 15.9949 27.9752 15.9538 28.1543C15.9334 28.2643 15.9375 28.3775 15.9658 28.4858C15.9941 28.594 16.0459 28.6947 16.1175 28.7807C16.1891 28.8667 16.2787 28.9359 16.38 28.9833C16.4814 29.0308 16.5919 29.0553 16.7038 29.0553C16.906 29.0553 17.0998 29.1356 17.2428 29.2785C17.3857 29.4215 17.466 29.6153 17.466 29.8175C17.466 29.9699 17.5514 33.6164 21.7917 35.1112C21.9521 35.1668 22.1267 35.1668 22.2871 35.1112C26.5266 33.6157 26.6128 29.9699 26.6128 29.8137Z"
                      fill="white"
                    />
                    <path
                      d="M43.1995 22.316L41.595 22.0729C41.4714 22.0543 41.3542 22.0055 41.2538 21.931C41.1535 21.8564 41.073 21.7583 41.0195 21.6453L40.332 20.1902L39.646 21.6453C39.5925 21.7583 39.512 21.8564 39.4116 21.931C39.3113 22.0055 39.1941 22.0543 39.0705 22.0729L37.466 22.316L38.6482 23.5181C38.7323 23.6037 38.795 23.708 38.8311 23.8224C38.8673 23.9369 38.8759 24.0582 38.8563 24.1766L38.585 25.8322L39.9669 25.0738C40.0792 25.0121 40.2053 24.9798 40.3335 24.9798C40.4617 24.9798 40.5878 25.0121 40.7001 25.0738L42.0821 25.8322L41.8092 24.1774C41.7896 24.059 41.7982 23.9376 41.8344 23.8232C41.8705 23.7088 41.9332 23.6045 42.0173 23.5188L43.1995 22.316Z"
                      fill="white"
                    />
                    <path
                      d="M12.8388 10.6472L10.6177 10.3095C10.4942 10.2909 10.3773 10.2422 10.2771 10.1678C10.1769 10.0933 10.0965 9.99545 10.0429 9.88268L9.07948 7.84448L8.11602 9.88268C8.0625 9.99545 7.9821 10.0933 7.88189 10.1678C7.78168 10.2422 7.66473 10.2909 7.5413 10.3095L5.29883 10.6495L6.94524 12.3028C7.02946 12.3883 7.09227 12.4926 7.12857 12.607C7.16486 12.7215 7.1736 12.8429 7.15409 12.9613L6.77984 15.2579L8.71361 14.1984C8.82579 14.137 8.95161 14.1049 9.07948 14.1049C9.20735 14.1049 9.33317 14.137 9.44535 14.1984L11.4157 15.2785L11.0018 12.9628C10.9823 12.8444 10.9911 12.723 11.0273 12.6085C11.0636 12.4941 11.1265 12.3898 11.2107 12.3043L12.8388 10.6472Z"
                      fill="white"
                    />
                    <path
                      d="M32.6962 15.2579L34.63 14.1984C34.7422 14.137 34.868 14.1049 34.9959 14.1049C35.1237 14.1049 35.2496 14.137 35.3617 14.1984L37.3321 15.2785L36.9182 12.9628C36.8987 12.8444 36.9074 12.723 36.9437 12.6085C36.98 12.4941 37.0428 12.3898 37.1271 12.3043L38.7552 10.6487L36.534 10.3111C36.4106 10.2924 36.2937 10.2437 36.1934 10.1693C36.0932 10.0949 36.0128 9.99697 35.9593 9.88421L34.9959 7.84448L34.0324 9.88268C33.9789 9.99545 33.8985 10.0933 33.7983 10.1678C33.6981 10.2422 33.5811 10.2909 33.4577 10.3095L31.2152 10.6495L32.8616 12.3028C32.9458 12.3883 33.0087 12.4926 33.0449 12.607C33.0812 12.7215 33.09 12.8429 33.0705 12.9613L32.6962 15.2579Z"
                      fill="white"
                    />
                    <path
                      d="M6.61248 22.316L5.00799 22.0729C4.88435 22.0543 4.76719 22.0055 4.66683 21.931C4.56648 21.8564 4.486 21.7583 4.43251 21.6453L3.74498 20.1902L3.05897 21.6453C3.00548 21.7583 2.925 21.8564 2.82465 21.931C2.72429 22.0055 2.60713 22.0543 2.48349 22.0729L0.882812 22.316L2.06503 23.5181C2.14911 23.6037 2.21178 23.708 2.24794 23.8224C2.2841 23.9369 2.29273 24.0582 2.27312 24.1766L2.00176 25.8322L3.38368 25.0738C3.49605 25.0121 3.62215 24.9798 3.75031 24.9798C3.87848 24.9798 4.00458 25.0121 4.11695 25.0738L5.49886 25.8322L5.22218 24.1774C5.20257 24.059 5.21119 23.9376 5.24735 23.8232C5.28351 23.7088 5.34618 23.6045 5.43026 23.5188L6.61248 22.316Z"
                      fill="white"
                    />
                    <path
                      d="M26.6407 36.8672C26.9756 36.9079 27.3069 36.9744 27.6316 37.0661C28.5995 36.7025 29.5106 36.2028 30.3375 35.5821C29.6949 35.0073 28.5775 33.7801 28.2414 30.4058C28.1857 30.4286 28.1324 30.4553 28.0752 30.4728C27.7859 32.2954 26.8364 33.9479 25.4074 35.1156L25.7336 36.7528L26.6407 36.8672Z"
                      fill="white"
                    />
                    <path
                      d="M23.0816 24.0575C23.2724 23.9068 23.4958 23.8025 23.7339 23.753C23.9721 23.7035 24.2185 23.7102 24.4536 23.7725C24.6865 23.834 24.9016 23.9496 25.0814 24.11C25.2611 24.2705 25.4004 24.4711 25.4879 24.6955C25.5852 25.0947 25.8217 25.4461 26.155 25.6863C26.4883 25.9265 26.8964 26.0398 27.3059 26.0058C27.5893 26.011 27.8699 26.0625 28.1367 26.1583V25.2436C28.1351 23.6268 27.4921 22.0768 26.3489 20.9335C25.2057 19.7903 23.6556 19.1474 22.0389 19.1458C20.4224 19.1484 18.8729 19.7917 17.7299 20.9347C16.5869 22.0777 15.9437 23.6271 15.941 25.2436V26.1491C16.198 26.0553 16.4693 26.0068 16.7429 26.0058C19.0127 26.0725 21.2411 25.3876 23.0816 24.0575Z"
                      fill="white"
                    />
                    <path
                      d="M17.4418 36.8656L18.3511 36.7513L18.6774 35.114C17.2483 33.9458 16.2987 32.2928 16.0096 30.4698C15.9509 30.4515 15.9013 30.4141 15.8449 30.3936C15.5118 33.7618 14.4005 34.9974 13.748 35.5828C14.5747 36.2041 15.4859 36.7041 16.454 37.0676C16.7776 36.9751 17.1078 36.9076 17.4418 36.8656Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Over 7M Satisfied Users
                </div>
              </div>
            </Col>

            {/* Item 3 — label placeholder (update as needed) */}
            <Col>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_944_9615"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="35"
                      height="35"
                    >
                      <rect width="35" height="35" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_944_9615)">
                      <path
                        d="M2 28.2009C2.00923 29.7429 3.28922 30.9925 4.87232 31H31.1277C32.7107 30.9925 33.9907 29.743 34 28.2009V15.0004H2V28.2009ZM24.5646 17.4005H27.8462C28.5262 17.4005 29.0769 17.9375 29.0769 18.6006C29.0769 19.2621 28.5262 19.8006 27.8462 19.8006H24.5646C23.8846 19.8006 23.3339 19.2621 23.3339 18.6006C23.3339 17.9375 23.8846 17.4005 24.5646 17.4005ZM24.5646 23.8013H27.8462V23.7998C28.5262 23.7998 29.0769 24.3383 29.0769 24.9998C29.0769 25.6628 28.5262 26.1998 27.8462 26.1998H24.5646C23.8846 26.1998 23.3339 25.6628 23.3339 24.9998C23.3339 24.3383 23.8846 23.7998 24.5646 23.7998V23.8013ZM16.36 17.4005H19.6416C20.32 17.4005 20.8723 17.9375 20.8723 18.6006C20.8723 19.2621 20.32 19.8006 19.6416 19.8006H16.3585C15.68 19.8006 15.1277 19.2621 15.1277 18.6006C15.1277 17.9375 15.68 17.4005 16.3585 17.4005H16.36ZM16.36 23.8013H19.6416V23.7998C20.32 23.7998 20.8723 24.3383 20.8723 24.9998C20.8723 25.6628 20.32 26.1998 19.6416 26.1998H16.3585C15.68 26.1998 15.1277 25.6628 15.1277 24.9998C15.1277 24.3383 15.68 23.7998 16.3585 23.7998L16.36 23.8013ZM8.15542 23.8013L11.4354 23.7998C12.1154 23.7998 12.6662 24.3383 12.6662 24.9998C12.6662 25.6628 12.1154 26.1998 11.4354 26.1998H8.15389C7.47387 26.1998 6.92312 25.6628 6.92312 24.9998C6.92312 24.3383 7.47387 23.7998 8.15389 23.7998L8.15542 23.8013ZM34 7.39968V12.6004H2V7.39968C2.00923 5.85614 3.28922 4.60809 4.87232 4.59907H8.56463V4.20004C8.56463 3.537 9.11538 3 9.7954 3C10.4739 3 11.0262 3.537 11.0262 4.20004V4.60057H16.7692V4.20004C16.7692 3.537 17.32 3 18 3C18.68 3 19.2308 3.537 19.2308 4.20004V4.60057H24.9738V4.20004C24.9738 3.537 25.5261 3 26.2046 3C26.8846 3 27.4354 3.537 27.4354 4.20004V4.60057L31.1277 4.59907C32.7107 4.60807 33.9907 5.8561 34 7.39968Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  Same Day Processing
                </div>
              </div>
            </Col>

            {/* Item 4 — label placeholder (update as needed) */}
            <Col>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_944_9584"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                    >
                      <rect width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_944_9584)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.4823 36.6515H29.2045V40H19.0326V36.6515H28.4823ZM29.6095 23.9995C29.6095 23.7756 29.5102 23.5688 29.3544 23.4171C29.1909 23.2596 28.967 23.159 28.7256 23.1515C28.6984 23.1515 28.749 23.1534 28.6964 23.1534C28.4453 23.1534 28.2175 23.252 28.052 23.4133C27.8865 23.5745 27.7834 23.7984 27.7834 24.0412V25.9592C27.7834 26.2647 27.5303 26.5132 27.2168 26.5132C26.9015 26.5132 26.6484 26.2646 26.6484 25.9592V22.552C26.6484 22.3073 26.5452 22.0853 26.3797 21.924C26.2143 21.7628 25.9865 21.6622 25.7353 21.6622C25.4842 21.6622 25.2564 21.7628 25.0909 21.924C24.9254 22.0853 24.8223 22.3072 24.8223 22.552V25.9592C24.8223 26.2647 24.5692 26.5132 24.2538 26.5132C23.9404 26.5132 23.6854 26.2646 23.6854 25.9592V22.5747C23.6854 22.5652 23.6854 22.5595 23.6873 22.5519H23.6854V21.2638C23.6854 21.021 23.5841 20.799 23.4186 20.6377C23.2532 20.4765 23.0254 20.3759 22.7742 20.3759C22.5231 20.3759 22.2953 20.4765 22.1298 20.6377C21.9644 20.799 21.8612 21.021 21.8612 21.2638H21.8592C21.8612 21.2847 21.8612 21.3075 21.8612 21.3264V25.9592C21.8612 26.2647 21.6081 26.5132 21.2927 26.5132C20.9793 26.5132 20.7243 26.2647 20.7243 25.9592V21.3264C20.7243 21.3056 20.7262 21.2828 20.7282 21.2638H20.7243V14.3907C20.7243 14.1459 20.623 13.924 20.4576 13.7627C20.2921 13.6015 20.0624 13.5009 19.8132 13.5009C19.562 13.5009 19.3342 13.6015 19.1688 13.7627C19.0033 13.924 18.9001 14.1459 18.9001 14.3907V27.1355C18.9001 27.2759 18.8456 27.4182 18.7346 27.5282C18.5107 27.7426 18.1525 27.7426 17.9286 27.5282L15.6295 25.2858C15.1778 24.8476 14.7145 24.7907 14.3524 24.931C14.2122 24.9842 14.0798 25.0695 13.9688 25.1758C13.8559 25.2782 13.7664 25.3996 13.7041 25.5305C13.5775 25.7904 13.5756 26.0826 13.7761 26.2875C15.1194 27.6421 15.8611 28.7082 16.5853 29.7498C17.3952 30.9108 18.1797 32.0453 19.8131 33.525C20.074 33.7603 20.2064 34.0448 20.2745 34.3484C20.3329 34.6083 20.3368 34.8568 20.3368 35.1016V35.5436H27.9217V35.1831C27.9217 34.8549 27.9742 34.5457 28.0833 34.2497C28.1884 33.9576 28.348 33.6844 28.5602 33.4283L29.2377 32.6087C29.3682 32.4512 29.4655 32.2862 29.5278 32.1117C29.5901 31.9409 29.6212 31.7531 29.6212 31.5463V24.4512C29.6193 24.3108 29.6193 24.1723 29.6232 24.0282C29.6232 23.9959 29.6212 24.0509 29.6212 24.0016L29.6095 23.9995ZM35.4246 14.3658C35.4246 16.0505 34.0132 17.424 32.2863 17.424C30.7522 17.424 29.4713 16.3426 29.2026 14.9217H24.0688C23.8858 16.2668 23.035 17.4183 21.8572 18.0463V14.3943C21.8572 13.8442 21.6275 13.3452 21.2576 12.9829C20.8858 12.6205 20.3738 12.3948 19.8092 12.3948C19.2446 12.3948 18.7326 12.6186 18.3588 12.9829C17.9889 13.3433 17.7592 13.8442 17.7592 14.3943V18.0463C17.2316 17.7655 16.7722 17.3804 16.4062 16.9194L12.6956 19.0062C12.7229 19.1296 12.7385 19.2567 12.7385 19.3857C12.7385 20.3798 11.9072 21.1898 10.8871 21.1898C9.86698 21.1898 9.03569 20.3797 9.03569 19.3857C9.03569 18.3916 9.86698 17.5815 10.8871 17.5815C11.364 17.5815 11.8001 17.7598 12.1291 18.0501L15.8378 15.9614C15.6275 15.47 15.5107 14.9293 15.5107 14.364C15.5107 14.178 15.5243 13.994 15.5477 13.8138L9.88262 12.9354C9.57502 13.6032 8.92284 14.0983 8.12074 14.1799C6.92348 14.3014 5.85077 13.4552 5.72618 12.2885C5.60158 11.1218 6.46986 10.0765 7.66712 9.95504C8.86243 9.83362 9.93515 10.6779 10.0617 11.8427L15.8494 12.74C16.1395 12.0685 16.6067 11.486 17.1907 11.0459L14.839 7.07708C14.51 7.1909 14.1556 7.25541 13.7877 7.25541C12.0589 7.25541 10.6494 5.8819 10.6494 4.20101C10.6494 2.51828 12.0589 1.14282 13.7877 1.14282C15.5165 1.14282 16.9259 2.51633 16.9259 4.20101C16.9259 5.12873 16.4957 5.96344 15.8201 6.52502L18.1719 10.4938C18.6761 10.287 19.2309 10.1751 19.8111 10.1751C20.7358 10.1751 21.5982 10.4654 22.2991 10.953L25.4782 7.79802V3.46496H34.6011V8.57028H26.2881L23.1285 11.7081C23.6249 12.2981 23.9637 13.0209 24.0727 13.812C24.0843 13.8101 24.098 13.8101 24.1096 13.8101H29.2066C29.4752 12.3892 30.7562 11.3078 32.2903 11.3078C34.0171 11.3078 35.4286 12.6832 35.4286 14.366L35.4246 14.3658ZM28.6147 5.1401C28.6147 5.44744 28.8678 5.69405 29.1831 5.69405H32.8412C33.1546 5.69405 33.4096 5.44743 33.4096 5.1401C33.4096 4.83466 33.1546 4.58615 32.8412 4.58615H29.1831C28.8678 4.58615 28.6147 4.83468 28.6147 5.1401ZM26.6659 5.1401C26.6659 5.44744 26.919 5.69405 27.2344 5.69405H27.8476C28.163 5.69405 28.4161 5.44743 28.4161 5.1401C28.4161 4.83466 28.163 4.58615 27.8476 4.58615H27.2344C26.919 4.58615 26.6659 4.83468 26.6659 5.1401ZM26.6659 6.89875C26.6659 7.20419 26.919 7.4527 27.2344 7.4527H32.8412C33.1546 7.4527 33.4096 7.20417 33.4096 6.89875C33.4096 6.59141 33.1546 6.3448 32.8412 6.3448H27.2344C26.919 6.3448 26.6659 6.59142 26.6659 6.89875Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  Fun & Interactive
                </div>
              </div>
            </Col>

            {/* Item 5 — label placeholder (update as needed) */}
            <Col>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_944_9622"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                    >
                      <rect width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_944_9622)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.003 11.2754C18.1483 11.2772 17.4142 11.8826 17.2492 12.722C17.0842 13.5614 17.5328 14.4007 18.3226 14.7275C19.1123 15.0544 20.0226 14.7758 20.4972 14.0628C20.9699 13.3515 20.8754 12.4026 20.2692 11.7991C19.9336 11.463 19.4776 11.2754 19.003 11.2754ZM20.2302 8.72199C20.4156 8.83898 20.6288 8.90212 20.8476 8.90769L21.9062 8.94111C21.971 8.94483 22.0267 8.98568 22.0489 9.04696L22.5458 10.2744H22.5439C22.6255 10.4787 22.7608 10.657 22.9351 10.7888L23.7675 11.435V11.4369C23.7934 11.4555 23.8138 11.4815 23.8268 11.5112C23.8361 11.5446 23.8361 11.578 23.8268 11.6096L23.5079 12.8928V12.8946C23.482 12.9986 23.469 13.1063 23.4708 13.214C23.4727 13.3236 23.4894 13.4332 23.5209 13.5371L23.8157 14.5511C23.8379 14.6161 23.8157 14.6866 23.7619 14.7293L22.7534 15.5817C22.6681 15.6504 22.594 15.7303 22.5309 15.8194C22.5198 15.8343 22.5105 15.851 22.5013 15.8677C22.4531 15.9438 22.4141 16.0237 22.3845 16.1091L22.0267 17.1026C22.0174 17.1323 21.997 17.1601 21.9711 17.1787C21.9451 17.1991 21.9136 17.2103 21.8802 17.2121L20.5621 17.3068C20.3434 17.3217 20.1339 17.396 19.9541 17.5185L19.0809 18.1128H19.0828C19.0271 18.1536 18.953 18.1536 18.8974 18.1128L17.7758 17.4127C17.6831 17.3551 17.5848 17.3087 17.481 17.2771C17.3772 17.2455 17.2678 17.2288 17.1603 17.2251L16.0998 17.1954C16.0349 17.1935 15.9775 17.1508 15.9571 17.0914L15.4584 15.8658C15.3768 15.6615 15.2415 15.4833 15.0672 15.3496L14.233 14.7015L14.2348 14.7033C14.2089 14.6848 14.1885 14.6588 14.1774 14.6272C14.1681 14.5956 14.1681 14.5622 14.1774 14.5288L14.4962 13.2456C14.5222 13.1397 14.5333 13.032 14.5314 12.9225V12.9169C14.5296 12.8111 14.5129 12.7034 14.4814 12.6012L14.1866 11.5873H14.1885C14.1792 11.5557 14.1792 11.5223 14.1885 11.4926C14.1978 11.461 14.2163 11.4332 14.2422 11.4127L15.2545 10.5548C15.425 10.4174 15.5529 10.2336 15.6215 10.0256L15.9793 9.03209C15.9905 9.00238 16.009 8.97453 16.035 8.95595C16.0609 8.93553 16.0924 8.92438 16.1258 8.92253L17.4457 8.82782H17.4439C17.5533 8.82039 17.6589 8.79811 17.7628 8.76282C17.8647 8.72754 17.963 8.6774 18.052 8.61612L18.9233 8.02374V8.02188C18.9511 8.00331 18.9826 7.99217 19.016 7.99031C19.0493 7.99217 19.0808 8.00146 19.1087 8.02003L20.2302 8.72199ZM20.601 18.3838L21.4074 21.407L21.882 20.5825V20.5844C21.9543 20.4599 22.0711 20.3708 22.2083 20.3337C22.3455 20.2984 22.492 20.317 22.6143 20.3894L23.4356 20.8648L22.6681 17.9976C22.6495 18.0125 22.631 18.0273 22.6125 18.0422C22.4215 18.187 22.1916 18.2724 21.9506 18.2873L20.6326 18.382C20.6177 18.382 20.6066 18.382 20.5992 18.3857L20.601 18.3838ZM15.3306 17.9976L14.565 20.8629L15.3881 20.3875V20.3894C15.6439 20.2427 15.9702 20.3299 16.1185 20.5862L16.5931 21.4089L17.3885 18.4395L17.2086 18.3281V18.33C17.1957 18.3207 17.1827 18.3151 17.1679 18.3095C17.1549 18.3058 17.14 18.304 17.1271 18.304C16.773 18.2891 16.4152 18.2854 16.0629 18.2705C15.8238 18.2631 15.5939 18.187 15.3974 18.0514C15.3733 18.0347 15.3492 18.018 15.3288 17.9994L15.3306 17.9976ZM18.3395 19.0338L17.2957 22.9372V22.9353C17.2383 23.1544 17.051 23.3123 16.8267 23.3327C16.6042 23.355 16.391 23.2343 16.2928 23.0319L15.4585 21.5853L13.9773 22.4413H13.9791C13.7919 22.549 13.5583 22.5323 13.3877 22.4005C13.2153 22.2686 13.1412 22.0477 13.1968 21.8378L14.5983 16.5957L14.4667 16.2689C14.463 16.254 14.4556 16.241 14.4463 16.228C14.437 16.2169 14.4278 16.2076 14.4166 16.1983L13.5842 15.552C13.1931 15.2531 13.0188 14.7498 13.1393 14.2726L13.4582 12.9894C13.4619 12.9745 13.4637 12.9597 13.4656 12.9448V12.9411C13.4637 12.9281 13.4619 12.9133 13.4563 12.9003L13.1616 11.8864H13.1634C13.0207 11.4147 13.1727 10.904 13.5527 10.5883L14.5649 9.73593C14.5742 9.72664 14.5853 9.7155 14.5928 9.7025C14.602 9.69136 14.6094 9.67836 14.6131 9.6635L14.971 8.67003C15.1322 8.20579 15.5568 7.88269 16.048 7.85108L17.368 7.75637C17.3828 7.75637 17.3977 7.75451 17.4125 7.74894C17.4255 7.74523 17.4384 7.7378 17.4514 7.72852L18.3227 7.13428C18.7269 6.85573 19.2571 6.84458 19.6724 7.10828L20.794 7.80839H20.7958C20.807 7.81582 20.8199 7.82324 20.8348 7.82881C20.8477 7.83253 20.8626 7.83439 20.8756 7.83439C21.2296 7.84924 21.5874 7.8511 21.9397 7.86781C22.4291 7.88267 22.8629 8.18722 23.0427 8.64403L23.5396 9.87149C23.5433 9.88634 23.5507 9.89934 23.56 9.91048C23.5674 9.92163 23.5785 9.93277 23.5897 9.9402L24.422 10.5883C24.8132 10.8873 24.9875 11.3905 24.867 11.8678L24.5481 13.1509C24.5444 13.1658 24.5407 13.1825 24.5407 13.1974C24.5425 13.2122 24.5444 13.2271 24.55 13.2401L24.8447 14.254H24.8429C24.9838 14.7257 24.828 15.2345 24.4499 15.5483L23.4376 16.4007H23.4395C23.4284 16.41 23.4172 16.4211 23.4098 16.4341L23.3987 16.449C23.395 16.4564 23.3913 16.4638 23.3894 16.4731L23.3802 16.4954L24.8095 21.8359C24.8651 22.0458 24.7891 22.2686 24.6167 22.4005C24.4443 22.5323 24.2107 22.5472 24.0235 22.4376L22.5459 21.5815L21.7024 23.043C21.6004 23.2398 21.3891 23.3549 21.1685 23.3308C20.9479 23.3067 20.7662 23.1488 20.7087 22.9353L19.6594 19.0133C19.2609 19.277 18.7436 19.2844 18.3376 19.0319L18.3395 19.0338ZM5.71429 33.0858V5.42953H32.2916V38.8571H11.4725V33.6221C11.4725 33.4809 11.4169 33.3435 11.315 33.2414C11.2149 33.1411 11.0777 33.0854 10.9349 33.0854L5.71429 33.0858ZM6.4744 34.161L10.4028 38.096V34.161H6.4744ZM28.3504 35.9437H14.3793C14.0882 35.9512 13.8583 36.1907 13.8583 36.4804C13.8583 36.772 14.0882 37.0097 14.3793 37.0189H28.3466C28.6376 37.0096 28.8675 36.7719 28.8675 36.4804C28.8675 36.1907 28.6377 35.9512 28.3466 35.9437H28.3504ZM33.3687 35.7153V4.89103C33.3687 4.74804 33.3113 4.61248 33.2112 4.51034C33.111 4.41006 32.9739 4.3525 32.8311 4.3525H8.84746V2.28564H35.4286V35.7132L33.3687 35.7153ZM28.3466 33.2678H14.3793C14.0826 33.2678 13.8416 33.5074 13.8416 33.8045C13.8416 34.1016 14.0826 34.343 14.3793 34.343H28.3466C28.6432 34.343 28.8842 34.1016 28.8842 33.8045C28.8842 33.5074 28.6432 33.2678 28.3466 33.2678ZM28.3466 30.5919L14.3793 30.59C14.0882 30.5993 13.8583 30.837 13.8583 31.1286C13.8583 31.4201 14.0882 31.6578 14.3793 31.6671H28.3466C28.6376 31.6578 28.8675 31.4201 28.8675 31.1286C28.8675 30.837 28.6377 30.5993 28.3466 30.59V30.5919ZM28.3466 27.916L9.25173 27.9141C8.95511 27.9141 8.71596 28.1555 8.71596 28.4526C8.71596 28.7498 8.95511 28.9912 9.25173 28.9912H28.3466C28.6432 28.9912 28.8842 28.7498 28.8842 28.4526C28.8842 28.1555 28.6432 27.9141 28.3466 27.9141V27.916ZM28.3466 25.2698H9.25173C8.96252 25.2772 8.73076 25.5167 8.73076 25.8064C8.73076 26.098 8.9625 26.3357 9.25173 26.345H28.3466C28.6376 26.3357 28.8675 26.098 28.8675 25.8064C28.8675 25.5167 28.6377 25.2772 28.3466 25.2698ZM16.9767 11.0394C17.9426 10.0719 19.4554 9.92336 20.5918 10.6848C21.7282 11.4443 22.1694 12.902 21.6467 14.1666C21.1239 15.4312 19.7817 16.1499 18.4413 15.8825C17.101 15.6151 16.1369 14.4377 16.1369 13.0691C16.1369 12.3077 16.4372 11.578 16.9767 11.0394Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  State Licensed
                </div>
              </div>
            </Col>

            {/* Item 6 — label placeholder (update as needed) */}
            <Col>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#004985",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_944_9629)">
                      <path
                        d="M37.8095 41.1428H22.8095C21.9255 41.1428 21.0776 40.7916 20.4525 40.1665C19.8274 39.5414 19.4762 38.6935 19.4762 37.8095V19.4762C19.4762 18.5921 19.8274 17.7443 20.4525 17.1191C21.0776 16.494 21.9255 16.1428 22.8095 16.1428H37.8095C38.6936 16.1428 39.5414 16.494 40.1665 17.1191C40.7917 17.7443 41.1428 18.5921 41.1428 19.4762V37.8095C41.1428 38.6935 40.7917 39.5414 40.1665 40.1665C39.5414 40.7916 38.6936 41.1428 37.8095 41.1428ZM22.8095 19.4762V36.1428H37.8095V19.4762H22.8095Z"
                        fill="white"
                      />
                      <path
                        d="M16.1429 31.1428H4.47619V4.47616H27.8095V12.8095H31.1429V4.47616C31.1429 3.5921 30.7917 2.74425 30.1665 2.11913C29.5414 1.49401 28.6936 1.14282 27.8095 1.14282H4.47619C3.59213 1.14282 2.74428 1.49401 2.11916 2.11913C1.49404 2.74425 1.14285 3.5921 1.14285 4.47616L1.14285 34.4762C1.14285 35.3602 1.49404 36.2081 2.11916 36.8332C2.74428 37.4583 3.59213 37.8095 4.47619 37.8095H16.1429V31.1428Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_944_9629">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className="mt-3"
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  Can be taken on any device
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What's IN it for you? */}
      {/* <section
        className="py-5"
        style={{
          position: "relative",
          backgroundImage: `url(${section5Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#072E60",
            opacity: 0.5,
          }}
        />

        <Container style={{ position: "relative", zIndex: 1 }}>
          <h1 className="text-center text-white fw-bold mb-4">
            WHAT&apos;S IN IT FOR YOU?
          </h1>
          <Container style={{ padding: "0 100px" }}>
            <Row className="g-4">
             
              <Col md={6}>
                <ul className="list-unstyled m-0">
               
                  <li className="d-flex align-item-center mb-3 p-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        padding: 20,
                      }}
                    >
                
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9827"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9827)">
                          <path
                            d="M4.82022 14.6995L7.31567 17.1949C7.37831 17.2589 7.44482 17.3189 7.51484 17.3746V17.3785C8.05201 17.8199 8.73423 18.0456 9.42869 18.0117C10.1231 17.9778 10.7801 17.6866 11.2717 17.1949L11.7716 16.6951C12.2086 16.2611 12.4877 15.6933 12.5643 15.0822L12.6346 14.5472L13.1579 14.4222C13.6454 14.3078 14.0915 14.0604 14.4467 13.7076L14.9231 13.2311C15.1961 12.958 15.4066 12.6289 15.5401 12.2665L15.7432 11.7315L16.4344 11.7666C16.7906 11.7676 17.1434 11.6981 17.4725 11.562C17.8016 11.426 18.1005 11.2261 18.3519 10.9739L18.8284 10.4974C19.336 9.9892 19.6211 9.30024 19.6211 8.58191C19.6211 7.86357 19.336 7.17462 18.8284 6.66638L15.3527 3.1868C14.8437 2.67913 14.1541 2.39404 13.4352 2.39404C12.7163 2.39404 12.0267 2.67913 11.5177 3.1868L11.0413 3.66324C11.0305 3.67832 11.0188 3.69267 11.0061 3.7062C10.9328 3.78313 10.8638 3.86396 10.7992 3.94833C10.7718 3.98738 10.7445 4.02253 10.7171 4.06158C10.6552 4.1516 10.5991 4.24552 10.5492 4.34276C10.5258 4.38571 10.5102 4.43258 10.4906 4.47554C10.3826 4.7152 10.3089 4.96895 10.2719 5.22925C10.068 5.17405 9.8583 5.1426 9.64711 5.13552L9.52995 5.12771C9.17383 5.12672 8.82103 5.19627 8.49193 5.33233C8.16282 5.4684 7.86392 5.66829 7.61247 5.92048L7.13603 6.39692C6.88354 6.64814 6.68345 6.947 6.54736 7.27616C6.41127 7.60532 6.3419 7.95822 6.34326 8.3144C6.34326 8.41203 6.35107 8.50966 6.35888 8.60729L6.38232 8.73616C6.42358 9.0029 6.50384 9.26212 6.62054 9.5055C6.39722 9.5649 6.18113 9.64872 5.97617 9.75544C5.87098 9.81321 5.76927 9.8771 5.67156 9.94679L5.63641 9.97022C5.52394 10.0529 5.41817 10.1443 5.32009 10.2436L4.82022 10.7435C4.56024 11.0031 4.35399 11.3114 4.21327 11.6508C4.07255 11.9902 4.00012 12.3541 4.00012 12.7215C4.00012 13.0889 4.07255 13.4527 4.21327 13.7921C4.35399 14.1315 4.56024 14.4399 4.82022 14.6995ZM12.1465 4.76843L12.6229 4.28808C12.8385 4.07301 13.1307 3.95223 13.4352 3.95223C13.7397 3.95223 14.0319 4.07301 14.2475 4.28808L17.7232 7.76766C17.8296 7.87405 17.9141 8.00037 17.9717 8.13941C18.0294 8.27845 18.059 8.42749 18.059 8.578C18.059 8.72851 18.0294 8.87755 17.9717 9.01659C17.9141 9.15564 17.8296 9.28196 17.7232 9.38834L17.2467 9.86478C17.0278 10.0735 16.7369 10.1899 16.4344 10.1899C16.132 10.1899 15.8411 10.0735 15.6221 9.86478L12.1465 6.38911C12.04 6.28272 11.9555 6.1564 11.8979 6.01736C11.8403 5.87832 11.8106 5.72928 11.8106 5.57877C11.8106 5.42826 11.8403 5.27922 11.8979 5.14018C11.9555 5.00114 12.04 4.87481 12.1465 4.76843ZM8.24122 7.50211L8.71766 7.02176C8.93328 6.80669 9.2254 6.68591 9.52995 6.68591C9.8345 6.68591 10.1266 6.80669 10.3422 7.02176L13.8179 10.5013C13.9244 10.6077 14.0089 10.734 14.0665 10.8731C14.1241 11.0121 14.1538 11.1612 14.1538 11.3117C14.1538 11.4622 14.1241 11.6112 14.0665 11.7503C14.0089 11.8893 13.9244 12.0156 13.8179 12.122L13.3415 12.5985C13.1225 12.8072 12.8317 12.9236 12.5292 12.9236C12.2267 12.9236 11.9358 12.8072 11.7169 12.5985L8.24122 9.12278C8.13475 9.0164 8.05028 8.89008 7.99266 8.75103C7.93503 8.61199 7.90537 8.46296 7.90537 8.31245C7.90537 8.16193 7.93503 8.0129 7.99266 7.87386C8.05028 7.73481 8.13475 7.60849 8.24122 7.50211ZM5.9254 11.8447L6.42527 11.3449C6.53948 11.229 6.67571 11.1372 6.82595 11.0748C6.97618 11.0125 7.13738 10.9808 7.30005 10.9817C7.46261 10.9815 7.62359 11.0136 7.77372 11.0759C7.92386 11.1382 8.06017 11.2296 8.17483 11.3449L10.6664 13.8403C10.7815 13.9551 10.8728 14.0914 10.9352 14.2415C10.9975 14.3916 11.0296 14.5526 11.0296 14.7151C11.0296 14.8776 10.9975 15.0386 10.9352 15.1887C10.8728 15.3388 10.7815 15.4751 10.6664 15.5899L10.1665 16.0898C9.93024 16.3136 9.61717 16.4383 9.29173 16.4383C8.96629 16.4383 8.65322 16.3136 8.41695 16.0898L5.9254 13.5943C5.81028 13.4796 5.71894 13.3432 5.65662 13.1931C5.59429 13.043 5.56221 12.8821 5.56221 12.7195C5.56221 12.557 5.59429 12.396 5.65662 12.2459C5.71894 12.0958 5.81028 11.9595 5.9254 11.8447Z"
                            fill="white"
                          />
                          <path
                            d="M45.7856 17.3746C45.8556 17.3188 45.9221 17.2589 45.9847 17.1949L48.4802 14.6995C48.7402 14.4398 48.9464 14.1315 49.0871 13.7921C49.2278 13.4527 49.3003 13.0889 49.3003 12.7215C49.3003 12.3541 49.2278 11.9902 49.0871 11.6508C48.9464 11.3114 48.7402 11.0031 48.4802 10.7435L47.9803 10.2436C47.8822 10.1443 47.7765 10.0529 47.664 9.97022C47.6523 9.96241 47.6366 9.9546 47.6249 9.94679C47.5291 9.87626 47.4287 9.81233 47.3242 9.75543C47.1193 9.64872 46.9032 9.5649 46.6799 9.5055C46.7966 9.26212 46.8768 9.0029 46.9181 8.73616L46.9415 8.60729C46.9493 8.50966 46.9571 8.41202 46.9571 8.31439C46.9585 7.95822 46.8891 7.60531 46.753 7.27615C46.6169 6.947 46.4169 6.64814 46.1644 6.39691L45.6879 5.92047C45.4365 5.66829 45.1376 5.46839 44.8085 5.33233C44.4794 5.19626 44.1266 5.12672 43.7704 5.12771L43.6533 5.13552C43.4421 5.1426 43.2324 5.17406 43.0284 5.22926C42.9915 4.96896 42.9178 4.7152 42.8098 4.47553C42.7902 4.43257 42.7746 4.38571 42.7512 4.34275C42.7013 4.24552 42.6452 4.1516 42.5832 4.06157C42.5559 4.02252 42.5286 3.98737 42.5012 3.94832C42.4377 3.8619 42.3685 3.77972 42.2943 3.70229C42.2816 3.69016 42.2698 3.67711 42.2591 3.66324L41.7827 3.1868C41.2744 2.67917 40.5855 2.39404 39.8671 2.39404C39.1488 2.39404 38.4599 2.67917 37.9516 3.1868L34.472 6.66247C33.9644 7.17148 33.6793 7.86104 33.6793 8.57995C33.6793 9.29886 33.9644 9.98842 34.472 10.4974L34.9485 10.9739C35.1999 11.2261 35.4988 11.4259 35.8279 11.562C36.157 11.6981 36.5098 11.7676 36.866 11.7666L37.5572 11.7315L37.7603 12.2665C37.8937 12.6289 38.1043 12.958 38.3773 13.2311L38.8537 13.7075C39.2089 14.0604 39.655 14.3078 40.1425 14.4222L40.6658 14.5472L40.7361 15.0822C40.8126 15.6933 41.0918 16.2611 41.5288 16.6951L42.0287 17.1949C42.5203 17.6866 43.1773 17.9778 43.8717 18.0117C44.5662 18.0456 45.2484 17.8199 45.7856 17.3785V17.3746ZM37.6782 9.86478C37.4593 10.0735 37.1684 10.1899 36.866 10.1899C36.5635 10.1899 36.2726 10.0735 36.0537 9.86478L35.5772 9.38834C35.4708 9.28195 35.3863 9.15563 35.3287 9.01659C35.271 8.87755 35.2414 8.72851 35.2414 8.578C35.2414 8.42749 35.271 8.27845 35.3287 8.13941C35.3863 8.00036 35.4708 7.87404 35.5772 7.76766L39.0529 4.28808C39.2685 4.07301 39.5606 3.95223 39.8652 3.95223C40.1697 3.95223 40.4619 4.07301 40.6775 4.28808L41.1539 4.76842C41.2604 4.87481 41.3449 5.00113 41.4025 5.14018C41.4601 5.27922 41.4898 5.42825 41.4898 5.57876C41.4898 5.72928 41.4601 5.87831 41.4025 6.01735C41.3449 6.1564 41.2604 6.28272 41.1539 6.3891L37.6782 9.86478ZM41.5835 12.5985C41.3646 12.8071 41.0737 12.9236 40.7712 12.9236C40.4687 12.9236 40.1779 12.8071 39.9589 12.5985L39.4825 12.122C39.376 12.0156 39.2915 11.8893 39.2339 11.7503C39.1763 11.6112 39.1466 11.4622 39.1466 11.3117C39.1466 11.1612 39.1763 11.0121 39.2339 10.8731C39.2915 10.734 39.376 10.6077 39.4825 10.5013L42.9582 7.02176C43.1738 6.80668 43.4659 6.6859 43.7704 6.6859C44.075 6.6859 44.3671 6.80668 44.5827 7.02176L45.0592 7.5021C45.1656 7.60849 45.2501 7.73481 45.3077 7.87385C45.3654 8.01289 45.395 8.16193 45.395 8.31244C45.395 8.46295 45.3654 8.61199 45.3077 8.75103C45.2501 8.89007 45.1656 9.0164 45.0592 9.12278L41.5835 12.5985ZM43.1339 16.0898L42.634 15.5899C42.5189 15.4751 42.4276 15.3388 42.3652 15.1887C42.3029 15.0386 42.2708 14.8776 42.2708 14.7151C42.2708 14.5526 42.3029 14.3916 42.3652 14.2415C42.4276 14.0914 42.5189 13.9551 42.634 13.8403L45.1256 11.3449C45.2402 11.2296 45.3765 11.1382 45.5267 11.0759C45.6768 11.0135 45.8378 10.9815 46.0003 10.9817C46.163 10.9808 46.3242 11.0125 46.4744 11.0748C46.6247 11.1372 46.7609 11.229 46.8751 11.3449L47.375 11.8447C47.4901 11.9595 47.5815 12.0958 47.6438 12.2459C47.7061 12.396 47.7382 12.557 47.7382 12.7195C47.7382 12.8821 47.7061 13.043 47.6438 13.1931C47.5815 13.3432 47.4901 13.4796 47.375 13.5943L44.8834 16.0898C44.6472 16.3136 44.3341 16.4383 44.0087 16.4383C43.6832 16.4383 43.3702 16.3136 43.1339 16.0898Z"
                            fill="white"
                          />
                          <path
                            d="M9.85768 51.9913H33.2892C33.4812 51.9923 33.6665 51.9212 33.8086 51.7921C35.6128 50.1871 44.7785 42.2867 45.5165 41.6463C45.6515 41.5285 45.7401 41.3665 45.7665 41.1894C45.779 41.1342 45.7855 41.078 45.786 41.0214V19.195C44.9806 19.5573 44.0841 19.6657 43.2155 19.506C42.347 19.3462 41.5477 18.9258 40.924 18.3007L40.4241 17.8008C39.8681 17.2482 39.4738 16.5541 39.2838 15.7935C38.7085 15.5815 38.1862 15.247 37.7529 14.8133L37.2726 14.3329C36.9722 14.0348 36.7194 13.6923 36.5227 13.3176C35.512 13.2369 34.5633 12.7979 33.8477 12.0796L33.3673 11.5993C32.5671 10.7984 32.1176 9.71262 32.1176 8.58051C32.1176 7.4484 32.5671 6.3626 33.3673 5.56175L35.1364 3.79267L31.153 2.71482C30.8932 2.64702 30.6202 2.64724 30.3605 2.71546C30.1008 2.78368 29.8629 2.91759 29.6699 3.10432C29.4769 3.29105 29.3352 3.52431 29.2585 3.78165C29.1817 4.039 29.1725 4.31177 29.2316 4.57372C29.247 4.64627 29.2734 4.71606 29.3097 4.7807L30.3915 6.73723L25.3225 14.1884C25.2619 14.2786 25.2206 14.3803 25.2012 14.4871C25.1817 14.594 25.1844 14.7037 25.2092 14.8094L25.8692 17.5509L23.776 13.9502L27.1267 8.45944C27.193 8.3505 27.2316 8.22697 27.2391 8.09965C27.2466 7.97234 27.2228 7.84513 27.1697 7.72916L24.9944 2.9218C24.841 2.58055 24.5701 2.30573 24.2311 2.14734C23.8921 1.98895 23.5075 1.95751 23.1473 2.05874L17.9728 3.60131L19.9332 5.56175C20.7335 6.36337 21.1829 7.44977 21.1829 8.58246C21.1829 9.71515 20.7335 10.8015 19.9332 11.6032L19.4529 12.0796C18.7372 12.7979 17.7885 13.2369 16.7778 13.3176C16.5812 13.6923 16.3283 14.0348 16.028 14.3329L15.5476 14.8133C15.1143 15.247 14.592 15.5815 14.0168 15.7935C13.8268 16.5541 13.4324 17.2482 12.8764 17.8008L12.3766 18.3007C11.7528 18.9258 10.9535 19.3462 10.085 19.506C9.21648 19.6657 8.3199 19.5573 7.51453 19.195V49.6364C7.51325 50.2593 7.75933 50.8573 8.1987 51.2988C8.63807 51.7404 9.23477 51.9895 9.85768 51.9913ZM42.8922 41.8376C42.6462 42.0524 34.7302 48.8319 34.0702 49.3943V42.6226C34.0679 42.4171 34.1471 42.219 34.2906 42.0718C34.4341 41.9246 34.6301 41.8404 34.8357 41.8376H42.8922ZM14.544 24.264H38.7566C38.9637 24.264 39.1624 24.3463 39.3088 24.4928C39.4553 24.6392 39.5376 24.8379 39.5376 25.045C39.5376 25.2522 39.4553 25.4509 39.3088 25.5973C39.1624 25.7438 38.9637 25.8261 38.7566 25.8261H14.544C14.3368 25.8261 14.1382 25.7438 13.9917 25.5973C13.8452 25.4509 13.7629 25.2522 13.7629 25.045C13.7629 24.8379 13.8452 24.6392 13.9917 24.4928C14.1382 24.3463 14.3368 24.264 14.544 24.264ZM14.544 27.3882H38.7566C38.9637 27.3882 39.1624 27.4705 39.3088 27.617C39.4553 27.7634 39.5376 27.9621 39.5376 28.1693C39.5376 28.3764 39.4553 28.5751 39.3088 28.7215C39.1624 28.868 38.9637 28.9503 38.7566 28.9503H14.544C14.3368 28.9503 14.1382 28.868 13.9917 28.7215C13.8452 28.5751 13.7629 28.3764 13.7629 28.1693C13.7629 27.9621 13.8452 27.7634 13.9917 27.617C14.1382 27.4705 14.3368 27.3882 14.544 27.3882ZM14.544 30.5124H38.7566C38.9637 30.5124 39.1624 30.5947 39.3088 30.7412C39.4553 30.8876 39.5376 31.0863 39.5376 31.2935C39.5376 31.5006 39.4553 31.6993 39.3088 31.8457C39.1624 31.9922 38.9637 32.0745 38.7566 32.0745H14.544C14.3368 32.0745 14.1382 31.9922 13.9917 31.8457C13.8452 31.6993 13.7629 31.5006 13.7629 31.2935C13.7629 31.0863 13.8452 30.8876 13.9917 30.7412C14.1382 30.5947 14.3368 30.5124 14.544 30.5124ZM14.544 33.6366H38.7566C38.9637 33.6366 39.1624 33.7189 39.3088 33.8654C39.4553 34.0118 39.5376 34.2105 39.5376 34.4177C39.5376 34.6248 39.4553 34.8235 39.3088 34.9699C39.1624 35.1164 38.9637 35.1987 38.7566 35.1987H14.544C14.3368 35.1987 14.1382 35.1164 13.9917 34.9699C13.8452 34.8235 13.7629 34.6248 13.7629 34.4177C13.7629 34.2105 13.8452 34.0118 13.9917 33.8654C14.1382 33.7189 14.3368 33.6366 14.544 33.6366ZM13.5902 39.4891C13.7323 39.3853 13.8624 39.266 13.978 39.1333C14.041 38.9537 14.0826 38.7674 14.102 38.578C14.184 38.0464 14.2965 37.3184 14.928 36.9465C15.5542 36.5793 16.2281 36.8401 16.7209 37.0304C16.8984 37.1109 17.0855 37.1684 17.2777 37.2017C17.4698 37.1684 17.6569 37.1109 17.8345 37.0304C18.3272 36.8398 19.0018 36.5789 19.6269 36.9462C20.2592 37.3184 20.3717 38.0464 20.4537 38.5784C20.4728 38.7675 20.5143 38.9537 20.5773 39.1329C20.6928 39.2658 20.8229 39.3853 20.9651 39.4891C21.3866 39.8301 21.964 40.2973 21.964 41.0566C21.964 41.8159 21.3866 42.2831 20.9651 42.624C20.823 42.7278 20.693 42.8472 20.5773 42.9798C20.5143 43.1594 20.4727 43.3458 20.4534 43.5351C20.3715 44.0655 20.259 44.7909 19.6315 45.1636L21.08 47.6986C21.1827 47.8784 21.2098 48.0917 21.1553 48.2915C21.1008 48.4914 20.9692 48.6614 20.7893 48.7641C20.6095 48.8669 20.3962 48.894 20.1964 48.8395C19.9966 48.785 19.8266 48.6534 19.7238 48.4735L17.7729 45.0592C17.6151 44.9883 17.4485 44.9386 17.2777 44.9115C17.1068 44.9386 16.9403 44.9883 16.7824 45.0592L14.8315 48.4735C14.7286 48.6531 14.5587 48.7844 14.359 48.8387C14.1593 48.8931 13.9462 48.8659 13.7665 48.7632C13.5868 48.6605 13.4552 48.4907 13.4006 48.2911C13.3461 48.0915 13.3729 47.8784 13.4754 47.6986L14.9238 45.1637C14.296 44.7905 14.1834 44.0653 14.1016 43.5348C14.0825 43.3457 14.0411 43.1595 13.978 42.9802C13.8625 42.8474 13.7324 42.7279 13.5902 42.624C13.1688 42.2831 12.5914 41.8159 12.5914 41.0566C12.5914 40.2973 13.1688 39.8301 13.5902 39.4891Z"
                            fill="white"
                          />
                          <path
                            d="M14.5721 41.4095C14.8737 41.6256 15.1324 41.896 15.3348 42.207C15.5036 42.5483 15.6085 42.9175 15.6445 43.2965C15.6662 43.4569 15.6968 43.6159 15.7361 43.7729C15.8558 43.742 16.0297 43.6745 16.1559 43.6257C16.5092 43.4649 16.8893 43.3711 17.2768 43.3492C17.6643 43.3711 18.0444 43.4649 18.3976 43.6257C18.5239 43.6745 18.6974 43.742 18.8171 43.7729C18.8566 43.616 18.8872 43.4569 18.9087 43.2966C18.945 42.9174 19.0501 42.5481 19.2187 42.2066C19.4213 41.8959 19.68 41.6256 19.9815 41.4095C20.1222 41.3024 20.2541 41.1843 20.3762 41.0564C20.2541 40.9284 20.1221 40.8104 19.9815 40.7032C19.6799 40.4871 19.4212 40.2167 19.2187 39.9058C19.05 39.5645 18.945 39.1952 18.909 38.8162C18.8873 38.6559 18.8568 38.4968 18.8175 38.3399C18.6978 38.3708 18.5238 38.4383 18.3976 38.4871C18.0443 38.6479 17.6643 38.7416 17.2768 38.7636C16.8893 38.7416 16.5092 38.6478 16.1559 38.4871C16.0297 38.4383 15.8562 38.3708 15.7364 38.3398C15.697 38.4968 15.6664 38.6558 15.6449 38.8162C15.6085 39.1953 15.5035 39.5646 15.3348 39.9061C15.1323 40.2169 14.8736 40.4872 14.5721 40.7032C14.4314 40.8103 14.2994 40.9284 14.1774 41.0564C14.2994 41.1843 14.4314 41.3024 14.5721 41.4095ZM17.2768 40.2753C17.4313 40.2753 17.5823 40.3211 17.7107 40.407C17.8392 40.4928 17.9393 40.6148 17.9984 40.7575C18.0575 40.9002 18.073 41.0572 18.0428 41.2087C18.0127 41.3603 17.9383 41.4994 17.8291 41.6087C17.7198 41.7179 17.5807 41.7923 17.4292 41.8224C17.2776 41.8526 17.1206 41.8371 16.9779 41.778C16.8352 41.7189 16.7132 41.6187 16.6274 41.4903C16.5415 41.3619 16.4957 41.2109 16.4957 41.0564C16.4957 40.8492 16.578 40.6506 16.7245 40.5041C16.871 40.3576 17.0696 40.2753 17.2768 40.2753Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Mask a moving violation
                    </div>
                  </li>

          
                  <li className="d-flex align-items-start mb-3 p-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        padding: 20,
                      }}
                    >
                  
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9836"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9836)">
                          <path
                            d="M51.084 18.2589C47.7048 15.5329 32.5992 5.87094 28.4456 2.50761C27.6068 1.83015 26.4132 1.83015 25.5744 2.50761L2.91948 18.2749C2.54042 18.5813 2.23396 18.9765 2.09682 19.4443C1.87906 20.1943 2.0323 20.9605 2.50814 21.5493C2.89526 22.0251 3.43563 22.3235 4.04858 22.388C4.65347 22.4526 5.25026 22.2751 5.72611 21.888L9.1457 19.7669H44.8741L48.2372 21.8476C48.6001 22.146 49.0437 22.3557 49.5115 22.3961C50.3583 22.4686 51.1326 22.1057 51.6084 21.4283C52.3101 20.4282 52.0359 19.0329 51.0842 18.2667L51.084 18.2589Z"
                            fill="white"
                          />
                          <path
                            d="M37.3488 37.776H37.1795L34.3648 31.1386H34.7761C35.3165 31.1386 35.752 30.7031 35.752 30.1628C35.752 29.6224 35.3164 29.1869 34.7761 29.1869H27.9369L28.1385 26.7916C28.1869 26.1948 27.7917 25.606 27.1949 25.5173C26.4449 25.4044 25.8239 26.0093 25.8803 26.7271L26.082 29.1869H19.2428C18.7024 29.1869 18.2669 29.6224 18.2669 30.1628C18.2669 30.7031 18.7024 31.1386 19.2428 31.1386H19.6541L16.8394 37.776H16.67C16.3071 37.776 16.0168 38.0663 16.0168 38.4292V39.26C16.0168 39.6229 16.3071 39.9132 16.67 39.9132H17.1217C17.3636 40.9778 18.3073 41.7359 19.4041 41.7359H22.3317C23.4286 41.7359 24.3722 40.9778 24.6142 39.9132H25.0658C25.4287 39.9132 25.7191 39.6229 25.7191 39.26V38.4292C25.7191 38.0663 25.4287 37.776 25.0658 37.776H24.8964L22.0818 31.1386H31.9374L29.1227 37.776H28.9533C28.5904 37.776 28.3001 38.0663 28.3001 38.4292V39.26C28.3001 39.6229 28.5904 39.9132 28.9533 39.9132H29.405C29.6469 40.9778 30.5906 41.7359 31.6874 41.7359H34.615C35.7119 41.7359 36.6555 40.9778 36.8975 39.9132H37.3491C37.712 39.9132 38.0024 39.6229 38.0024 39.26V38.4292C38.0024 38.0663 37.7118 37.776 37.3488 37.776ZM18.2022 37.776L20.8637 31.614L23.5251 37.776H18.2022ZM30.4854 37.776L33.1468 31.614L35.8083 37.776H30.4854Z"
                            fill="white"
                          />
                          <path
                            d="M49.1717 48.0832H47.8088C47.3652 48.0832 47.0022 47.7203 47.0022 47.2767V46.8654C47.0022 46.4218 46.6393 46.0589 46.1957 46.0589H42.8407V26.0415H44.1956C45.1634 26.0415 46.0506 25.3479 46.1393 24.3882C46.2361 23.3075 45.3892 22.3961 44.3246 22.3961H36.4614C35.4936 22.3961 34.6064 23.0897 34.5177 24.0494C34.421 25.1302 35.2678 26.0415 36.3324 26.0415H37.8163V33.2921L38.6793 35.3164C39.5665 35.9374 40.1391 36.9698 40.1391 38.1231V38.9054C40.1391 40.4135 39.1632 41.6878 37.8163 42.1556V46.0591H16.186V42.1556C14.8391 41.6959 13.8632 40.4135 13.8632 38.9054V38.1231C13.8632 36.9617 14.4439 35.9374 15.323 35.3164L16.186 33.2921V26.0415H17.5409C18.5087 26.0415 19.3959 25.3479 19.4846 24.3882C19.5813 23.3075 18.7345 22.3961 17.6699 22.3961H9.80669C8.83888 22.3961 7.9517 23.0897 7.86302 24.0494C7.76624 25.1302 8.61306 26.0415 9.67765 26.0415H11.1616V46.0671H7.80655C7.36297 46.0671 7.00004 46.4301 7.00004 46.8737V47.285C7.00004 47.7286 6.63712 48.0915 6.19354 48.0915H4.83055C4.38697 48.0915 4.02405 48.4544 4.02405 48.898V50.4949C4.02405 50.9385 4.38697 51.3014 4.83055 51.3014H49.1721C49.6157 51.3014 49.9787 50.9385 49.9787 50.4949V48.898C49.9787 48.4544 49.6157 48.0915 49.1721 48.0915L49.1717 48.0832Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Satisfy a court order to attend traffic school
                    </div>
                  </li>

                
                  <li className="d-flex align-items-start mb-3 p-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        padding: 20,
                      }}
                    >
                      
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.6347 31.1036C43.015 29.8642 41.7692 29.0934 40.3831 29.0934H29.4322C28.0461 29.0934 26.8003 29.8642 26.1806 31.1036L22.9289 37.6094C22.6785 38.1124 22.5446 38.6738 22.5446 39.2352V42.9122C22.5446 43.8601 23.1535 44.659 23.9999 44.9591V45.8206C23.9999 47.0233 24.9779 48.0035 26.1827 48.0035H27.638C28.8406 48.0035 29.8209 47.0254 29.8209 45.8206V45.093H39.2754V45.8206C39.2754 47.0233 40.2535 48.0035 41.4583 48.0035H42.9136C44.1162 48.0035 45.0964 47.0254 45.0964 45.8206V45.093C46.2991 45.093 47.2793 44.1149 47.2793 42.9101V39.233C47.2793 38.6717 47.1454 38.1103 46.895 37.6072L43.6412 31.1014L43.6347 31.1036ZM28.3609 45.8204C28.3609 46.222 28.0349 46.548 27.6333 46.548H26.178C25.7764 46.548 25.4504 46.222 25.4504 45.8204V45.0927H28.3588V45.8204H28.3609ZM43.6347 45.8204C43.6347 46.222 43.3087 46.548 42.9071 46.548H41.4518C41.0502 46.548 40.7242 46.222 40.7242 45.8204V45.0927H43.6326V45.8204H43.6347ZM45.8154 42.912C45.8154 43.3136 45.4894 43.6396 45.0878 43.6396H24.7227C24.3211 43.6396 23.9951 43.3136 23.9951 42.912V39.235C23.9951 38.8981 24.075 38.5591 24.2261 38.2591L27.4778 31.7532C27.8492 31.0105 28.5984 30.5463 29.4296 30.5463H40.3805C41.2117 30.5463 41.9588 31.0083 42.3323 31.7532L45.5861 38.2591C45.7372 38.5613 45.8171 38.8981 45.8171 39.235V42.912H45.8154Z"
                          fill="white"
                        />
                        <path
                          d="M37.0909 34.913H27.6363C27.2347 34.913 26.9087 35.239 26.9087 35.6406C26.9087 36.0422 27.2347 36.3682 27.6363 36.3682H37.0909C37.4925 36.3682 37.8185 36.0422 37.8185 35.6406C37.8185 35.239 37.4925 34.913 37.0909 34.913Z"
                          fill="white"
                        />
                        <path
                          d="M39.2731 36.3659H41.456C41.8576 36.3659 42.1836 36.0399 42.1836 35.6383C42.1836 35.2367 41.8576 34.9106 41.456 34.9106H39.2731C38.8715 34.9106 38.5455 35.2367 38.5455 35.6383C38.5455 36.0399 38.8715 36.3659 39.2731 36.3659Z"
                          fill="white"
                        />
                        <path
                          d="M28.6887 41.2082C28.3173 40.4654 27.5681 40.0012 26.7368 40.0012H25.4543C25.0527 40.0012 24.7267 40.3273 24.7267 40.7289C24.7267 41.1305 25.0527 41.4565 25.4543 41.4565H26.7368C27.0154 41.4565 27.2637 41.6098 27.3867 41.8581L27.7128 42.508C27.8402 42.7628 28.0971 42.9096 28.3648 42.9096C28.4749 42.9096 28.5851 42.8837 28.6887 42.8319C29.0471 42.6527 29.1939 42.2144 29.0147 41.856L28.6887 41.206L28.6887 41.2082Z"
                          fill="white"
                        />
                        <path
                          d="M44.3624 40.0037H43.0799C42.2486 40.0037 41.4994 40.4657 41.1281 41.2106L40.8021 41.8606C40.6228 42.219 40.7675 42.6573 41.1281 42.8365C41.2317 42.8883 41.344 42.9142 41.452 42.9142C41.7197 42.9142 41.9745 42.7674 42.104 42.5126L42.43 41.8627C42.5531 41.6144 42.8036 41.4611 43.08 41.4611H44.3625C44.7641 41.4611 45.0901 41.1351 45.0901 40.7335C45.0901 40.3319 44.7641 40.0058 44.3625 40.0058L44.3624 40.0037Z"
                          fill="white"
                        />
                        <path
                          d="M39.2718 41.4568H38.5442C38.1426 41.4568 37.8166 41.7828 37.8166 42.1844C37.8166 42.586 38.1426 42.9121 38.5442 42.9121H39.2718C39.6734 42.9121 39.9995 42.586 39.9995 42.1844C39.9995 41.7828 39.6734 41.4568 39.2718 41.4568Z"
                          fill="white"
                        />
                        <path
                          d="M31.2702 41.4568H30.5426C30.141 41.4568 29.815 41.7828 29.815 42.1844C29.815 42.586 30.141 42.9121 30.5426 42.9121H31.2702C31.6718 42.9121 31.9979 42.586 31.9979 42.1844C31.9979 41.7828 31.6718 41.4568 31.2702 41.4568Z"
                          fill="white"
                        />
                        <path
                          d="M47.2724 33.4574C46.8708 33.4574 46.5447 33.7834 46.5447 34.185V35.6403C46.5447 36.0419 46.8708 36.3679 47.2724 36.3679C47.674 36.3679 48 36.0419 48 35.6403V34.185C48 33.7834 47.674 33.4574 47.2724 33.4574Z"
                          fill="white"
                        />
                        <path
                          d="M23.271 35.638V34.1827C23.271 33.7811 22.945 33.4551 22.5434 33.4551C22.1418 33.4551 21.8157 33.7811 21.8157 34.1827V35.638C21.8157 36.0396 22.1418 36.3656 22.5434 36.3656C22.945 36.3656 23.271 36.0396 23.271 35.638Z"
                          fill="white"
                        />
                        <path
                          d="M37.8175 7.27517H11.636C10.0296 7.27517 8.72766 8.57716 8.72766 10.1835V38.5482H5.0917C4.69226 38.5482 4.36407 38.8764 4.36407 39.2758V45.0946C4.36407 46.701 5.66605 48.0029 7.27241 48.0029H23.2736C22.9541 47.5819 22.7274 47.0875 22.6194 46.5477H7.27208C6.47106 46.5477 5.81684 45.8935 5.81684 45.0924V40.0011H21.0906V39.2303C21.0906 38.6409 21.2008 38.045 21.4037 37.4858C20.7776 37.0993 20.363 36.4234 20.363 35.6375V34.1822C20.363 32.9817 21.3454 31.9993 22.5459 31.9993C23.0468 31.9993 23.5067 32.1742 23.8759 32.4657L24.8799 30.4512C25.7522 28.7131 27.4903 27.6357 29.4335 27.6357H36.3643V10.1811C36.3643 9.38005 37.0185 8.72582 37.8195 8.72582C38.6205 8.72582 39.2748 9.38005 39.2748 10.1811V13.8171C39.2748 14.2165 39.603 14.5447 40.0024 14.5447C40.4018 14.5447 40.73 14.2165 40.73 13.8171V10.1811C40.73 8.5747 39.428 7.27271 37.8217 7.27271L37.8175 7.27517ZM16.7273 12.3664H28.3629C28.7624 12.3664 29.0906 12.6946 29.0906 13.0941C29.0906 13.4935 28.7624 13.8217 28.3629 13.8217H16.7273C16.3278 13.8217 15.9996 13.4935 15.9996 13.0941C15.9996 12.6946 16.3278 12.3664 16.7273 12.3664ZM16.7273 36.3655H13.8189C13.4195 36.3655 13.0913 36.0373 13.0913 35.6379C13.0913 35.2384 13.4195 34.9102 13.8189 34.9102H16.7273C17.1267 34.9102 17.4549 35.2384 17.4549 35.6379C17.4549 36.0373 17.1267 36.3655 16.7273 36.3655ZM16.7273 34.1848H13.8189C13.4195 34.1848 13.0913 33.8566 13.0913 33.4571C13.0913 33.0577 13.4195 32.7295 13.8189 32.7295H16.7273C17.1267 32.7295 17.4549 33.0577 17.4549 33.4571C17.4549 33.8566 17.1267 34.1848 16.7273 34.1848ZM16.7273 32.0019H13.8189C13.4195 32.0019 13.0913 31.6737 13.0913 31.2742C13.0913 30.8748 13.4195 30.5466 13.8189 30.5466H16.7273C17.1267 30.5466 17.4549 30.8748 17.4549 31.2742C17.4549 31.6737 17.1267 32.0019 16.7273 32.0019ZM23.2717 26.9106H13.8171C13.4177 26.9106 13.0895 26.5824 13.0895 26.183C13.0895 25.7835 13.4177 25.4553 13.8171 25.4553H23.2717C23.6711 25.4553 23.9993 25.7835 23.9993 26.183C23.9993 26.5824 23.6711 26.9106 23.2717 26.9106ZM31.2715 24.0022H13.8171C13.4177 24.0022 13.0895 23.674 13.0895 23.2746C13.0895 22.8751 13.4177 22.547 13.8171 22.547H31.2715C31.6709 22.547 31.9991 22.8751 31.9991 23.2746C31.9991 23.674 31.6709 24.0022 31.2715 24.0022ZM31.2715 21.0938H13.8171C13.4177 21.0938 13.0895 20.7656 13.0895 20.3662C13.0895 19.9668 13.4177 19.6386 13.8171 19.6386H31.2715C31.6709 19.6386 31.9991 19.9668 31.9991 20.3662C31.9991 20.7656 31.6709 21.0938 31.2715 21.0938ZM31.2715 18.1833H16.7256C16.3262 18.1833 15.998 17.8551 15.998 17.4557C15.998 17.0562 16.3262 16.728 16.7256 16.728H31.2715C31.6709 16.728 31.9991 17.0562 31.9991 17.4557C31.9991 17.8551 31.6709 18.1833 31.2715 18.1833Z"
                          fill="white"
                        />
                        <path
                          d="M15.999 3.99359V5.33875C15.999 5.49852 15.999 5.6583 15.9925 5.81808H11.6354C9.22795 5.81808 7.27182 7.7743 7.27182 10.1817V18.5746C2.77651 15.7245 0 10.6831 0 5.33692V3.99176C0 3.01799 0.626141 2.18025 1.55673 1.89735L7.78995 0.0275292C7.92814 -0.00917639 8.0728 -0.00917639 8.21098 0.0275292L14.4442 1.89735C15.3748 2.1802 16.0009 3.01793 16.0009 3.99176L15.999 3.99359Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Lower your insurance premiums
                    </div>
                  </li>
                </ul>
              </Col>

             
              <Col md={6}>
                <ul className="list-unstyled m-0">
                  
                  <li className="d-flex align-items-start mb-3 p-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        padding: 20,
                      }}
                    >
                      
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9860"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9860)">
                          <path
                            d="M51.8361 38.1694L39.0376 16.2052L37.9206 16.8645C37.7229 16.9795 37.4705 16.9148 37.3562 16.7158C37.2418 16.5168 37.3062 16.2627 37.5038 16.1477L38.6208 15.4884L37.6944 13.899C37.611 13.7552 37.5086 13.6377 37.3895 13.5514C37.2704 13.4627 37.1275 13.4004 36.9656 13.3644L30.8474 11.9788C30.9998 12.0842 31.1308 12.2065 31.2451 12.3455C31.4047 12.5421 31.5237 12.7699 31.6023 13.0288L33.2837 18.6529C33.4647 18.5906 33.6719 18.6625 33.7743 18.8351C33.8887 19.0341 33.8243 19.2882 33.6267 19.4033L33.5266 19.4632L34.5912 23.0209C34.6722 23.2918 34.696 23.5603 34.6651 23.824C34.6341 24.0877 34.546 24.3418 34.4031 24.5887L33.4266 26.2668C33.4385 26.3747 33.4171 26.4874 33.3599 26.5881C33.3004 26.6888 33.2146 26.7631 33.1146 26.8038L27.4845 36.4674L34.4599 48.4373C34.6171 48.7082 34.872 48.8903 35.153 48.9623C35.434 49.0366 35.7436 49.003 36.0128 48.8448L51.4409 39.7348C51.7101 39.5766 51.8911 39.3201 51.9625 39.0372C52.0363 38.7543 52.003 38.4427 51.8458 38.1718L51.8361 38.1694ZM34.4887 18.4084C34.3743 18.2095 34.4387 17.9553 34.6363 17.8403L36.0701 16.994C36.2677 16.8789 36.5202 16.9437 36.6345 17.1427C36.7488 17.3416 36.6845 17.5957 36.4868 17.7108L35.0531 18.5571C34.8554 18.6721 34.603 18.6074 34.4887 18.4084ZM29.7969 34.4104C29.654 34.1611 29.7374 33.8422 29.9851 33.6984L40.5711 27.5471C40.8188 27.4033 41.1355 27.4872 41.2785 27.7365C41.4214 27.9858 41.338 28.3047 41.0903 28.4485L30.5043 34.6022C30.2566 34.7461 29.9398 34.6622 29.7969 34.4129V34.4104ZM31.4807 37.3015C31.3378 37.0522 31.4212 36.7334 31.6688 36.5895L42.2549 30.4358C42.5026 30.292 42.8193 30.3759 42.9622 30.6252C43.1052 30.8745 43.0218 31.1934 42.7741 31.3372L32.1881 37.4885C31.9404 37.6323 31.6236 37.5484 31.4807 37.2991V37.3015ZM44.4604 34.2306L33.8743 40.3843C33.6267 40.5281 33.3099 40.4442 33.167 40.1949C33.0241 39.9456 33.1074 39.6267 33.3551 39.4829L43.9412 33.3292C44.1888 33.1853 44.5056 33.2692 44.6485 33.5186C44.7914 33.7679 44.7081 34.0867 44.4604 34.2306ZM20.1466 35.2638C20.2538 35.6762 20.1847 36.0933 19.987 36.4337C19.7894 36.7741 19.4607 37.0378 19.0535 37.1457C18.6438 37.2536 18.2294 37.1841 17.8913 36.9851C17.5531 36.7861 17.2911 36.4553 17.1839 36.0454C17.0767 35.633 17.1458 35.2159 17.3435 34.8755C17.5412 34.5351 17.8698 34.2714 18.277 34.1635C18.6867 34.0556 19.1011 34.1251 19.4392 34.3241C19.7774 34.5231 20.0394 34.8539 20.1466 35.2638ZM15.1071 28.0238C15.0143 27.6235 15.0857 27.2207 15.2762 26.8923C15.4692 26.5615 15.7835 26.3025 16.1765 26.1899C16.2003 26.1851 16.2265 26.1779 16.248 26.1707C16.6457 26.0772 17.0458 26.1491 17.3721 26.3409C17.7103 26.5399 17.9723 26.8707 18.0795 27.2806C18.1866 27.693 18.1176 28.1101 17.9199 28.4505C17.7222 28.7909 17.3936 29.0546 16.9863 29.1625C16.5767 29.2704 16.1623 29.2009 15.8241 29.0019C15.4955 28.8077 15.2383 28.4913 15.1264 28.0957C15.1216 28.0717 15.1143 28.0454 15.1071 28.0238ZM31.4023 26.0365C31.157 25.8902 31.0736 25.5738 31.2189 25.3244C31.3642 25.0775 31.6786 24.9936 31.9263 25.1398L32.8122 25.6625L33.6839 24.1641C33.7672 24.0227 33.8173 23.8741 33.8363 23.723C33.8554 23.572 33.8387 23.4162 33.7911 23.2555L30.8022 13.2612C30.7569 13.1078 30.6879 12.9759 30.5974 12.8657C30.5069 12.7554 30.3925 12.6619 30.252 12.5852L27.8776 11.3002L27.0417 11.1108C27.025 11.106 27.0083 11.1036 26.9916 11.1012C26.975 11.1036 26.9583 11.1084 26.9416 11.1108L26.07 11.3074C26.058 11.3122 26.0438 11.3146 26.0318 11.317L25.0506 11.5399C24.9792 11.1276 24.9411 10.6889 24.9411 10.2382C24.9411 7.84327 26.0151 5.81992 27.287 5.81992C28.5326 5.81992 29.6257 7.94153 29.6257 10.3628C29.6257 10.5906 29.809 10.7728 30.0329 10.7728C30.2592 10.7728 30.4402 10.5882 30.4402 10.3628C30.4402 7.40453 29.0255 5 27.2845 5C25.5127 5 24.1242 7.30143 24.1242 10.2382C24.1242 13.1749 25.5126 15.4763 27.2845 15.4763C27.5108 15.4763 27.6918 15.2917 27.6918 15.0664C27.6918 14.8387 27.5084 14.6565 27.2845 14.6565C26.7606 14.6565 26.27 14.3088 25.8746 13.7359C25.9151 13.7071 25.9461 13.6688 25.989 13.6448C26.4605 13.3667 26.9987 13.3068 27.4893 13.4338C27.9799 13.5633 28.4205 13.8797 28.6992 14.3544C28.9755 14.8291 29.035 15.3733 28.9088 15.8647C28.7802 16.3585 28.4658 16.8044 27.9943 17.0825C27.5227 17.3606 26.9845 17.4206 26.4939 17.2935C26.0033 17.164 25.5603 16.8476 25.284 16.3729C25.0077 15.8983 24.9482 15.3565 25.0744 14.8626C25.0816 14.8363 25.0887 14.8075 25.0982 14.7811C24.9387 14.5893 24.7886 14.3712 24.6529 14.1338C24.2885 13.4961 24.0194 12.6979 23.8813 11.8084L17.0271 13.3619C16.8652 13.3978 16.7223 13.4625 16.6032 13.5488C16.4841 13.6375 16.3817 13.7526 16.2984 13.8965L15.4243 15.3972L16.5413 16.0564C16.7866 16.2027 16.8699 16.5191 16.7247 16.7685C16.5794 17.0154 16.2626 17.0993 16.0173 16.953L14.9003 16.2938L2.15419 38.1696C1.997 38.4405 1.96366 38.7522 2.03749 39.0351C2.11132 39.318 2.28994 39.5721 2.55906 39.7327L17.9872 48.8427C18.2564 49.0009 18.566 49.0344 18.847 48.9601C19.128 48.8858 19.3805 48.706 19.54 48.4351L26.635 36.259C26.6374 36.2542 26.6398 36.2518 26.6421 36.247L32.2865 26.5596L31.4006 26.037L31.4023 26.0365ZM20.1353 18.7799C20.2805 18.533 20.5973 18.4491 20.8426 18.5953L22.0858 19.3289C22.3311 19.4751 22.4145 19.7916 22.2692 20.0409C22.1239 20.2878 21.8072 20.3718 21.5618 20.2255L20.3186 19.4919C20.0733 19.3457 19.99 19.0293 20.1353 18.7799ZM17.2702 17.0874C17.4155 16.8405 17.7299 16.7566 17.9776 16.9028L19.4113 17.7491C19.6566 17.8953 19.74 18.2118 19.5947 18.4611C19.4494 18.708 19.135 18.7919 18.8873 18.6457L17.4536 17.7994C17.2083 17.6532 17.1249 17.3368 17.2702 17.0874ZM14.3861 26.3649C14.7195 25.7944 15.2673 25.3533 15.9532 25.1711C16.6391 24.9913 17.3297 25.1087 17.8965 25.442C18.4634 25.7776 18.9015 26.329 19.0802 27.0194C19.2588 27.7098 19.1421 28.405 18.8111 28.9756C18.48 29.5462 17.9299 29.9872 17.244 30.1671C16.5581 30.3469 15.8674 30.2294 15.3006 29.8962C14.7338 29.5605 14.2956 29.0092 14.1146 28.3187C13.9359 27.6283 14.0526 26.9331 14.3837 26.3625L14.3861 26.3649ZM20.878 36.9588C20.5446 37.5294 19.9969 37.9705 19.311 38.1503C18.6251 38.3301 17.9344 38.2126 17.3676 37.8794C16.8007 37.5438 16.3626 36.9924 16.1839 36.302C16.0053 35.6139 16.122 34.9163 16.453 34.3458C16.7841 33.7752 17.3342 33.3341 18.0201 33.1543C18.706 32.9745 19.3967 33.092 19.9635 33.4252C20.5303 33.7608 20.9685 34.3122 21.1472 35.0026C21.3258 35.6931 21.2091 36.3883 20.878 36.9588ZM24.0408 30.5198L11.4824 33.8137C11.2062 33.8856 10.9251 33.7178 10.8537 33.4397C10.7823 33.1616 10.949 32.8787 11.2252 32.8068L23.7836 29.5129C24.0599 29.441 24.3409 29.6088 24.4148 29.8869C24.4862 30.165 24.3195 30.4479 24.0432 30.5198L24.0408 30.5198ZM24.9458 21.6209C24.8005 21.8678 24.4862 21.9517 24.2385 21.8055L22.9952 21.0719C22.7499 20.9257 22.6666 20.6093 22.8119 20.3599C22.9571 20.113 23.2715 20.0291 23.5192 20.1753L24.7624 20.9089C25.0077 21.0551 25.0911 21.3716 24.9458 21.6209ZM27.8109 23.3134C27.6656 23.5603 27.3488 23.6442 27.1035 23.498L25.6698 22.6518C25.4245 22.5055 25.3411 22.1891 25.4864 21.9397C25.6317 21.6928 25.946 21.6089 26.1937 21.7551L27.6275 22.6014C27.8728 22.7476 27.9561 23.0641 27.8109 23.3134ZM30.6759 25.0035C30.5306 25.2504 30.2163 25.3344 29.9686 25.1881L28.5348 24.3419C28.2895 24.1956 28.2062 23.8792 28.3514 23.6298C28.4967 23.3829 28.8135 23.299 29.0588 23.4452L30.4925 24.2915C30.7378 24.4377 30.8212 24.7542 30.6759 25.0035Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Qualify for a safe driver discount
                    </div>
                  </li>

                  
                  <li className="d-flex align-items-start mb-3 p-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        padding: 20,
                      }}
                    >
                      
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9513"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9513)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.7414 29.0497H25.943V51.9995H15.7414V29.0497ZM42.8757 10.2073V13.1226C42.8757 14.4404 43.9427 15.5074 45.2606 15.5074C46.5784 15.5074 47.6455 14.4404 47.6455 13.1226V4.38481C47.6455 3.06699 46.5784 2 45.2606 2H36.2369C34.919 2 33.852 3.06699 33.852 4.38481C33.852 5.70264 34.919 6.76963 36.2369 6.76963H39.586L30.2128 16.3174L20.0275 12.7319C19.1332 12.4194 18.1772 12.6744 17.5522 13.3055L2.69208 28.2601C1.76692 29.1914 1.76897 30.6984 2.7003 31.6235C3.63162 32.5507 5.13658 32.5466 6.06379 31.6132L19.8733 17.7176L29.9986 21.2825C30.856 21.6094 31.8613 21.4244 32.5459 20.7295L42.8749 10.2096L42.8757 10.2073ZM2.71292 39.8822H12.9145V51.9995H2.71292V39.8822ZM52 22.0351V52H41.7984V22.0351H52ZM28.7699 35.0223H38.9715V52H28.7699V35.0223Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      May prevent or remove driver record points, depending on
                      state regulations
                    </div>
                  </li>

                  <li className="d-flex align-items-start mb-3 p-3">
                    <div
                      className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        padding: 20,
                      }}
                    >
                      
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9519"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9519)">
                          <path
                            d="M9.08295 27.1969V28.8694C9.08295 29.0722 9.235 29.2749 9.48842 29.2749H20.8417C21.0444 29.2749 21.2471 29.1229 21.2471 28.8694V27.1969C21.2471 25.1695 19.6252 23.5476 17.5979 23.5476H12.7829C10.7048 23.5476 9.08295 25.1695 9.08295 27.1969Z"
                            fill="white"
                          />
                          <path
                            d="M15.1654 22.3312C17.1809 22.3312 18.8147 20.6974 18.8147 18.682C18.8147 16.6665 17.1809 15.0327 15.1654 15.0327C13.15 15.0327 11.5162 16.6665 11.5162 18.682C11.5162 20.6974 13.15 22.3312 15.1654 22.3312Z"
                            fill="white"
                          />
                          <path
                            d="M35.0332 15.5394C35.0332 15.286 34.8305 15.0833 34.5771 15.0833H24.2375C23.9841 15.0833 23.7813 15.286 23.7813 15.5394V17.364C23.7813 17.6175 23.9841 17.8202 24.2375 17.8202H34.5771C34.8305 17.8202 35.0332 17.6175 35.0332 17.364V15.5394Z"
                            fill="white"
                          />
                          <path
                            d="M35.0332 23.0407V21.216C35.0332 20.9626 34.8305 20.7599 34.5771 20.7599H24.2375C23.9841 20.7599 23.7813 20.9626 23.7813 21.216V23.0407C23.7813 23.2941 23.9841 23.4968 24.2375 23.4968H34.5771C34.8305 23.4968 35.0332 23.2941 35.0332 23.0407Z"
                            fill="white"
                          />
                          <path
                            d="M23.7813 26.9433V28.768C23.7813 29.0214 23.9841 29.2241 24.2375 29.2241H28.2922L28.5456 28.4132C28.7484 27.7036 29.1032 27.0447 29.5593 26.4872H24.2375C23.9841 26.4872 23.7813 26.6392 23.7813 26.9433Z"
                            fill="white"
                          />
                          <path
                            d="M24.6431 33.5322C24.6431 33.1774 24.6938 32.8733 24.7951 32.5185H5.68723V11.738H38.4799V23.9529H41.2168V10.3696C41.2168 9.60931 40.6086 9.0011 39.8483 9.0011H4.36945C3.60919 9.0011 3.00098 9.60931 3.00098 10.3696V33.8363C3.00098 34.5966 3.60919 35.2048 4.36945 35.2048H24.8458C24.7445 34.9007 24.6938 34.5459 24.6938 34.1404V33.5322H24.6431Z"
                            fill="white"
                          />
                          <path
                            d="M49.8834 32.2653H48.3122L47.2986 29.1229C46.7917 27.501 45.2712 26.4366 43.5986 26.4366H34.6275C32.9043 26.4366 31.4344 27.501 30.9276 29.1229L29.9139 32.2653H28.3427C27.6838 32.2653 27.1263 32.8228 27.1263 33.4817V34.1913C27.1263 34.8502 27.6838 35.4077 28.3427 35.4077H28.7989C28.5454 36.5228 28.3934 37.6885 28.3934 38.8543V44.7843C28.3934 45.4432 28.9509 46.0007 29.6098 46.0007H31.6879C32.3467 46.0007 32.9043 45.4432 32.9043 44.7843V42.909H45.2712V44.7843C45.2712 45.4432 45.8287 46.0007 46.4876 46.0007H48.5657C49.2246 46.0007 49.7821 45.4432 49.7821 44.7843V38.9049C49.7821 37.7392 49.63 36.5735 49.3766 35.4584H49.8328C50.4917 35.4584 51.0492 34.9009 51.0492 34.242V33.5324C51.0999 32.8228 50.5423 32.2653 49.8834 32.2653ZM33.5125 29.9339C33.6645 29.427 34.1207 29.1229 34.6275 29.1229H43.5986C44.1055 29.1229 44.5616 29.427 44.7137 29.9339L45.8794 33.5831H32.3467L33.5125 29.9339ZM34.6782 39.5638H32.1947C31.7892 39.5638 31.4344 39.209 31.4344 38.8036V37.6378C31.4344 37.1817 31.8399 36.8269 32.2961 36.8776L34.6275 37.2324C34.9316 37.283 35.1851 37.5365 35.2357 37.8406L35.3878 38.6515C35.4892 39.1077 35.1344 39.5638 34.6782 39.5638ZM46.7917 38.8036C46.7917 39.209 46.4369 39.5638 46.0315 39.5638H43.5479C43.0918 39.5638 42.6863 39.1077 42.7877 38.6515L42.9397 37.8406C42.9904 37.5365 43.2438 37.283 43.5479 37.2324L45.8794 36.8776C46.3356 36.8269 46.741 37.1817 46.741 37.6378V38.8036H46.7917Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Meet an employer requirement for fleet driver training
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section> */}

      <section
        className="py-5"
        style={{
          position: "relative",
          backgroundImage: `url(${section5Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#072E60",
            opacity: 0.5,
          }}
        />

        <Container style={{ position: "relative", zIndex: 1 }}>
          <h1 className="text-center text-white fw-bold mb-4">
            WHAT&apos;S IN IT FOR YOU?
          </h1>

          {/* Responsive inner padding: tight on mobile, roomy on md+, remove on lg+ */}
          <Container className="px-3 px-md-5 px-lg-0">
            <Row className="g-3 g-md-4">
              {/* Column 1 */}
              <Col sm={12} md={6}>
                <ul className="list-unstyled m-0">
                  {/* Item 1 */}
                  <li className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        background: "#E68300",
                        borderRadius: 8,
                        width: 72,    // fixed square keeps icon size consistent
                        height: 72,
                      }}
                    >
                      {/* SVG */}
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9827"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9827)">
                          <path
                            d="M4.82022 14.6995L7.31567 17.1949C7.37831 17.2589 7.44482 17.3189 7.51484 17.3746V17.3785C8.05201 17.8199 8.73423 18.0456 9.42869 18.0117C10.1231 17.9778 10.7801 17.6866 11.2717 17.1949L11.7716 16.6951C12.2086 16.2611 12.4877 15.6933 12.5643 15.0822L12.6346 14.5472L13.1579 14.4222C13.6454 14.3078 14.0915 14.0604 14.4467 13.7076L14.9231 13.2311C15.1961 12.958 15.4066 12.6289 15.5401 12.2665L15.7432 11.7315L16.4344 11.7666C16.7906 11.7676 17.1434 11.6981 17.4725 11.562C17.8016 11.426 18.1005 11.2261 18.3519 10.9739L18.8284 10.4974C19.336 9.9892 19.6211 9.30024 19.6211 8.58191C19.6211 7.86357 19.336 7.17462 18.8284 6.66638L15.3527 3.1868C14.8437 2.67913 14.1541 2.39404 13.4352 2.39404C12.7163 2.39404 12.0267 2.67913 11.5177 3.1868L11.0413 3.66324C11.0305 3.67832 11.0188 3.69267 11.0061 3.7062C10.9328 3.78313 10.8638 3.86396 10.7992 3.94833C10.7718 3.98738 10.7445 4.02253 10.7171 4.06158C10.6552 4.1516 10.5991 4.24552 10.5492 4.34276C10.5258 4.38571 10.5102 4.43258 10.4906 4.47554C10.3826 4.7152 10.3089 4.96895 10.2719 5.22925C10.068 5.17405 9.8583 5.1426 9.64711 5.13552L9.52995 5.12771C9.17383 5.12672 8.82103 5.19627 8.49193 5.33233C8.16282 5.4684 7.86392 5.66829 7.61247 5.92048L7.13603 6.39692C6.88354 6.64814 6.68345 6.947 6.54736 7.27616C6.41127 7.60532 6.3419 7.95822 6.34326 8.3144C6.34326 8.41203 6.35107 8.50966 6.35888 8.60729L6.38232 8.73616C6.42358 9.0029 6.50384 9.26212 6.62054 9.5055C6.39722 9.5649 6.18113 9.64872 5.97617 9.75544C5.87098 9.81321 5.76927 9.8771 5.67156 9.94679L5.63641 9.97022C5.52394 10.0529 5.41817 10.1443 5.32009 10.2436L4.82022 10.7435C4.56024 11.0031 4.35399 11.3114 4.21327 11.6508C4.07255 11.9902 4.00012 12.3541 4.00012 12.7215C4.00012 13.0889 4.07255 13.4527 4.21327 13.7921C4.35399 14.1315 4.56024 14.4399 4.82022 14.6995ZM12.1465 4.76843L12.6229 4.28808C12.8385 4.07301 13.1307 3.95223 13.4352 3.95223C13.7397 3.95223 14.0319 4.07301 14.2475 4.28808L17.7232 7.76766C17.8296 7.87405 17.9141 8.00037 17.9717 8.13941C18.0294 8.27845 18.059 8.42749 18.059 8.578C18.059 8.72851 18.0294 8.87755 17.9717 9.01659C17.9141 9.15564 17.8296 9.28196 17.7232 9.38834L17.2467 9.86478C17.0278 10.0735 16.7369 10.1899 16.4344 10.1899C16.132 10.1899 15.8411 10.0735 15.6221 9.86478L12.1465 6.38911C12.04 6.28272 11.9555 6.1564 11.8979 6.01736C11.8403 5.87832 11.8106 5.72928 11.8106 5.57877C11.8106 5.42826 11.8403 5.27922 11.8979 5.14018C11.9555 5.00114 12.04 4.87481 12.1465 4.76843ZM8.24122 7.50211L8.71766 7.02176C8.93328 6.80669 9.2254 6.68591 9.52995 6.68591C9.8345 6.68591 10.1266 6.80669 10.3422 7.02176L13.8179 10.5013C13.9244 10.6077 14.0089 10.734 14.0665 10.8731C14.1241 11.0121 14.1538 11.1612 14.1538 11.3117C14.1538 11.4622 14.1241 11.6112 14.0665 11.7503C14.0089 11.8893 13.9244 12.0156 13.8179 12.122L13.3415 12.5985C13.1225 12.8072 12.8317 12.9236 12.5292 12.9236C12.2267 12.9236 11.9358 12.8072 11.7169 12.5985L8.24122 9.12278C8.13475 9.0164 8.05028 8.89008 7.99266 8.75103C7.93503 8.61199 7.90537 8.46296 7.90537 8.31245C7.90537 8.16193 7.93503 8.0129 7.99266 7.87386C8.05028 7.73481 8.13475 7.60849 8.24122 7.50211ZM5.9254 11.8447L6.42527 11.3449C6.53948 11.229 6.67571 11.1372 6.82595 11.0748C6.97618 11.0125 7.13738 10.9808 7.30005 10.9817C7.46261 10.9815 7.62359 11.0136 7.77372 11.0759C7.92386 11.1382 8.06017 11.2296 8.17483 11.3449L10.6664 13.8403C10.7815 13.9551 10.8728 14.0914 10.9352 14.2415C10.9975 14.3916 11.0296 14.5526 11.0296 14.7151C11.0296 14.8776 10.9975 15.0386 10.9352 15.1887C10.8728 15.3388 10.7815 15.4751 10.6664 15.5899L10.1665 16.0898C9.93024 16.3136 9.61717 16.4383 9.29173 16.4383C8.96629 16.4383 8.65322 16.3136 8.41695 16.0898L5.9254 13.5943C5.81028 13.4796 5.71894 13.3432 5.65662 13.1931C5.59429 13.043 5.56221 12.8821 5.56221 12.7195C5.56221 12.557 5.59429 12.396 5.65662 12.2459C5.71894 12.0958 5.81028 11.9595 5.9254 11.8447Z"
                            fill="white"
                          />
                          <path
                            d="M45.7856 17.3746C45.8556 17.3188 45.9221 17.2589 45.9847 17.1949L48.4802 14.6995C48.7402 14.4398 48.9464 14.1315 49.0871 13.7921C49.2278 13.4527 49.3003 13.0889 49.3003 12.7215C49.3003 12.3541 49.2278 11.9902 49.0871 11.6508C48.9464 11.3114 48.7402 11.0031 48.4802 10.7435L47.9803 10.2436C47.8822 10.1443 47.7765 10.0529 47.664 9.97022C47.6523 9.96241 47.6366 9.9546 47.6249 9.94679C47.5291 9.87626 47.4287 9.81233 47.3242 9.75543C47.1193 9.64872 46.9032 9.5649 46.6799 9.5055C46.7966 9.26212 46.8768 9.0029 46.9181 8.73616L46.9415 8.60729C46.9493 8.50966 46.9571 8.41202 46.9571 8.31439C46.9585 7.95822 46.8891 7.60531 46.753 7.27615C46.6169 6.947 46.4169 6.64814 46.1644 6.39691L45.6879 5.92047C45.4365 5.66829 45.1376 5.46839 44.8085 5.33233C44.4794 5.19626 44.1266 5.12672 43.7704 5.12771L43.6533 5.13552C43.4421 5.1426 43.2324 5.17406 43.0284 5.22926C42.9915 4.96896 42.9178 4.7152 42.8098 4.47553C42.7902 4.43257 42.7746 4.38571 42.7512 4.34275C42.7013 4.24552 42.6452 4.1516 42.5832 4.06157C42.5559 4.02252 42.5286 3.98737 42.5012 3.94832C42.4377 3.8619 42.3685 3.77972 42.2943 3.70229C42.2816 3.69016 42.2698 3.67711 42.2591 3.66324L41.7827 3.1868C41.2744 2.67917 40.5855 2.39404 39.8671 2.39404C39.1488 2.39404 38.4599 2.67917 37.9516 3.1868L34.472 6.66247C33.9644 7.17148 33.6793 7.86104 33.6793 8.57995C33.6793 9.29886 33.9644 9.98842 34.472 10.4974L34.9485 10.9739C35.1999 11.2261 35.4988 11.4259 35.8279 11.562C36.157 11.6981 36.5098 11.7676 36.866 11.7666L37.5572 11.7315L37.7603 12.2665C37.8937 12.6289 38.1043 12.958 38.3773 13.2311L38.8537 13.7075C39.2089 14.0604 39.655 14.3078 40.1425 14.4222L40.6658 14.5472L40.7361 15.0822C40.8126 15.6933 41.0918 16.2611 41.5288 16.6951L42.0287 17.1949C42.5203 17.6866 43.1773 17.9778 43.8717 18.0117C44.5662 18.0456 45.2484 17.8199 45.7856 17.3785V17.3746ZM37.6782 9.86478C37.4593 10.0735 37.1684 10.1899 36.866 10.1899C36.5635 10.1899 36.2726 10.0735 36.0537 9.86478L35.5772 9.38834C35.4708 9.28195 35.3863 9.15563 35.3287 9.01659C35.271 8.87755 35.2414 8.72851 35.2414 8.578C35.2414 8.42749 35.271 8.27845 35.3287 8.13941C35.3863 8.00036 35.4708 7.87404 35.5772 7.76766L39.0529 4.28808C39.2685 4.07301 39.5606 3.95223 39.8652 3.95223C40.1697 3.95223 40.4619 4.07301 40.6775 4.28808L41.1539 4.76842C41.2604 4.87481 41.3449 5.00113 41.4025 5.14018C41.4601 5.27922 41.4898 5.42825 41.4898 5.57876C41.4898 5.72928 41.4601 5.87831 41.4025 6.01735C41.3449 6.1564 41.2604 6.28272 41.1539 6.3891L37.6782 9.86478ZM41.5835 12.5985C41.3646 12.8071 41.0737 12.9236 40.7712 12.9236C40.4687 12.9236 40.1779 12.8071 39.9589 12.5985L39.4825 12.122C39.376 12.0156 39.2915 11.8893 39.2339 11.7503C39.1763 11.6112 39.1466 11.4622 39.1466 11.3117C39.1466 11.1612 39.1763 11.0121 39.2339 10.8731C39.2915 10.734 39.376 10.6077 39.4825 10.5013L42.9582 7.02176C43.1738 6.80668 43.4659 6.6859 43.7704 6.6859C44.075 6.6859 44.3671 6.80668 44.5827 7.02176L45.0592 7.5021C45.1656 7.60849 45.2501 7.73481 45.3077 7.87385C45.3654 8.01289 45.395 8.16193 45.395 8.31244C45.395 8.46295 45.3654 8.61199 45.3077 8.75103C45.2501 8.89007 45.1656 9.0164 45.0592 9.12278L41.5835 12.5985ZM43.1339 16.0898L42.634 15.5899C42.5189 15.4751 42.4276 15.3388 42.3652 15.1887C42.3029 15.0386 42.2708 14.8776 42.2708 14.7151C42.2708 14.5526 42.3029 14.3916 42.3652 14.2415C42.4276 14.0914 42.5189 13.9551 42.634 13.8403L45.1256 11.3449C45.2402 11.2296 45.3765 11.1382 45.5267 11.0759C45.6768 11.0135 45.8378 10.9815 46.0003 10.9817C46.163 10.9808 46.3242 11.0125 46.4744 11.0748C46.6247 11.1372 46.7609 11.229 46.8751 11.3449L47.375 11.8447C47.4901 11.9595 47.5815 12.0958 47.6438 12.2459C47.7061 12.396 47.7382 12.557 47.7382 12.7195C47.7382 12.8821 47.7061 13.043 47.6438 13.1931C47.5815 13.3432 47.4901 13.4796 47.375 13.5943L44.8834 16.0898C44.6472 16.3136 44.3341 16.4383 44.0087 16.4383C43.6832 16.4383 43.3702 16.3136 43.1339 16.0898Z"
                            fill="white"
                          />
                          <path
                            d="M9.85768 51.9913H33.2892C33.4812 51.9923 33.6665 51.9212 33.8086 51.7921C35.6128 50.1871 44.7785 42.2867 45.5165 41.6463C45.6515 41.5285 45.7401 41.3665 45.7665 41.1894C45.779 41.1342 45.7855 41.078 45.786 41.0214V19.195C44.9806 19.5573 44.0841 19.6657 43.2155 19.506C42.347 19.3462 41.5477 18.9258 40.924 18.3007L40.4241 17.8008C39.8681 17.2482 39.4738 16.5541 39.2838 15.7935C38.7085 15.5815 38.1862 15.247 37.7529 14.8133L37.2726 14.3329C36.9722 14.0348 36.7194 13.6923 36.5227 13.3176C35.512 13.2369 34.5633 12.7979 33.8477 12.0796L33.3673 11.5993C32.5671 10.7984 32.1176 9.71262 32.1176 8.58051C32.1176 7.4484 32.5671 6.3626 33.3673 5.56175L35.1364 3.79267L31.153 2.71482C30.8932 2.64702 30.6202 2.64724 30.3605 2.71546C30.1008 2.78368 29.8629 2.91759 29.6699 3.10432C29.4769 3.29105 29.3352 3.52431 29.2585 3.78165C29.1817 4.039 29.1725 4.31177 29.2316 4.57372C29.247 4.64627 29.2734 4.71606 29.3097 4.7807L30.3915 6.73723L25.3225 14.1884C25.2619 14.2786 25.2206 14.3803 25.2012 14.4871C25.1817 14.594 25.1844 14.7037 25.2092 14.8094L25.8692 17.5509L23.776 13.9502L27.1267 8.45944C27.193 8.3505 27.2316 8.22697 27.2391 8.09965C27.2466 7.97234 27.2228 7.84513 27.1697 7.72916L24.9944 2.9218C24.841 2.58055 24.5701 2.30573 24.2311 2.14734C23.8921 1.98895 23.5075 1.95751 23.1473 2.05874L17.9728 3.60131L19.9332 5.56175C20.7335 6.36337 21.1829 7.44977 21.1829 8.58246C21.1829 9.71515 20.7335 10.8015 19.9332 11.6032L19.4529 12.0796C18.7372 12.7979 17.7885 13.2369 16.7778 13.3176C16.5812 13.6923 16.3283 14.0348 16.028 14.3329L15.5476 14.8133C15.1143 15.247 14.592 15.5815 14.0168 15.7935C13.8268 16.5541 13.4324 17.2482 12.8764 17.8008L12.3766 18.3007C11.7528 18.9258 10.9535 19.3462 10.085 19.506C9.21648 19.6657 8.3199 19.5573 7.51453 19.195V49.6364C7.51325 50.2593 7.75933 50.8573 8.1987 51.2988C8.63807 51.7404 9.23477 51.9895 9.85768 51.9913ZM42.8922 41.8376C42.6462 42.0524 34.7302 48.8319 34.0702 49.3943V42.6226C34.0679 42.4171 34.1471 42.219 34.2906 42.0718C34.4341 41.9246 34.6301 41.8404 34.8357 41.8376H42.8922ZM14.544 24.264H38.7566C38.9637 24.264 39.1624 24.3463 39.3088 24.4928C39.4553 24.6392 39.5376 24.8379 39.5376 25.045C39.5376 25.2522 39.4553 25.4509 39.3088 25.5973C39.1624 25.7438 38.9637 25.8261 38.7566 25.8261H14.544C14.3368 25.8261 14.1382 25.7438 13.9917 25.5973C13.8452 25.4509 13.7629 25.2522 13.7629 25.045C13.7629 24.8379 13.8452 24.6392 13.9917 24.4928C14.1382 24.3463 14.3368 24.264 14.544 24.264ZM14.544 27.3882H38.7566C38.9637 27.3882 39.1624 27.4705 39.3088 27.617C39.4553 27.7634 39.5376 27.9621 39.5376 28.1693C39.5376 28.3764 39.4553 28.5751 39.3088 28.7215C39.1624 28.868 38.9637 28.9503 38.7566 28.9503H14.544C14.3368 28.9503 14.1382 28.868 13.9917 28.7215C13.8452 28.5751 13.7629 28.3764 13.7629 28.1693C13.7629 27.9621 13.8452 27.7634 13.9917 27.617C14.1382 27.4705 14.3368 27.3882 14.544 27.3882ZM14.544 30.5124H38.7566C38.9637 30.5124 39.1624 30.5947 39.3088 30.7412C39.4553 30.8876 39.5376 31.0863 39.5376 31.2935C39.5376 31.5006 39.4553 31.6993 39.3088 31.8457C39.1624 31.9922 38.9637 32.0745 38.7566 32.0745H14.544C14.3368 32.0745 14.1382 31.9922 13.9917 31.8457C13.8452 31.6993 13.7629 31.5006 13.7629 31.2935C13.7629 31.0863 13.8452 30.8876 13.9917 30.7412C14.1382 30.5947 14.3368 30.5124 14.544 30.5124ZM14.544 33.6366H38.7566C38.9637 33.6366 39.1624 33.7189 39.3088 33.8654C39.4553 34.0118 39.5376 34.2105 39.5376 34.4177C39.5376 34.6248 39.4553 34.8235 39.3088 34.9699C39.1624 35.1164 38.9637 35.1987 38.7566 35.1987H14.544C14.3368 35.1987 14.1382 35.1164 13.9917 34.9699C13.8452 34.8235 13.7629 34.6248 13.7629 34.4177C13.7629 34.2105 13.8452 34.0118 13.9917 33.8654C14.1382 33.7189 14.3368 33.6366 14.544 33.6366ZM13.5902 39.4891C13.7323 39.3853 13.8624 39.266 13.978 39.1333C14.041 38.9537 14.0826 38.7674 14.102 38.578C14.184 38.0464 14.2965 37.3184 14.928 36.9465C15.5542 36.5793 16.2281 36.8401 16.7209 37.0304C16.8984 37.1109 17.0855 37.1684 17.2777 37.2017C17.4698 37.1684 17.6569 37.1109 17.8345 37.0304C18.3272 36.8398 19.0018 36.5789 19.6269 36.9462C20.2592 37.3184 20.3717 38.0464 20.4537 38.5784C20.4728 38.7675 20.5143 38.9537 20.5773 39.1329C20.6928 39.2658 20.8229 39.3853 20.9651 39.4891C21.3866 39.8301 21.964 40.2973 21.964 41.0566C21.964 41.8159 21.3866 42.2831 20.9651 42.624C20.823 42.7278 20.693 42.8472 20.5773 42.9798C20.5143 43.1594 20.4727 43.3458 20.4534 43.5351C20.3715 44.0655 20.259 44.7909 19.6315 45.1636L21.08 47.6986C21.1827 47.8784 21.2098 48.0917 21.1553 48.2915C21.1008 48.4914 20.9692 48.6614 20.7893 48.7641C20.6095 48.8669 20.3962 48.894 20.1964 48.8395C19.9966 48.785 19.8266 48.6534 19.7238 48.4735L17.7729 45.0592C17.6151 44.9883 17.4485 44.9386 17.2777 44.9115C17.1068 44.9386 16.9403 44.9883 16.7824 45.0592L14.8315 48.4735C14.7286 48.6531 14.5587 48.7844 14.359 48.8387C14.1593 48.8931 13.9462 48.8659 13.7665 48.7632C13.5868 48.6605 13.4552 48.4907 13.4006 48.2911C13.3461 48.0915 13.3729 47.8784 13.4754 47.6986L14.9238 45.1637C14.296 44.7905 14.1834 44.0653 14.1016 43.5348C14.0825 43.3457 14.0411 43.1595 13.978 42.9802C13.8625 42.8474 13.7324 42.7279 13.5902 42.624C13.1688 42.2831 12.5914 41.8159 12.5914 41.0566C12.5914 40.2973 13.1688 39.8301 13.5902 39.4891Z"
                            fill="white"
                          />
                          <path
                            d="M14.5721 41.4095C14.8737 41.6256 15.1324 41.896 15.3348 42.207C15.5036 42.5483 15.6085 42.9175 15.6445 43.2965C15.6662 43.4569 15.6968 43.6159 15.7361 43.7729C15.8558 43.742 16.0297 43.6745 16.1559 43.6257C16.5092 43.4649 16.8893 43.3711 17.2768 43.3492C17.6643 43.3711 18.0444 43.4649 18.3976 43.6257C18.5239 43.6745 18.6974 43.742 18.8171 43.7729C18.8566 43.616 18.8872 43.4569 18.9087 43.2966C18.945 42.9174 19.0501 42.5481 19.2187 42.2066C19.4213 41.8959 19.68 41.6256 19.9815 41.4095C20.1222 41.3024 20.2541 41.1843 20.3762 41.0564C20.2541 40.9284 20.1221 40.8104 19.9815 40.7032C19.6799 40.4871 19.4212 40.2167 19.2187 39.9058C19.05 39.5645 18.945 39.1952 18.909 38.8162C18.8873 38.6559 18.8568 38.4968 18.8175 38.3399C18.6978 38.3708 18.5238 38.4383 18.3976 38.4871C18.0443 38.6479 17.6643 38.7416 17.2768 38.7636C16.8893 38.7416 16.5092 38.6478 16.1559 38.4871C16.0297 38.4383 15.8562 38.3708 15.7364 38.3398C15.697 38.4968 15.6664 38.6558 15.6449 38.8162C15.6085 39.1953 15.5035 39.5646 15.3348 39.9061C15.1323 40.2169 14.8736 40.4872 14.5721 40.7032C14.4314 40.8103 14.2994 40.9284 14.1774 41.0564C14.2994 41.1843 14.4314 41.3024 14.5721 41.4095ZM17.2768 40.2753C17.4313 40.2753 17.5823 40.3211 17.7107 40.407C17.8392 40.4928 17.9393 40.6148 17.9984 40.7575C18.0575 40.9002 18.073 41.0572 18.0428 41.2087C18.0127 41.3603 17.9383 41.4994 17.8291 41.6087C17.7198 41.7179 17.5807 41.7923 17.4292 41.8224C17.2776 41.8526 17.1206 41.8371 16.9779 41.778C16.8352 41.7189 16.7132 41.6187 16.6274 41.4903C16.5415 41.3619 16.4957 41.2109 16.4957 41.0564C16.4957 40.8492 16.578 40.6506 16.7245 40.5041C16.871 40.3576 17.0696 40.2753 17.2768 40.2753Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Mask a moving violation
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ background: "#E68300", borderRadius: 8, width: 72, height: 72 }}
                    >
                      {/* SVG */}
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9836"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9836)">
                          <path
                            d="M51.084 18.2589C47.7048 15.5329 32.5992 5.87094 28.4456 2.50761C27.6068 1.83015 26.4132 1.83015 25.5744 2.50761L2.91948 18.2749C2.54042 18.5813 2.23396 18.9765 2.09682 19.4443C1.87906 20.1943 2.0323 20.9605 2.50814 21.5493C2.89526 22.0251 3.43563 22.3235 4.04858 22.388C4.65347 22.4526 5.25026 22.2751 5.72611 21.888L9.1457 19.7669H44.8741L48.2372 21.8476C48.6001 22.146 49.0437 22.3557 49.5115 22.3961C50.3583 22.4686 51.1326 22.1057 51.6084 21.4283C52.3101 20.4282 52.0359 19.0329 51.0842 18.2667L51.084 18.2589Z"
                            fill="white"
                          />
                          <path
                            d="M37.3488 37.776H37.1795L34.3648 31.1386H34.7761C35.3165 31.1386 35.752 30.7031 35.752 30.1628C35.752 29.6224 35.3164 29.1869 34.7761 29.1869H27.9369L28.1385 26.7916C28.1869 26.1948 27.7917 25.606 27.1949 25.5173C26.4449 25.4044 25.8239 26.0093 25.8803 26.7271L26.082 29.1869H19.2428C18.7024 29.1869 18.2669 29.6224 18.2669 30.1628C18.2669 30.7031 18.7024 31.1386 19.2428 31.1386H19.6541L16.8394 37.776H16.67C16.3071 37.776 16.0168 38.0663 16.0168 38.4292V39.26C16.0168 39.6229 16.3071 39.9132 16.67 39.9132H17.1217C17.3636 40.9778 18.3073 41.7359 19.4041 41.7359H22.3317C23.4286 41.7359 24.3722 40.9778 24.6142 39.9132H25.0658C25.4287 39.9132 25.7191 39.6229 25.7191 39.26V38.4292C25.7191 38.0663 25.4287 37.776 25.0658 37.776H24.8964L22.0818 31.1386H31.9374L29.1227 37.776H28.9533C28.5904 37.776 28.3001 38.0663 28.3001 38.4292V39.26C28.3001 39.6229 28.5904 39.9132 28.9533 39.9132H29.405C29.6469 40.9778 30.5906 41.7359 31.6874 41.7359H34.615C35.7119 41.7359 36.6555 40.9778 36.8975 39.9132H37.3491C37.712 39.9132 38.0024 39.6229 38.0024 39.26V38.4292C38.0024 38.0663 37.7118 37.776 37.3488 37.776ZM18.2022 37.776L20.8637 31.614L23.5251 37.776H18.2022ZM30.4854 37.776L33.1468 31.614L35.8083 37.776H30.4854Z"
                            fill="white"
                          />
                          <path
                            d="M49.1717 48.0832H47.8088C47.3652 48.0832 47.0022 47.7203 47.0022 47.2767V46.8654C47.0022 46.4218 46.6393 46.0589 46.1957 46.0589H42.8407V26.0415H44.1956C45.1634 26.0415 46.0506 25.3479 46.1393 24.3882C46.2361 23.3075 45.3892 22.3961 44.3246 22.3961H36.4614C35.4936 22.3961 34.6064 23.0897 34.5177 24.0494C34.421 25.1302 35.2678 26.0415 36.3324 26.0415H37.8163V33.2921L38.6793 35.3164C39.5665 35.9374 40.1391 36.9698 40.1391 38.1231V38.9054C40.1391 40.4135 39.1632 41.6878 37.8163 42.1556V46.0591H16.186V42.1556C14.8391 41.6959 13.8632 40.4135 13.8632 38.9054V38.1231C13.8632 36.9617 14.4439 35.9374 15.323 35.3164L16.186 33.2921V26.0415H17.5409C18.5087 26.0415 19.3959 25.3479 19.4846 24.3882C19.5813 23.3075 18.7345 22.3961 17.6699 22.3961H9.80669C8.83888 22.3961 7.9517 23.0897 7.86302 24.0494C7.76624 25.1302 8.61306 26.0415 9.67765 26.0415H11.1616V46.0671H7.80655C7.36297 46.0671 7.00004 46.4301 7.00004 46.8737V47.285C7.00004 47.7286 6.63712 48.0915 6.19354 48.0915H4.83055C4.38697 48.0915 4.02405 48.4544 4.02405 48.898V50.4949C4.02405 50.9385 4.38697 51.3014 4.83055 51.3014H49.1721C49.6157 51.3014 49.9787 50.9385 49.9787 50.4949V48.898C49.9787 48.4544 49.6157 48.0915 49.1721 48.0915L49.1717 48.0832Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Satisfy a court order to attend traffic school
                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ background: "#E68300", borderRadius: 8, width: 72, height: 72 }}
                    >
                      {/* SVG */}
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.6347 31.1036C43.015 29.8642 41.7692 29.0934 40.3831 29.0934H29.4322C28.0461 29.0934 26.8003 29.8642 26.1806 31.1036L22.9289 37.6094C22.6785 38.1124 22.5446 38.6738 22.5446 39.2352V42.9122C22.5446 43.8601 23.1535 44.659 23.9999 44.9591V45.8206C23.9999 47.0233 24.9779 48.0035 26.1827 48.0035H27.638C28.8406 48.0035 29.8209 47.0254 29.8209 45.8206V45.093H39.2754V45.8206C39.2754 47.0233 40.2535 48.0035 41.4583 48.0035H42.9136C44.1162 48.0035 45.0964 47.0254 45.0964 45.8206V45.093C46.2991 45.093 47.2793 44.1149 47.2793 42.9101V39.233C47.2793 38.6717 47.1454 38.1103 46.895 37.6072L43.6412 31.1014L43.6347 31.1036ZM28.3609 45.8204C28.3609 46.222 28.0349 46.548 27.6333 46.548H26.178C25.7764 46.548 25.4504 46.222 25.4504 45.8204V45.0927H28.3588V45.8204H28.3609ZM43.6347 45.8204C43.6347 46.222 43.3087 46.548 42.9071 46.548H41.4518C41.0502 46.548 40.7242 46.222 40.7242 45.8204V45.0927H43.6326V45.8204H43.6347ZM45.8154 42.912C45.8154 43.3136 45.4894 43.6396 45.0878 43.6396H24.7227C24.3211 43.6396 23.9951 43.3136 23.9951 42.912V39.235C23.9951 38.8981 24.075 38.5591 24.2261 38.2591L27.4778 31.7532C27.8492 31.0105 28.5984 30.5463 29.4296 30.5463H40.3805C41.2117 30.5463 41.9588 31.0083 42.3323 31.7532L45.5861 38.2591C45.7372 38.5613 45.8171 38.8981 45.8171 39.235V42.912H45.8154Z"
                          fill="white"
                        />
                        <path
                          d="M37.0909 34.913H27.6363C27.2347 34.913 26.9087 35.239 26.9087 35.6406C26.9087 36.0422 27.2347 36.3682 27.6363 36.3682H37.0909C37.4925 36.3682 37.8185 36.0422 37.8185 35.6406C37.8185 35.239 37.4925 34.913 37.0909 34.913Z"
                          fill="white"
                        />
                        <path
                          d="M39.2731 36.3659H41.456C41.8576 36.3659 42.1836 36.0399 42.1836 35.6383C42.1836 35.2367 41.8576 34.9106 41.456 34.9106H39.2731C38.8715 34.9106 38.5455 35.2367 38.5455 35.6383C38.5455 36.0399 38.8715 36.3659 39.2731 36.3659Z"
                          fill="white"
                        />
                        <path
                          d="M28.6887 41.2082C28.3173 40.4654 27.5681 40.0012 26.7368 40.0012H25.4543C25.0527 40.0012 24.7267 40.3273 24.7267 40.7289C24.7267 41.1305 25.0527 41.4565 25.4543 41.4565H26.7368C27.0154 41.4565 27.2637 41.6098 27.3867 41.8581L27.7128 42.508C27.8402 42.7628 28.0971 42.9096 28.3648 42.9096C28.4749 42.9096 28.5851 42.8837 28.6887 42.8319C29.0471 42.6527 29.1939 42.2144 29.0147 41.856L28.6887 41.206L28.6887 41.2082Z"
                          fill="white"
                        />
                        <path
                          d="M44.3624 40.0037H43.0799C42.2486 40.0037 41.4994 40.4657 41.1281 41.2106L40.8021 41.8606C40.6228 42.219 40.7675 42.6573 41.1281 42.8365C41.2317 42.8883 41.344 42.9142 41.452 42.9142C41.7197 42.9142 41.9745 42.7674 42.104 42.5126L42.43 41.8627C42.5531 41.6144 42.8036 41.4611 43.08 41.4611H44.3625C44.7641 41.4611 45.0901 41.1351 45.0901 40.7335C45.0901 40.3319 44.7641 40.0058 44.3625 40.0058L44.3624 40.0037Z"
                          fill="white"
                        />
                        <path
                          d="M39.2718 41.4568H38.5442C38.1426 41.4568 37.8166 41.7828 37.8166 42.1844C37.8166 42.586 38.1426 42.9121 38.5442 42.9121H39.2718C39.6734 42.9121 39.9995 42.586 39.9995 42.1844C39.9995 41.7828 39.6734 41.4568 39.2718 41.4568Z"
                          fill="white"
                        />
                        <path
                          d="M31.2702 41.4568H30.5426C30.141 41.4568 29.815 41.7828 29.815 42.1844C29.815 42.586 30.141 42.9121 30.5426 42.9121H31.2702C31.6718 42.9121 31.9979 42.586 31.9979 42.1844C31.9979 41.7828 31.6718 41.4568 31.2702 41.4568Z"
                          fill="white"
                        />
                        <path
                          d="M47.2724 33.4574C46.8708 33.4574 46.5447 33.7834 46.5447 34.185V35.6403C46.5447 36.0419 46.8708 36.3679 47.2724 36.3679C47.674 36.3679 48 36.0419 48 35.6403V34.185C48 33.7834 47.674 33.4574 47.2724 33.4574Z"
                          fill="white"
                        />
                        <path
                          d="M23.271 35.638V34.1827C23.271 33.7811 22.945 33.4551 22.5434 33.4551C22.1418 33.4551 21.8157 33.7811 21.8157 34.1827V35.638C21.8157 36.0396 22.1418 36.3656 22.5434 36.3656C22.945 36.3656 23.271 36.0396 23.271 35.638Z"
                          fill="white"
                        />
                        <path
                          d="M37.8175 7.27517H11.636C10.0296 7.27517 8.72766 8.57716 8.72766 10.1835V38.5482H5.0917C4.69226 38.5482 4.36407 38.8764 4.36407 39.2758V45.0946C4.36407 46.701 5.66605 48.0029 7.27241 48.0029H23.2736C22.9541 47.5819 22.7274 47.0875 22.6194 46.5477H7.27208C6.47106 46.5477 5.81684 45.8935 5.81684 45.0924V40.0011H21.0906V39.2303C21.0906 38.6409 21.2008 38.045 21.4037 37.4858C20.7776 37.0993 20.363 36.4234 20.363 35.6375V34.1822C20.363 32.9817 21.3454 31.9993 22.5459 31.9993C23.0468 31.9993 23.5067 32.1742 23.8759 32.4657L24.8799 30.4512C25.7522 28.7131 27.4903 27.6357 29.4335 27.6357H36.3643V10.1811C36.3643 9.38005 37.0185 8.72582 37.8195 8.72582C38.6205 8.72582 39.2748 9.38005 39.2748 10.1811V13.8171C39.2748 14.2165 39.603 14.5447 40.0024 14.5447C40.4018 14.5447 40.73 14.2165 40.73 13.8171V10.1811C40.73 8.5747 39.428 7.27271 37.8217 7.27271L37.8175 7.27517ZM16.7273 12.3664H28.3629C28.7624 12.3664 29.0906 12.6946 29.0906 13.0941C29.0906 13.4935 28.7624 13.8217 28.3629 13.8217H16.7273C16.3278 13.8217 15.9996 13.4935 15.9996 13.0941C15.9996 12.6946 16.3278 12.3664 16.7273 12.3664ZM16.7273 36.3655H13.8189C13.4195 36.3655 13.0913 36.0373 13.0913 35.6379C13.0913 35.2384 13.4195 34.9102 13.8189 34.9102H16.7273C17.1267 34.9102 17.4549 35.2384 17.4549 35.6379C17.4549 36.0373 17.1267 36.3655 16.7273 36.3655ZM16.7273 34.1848H13.8189C13.4195 34.1848 13.0913 33.8566 13.0913 33.4571C13.0913 33.0577 13.4195 32.7295 13.8189 32.7295H16.7273C17.1267 32.7295 17.4549 33.0577 17.4549 33.4571C17.4549 33.8566 17.1267 34.1848 16.7273 34.1848ZM16.7273 32.0019H13.8189C13.4195 32.0019 13.0913 31.6737 13.0913 31.2742C13.0913 30.8748 13.4195 30.5466 13.8189 30.5466H16.7273C17.1267 30.5466 17.4549 30.8748 17.4549 31.2742C17.4549 31.6737 17.1267 32.0019 16.7273 32.0019ZM23.2717 26.9106H13.8171C13.4177 26.9106 13.0895 26.5824 13.0895 26.183C13.0895 25.7835 13.4177 25.4553 13.8171 25.4553H23.2717C23.6711 25.4553 23.9993 25.7835 23.9993 26.183C23.9993 26.5824 23.6711 26.9106 23.2717 26.9106ZM31.2715 24.0022H13.8171C13.4177 24.0022 13.0895 23.674 13.0895 23.2746C13.0895 22.8751 13.4177 22.547 13.8171 22.547H31.2715C31.6709 22.547 31.9991 22.8751 31.9991 23.2746C31.9991 23.674 31.6709 24.0022 31.2715 24.0022ZM31.2715 21.0938H13.8171C13.4177 21.0938 13.0895 20.7656 13.0895 20.3662C13.0895 19.9668 13.4177 19.6386 13.8171 19.6386H31.2715C31.6709 19.6386 31.9991 19.9668 31.9991 20.3662C31.9991 20.7656 31.6709 21.0938 31.2715 21.0938ZM31.2715 18.1833H16.7256C16.3262 18.1833 15.998 17.8551 15.998 17.4557C15.998 17.0562 16.3262 16.728 16.7256 16.728H31.2715C31.6709 16.728 31.9991 17.0562 31.9991 17.4557C31.9991 17.8551 31.6709 18.1833 31.2715 18.1833Z"
                          fill="white"
                        />
                        <path
                          d="M15.999 3.99359V5.33875C15.999 5.49852 15.999 5.6583 15.9925 5.81808H11.6354C9.22795 5.81808 7.27182 7.7743 7.27182 10.1817V18.5746C2.77651 15.7245 0 10.6831 0 5.33692V3.99176C0 3.01799 0.626141 2.18025 1.55673 1.89735L7.78995 0.0275292C7.92814 -0.00917639 8.0728 -0.00917639 8.21098 0.0275292L14.4442 1.89735C15.3748 2.1802 16.0009 3.01793 16.0009 3.99176L15.999 3.99359Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Lower your insurance premiums
                    </div>
                  </li>
                </ul>
              </Col>

              {/* Column 2 */}
              <Col sm={12} md={6}>
                <ul className="list-unstyled m-0">
                  {/* Item 1 */}
                  <li className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ background: "#E68300", borderRadius: 8, width: 72, height: 72 }}
                    >
                      {/* SVG */}
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9860"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9860)">
                          <path
                            d="M51.8361 38.1694L39.0376 16.2052L37.9206 16.8645C37.7229 16.9795 37.4705 16.9148 37.3562 16.7158C37.2418 16.5168 37.3062 16.2627 37.5038 16.1477L38.6208 15.4884L37.6944 13.899C37.611 13.7552 37.5086 13.6377 37.3895 13.5514C37.2704 13.4627 37.1275 13.4004 36.9656 13.3644L30.8474 11.9788C30.9998 12.0842 31.1308 12.2065 31.2451 12.3455C31.4047 12.5421 31.5237 12.7699 31.6023 13.0288L33.2837 18.6529C33.4647 18.5906 33.6719 18.6625 33.7743 18.8351C33.8887 19.0341 33.8243 19.2882 33.6267 19.4033L33.5266 19.4632L34.5912 23.0209C34.6722 23.2918 34.696 23.5603 34.6651 23.824C34.6341 24.0877 34.546 24.3418 34.4031 24.5887L33.4266 26.2668C33.4385 26.3747 33.4171 26.4874 33.3599 26.5881C33.3004 26.6888 33.2146 26.7631 33.1146 26.8038L27.4845 36.4674L34.4599 48.4373C34.6171 48.7082 34.872 48.8903 35.153 48.9623C35.434 49.0366 35.7436 49.003 36.0128 48.8448L51.4409 39.7348C51.7101 39.5766 51.8911 39.3201 51.9625 39.0372C52.0363 38.7543 52.003 38.4427 51.8458 38.1718L51.8361 38.1694ZM34.4887 18.4084C34.3743 18.2095 34.4387 17.9553 34.6363 17.8403L36.0701 16.994C36.2677 16.8789 36.5202 16.9437 36.6345 17.1427C36.7488 17.3416 36.6845 17.5957 36.4868 17.7108L35.0531 18.5571C34.8554 18.6721 34.603 18.6074 34.4887 18.4084ZM29.7969 34.4104C29.654 34.1611 29.7374 33.8422 29.9851 33.6984L40.5711 27.5471C40.8188 27.4033 41.1355 27.4872 41.2785 27.7365C41.4214 27.9858 41.338 28.3047 41.0903 28.4485L30.5043 34.6022C30.2566 34.7461 29.9398 34.6622 29.7969 34.4129V34.4104ZM31.4807 37.3015C31.3378 37.0522 31.4212 36.7334 31.6688 36.5895L42.2549 30.4358C42.5026 30.292 42.8193 30.3759 42.9622 30.6252C43.1052 30.8745 43.0218 31.1934 42.7741 31.3372L32.1881 37.4885C31.9404 37.6323 31.6236 37.5484 31.4807 37.2991V37.3015ZM44.4604 34.2306L33.8743 40.3843C33.6267 40.5281 33.3099 40.4442 33.167 40.1949C33.0241 39.9456 33.1074 39.6267 33.3551 39.4829L43.9412 33.3292C44.1888 33.1853 44.5056 33.2692 44.6485 33.5186C44.7914 33.7679 44.7081 34.0867 44.4604 34.2306ZM20.1466 35.2638C20.2538 35.6762 20.1847 36.0933 19.987 36.4337C19.7894 36.7741 19.4607 37.0378 19.0535 37.1457C18.6438 37.2536 18.2294 37.1841 17.8913 36.9851C17.5531 36.7861 17.2911 36.4553 17.1839 36.0454C17.0767 35.633 17.1458 35.2159 17.3435 34.8755C17.5412 34.5351 17.8698 34.2714 18.277 34.1635C18.6867 34.0556 19.1011 34.1251 19.4392 34.3241C19.7774 34.5231 20.0394 34.8539 20.1466 35.2638ZM15.1071 28.0238C15.0143 27.6235 15.0857 27.2207 15.2762 26.8923C15.4692 26.5615 15.7835 26.3025 16.1765 26.1899C16.2003 26.1851 16.2265 26.1779 16.248 26.1707C16.6457 26.0772 17.0458 26.1491 17.3721 26.3409C17.7103 26.5399 17.9723 26.8707 18.0795 27.2806C18.1866 27.693 18.1176 28.1101 17.9199 28.4505C17.7222 28.7909 17.3936 29.0546 16.9863 29.1625C16.5767 29.2704 16.1623 29.2009 15.8241 29.0019C15.4955 28.8077 15.2383 28.4913 15.1264 28.0957C15.1216 28.0717 15.1143 28.0454 15.1071 28.0238ZM31.4023 26.0365C31.157 25.8902 31.0736 25.5738 31.2189 25.3244C31.3642 25.0775 31.6786 24.9936 31.9263 25.1398L32.8122 25.6625L33.6839 24.1641C33.7672 24.0227 33.8173 23.8741 33.8363 23.723C33.8554 23.572 33.8387 23.4162 33.7911 23.2555L30.8022 13.2612C30.7569 13.1078 30.6879 12.9759 30.5974 12.8657C30.5069 12.7554 30.3925 12.6619 30.252 12.5852L27.8776 11.3002L27.0417 11.1108C27.025 11.106 27.0083 11.1036 26.9916 11.1012C26.975 11.1036 26.9583 11.1084 26.9416 11.1108L26.07 11.3074C26.058 11.3122 26.0438 11.3146 26.0318 11.317L25.0506 11.5399C24.9792 11.1276 24.9411 10.6889 24.9411 10.2382C24.9411 7.84327 26.0151 5.81992 27.287 5.81992C28.5326 5.81992 29.6257 7.94153 29.6257 10.3628C29.6257 10.5906 29.809 10.7728 30.0329 10.7728C30.2592 10.7728 30.4402 10.5882 30.4402 10.3628C30.4402 7.40453 29.0255 5 27.2845 5C25.5127 5 24.1242 7.30143 24.1242 10.2382C24.1242 13.1749 25.5126 15.4763 27.2845 15.4763C27.5108 15.4763 27.6918 15.2917 27.6918 15.0664C27.6918 14.8387 27.5084 14.6565 27.2845 14.6565C26.7606 14.6565 26.27 14.3088 25.8746 13.7359C25.9151 13.7071 25.9461 13.6688 25.989 13.6448C26.4605 13.3667 26.9987 13.3068 27.4893 13.4338C27.9799 13.5633 28.4205 13.8797 28.6992 14.3544C28.9755 14.8291 29.035 15.3733 28.9088 15.8647C28.7802 16.3585 28.4658 16.8044 27.9943 17.0825C27.5227 17.3606 26.9845 17.4206 26.4939 17.2935C26.0033 17.164 25.5603 16.8476 25.284 16.3729C25.0077 15.8983 24.9482 15.3565 25.0744 14.8626C25.0816 14.8363 25.0887 14.8075 25.0982 14.7811C24.9387 14.5893 24.7886 14.3712 24.6529 14.1338C24.2885 13.4961 24.0194 12.6979 23.8813 11.8084L17.0271 13.3619C16.8652 13.3978 16.7223 13.4625 16.6032 13.5488C16.4841 13.6375 16.3817 13.7526 16.2984 13.8965L15.4243 15.3972L16.5413 16.0564C16.7866 16.2027 16.8699 16.5191 16.7247 16.7685C16.5794 17.0154 16.2626 17.0993 16.0173 16.953L14.9003 16.2938L2.15419 38.1696C1.997 38.4405 1.96366 38.7522 2.03749 39.0351C2.11132 39.318 2.28994 39.5721 2.55906 39.7327L17.9872 48.8427C18.2564 49.0009 18.566 49.0344 18.847 48.9601C19.128 48.8858 19.3805 48.706 19.54 48.4351L26.635 36.259C26.6374 36.2542 26.6398 36.2518 26.6421 36.247L32.2865 26.5596L31.4006 26.037L31.4023 26.0365ZM20.1353 18.7799C20.2805 18.533 20.5973 18.4491 20.8426 18.5953L22.0858 19.3289C22.3311 19.4751 22.4145 19.7916 22.2692 20.0409C22.1239 20.2878 21.8072 20.3718 21.5618 20.2255L20.3186 19.4919C20.0733 19.3457 19.99 19.0293 20.1353 18.7799ZM17.2702 17.0874C17.4155 16.8405 17.7299 16.7566 17.9776 16.9028L19.4113 17.7491C19.6566 17.8953 19.74 18.2118 19.5947 18.4611C19.4494 18.708 19.135 18.7919 18.8873 18.6457L17.4536 17.7994C17.2083 17.6532 17.1249 17.3368 17.2702 17.0874ZM14.3861 26.3649C14.7195 25.7944 15.2673 25.3533 15.9532 25.1711C16.6391 24.9913 17.3297 25.1087 17.8965 25.442C18.4634 25.7776 18.9015 26.329 19.0802 27.0194C19.2588 27.7098 19.1421 28.405 18.8111 28.9756C18.48 29.5462 17.9299 29.9872 17.244 30.1671C16.5581 30.3469 15.8674 30.2294 15.3006 29.8962C14.7338 29.5605 14.2956 29.0092 14.1146 28.3187C13.9359 27.6283 14.0526 26.9331 14.3837 26.3625L14.3861 26.3649ZM20.878 36.9588C20.5446 37.5294 19.9969 37.9705 19.311 38.1503C18.6251 38.3301 17.9344 38.2126 17.3676 37.8794C16.8007 37.5438 16.3626 36.9924 16.1839 36.302C16.0053 35.6139 16.122 34.9163 16.453 34.3458C16.7841 33.7752 17.3342 33.3341 18.0201 33.1543C18.706 32.9745 19.3967 33.092 19.9635 33.4252C20.5303 33.7608 20.9685 34.3122 21.1472 35.0026C21.3258 35.6931 21.2091 36.3883 20.878 36.9588ZM24.0408 30.5198L11.4824 33.8137C11.2062 33.8856 10.9251 33.7178 10.8537 33.4397C10.7823 33.1616 10.949 32.8787 11.2252 32.8068L23.7836 29.5129C24.0599 29.441 24.3409 29.6088 24.4148 29.8869C24.4862 30.165 24.3195 30.4479 24.0432 30.5198L24.0408 30.5198ZM24.9458 21.6209C24.8005 21.8678 24.4862 21.9517 24.2385 21.8055L22.9952 21.0719C22.7499 20.9257 22.6666 20.6093 22.8119 20.3599C22.9571 20.113 23.2715 20.0291 23.5192 20.1753L24.7624 20.9089C25.0077 21.0551 25.0911 21.3716 24.9458 21.6209ZM27.8109 23.3134C27.6656 23.5603 27.3488 23.6442 27.1035 23.498L25.6698 22.6518C25.4245 22.5055 25.3411 22.1891 25.4864 21.9397C25.6317 21.6928 25.946 21.6089 26.1937 21.7551L27.6275 22.6014C27.8728 22.7476 27.9561 23.0641 27.8109 23.3134ZM30.6759 25.0035C30.5306 25.2504 30.2163 25.3344 29.9686 25.1881L28.5348 24.3419C28.2895 24.1956 28.2062 23.8792 28.3514 23.6298C28.4967 23.3829 28.8135 23.299 29.0588 23.4452L30.4925 24.2915C30.7378 24.4377 30.8212 24.7542 30.6759 25.0035Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Qualify for a safe driver discount
                    </div>
                  </li>

                  {/* Item 2 */}
                  <li className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ background: "#E68300", borderRadius: 8, width: 72, height: 72 }}
                    >
                      {/* SVG */}
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9513"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9513)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.7414 29.0497H25.943V51.9995H15.7414V29.0497ZM42.8757 10.2073V13.1226C42.8757 14.4404 43.9427 15.5074 45.2606 15.5074C46.5784 15.5074 47.6455 14.4404 47.6455 13.1226V4.38481C47.6455 3.06699 46.5784 2 45.2606 2H36.2369C34.919 2 33.852 3.06699 33.852 4.38481C33.852 5.70264 34.919 6.76963 36.2369 6.76963H39.586L30.2128 16.3174L20.0275 12.7319C19.1332 12.4194 18.1772 12.6744 17.5522 13.3055L2.69208 28.2601C1.76692 29.1914 1.76897 30.6984 2.7003 31.6235C3.63162 32.5507 5.13658 32.5466 6.06379 31.6132L19.8733 17.7176L29.9986 21.2825C30.856 21.6094 31.8613 21.4244 32.5459 20.7295L42.8749 10.2096L42.8757 10.2073ZM2.71292 39.8822H12.9145V51.9995H2.71292V39.8822ZM52 22.0351V52H41.7984V22.0351H52ZM28.7699 35.0223H38.9715V52H28.7699V35.0223Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      May prevent or remove driver record points, depending on state regulations
                    </div>
                  </li>

                  {/* Item 3 */}
                  <li className="d-flex align-items-center gap-3 mb-3 p-3 rounded-3">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ background: "#E68300", borderRadius: 8, width: 72, height: 72 }}
                    >
                      {/* SVG */}
                      <svg
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_944_9519"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="54"
                          height="54"
                        >
                          <rect width="54" height="54" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_944_9519)">
                          <path
                            d="M9.08295 27.1969V28.8694C9.08295 29.0722 9.235 29.2749 9.48842 29.2749H20.8417C21.0444 29.2749 21.2471 29.1229 21.2471 28.8694V27.1969C21.2471 25.1695 19.6252 23.5476 17.5979 23.5476H12.7829C10.7048 23.5476 9.08295 25.1695 9.08295 27.1969Z"
                            fill="white"
                          />
                          <path
                            d="M15.1654 22.3312C17.1809 22.3312 18.8147 20.6974 18.8147 18.682C18.8147 16.6665 17.1809 15.0327 15.1654 15.0327C13.15 15.0327 11.5162 16.6665 11.5162 18.682C11.5162 20.6974 13.15 22.3312 15.1654 22.3312Z"
                            fill="white"
                          />
                          <path
                            d="M35.0332 15.5394C35.0332 15.286 34.8305 15.0833 34.5771 15.0833H24.2375C23.9841 15.0833 23.7813 15.286 23.7813 15.5394V17.364C23.7813 17.6175 23.9841 17.8202 24.2375 17.8202H34.5771C34.8305 17.8202 35.0332 17.6175 35.0332 17.364V15.5394Z"
                            fill="white"
                          />
                          <path
                            d="M35.0332 23.0407V21.216C35.0332 20.9626 34.8305 20.7599 34.5771 20.7599H24.2375C23.9841 20.7599 23.7813 20.9626 23.7813 21.216V23.0407C23.7813 23.2941 23.9841 23.4968 24.2375 23.4968H34.5771C34.8305 23.4968 35.0332 23.2941 35.0332 23.0407Z"
                            fill="white"
                          />
                          <path
                            d="M23.7813 26.9433V28.768C23.7813 29.0214 23.9841 29.2241 24.2375 29.2241H28.2922L28.5456 28.4132C28.7484 27.7036 29.1032 27.0447 29.5593 26.4872H24.2375C23.9841 26.4872 23.7813 26.6392 23.7813 26.9433Z"
                            fill="white"
                          />
                          <path
                            d="M24.6431 33.5322C24.6431 33.1774 24.6938 32.8733 24.7951 32.5185H5.68723V11.738H38.4799V23.9529H41.2168V10.3696C41.2168 9.60931 40.6086 9.0011 39.8483 9.0011H4.36945C3.60919 9.0011 3.00098 9.60931 3.00098 10.3696V33.8363C3.00098 34.5966 3.60919 35.2048 4.36945 35.2048H24.8458C24.7445 34.9007 24.6938 34.5459 24.6938 34.1404V33.5322H24.6431Z"
                            fill="white"
                          />
                          <path
                            d="M49.8834 32.2653H48.3122L47.2986 29.1229C46.7917 27.501 45.2712 26.4366 43.5986 26.4366H34.6275C32.9043 26.4366 31.4344 27.501 30.9276 29.1229L29.9139 32.2653H28.3427C27.6838 32.2653 27.1263 32.8228 27.1263 33.4817V34.1913C27.1263 34.8502 27.6838 35.4077 28.3427 35.4077H28.7989C28.5454 36.5228 28.3934 37.6885 28.3934 38.8543V44.7843C28.3934 45.4432 28.9509 46.0007 29.6098 46.0007H31.6879C32.3467 46.0007 32.9043 45.4432 32.9043 44.7843V42.909H45.2712V44.7843C45.2712 45.4432 45.8287 46.0007 46.4876 46.0007H48.5657C49.2246 46.0007 49.7821 45.4432 49.7821 44.7843V38.9049C49.7821 37.7392 49.63 36.5735 49.3766 35.4584H49.8328C50.4917 35.4584 51.0492 34.9009 51.0492 34.242V33.5324C51.0999 32.8228 50.5423 32.2653 49.8834 32.2653ZM33.5125 29.9339C33.6645 29.427 34.1207 29.1229 34.6275 29.1229H43.5986C44.1055 29.1229 44.5616 29.427 44.7137 29.9339L45.8794 33.5831H32.3467L33.5125 29.9339ZM34.6782 39.5638H32.1947C31.7892 39.5638 31.4344 39.209 31.4344 38.8036V37.6378C31.4344 37.1817 31.8399 36.8269 32.2961 36.8776L34.6275 37.2324C34.9316 37.283 35.1851 37.5365 35.2357 37.8406L35.3878 38.6515C35.4892 39.1077 35.1344 39.5638 34.6782 39.5638ZM46.7917 38.8036C46.7917 39.209 46.4369 39.5638 46.0315 39.5638H43.5479C43.0918 39.5638 42.6863 39.1077 42.7877 38.6515L42.9397 37.8406C42.9904 37.5365 43.2438 37.283 43.5479 37.2324L45.8794 36.8776C46.3356 36.8269 46.741 37.1817 46.741 37.6378V38.8036H46.7917Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-white fw-semibold">
                      Meet an employer requirement for fleet driver training
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>




      {/* Partner With Us */}
      <section className="py-5 bg-white">
        <Container className="px-3 px-md-5">
          {/* Title + Intro */}
          <h2
            className="mb-1"
            style={{
              color: "#004985",
              fontWeight: 800,
              fontSize: "clamp(24px, 2.2vw, 32px)",
              lineHeight: 1.2,
            }}
          >
            PARTNER WITH US
          </h2>

          <div
            className="mb-3"
            style={{
              color: "#004985",
              fontWeight: 700,
              fontSize: "clamp(16px, 1.5vw, 20px)",
              lineHeight: 1.3,
            }}
          >
            &amp; get the license to earn
          </div>

          <p className="mb-4" style={{ maxWidth: 820 }}>
            Join our Affiliate &amp; Partner Program, you can earn competitive
            commissions by referring customers to our DMV-approved online
            traffic school and defensive driving courses.
          </p>

          {/* Two Cards */}
          <Row className="g-4">
            {/* Card 1 */}
            <Col md={6}>
              <div
                className="d-flex flex-column flex-md-row rounded-3 overflow-hidden"
                style={{
                  background: "#E7F4FF",
                  border: "none",
                  minHeight: 140,
                }}
              >
                {/* Image */}
                <div className="p-0 w-100 w-md-40 flex-md-shrink-0" style={{ flexBasis: "40%" }}>
                  <img
                    src={section7Image1}
                    alt="Affiliate commissions"
                    className="w-100 h-100"
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>

                {/* Text */}
                <div className="p-3 d-flex align-items-center">
                  <div
                    style={{
                      color: "#004985",
                      fontWeight: 600,
                      fontSize: "clamp(18px, 1.3vw, 18px)",
                    }}
                  >
                    Earn competitive commissions for every successful referral.
                  </div>
                </div>
              </div>
            </Col>

            {/* Card 2 */}
            <Col md={6}>
              <div
                className="d-flex flex-column flex-md-row rounded-3 overflow-hidden"
                style={{
                  background: "#E7F4FF",
                  border: "none",
                  minHeight: 140,
                }}
              >
                {/* Image */}
                <div className="p-0 w-100 w-md-40 flex-md-shrink-0" style={{ flexBasis: "40%" }}>
                  <img
                    src={section7Image2}
                    alt="Promote across states"
                    className="w-100 h-100"
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>

                {/* Text */}
                <div className="p-3 d-flex align-items-center">
                  <div
                    style={{
                      color: "#004985",
                      fontWeight: 600,
                      fontSize: "clamp(18px, 1.3vw, 18px)",
                    }}
                  >
                    Promote online traffic school and defensive driving courses in over 18 states.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Make Money Through GTTS */}
      <section className="py-5 bg-white">
        <Container className="px-3 px-md-5">
          <Row className="align-items-center g-4">
            {/* LEFT: Text + CTA */}
            <Col md={7} className="text-md-start">
              <h1
                className="mb-3"
                style={{
                  color: "#004985",            // deep navy like screenshot
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontSize: "clamp(24px, 3.2vw, 40px)",
                }}
              >
                MAKE MONEY THROUGH GTTS!
              </h1>

              <ul
                className="mb-3 ps-4"
                style={{
                  color: "#0B2E57",
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  lineHeight: 1.7,
                  maxWidth: 700,
                }}
              >
                <li>Do you own a brick and mortar traffic school?</li>
                <li>has your school been losing customers daily?</li>
                <li>
                  Do you want to start offering an online traffic school course to get
                  your customers back?
                </li>
              </ul>

              <p
                className="mb-4"
                style={{
                  color: "#0B2E57",
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  lineHeight: 1.7,
                  maxWidth: 620,
                }}
              >
                If you answered yes to all of those above questions then you must
                watch this short video. It will change your business
              </p>

              <button
                className="btn"
                style={{
                  background: "#0B4D8A",
                  color: "#fff",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: 16,
                  padding: "12px 32px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
              >
                See How
              </button>
            </Col>

            {/* RIGHT: Image with play overlay */}
            <Col md={5} className="d-flex justify-content-md-start justify-content-center">
              <div
                className="position-relative rounded-4 overflow-hidden"
                style={{
                  width: "100%",
                  maxWidth: 520,              // similar width to screenshot
                  aspectRatio: "16 / 9",      // maintain the rectangle shape
                  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={section8Image}
                  alt="Preview video"
                  className="w-100 h-100"
                  style={{ objectFit: "cover", display: "block" }}
                />

                {/* Play button overlay */}
                <div
                  className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7-11-7z" fill="#0B4D8A" />
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
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







