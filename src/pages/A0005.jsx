import ExternalLayout from "../layouts/ExternalLayout";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

import heroBg from "@/assets/4.png";
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
                <Col xs={12} lg={8} className="order-1 order-lg-0">
                  <div className="d-flex flex-column gap-3" style={{ maxWidth: 680 }}>
                    {/* Headline */}
                    <div>
                      <h1
                        className="m-0"
                        style={{
                          fontWeight: 600,
                          color: "#FFFFFF",
                          fontSize: "clamp(36px, 7vw, 54px)",
                          lineHeight: 1.05,
                        }}
                      >
                        LOWER YOUR
                      </h1>
                      <h1
                        className="m-0"
                        style={{
                          background: "#FB001A",
                          borderRadius: 20,
                          padding: "5px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          fontSize: "clamp(36px, 7vw, 54px)",
                          lineHeight: 1.05,
                          display: "inline-block",
                          width: "fit-content",
                        }}
                      >
                        INSURANCE PREMIUMS
                      </h1>
                    </div>

                    {/* Bullets */}
                    <div className="d-flex flex-column gap-2">
                      {[
                        "Insurance & Mature Driver Discount Courses Online",
                        "Earn a Safe Driver Discount on your Auto Insurance Liability Premium",
                        "Fast, Easy and Inexpensive",
                        "Includes latest safety videos from IIHS and NHTSA!",
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
                              borderRadius: 5,
                              background: "#FFA006",
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

                    <div ref={boxRef} className="d-flex mt-2" style={{ maxWidth: "100%", position: "relative" }}>
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
                          fontSize: "18px",
                        }}
                      />

                      {/* 🔹 your existing BUTTON (unchanged layout, just toggles/open focus) */}
                      <button
                        className="btn d-inline-flex align-items-center justify-content-center"
                        style={{
                          background: "#FB001A",
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

                    {/* Disclaimer */}
                    <div
                      style={{
                        color: "#DDE7F0",
                        fontSize: "clamp(14px, 1.5vw, 16px)",
                        lineHeight: 1.5,
                      }}
                    >
                      *Not all insurance companies participate. Be sure to ask your insurance agent if you qualify for a discount under your current policy.
                    </div>
                  </div>
                </Col>

                {/* RIGHT */}
                <Col xs={12} lg={4} className="order-0 order-lg-1 mt-3 mt-lg-0">
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

      


      {/* Anywhere / Reviews section */}

      {/* Highlights (3-up, like "We Also Offer") */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-4 justify-content-center">
            {/* Item 1 — Lowest Price */}
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg width="50" height="50" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 19.5901C38.1681 21.7716 36.3373 23.9542 34.5044 26.1358C33.3739 27.4812 32.2425 28.8256 31.1068 30.1659C30.659 30.6951 30.3114 30.6857 29.8647 30.1544C28.7332 28.81 27.6007 27.4666 26.4681 26.1232C26.4024 26.0449 26.3283 25.974 26.2468 25.8884C25.7698 26.3111 25.3199 26.7401 24.8398 27.1305C16.0979 34.2472 2.84893 29.6617 0.378246 18.6684C-1.30645 11.1687 2.76647 3.53532 10.0084 0.990524C15.9852 -1.11065 21.3524 0.165919 25.9817 4.48831C26.2301 4.72004 26.4619 4.82128 26.8001 4.82024C29.4294 4.80771 32.0598 4.81293 34.6891 4.81398C35.3874 4.81398 35.5586 4.98829 35.5586 5.6939C35.5586 9.8733 35.5586 14.0516 35.5586 18.231V18.7331C35.7256 18.7425 35.8624 18.7571 36.0001 18.7571C37.0544 18.7592 38.1097 18.7675 39.1639 18.7529C39.5397 18.7477 39.8215 18.8636 40 19.2007V19.5911V19.5901ZM25.3847 18.7571C25.3972 18.6412 25.4076 18.5911 25.4076 18.54C25.4087 16.1967 25.4118 13.8544 25.4034 11.511C25.4034 11.3367 25.346 11.152 25.2761 10.9881C23.3785 6.5206 18.6239 3.81088 13.812 4.4476C7.79656 5.24402 3.57229 10.8221 4.43029 16.8355C5.48662 24.2308 13.4696 28.4092 20.1521 25.0606C21.4067 24.4312 22.4975 23.5868 23.4192 22.5211C23.3451 22.4282 23.2908 22.3551 23.2323 22.2862C22.5539 21.4794 21.8754 20.6725 21.1938 19.8688C20.9996 19.6402 20.8848 19.3594 21.0654 19.1235C21.2021 18.945 21.4683 18.8291 21.6979 18.7696C21.9307 18.7101 22.1896 18.7561 22.437 18.7561C23.4098 18.7561 24.3836 18.7561 25.3847 18.7561V18.7571ZM22.9474 20.0076C25.5078 23.0461 27.9921 25.9928 30.492 28.9582C33.0138 25.9656 35.4897 23.0252 38.0324 20.0065C37.0293 20.0065 36.1358 20.0065 35.2413 20.0065C34.4741 20.0065 34.3081 19.8374 34.3081 19.0598C34.3081 14.894 34.3081 10.7271 34.3081 6.56131C34.3081 6.40891 34.3081 6.25651 34.3081 6.08429H26.6602V6.55817C26.6602 10.6854 26.6602 14.8126 26.6602 18.9398C26.6602 19.0703 26.6633 19.2007 26.6581 19.3302C26.6383 19.7759 26.4285 19.993 25.9744 20.0024C25.3888 20.0149 24.8022 20.0065 24.2166 20.0065C23.8304 20.0065 23.4442 20.0065 22.9463 20.0065L22.9474 20.0076ZM24.2647 23.5116C19.4214 28.9165 10.9843 28.6785 6.29035 23.5513C1.88028 18.7341 2.00345 11.3315 6.62228 6.70118C8.85915 4.45908 11.5856 3.2274 14.7493 3.12823C19.221 2.98836 22.725 4.87974 25.4108 8.53409C25.4108 7.63538 25.4275 6.83165 25.3993 6.03001C25.392 5.82438 25.2959 5.5676 25.1498 5.42773C21.3524 1.7786 16.8568 0.481148 11.7505 1.74102C4.58373 3.50922 0.0369223 10.7052 1.5233 17.9659C2.61616 23.3081 5.84778 26.9771 11.047 28.619C16.2336 30.2577 20.9078 29.0448 24.939 25.3874C25.1101 25.2318 25.3126 25.1128 25.5005 24.9761C25.0183 24.4051 24.6425 23.9584 24.2647 23.5106V23.5116Z" fill="#004985"/>
                  <path d="M14.5954 20.413V15.8025C13.5422 15.5259 12.4869 15.2535 11.8325 14.2765C11.4087 13.645 11.297 12.9341 11.3241 12.1899C11.3826 10.6054 12.4765 9.48332 14.6111 8.84242C14.6111 8.48857 14.6059 8.12533 14.6121 7.76209C14.6194 7.31534 14.8793 7.02307 15.2509 7.03142C15.6131 7.03977 15.8522 7.31743 15.8595 7.74852C15.8647 8.11176 15.8605 8.47501 15.8605 8.81215C16.3041 8.97186 16.7373 9.07937 17.1246 9.27769C18.3176 9.88832 19.0587 10.834 19.1475 12.2129C19.1777 12.6826 18.9554 12.9665 18.5786 12.9926C18.208 13.0187 17.9513 12.7515 17.9043 12.2922C17.7926 11.1805 16.9899 10.3372 15.8783 10.1775V14.7921C17.9659 15.1835 19.3447 16.2326 19.1339 18.602C19.0003 20.0978 17.8156 21.2272 15.8605 21.7271C15.8605 22.0862 15.8647 22.4588 15.8595 22.8315C15.8532 23.2605 15.611 23.5402 15.2509 23.5486C14.8793 23.5569 14.6194 23.2647 14.6121 22.8179C14.6059 22.4547 14.6111 22.0914 14.6111 21.7167C13.7249 21.5486 12.9493 21.2084 12.3252 20.5748C11.6968 19.937 11.3335 19.1792 11.3231 18.2732C11.3179 17.8734 11.5621 17.5989 11.9139 17.5843C12.2583 17.5697 12.5235 17.8296 12.5673 18.2241C12.7009 19.4078 13.4024 20.176 14.5954 20.4109V20.413ZM15.8908 16.1136V20.414C17.1433 20.1614 17.9346 19.2293 17.9022 18.0738C17.8709 16.9476 17.2133 16.3077 15.8908 16.1136ZM14.5965 10.1806C13.417 10.3403 12.5537 11.3277 12.5715 12.479C12.5892 13.6199 13.3032 14.3224 14.5965 14.4623V10.1806Z" fill="#004985"/>
                  </svg>

                </div>
                <div
                  style={{ 
                    color: "#004985", 
                    fontWeight: 700, 
                    lineHeight: 1.2,
                    fontSize: "clamp(16px, 3vw, 18px)",
                  }}
                >
                  Lowest Price
                </div>
              </div>
            </Col>

            {/* Item 2 — Over 7M Satisfied Users */}
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg width="50" height="50" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20.1403C0.0890022 19.7823 0.166501 19.4206 0.269428 19.067C1.25511 15.6887 3.30761 13.2848 6.48505 11.9114C6.53106 11.8915 6.57647 11.8691 6.65942 11.8306C4.67473 10.1731 3.77623 8.0595 4.15283 5.45553C4.40409 3.71976 5.25173 2.31213 6.62188 1.2606C9.23988 -0.746136 12.8308 -0.313591 14.9893 2.24874C17.2361 4.91672 17.0908 9.37081 13.9515 11.8088C14.6248 12.1637 15.2993 12.5186 16.001 12.8883C16.9044 11.5342 18.1007 10.4857 19.6253 9.79838C18.3181 8.57532 17.6836 7.07695 17.8265 5.27841C17.9409 3.84219 18.5542 2.64524 19.6216 1.70309C21.5839 -0.0289571 24.5398 0.115846 26.3749 2.02004C28.3293 4.0479 28.4637 7.59278 26.0946 9.7555C26.6764 10.1352 27.2994 10.4752 27.8498 10.9121C29.4573 12.1879 30.463 13.8696 30.9007 15.9081C30.9237 16.0162 30.9661 16.12 31 16.2256V16.9714C30.9861 16.9857 30.9655 16.9975 30.96 17.0149C30.5907 18.2187 29.9392 18.7115 28.7138 18.7115C26.0013 18.7115 23.2883 18.7115 20.5758 18.7115H20.2483C20.3639 19.3019 20.5183 19.8432 20.5674 20.3945C20.6945 21.8189 19.5635 22.9978 18.1007 22.9984C12.9477 23.0009 7.79465 22.9997 2.64161 22.9997C1.22605 22.9997 0.440773 22.3931 0.0405656 20.993C0.035722 20.9756 0.014531 20.9637 0.00121091 20.9488C0.00121091 20.6797 0.00121091 20.41 0.00121091 20.1409L0 20.1403ZM10.2704 21.1347C12.8726 21.1347 15.4749 21.1353 18.0777 21.134C18.5966 21.134 18.8364 20.837 18.7225 20.3149C18.6305 19.8917 18.5342 19.4672 18.3998 19.0571C17.0587 14.9765 13.1003 12.4875 8.98195 13.127C5.47757 13.6708 2.54837 16.5799 1.87571 20.1838C1.7425 20.8979 1.93383 21.1347 2.64464 21.1347C5.18634 21.1347 7.72866 21.1347 10.2704 21.1347ZM10.2916 11.1569C12.717 11.1569 14.7023 9.07001 14.7035 6.51887C14.7047 3.96586 12.7243 1.87399 10.3012 1.86902C7.86125 1.86405 5.87354 3.9553 5.87656 6.52447C5.87959 9.07809 7.86065 11.1563 10.2916 11.1569ZM17.4008 14.0903C18.2031 14.8851 18.8503 15.7521 19.3813 16.7135C19.4237 16.7906 19.5762 16.8409 19.678 16.8409C22.7149 16.8477 25.7519 16.8465 28.7895 16.8459C29.1515 16.8459 29.2194 16.757 29.1461 16.3953C28.4728 13.0549 25.7089 10.8182 22.3946 11.0165C20.2471 11.1451 18.6117 12.2433 17.4008 14.0903ZM22.8142 2.35998C21.0463 2.36682 19.612 3.89067 19.6198 5.75446C19.6277 7.61142 21.0899 9.14211 22.8439 9.12843C24.6106 9.11414 26.0413 7.58843 26.0353 5.72463C26.0292 3.85959 24.5876 2.35377 22.8142 2.3606V2.35998Z" fill="#004985"/>
                  </svg>


                </div>
                <div
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Over 7M Satisfied Users
                </div>
              </div>
            </Col>

            {/* Divider */}
            {/* <Col xs={1} className="d-flex justify-content-center">
              <div
                style={{
                  width: 1,
                  backgroundColor: "#d9e2ef",
                  height: "100%",
                  minHeight: 120, // match icon height
                }}
              />
            </Col> */}
            

            {/* Item 3 — label placeholder (update as needed) */}
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg width="50" height="50" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.60793 38.3612C7.19651 38.1916 6.93621 37.8835 6.71587 37.5004C4.71143 34.0004 2.69431 30.5072 0.681089 27.0121C0.185827 26.1523 0.334016 25.5936 1.18415 25.1032C1.98359 24.6421 2.784 24.181 3.58442 23.7208C4.4248 23.2382 4.99903 23.3971 5.48942 24.2472C5.63956 24.5085 5.79165 24.7688 5.95349 25.0486C6.65543 24.6665 7.32618 24.3009 7.9979 23.9353C9.11809 23.3259 10.2344 22.7078 11.3604 22.1092C13.3668 21.0417 15.4532 20.9023 17.6068 21.6032C19.581 22.2457 21.5552 22.8843 23.5353 23.5083C23.7049 23.5619 23.9448 23.5394 24.1037 23.4576C24.9879 22.9993 25.8556 22.5109 26.7321 22.0361C28.25 21.2143 29.7534 21.6237 30.6522 23.0998C30.6708 23.13 30.6942 23.1583 30.739 23.2206C31.322 22.9057 31.9021 22.5821 32.4919 22.2759C33.5458 21.728 34.7352 21.8558 35.5941 22.5957C37.0731 23.869 36.8274 26.1454 35.0911 27.1155C33.6492 27.9208 32.1916 28.6988 30.74 29.4884C28.0511 30.9518 25.3564 32.4025 22.6774 33.8824C21.059 34.7774 19.3977 34.9295 17.6526 34.3329C16.8025 34.0423 15.9465 33.7693 15.0885 33.5042C13.7071 33.0762 12.4046 33.2663 11.1391 34.0394C11.3097 34.3426 11.4774 34.6341 11.6402 34.9276C12.0195 35.61 11.8567 36.2418 11.181 36.6366C10.1876 37.2177 9.18731 37.787 8.19093 38.3612H7.60696H7.60793ZM10.5434 33.0148C10.7345 32.9163 10.8944 32.8315 11.0553 32.7505C12.3441 32.1032 13.6934 31.9131 15.0885 32.3021C16.1288 32.5916 17.1544 32.9329 18.181 33.2702C19.502 33.704 20.7665 33.588 21.9842 32.9251C26.1452 30.6603 30.3071 28.3965 34.4661 26.1289C35.3348 25.655 35.6341 24.7435 35.2032 23.9392C34.7674 23.1261 33.8207 22.8775 32.9394 23.3562C31.0071 24.4042 29.0787 25.462 27.1435 26.5052C26.9524 26.6085 26.8676 26.7245 26.8315 26.941C26.5303 28.7641 24.906 29.738 23.1395 29.1696C21.1516 28.5301 19.1627 27.8925 17.1758 27.252C17.0608 27.2149 16.9399 27.1808 16.8385 27.1194C16.5792 26.9614 16.4817 26.7284 16.5763 26.434C16.665 26.1552 16.9467 25.9924 17.2382 26.0509C17.3445 26.0723 17.4478 26.1133 17.5512 26.1474C19.5625 26.7938 21.5718 27.447 23.586 28.0826C24.5824 28.3965 25.5222 27.8116 25.683 26.8064C25.8088 26.0187 25.3048 25.3109 24.4039 25.0213C22.0232 24.255 19.6385 23.5005 17.2626 22.7225C15.3284 22.0888 13.4858 22.2594 11.7055 23.246C10.133 24.1176 8.54874 24.9677 6.96936 25.8276C6.83287 25.9017 6.70027 25.9816 6.54039 26.0733C7.88091 28.3995 9.20681 30.7013 10.5425 33.0177L10.5434 33.0148ZM7.89066 37.1904C8.84999 36.6356 9.75764 36.1101 10.6731 35.5817C8.55361 31.9033 6.45947 28.2698 4.35851 24.6236C3.4138 25.1686 2.512 25.6882 1.57607 26.2283C3.68386 29.8872 5.77702 33.5227 7.89066 37.1904ZM29.6617 23.8124C29.3624 23.0032 28.4928 22.5509 27.7284 22.8765C26.9241 23.2197 26.1686 23.6759 25.4325 24.061C25.8693 24.5241 26.2768 24.956 26.7106 25.4172C27.6485 24.9073 28.6458 24.3652 29.6617 23.8124Z" fill="#004985"/>
                  <path d="M19.3536 1.14927C20.2608 1.67684 21.0485 1.18266 21.8968 0.424691C22.683 -0.276514 23.8033 -0.072831 24.5959 0.766945C25.1147 1.31622 25.589 1.48151 26.321 1.25278C27.5481 0.870456 28.6859 1.56832 29.0329 2.90395C29.227 3.65023 29.5422 4.03589 30.2854 4.22956C31.549 4.56013 32.176 5.74216 31.8482 7.07612C31.6684 7.81238 31.7447 8.32994 32.3018 8.8909C33.2519 9.84921 33.2248 11.2249 32.2667 12.2266C31.7734 12.7425 31.6302 13.2033 31.8179 13.9245C32.1824 15.3169 31.5458 16.4723 30.2122 16.8579C29.5453 17.0499 29.1952 17.3571 29.017 18.0867C28.6748 19.4891 27.5751 20.1452 26.2319 19.7846C25.5683 19.6076 25.1099 19.6911 24.6039 20.227C23.614 21.2772 22.3471 21.2488 21.3334 20.1937C20.875 19.7162 20.4645 19.5692 19.8167 19.7529C18.3908 20.1603 17.3356 19.4924 16.9282 17.9632C16.7595 17.3304 16.4762 17.0149 15.8476 16.8512C14.4487 16.4856 13.8074 15.3169 14.1798 13.8494C14.3532 13.1666 14.2514 12.7108 13.7533 12.2066C12.7602 11.2015 12.749 9.86591 13.7198 8.82579C14.2164 8.29321 14.3851 7.81572 14.1798 7.07111C13.8169 5.76052 14.4535 4.5451 15.7092 4.20452C16.4842 3.99416 16.8455 3.60015 17.038 2.7971C17.2927 1.73194 18.1521 1.13925 19.3536 1.14426V1.14927ZM19.1229 3.11765C19.029 3.24453 18.8205 3.39813 18.7886 3.58679C18.5451 4.99087 17.7494 5.78223 16.4349 6.04768C16.0434 6.12615 15.9097 6.37157 16.0481 6.77894C16.4842 8.05947 16.2168 9.15135 15.2269 10.0379C14.8752 10.3517 14.8752 10.6473 15.2301 10.9628C16.1866 11.8109 16.4667 12.8677 16.0561 14.1049C15.8683 14.6708 16.0784 14.9196 16.5877 15.0198C17.7255 15.2435 18.4131 15.9564 18.6613 17.1401C18.682 17.2419 18.717 17.3387 18.7441 17.4389C18.8412 17.8029 19.0321 17.9632 19.4045 17.8212C20.6459 17.3521 21.7026 17.6376 22.5652 18.6911C22.8421 19.03 23.1302 19.0484 23.4103 18.6911C24.2299 17.6476 25.2659 17.3872 26.4579 17.8146C26.9894 18.0049 27.1995 17.7678 27.2855 17.2753C27.4971 16.0499 28.2006 15.3303 29.3432 15.0582C29.4212 15.0398 29.4976 15.0164 29.574 14.9947C29.9432 14.8895 30.1039 14.6875 29.9591 14.2618C29.5262 12.9863 29.7857 11.8877 30.7771 10.9995C31.1288 10.684 31.1288 10.3835 30.7739 10.0713C29.8079 9.22147 29.5613 8.15297 29.9528 6.92252C30.1199 6.39829 29.975 6.13283 29.4721 6.036C28.2594 5.80226 27.5496 5.0276 27.3141 3.77044C27.2075 3.20447 26.9433 3.06923 26.4245 3.25622C25.3455 3.64355 24.4113 3.39813 23.6092 2.51328C23.0474 1.89555 22.9965 1.90223 22.4347 2.51829C21.6867 3.34137 20.8209 3.60349 19.7849 3.28127C19.6146 3.22784 19.438 3.19278 19.1229 3.11431V3.11765Z" fill="#004985"/>
                  </svg>


                </div>
                <div
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  Same Day Processing
                </div>
              </div>
            </Col>

            {/* Divider */}
            {/* <Col xs={1} className="d-flex justify-content-center">
              <div
                style={{
                  width: 1,
                  backgroundColor: "#d9e2ef",
                  height: "100%",
                  minHeight: 120, // match icon height
                }}
              />
            </Col> */}

            {/* Item 4 — label placeholder (update as needed) */}
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="d-flex flex-column align-items-center text-center">
              <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg width="50" height="50" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0936 32.7591C15.7262 33.779 15.6423 34.4956 14.8375 35.3025C14.3448 35.7963 13.8542 36.2934 13.356 36.7818C12.5706 37.5532 11.5658 37.5554 10.7868 36.7775C7.41609 33.4111 4.0475 30.0425 0.681061 26.6718C-0.0935745 25.896 -0.0892721 24.8836 0.679984 24.0983C1.14907 23.6195 1.62784 23.1482 2.1023 22.6738C2.9189 21.8572 3.51494 21.7528 4.59835 22.2628C5.26755 21.5925 5.912 20.8695 6.63822 20.2412C7.26869 19.6957 7.48279 19.0997 7.45912 18.2605C7.38381 15.6988 7.39994 13.135 7.40102 10.5723C7.40102 9.33178 8.23053 8.33552 9.43444 8.05579C10.8837 7.71904 12.3415 8.69702 12.5459 10.2205C12.6815 11.2275 12.6868 12.2517 12.7546 13.3491C12.8923 13.22 13.0042 13.121 13.1086 13.0156C15.7079 10.4152 18.3008 7.80726 20.9098 5.21654C22.3902 3.74581 24.8206 4.36767 25.3876 6.35159C25.6781 7.36938 25.4145 8.26128 24.6732 9.00902C23.7006 9.99022 22.7194 10.965 21.7436 11.9429C21.65 12.0365 21.5618 12.1355 21.4359 12.2679C22.0588 12.4755 22.5548 12.8166 22.9292 13.319C23.3036 13.8204 23.4553 14.3938 23.4457 15.0458C24.2526 15.0587 24.9551 15.2943 25.5243 15.8688C26.0837 16.4337 26.3183 17.1244 26.3312 17.9291C27.1037 17.9195 27.7696 18.1454 28.3237 18.6715C29.434 19.7248 29.5061 21.3999 28.4324 22.4877C26.3032 24.647 24.1654 26.7987 22.0007 28.9225C20.955 29.9489 19.7468 30.7461 18.2707 31.0302C17.9447 31.0926 17.5982 31.1216 17.2712 31.0829C16.9075 31.0398 16.673 31.1646 16.4363 31.4175C16.0081 31.8769 15.5487 32.3072 15.0925 32.7602L15.0936 32.7591ZM14.2383 31.8618C14.8526 31.2464 15.4787 30.6213 16.1006 29.993C16.3125 29.7789 16.5482 29.6541 16.858 29.7412C17.5799 29.9446 18.2685 29.8015 18.9356 29.5164C19.849 29.1258 20.6312 28.5406 21.3294 27.8434C23.38 25.7949 25.4253 23.74 27.4695 21.684C28.073 21.0772 28.0816 20.2681 27.505 19.6775C26.9433 19.1019 26.0956 19.1062 25.4952 19.6968C25.0164 20.167 24.5495 20.649 24.0729 21.1213C23.7125 21.4785 23.3348 21.5183 23.0519 21.2375C22.7679 20.9567 22.8023 20.5726 23.1552 20.2132C23.6253 19.7345 24.1052 19.2654 24.5753 18.7856C25.1832 18.1658 25.1972 17.3611 24.6194 16.7823C24.0417 16.2034 23.2423 16.2207 22.6162 16.8328C22.1363 17.3019 21.6683 17.7839 21.1906 18.2541C20.8345 18.6048 20.4429 18.6392 20.1674 18.353C19.8834 18.0583 19.9243 17.7054 20.2944 17.332C20.7667 16.8554 21.2595 16.3971 21.7092 15.9C21.8985 15.6902 22.0642 15.418 22.1309 15.1458C22.2762 14.5584 21.976 13.9785 21.4499 13.6848C20.9184 13.3879 20.2686 13.4632 19.8135 13.9011C19.2723 14.4218 18.7548 14.9683 18.2115 15.488C17.9242 15.7634 17.5692 15.7505 17.311 15.4955C17.0657 15.2524 17.0635 14.878 17.312 14.5907C17.3906 14.4992 17.4799 14.4175 17.5649 14.3314C19.0259 12.8693 20.4881 11.4082 21.9491 9.94611C22.5753 9.31995 23.2143 8.70455 23.8244 8.06332C24.5183 7.3328 24.2795 6.19989 23.3617 5.8384C22.7453 5.59525 22.217 5.75878 21.7522 6.22572C19.0055 8.9832 16.2491 11.731 13.5034 14.4896C13.1247 14.8704 12.6976 15.0393 12.1941 14.85C11.7024 14.6649 11.5001 14.2636 11.4829 13.7407C11.4496 12.7348 11.4022 11.7288 11.3452 10.7251C11.3108 10.1226 11.0644 9.63518 10.4748 9.38988C10.01 9.1973 9.43874 9.33609 9.06864 9.71372C8.76524 10.0247 8.69316 10.4077 8.69746 10.8251C8.72436 13.7106 8.74264 16.5961 8.77384 19.4816C8.77707 19.8152 8.67809 20.0702 8.43925 20.3036C7.66246 21.0643 6.90289 21.8421 6.12825 22.6049C5.93029 22.7997 5.70005 22.961 5.50424 23.1214C8.46938 26.0876 11.3431 28.9623 14.2393 31.8597L14.2383 31.8618ZM3.54614 23.1902C3.39336 23.2903 3.25888 23.3516 3.15882 23.4484C2.64025 23.9552 2.1292 24.4673 1.6203 24.9837C1.31906 25.2893 1.31798 25.4958 1.62784 25.8046C4.97491 29.1549 8.32413 32.5041 11.6744 35.8501C11.9735 36.1481 12.1672 36.1503 12.4663 35.8576C12.9849 35.352 13.4959 34.8377 14.0026 34.3213C14.3103 34.0082 14.3103 33.8145 13.9962 33.5004C10.6491 30.1501 7.30096 26.8009 3.94852 23.456C3.842 23.3494 3.69353 23.286 3.54614 23.1891V23.1902Z" fill="#004985"/>
                  <path d="M12.3882 3.31614C12.3882 2.47157 12.386 1.62593 12.3882 0.78136C12.3903 0.300441 12.6248 0.0110294 13.01 0.000270548C13.4027 -0.0104883 13.6728 0.300441 13.6738 0.788891C13.6771 2.4791 13.6771 4.16823 13.6738 5.85844C13.6728 6.33613 13.4285 6.62447 13.0434 6.63415C12.6388 6.64384 12.3903 6.35227 12.3882 5.84984C12.3849 5.00527 12.3882 4.15963 12.3882 3.31506V3.31614Z" fill="#004985"/>
                  <path d="M18.3783 4.2953C18.2384 4.53092 18.1728 4.71166 18.0501 4.83862C17.5402 5.3701 17.0173 5.88975 16.4901 6.40402C16.1781 6.70742 15.7843 6.7128 15.5261 6.44168C15.2808 6.18347 15.2905 5.80368 15.5778 5.50782C16.1006 4.96988 16.6343 4.44269 17.1668 3.91444C17.3734 3.70894 17.6391 3.59813 17.8931 3.75736C18.0846 3.87786 18.2094 4.10164 18.3772 4.2953H18.3783Z" fill="#004985"/>
                  <path d="M8.36301 3.61436C8.57711 3.73378 8.74926 3.78973 8.86653 3.90377C9.41631 4.43418 9.95747 4.97427 10.489 5.52189C10.7805 5.82206 10.7794 6.19109 10.518 6.45038C10.2598 6.70644 9.8757 6.70321 9.58521 6.41918C9.03866 5.88554 8.48029 5.36051 7.97893 4.78599C7.83691 4.62353 7.78956 4.28248 7.84981 4.06515C7.90038 3.88655 8.17366 3.77036 8.36301 3.61328V3.61436Z" fill="#004985"/>
                  </svg>


                </div>
                <div
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  Fun & Interactive
                </div>
              </div>
            </Col>

            {/* Divider */}
            {/* <Col xs={1} className="d-flex justify-content-center">
              <div
                style={{
                  width: 1,
                  backgroundColor: "#d9e2ef",
                  height: "100%",
                  minHeight: 120, // match icon height
                }}
              />
            </Col> */}

            {/* Item 5 — label placeholder (update as needed) */}
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg width="50" height="50" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.9458 0.977539C24.0096 1.00208 24.0726 1.03234 24.138 1.05115C25.1211 1.33413 25.8089 2.15201 25.8228 3.17926C25.8498 5.22314 25.8351 7.26701 25.8318 9.3117C25.8318 9.6413 25.6355 9.83678 25.355 9.8286C25.0745 9.8196 24.9174 9.63149 24.9174 9.28062C24.9158 7.3488 24.9174 5.41697 24.9166 3.48597C24.9166 2.42518 24.3948 1.89847 23.3438 1.89847C18.2845 1.89847 13.2251 1.89847 8.1657 1.89847C7.84727 1.89847 7.68806 2.05877 7.68806 2.37938C7.68806 3.54485 7.65616 4.71114 7.69705 5.87417C7.73795 7.05191 6.92825 7.74956 5.86664 7.71848C4.67418 7.68331 3.48009 7.7103 2.2868 7.7103C2.17639 7.7103 2.06516 7.7103 1.91958 7.7103C1.91222 7.86324 1.90076 7.99165 1.90076 8.12087C1.89995 15.4081 1.89913 22.6954 1.90076 29.9827C1.90076 30.9192 2.44874 31.4639 3.38521 31.4639C10.0566 31.4639 16.7272 31.4639 23.3986 31.4639C24.367 31.4639 24.9142 30.9151 24.9183 29.9451C24.9183 29.7921 24.9125 29.6384 24.9223 29.4854C24.9387 29.2172 25.1211 29.025 25.3648 29.0323C25.6233 29.0397 25.7975 29.1845 25.8253 29.4388C25.9848 30.9045 25.3566 32.0454 23.9695 32.3439C23.9409 32.3505 23.9147 32.3709 23.8877 32.384H2.88876C2.87322 32.3717 2.85931 32.3529 2.84132 32.3472C1.55807 31.9767 0.983109 31.2218 0.983109 29.8993C0.983109 22.6652 0.987197 15.4302 0.976564 8.19612C0.975747 7.4085 1.23828 6.7771 1.79444 6.22831C3.17502 4.86572 4.54496 3.49333 5.90427 2.10948C6.39581 1.60894 6.89963 1.14929 7.603 0.977539C13.0517 0.977539 18.5004 0.977539 23.9491 0.977539L23.9458 0.977539ZM6.76876 2.57403C5.3244 3.98978 3.94709 5.34091 2.56979 6.69204C2.59105 6.72067 2.61232 6.74929 2.63358 6.77874C2.6712 6.78201 2.70801 6.78937 2.74563 6.78937C3.83668 6.78937 4.92773 6.79509 6.01877 6.78773C6.51686 6.78446 6.7614 6.52928 6.76713 6.02138C6.77449 5.37771 6.76877 4.73405 6.76958 4.09038C6.76958 3.61274 6.76958 3.13591 6.76958 2.57485L6.76876 2.57403Z" fill="#004985"/>
                  <path d="M22.1709 23.8332C21.1641 23.5772 20.6775 23.0161 20.5818 22.0265C20.545 21.6446 20.3577 21.3575 20.0011 21.2332C18.9125 20.8545 18.3759 19.496 19.09 18.4311C19.3091 18.104 19.2789 17.7596 19.085 17.4178C18.4422 16.2858 18.7906 15.1899 19.9643 14.6591C20.3568 14.4816 20.5531 14.1962 20.5899 13.7619C20.6905 12.5817 21.6924 11.8341 22.8497 12.0885C23.3266 12.1932 23.6717 12.0664 23.989 11.709C24.7562 10.8453 26.001 10.8494 26.7567 11.7147C27.0626 12.0648 27.4012 12.1956 27.8674 12.0926C29.0402 11.8325 30.0143 12.5457 30.1386 13.7414C30.1869 14.206 30.4053 14.5012 30.8379 14.6885C31.911 15.1531 32.2913 16.339 31.6942 17.3466C31.4546 17.7523 31.4546 18.1171 31.6942 18.5219C32.2905 19.5295 31.9102 20.7179 30.8379 21.1808C30.3905 21.3738 30.1795 21.683 30.1346 22.1582C30.0577 22.9769 29.6038 23.5134 28.8276 23.7555C28.6215 23.8201 28.5618 23.9011 28.5634 24.1096C28.5724 25.3773 28.5724 26.6442 28.5659 27.9119C28.5626 28.5114 28.2469 28.9228 27.7169 28.9621C27.4895 28.9785 27.2286 28.9073 27.0258 28.7969C26.5253 28.5237 26.0468 28.2096 25.5651 27.9021C25.4293 27.8154 25.3263 27.804 25.1823 27.8972C24.703 28.2072 24.2156 28.5049 23.7257 28.7977C22.9651 29.2524 22.175 28.8091 22.1717 27.9234C22.1668 26.6761 22.1701 25.4297 22.1701 24.1824C22.1701 24.0712 22.1701 23.96 22.1701 23.8324L22.1709 23.8332ZM31.0612 16.4707C31.0375 15.9669 30.8437 15.6757 30.4658 15.5236C29.7101 15.2185 29.3118 14.6615 29.23 13.8518C29.1613 13.1714 28.6992 12.845 28.0351 12.9963C27.2654 13.1714 26.6308 12.962 26.1122 12.3682C25.6681 11.8603 25.0711 11.8538 24.636 12.3576C24.1109 12.9644 23.468 13.173 22.6878 12.9931C22.0425 12.8442 21.5509 13.2114 21.5002 13.8682C21.4413 14.6304 21.0684 15.1694 20.3716 15.481C19.6592 15.8 19.5022 16.2981 19.8947 16.9876C20.2464 17.6051 20.2914 18.2553 19.8996 18.8466C19.4956 19.4567 19.7197 20.1634 20.4215 20.4243C21.0758 20.6672 21.4201 21.2143 21.4929 21.9079C21.5755 22.7029 22.0032 23.0292 22.7786 22.8624C23.4762 22.7119 24.0716 22.9016 24.5542 23.4226C25.1275 24.0409 25.6084 24.0467 26.1752 23.4332C26.6569 22.9114 27.2483 22.7119 27.9459 22.8599C28.7327 23.0268 29.1449 22.7372 29.2439 21.9251C29.3347 21.1775 29.7256 20.6647 30.411 20.3687C31.044 20.0955 31.2338 19.5344 30.8829 18.9472C30.4781 18.2692 30.4797 17.601 30.8813 16.9213C30.977 16.7602 31.0236 16.5696 31.062 16.4723L31.0612 16.4707ZM27.6294 23.6753C27.3889 23.7702 27.1788 23.8446 26.9767 23.9379C26.9072 23.9698 26.8581 24.0475 26.8033 24.108C25.965 25.0404 24.7791 25.0387 23.931 24.0998C23.7093 23.8545 23.4574 23.6982 23.1131 23.7457V28.0788C23.2464 28.0052 23.3429 27.9569 23.4353 27.9005C23.8786 27.6298 24.326 27.3656 24.7611 27.0818C25.1774 26.8103 25.5757 26.8168 25.9879 27.0834C26.347 27.3157 26.7142 27.5349 27.079 27.7582C27.2483 27.862 27.4208 27.961 27.6302 28.0853V23.6745L27.6294 23.6753Z" fill="#004985"/>
                  <path d="M16.2357 4.15698C17.7553 4.15698 19.275 4.15534 20.7946 4.15698C21.5323 4.1578 21.9306 4.55365 21.9347 5.28728C21.9371 5.69622 21.9363 6.10516 21.9347 6.51328C21.9331 7.31889 21.5405 7.70902 20.725 7.70902C18.8889 7.71065 17.0536 7.70902 15.2175 7.70902C14.9729 7.70902 14.7276 7.71638 14.483 7.70656C14.1567 7.69348 13.9563 7.498 13.9694 7.22156C13.9825 6.95902 14.1763 6.79136 14.4969 6.79054C16.5367 6.78727 18.5765 6.78891 20.6163 6.78891C20.8818 6.78891 21.0148 6.65396 21.0154 6.38406C21.0154 6.03646 21.0072 5.68886 21.0187 5.34208C21.0252 5.14825 20.968 5.07218 20.7619 5.07218C17.7226 5.07709 14.6834 5.07709 11.6442 5.07218C11.4512 5.07218 11.3669 5.12371 11.3735 5.32981C11.3849 5.72812 11.3841 6.12724 11.3735 6.52555C11.3685 6.72757 11.4495 6.79954 11.645 6.79136C11.8585 6.78155 12.0736 6.78563 12.287 6.79381C12.552 6.80363 12.7 6.95739 12.7336 7.21093C12.7655 7.44566 12.5839 7.67794 12.3238 7.6943C11.9893 7.71556 11.6483 7.7221 11.3178 7.67957C10.8148 7.61414 10.4803 7.2232 10.4648 6.71284C10.4492 6.20249 10.4501 5.6905 10.4623 5.18014C10.4779 4.56019 10.895 4.16025 11.5223 4.15862C13.0926 4.15453 14.6638 4.15698 16.2341 4.15698H16.2357Z" fill="#004985"/>
                  <path d="M10.7492 19.4971C8.86322 19.4971 6.97638 19.4971 5.09036 19.4963C4.97913 19.4963 4.86217 19.4987 4.7583 19.4668C4.53666 19.399 4.42134 19.2297 4.43933 19.0023C4.45651 18.7766 4.59228 18.6261 4.8221 18.5876C4.92188 18.5713 5.02575 18.5778 5.12717 18.5778C8.89022 18.5778 12.6524 18.5778 16.4155 18.5778C16.5071 18.5778 16.6003 18.5713 16.6903 18.5844C16.9316 18.6203 17.0788 18.7594 17.0935 19.0088C17.1091 19.2755 16.961 19.43 16.7132 19.4865C16.6159 19.5086 16.5104 19.4971 16.4081 19.4971C14.5221 19.4971 12.6353 19.4971 10.7492 19.4971Z" fill="#004985"/>
                  <path d="M10.7583 16.2584C8.88208 16.2584 7.00587 16.2584 5.12967 16.2584C5.02743 16.2584 4.92437 16.2649 4.82459 16.2494C4.5915 16.2142 4.42711 16.0547 4.45164 15.8388C4.46964 15.6777 4.60704 15.5035 4.73872 15.3906C4.82051 15.3203 4.99062 15.3399 5.12148 15.3399C8.88372 15.3374 12.6468 15.3382 16.409 15.3382C16.4908 15.3382 16.5726 15.3333 16.6535 15.3423C16.9373 15.3734 17.1099 15.5648 17.0968 15.8282C17.0846 16.0784 16.9112 16.2502 16.6323 16.2543C16.0818 16.2633 15.5314 16.2584 14.9802 16.2584C13.5734 16.2584 12.1659 16.2584 10.7591 16.2584H10.7583Z" fill="#004985"/>
                  <path d="M10.7836 21.813C12.6598 21.813 14.5352 21.813 16.4114 21.813C16.5234 21.813 16.6379 21.8081 16.7467 21.8302C16.961 21.8744 17.1197 22.0249 17.0829 22.2342C17.0542 22.3978 16.9283 22.5696 16.7974 22.6816C16.7148 22.752 16.5447 22.7307 16.413 22.7307C12.6508 22.7331 8.88939 22.7323 5.12715 22.7323C5.08626 22.7323 5.04537 22.7331 5.00447 22.7323C4.64951 22.7209 4.43523 22.5467 4.4336 22.2694C4.43278 21.9905 4.64379 21.8147 5.00283 21.8139C6.92975 21.8114 8.85667 21.813 10.7836 21.813Z" fill="#004985"/>
                  <path d="M10.7852 12.1142C12.6508 12.1142 14.5164 12.1142 16.3819 12.1142C16.5038 12.1142 16.629 12.1101 16.7475 12.1339C16.9635 12.1764 17.0821 12.3212 17.0943 12.5412C17.1066 12.7734 16.9994 12.9386 16.7737 13C16.6584 13.0311 16.5316 13.0319 16.4106 13.0319C12.6483 13.0335 8.88693 13.0335 5.1247 13.0335C5.0838 13.0335 5.04291 13.0343 5.00202 13.0335C4.64542 13.0204 4.43278 12.8462 4.4336 12.569C4.4336 12.2909 4.64624 12.1159 5.00529 12.115C6.36133 12.1126 7.71737 12.1134 9.07259 12.1134C9.64347 12.1134 10.2143 12.1134 10.7852 12.1134V12.1142Z" fill="#004985"/>
                  <path d="M7.8469 26.5495C8.78418 26.5495 9.72229 26.5479 10.6596 26.5495C11.0309 26.5495 11.228 26.7049 11.237 26.9911C11.246 27.2872 11.0325 27.468 10.6579 27.468C8.77273 27.4696 6.88671 27.4704 5.00151 27.468C4.57212 27.468 4.33003 27.1645 4.47643 26.8276C4.57702 26.5953 4.77332 26.547 5.00396 26.5479C5.95188 26.552 6.8998 26.5495 7.84772 26.5495H7.8469Z" fill="#004985"/>
                  <path d="M25.3789 14.084C27.5087 14.0881 29.2221 15.813 29.2172 17.9476C29.2123 20.0766 27.4841 21.7908 25.3519 21.7827C23.2434 21.7745 21.5259 20.0488 21.5234 17.9354C21.521 15.813 23.2565 14.0799 25.3789 14.084ZM25.3773 15.0057C23.7677 15.0016 22.4632 16.2955 22.4436 17.9149C22.4239 19.5261 23.7489 20.8601 25.3699 20.8617C26.9852 20.8634 28.2914 19.5662 28.2987 17.9525C28.3061 16.3209 27.0057 15.009 25.3773 15.0049V15.0057Z" fill="#004985"/>
                  </svg>




                </div>
                <div
                  style={{ color: "#004985", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {/* Replace this with your exact label if different */}
                  State Licensed
                </div>
              </div>
            </Col>

            {/* Divider */}
            {/* <Col xs={1} className="d-flex justify-content-center">
              <div
                style={{
                  width: 1,
                  backgroundColor: "#d9e2ef",
                  height: "100%",
                  minHeight: 120, // match icon height
                }}
              />
            </Col> */}

            {/* Item 6 — label placeholder (update as needed) */}
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="d-flex flex-column align-items-center text-center">
                <div
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* SVG */}
                  <svg width="50" height="50" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5809 0C17.1001 0.134007 17.5822 0.333157 17.9563 0.741692C18.4253 1.25539 18.5751 1.86772 18.5742 2.5452C18.5686 5.55664 18.5714 8.56808 18.5714 11.5795C18.5714 17.3167 18.5714 23.0529 18.5723 28.7901C18.5723 29.3736 18.4867 29.9273 18.1247 30.4085C17.6185 31.0803 16.9345 31.3623 16.1053 31.3614C12.3587 31.3577 8.61301 31.3595 4.86639 31.3595C4.23358 31.3595 3.60078 31.3614 2.96797 31.3595C1.4911 31.3558 0.536296 30.4196 0.502795 28.9437C0.501864 28.8925 0.502795 28.8413 0.502795 28.7901C0.502795 20.0527 0.503722 11.3143 0.5 2.57685C0.5 1.89006 0.639581 1.26469 1.11791 0.742623C1.49202 0.334087 1.97407 0.134938 2.49335 0.000930626H16.5799L16.5809 0ZM17.6343 25.8457H17.2751C13.1618 25.8457 9.04853 25.8457 4.93432 25.8457C4.82172 25.8457 4.7082 25.8541 4.59839 25.8364C4.34433 25.7964 4.18984 25.6447 4.19263 25.3813C4.19543 25.118 4.35363 24.9719 4.60768 24.9346C4.70819 24.9197 4.81149 24.9272 4.91385 24.9272C9.03736 24.9272 13.1609 24.9272 17.2853 24.9272H17.6315V4.61022H1.44642V24.9281C1.8959 24.9281 2.32305 24.9207 2.7502 24.9309C3.08987 24.9393 3.28623 25.1561 3.23876 25.4539C3.1941 25.7368 2.99868 25.842 2.73625 25.8448C2.31003 25.8494 1.8838 25.8457 1.44735 25.8457C1.43711 25.9239 1.42408 25.9723 1.42408 26.0206C1.42315 27.021 1.42129 28.0214 1.42595 29.0218C1.42595 29.1633 1.44736 29.3085 1.48552 29.4443C1.65954 30.0576 2.17974 30.4382 2.86745 30.4382C7.31761 30.441 11.7678 30.4401 16.2188 30.4392C16.27 30.4392 16.3212 30.4373 16.3715 30.4326C17.0536 30.374 17.6036 29.8743 17.625 29.1921C17.6594 28.0922 17.6343 26.9894 17.6343 25.8466V25.8457ZM1.43806 3.64983H17.652C17.652 3.22734 17.6566 2.82997 17.652 2.4326C17.639 1.46663 17.0862 0.919438 16.1211 0.918507C11.7324 0.917576 7.34459 0.918507 2.95586 0.918507C2.89444 0.918507 2.83302 0.918507 2.77253 0.921299C2.04294 0.957593 1.49388 1.46198 1.44549 2.18971C1.41385 2.66618 1.43992 3.14731 1.43992 3.65076L1.43806 3.64983Z" fill="#004985"/>
                  <path d="M10.9057 28.1365C10.9103 28.8866 10.3054 29.5064 9.55722 29.5194C8.79785 29.5324 8.16874 28.9136 8.16409 28.1505C8.15944 27.3883 8.78388 26.763 9.54325 26.7676C10.2915 26.7723 10.901 27.3846 10.9057 28.1365ZM9.54511 28.5981C9.78521 28.5925 9.98436 28.3841 9.98249 28.1412C9.98156 27.8983 9.77962 27.6926 9.53953 27.6898C9.28733 27.687 9.07889 27.9048 9.0882 28.1617C9.09657 28.4055 9.30409 28.6037 9.54418 28.5981H9.54511Z" fill="#004985"/>
                  <path d="M10.4513 2.7554C10.1666 2.7554 9.88087 2.76192 9.5961 2.75354C9.28249 2.74424 9.09172 2.56649 9.08986 2.29941C9.088 2.03139 9.27783 1.84434 9.59051 1.84062C10.1712 1.83224 10.7519 1.83131 11.3317 1.84062C11.6416 1.84527 11.8286 2.03884 11.8212 2.30871C11.8147 2.56556 11.6323 2.74145 11.3373 2.75261C11.0423 2.76285 10.7463 2.75447 10.4513 2.7554Z" fill="#004985"/>
                  <path d="M8.1443 2.28112C8.15174 2.52587 7.96099 2.73712 7.72089 2.75015C7.47149 2.76411 7.25 2.55007 7.25 2.29601C7.25 2.05312 7.45101 1.84653 7.69111 1.84188C7.9312 1.83722 8.13779 2.0373 8.14523 2.28112H8.1443Z" fill="#004985"/>
                  </svg>


                </div>
                <div
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
      
      <section
        style={{
          backgroundColor: "#E9F4FF",
          borderRadius: "12px",
          padding: "24px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h3 style={{ color: "#004985", fontWeight: 700, marginBottom: "12px" }}>
          Lower your Insurance Premiums
        </h3>
        <p style={{ color: "#333", fontSize: "18px", lineHeight: 1.6 }}>
          Did you know that, in many states, insurance companies offer policy holders
          a safe driving discount for taking an online <b>Insurance Reduction</b> course? 
          In fact, insurance companies are required by law in some states to give drivers 
          55 and older an auto liability insurance discount for completing a 
          <b> Mature Driver</b> course. In some states, the discount can be as much as 15%! 
          Different states have different rules when it comes to online insurance reduction 
          and online mature driver courses, so select your state below to find out if you are 
          eligible to start saving money today!
        </p>
        <p style={{ fontSize: "18px", color: "#555", marginTop: "16px" }}>
          <i>
            Note: For specific information about obtaining an insurance discount,
            you must contact your insurance agent.
          </i>
        </p>
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
          <h1 className="text-center text-white fw-bold mb-2">
            We Also Offer
          </h1>

          {/* Responsive inner padding: tight on mobile, roomy on md+, remove on lg+ */}
          <Container className="px-3 px-md-5 px-lg-0">
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
                    background: "#FFA006",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.67594 74C5.73992 73.6485 4.73635 73.4186 3.88332 72.9222C1.37826 71.4658 0.0794061 69.2135 0.0446671 66.3161C-0.0035814 62.4124 -0.0267407 58.5067 0.048527 54.603C0.131514 50.2839 2.15988 47.0466 5.79396 44.7673C6.10854 44.5703 6.41154 44.24 6.56015 43.9019C8.54799 39.3878 10.4663 34.8447 12.487 30.346C14.1429 26.6586 17.0494 24.7174 21.11 24.6575C24.4546 24.6073 27.7991 24.6478 31.109 24.6478C31.7439 26.7031 32.3635 28.71 33.0061 30.7922H32.2959C28.7081 30.7922 25.1204 30.8154 21.5346 30.7826C19.8092 30.7671 18.6821 31.5031 18.0105 33.1005C16.6923 36.2258 15.3124 39.326 13.9615 42.4359C13.8785 42.629 13.8129 42.8299 13.6913 43.1583H14.6003C23.8215 43.1583 33.0428 43.1622 42.2641 43.1467C42.8508 43.1467 43.312 43.2935 43.7752 43.6566C45.985 45.3777 48.3897 46.7762 50.8774 48.0607C54.0174 49.6813 57.0899 49.6948 60.1893 48.024C61.3743 47.3846 62.5651 46.7607 63.8813 46.0634C64.385 46.61 64.9775 47.1663 65.4716 47.8018C66.9596 49.7238 67.7875 51.9084 67.8068 54.3499C67.8377 58.3271 67.8589 62.3042 67.8126 66.2794C67.7663 70.1928 65.2516 73.1192 61.3975 73.8764C61.3087 73.8938 61.2296 73.9536 61.1447 73.9942H59.1221C59.014 73.9498 58.9098 73.886 58.7979 73.8667C55.1136 73.1694 52.5661 70.1948 52.4503 66.434C52.4329 65.8893 52.4484 65.3426 52.4484 64.7844H15.4514C15.4514 65.2576 15.4572 65.6884 15.4514 66.1172C15.3896 69.6926 13.3227 72.5822 10.0784 73.6195C9.62489 73.7644 9.15978 73.8706 8.70045 73.9961H6.67787L6.67594 74ZM15.4147 58.5569C16.4723 58.5569 17.5319 58.582 18.5875 58.5511C20.3033 58.5009 21.5828 57.1797 21.5847 55.4934C21.5867 53.8052 20.309 52.4589 18.5972 52.4299C16.5051 52.3952 14.4131 52.3971 12.323 52.428C10.6111 52.4531 9.2968 53.7898 9.2775 55.449C9.2582 57.143 10.5744 58.5067 12.3133 58.555C13.3458 58.584 14.3803 58.5608 15.4147 58.5589V58.5569ZM52.4194 58.5569C53.4538 58.5569 54.4883 58.5782 55.5208 58.5531C57.2848 58.5086 58.5759 57.1894 58.5701 55.4722C58.5643 53.7589 57.2635 52.4454 55.4899 52.4241C53.4461 52.399 51.4023 52.399 49.3585 52.4241C47.6003 52.4473 46.2706 53.7782 46.261 55.4683C46.2513 57.1855 47.5926 58.5222 49.3894 58.5589C50.3988 58.5782 51.4081 58.5627 52.4194 58.5589V58.5569Z" fill="white"/>
                  <path d="M73.9981 21.791C73.7009 23.1992 73.5079 24.6382 73.091 26.0096C71.7478 30.4291 69.042 33.9543 65.6376 36.9791C62.9935 39.326 60.0523 41.2306 56.8679 42.7642C55.9512 43.2066 55.1059 43.2278 54.1834 42.7739C48.6908 40.0755 43.9064 36.5252 40.4692 31.3679C38.1957 27.9567 37.0108 24.1939 37.0165 20.0738C37.0243 16.0735 37.0165 12.0713 37.0185 8.07093C37.0185 6.67246 37.555 5.93266 38.8731 5.48453C44.0608 3.72292 49.2524 1.97096 54.4343 0.190037C55.1811 -0.0668643 55.8682 -0.0610695 56.6093 0.193901C61.77 1.96517 66.9326 3.72678 72.1048 5.45942C73.0234 5.76654 73.5966 6.35954 74 7.18626V21.793L73.9981 21.791ZM54.303 21.735C53.7761 21.2869 53.2995 20.8832 52.8247 20.4775C52.3306 20.0545 51.8481 19.6161 51.3406 19.2104C49.9471 18.0998 48.106 18.2485 47.004 19.5465C45.8769 20.8735 46.0313 22.7491 47.3958 23.9351C49.1211 25.4359 50.8562 26.9291 52.6047 28.4048C54.166 29.7221 56.0091 29.529 57.2809 27.918C60.0253 24.4392 62.7639 20.9527 65.4928 17.4623C66.6817 15.9422 66.5118 14.0801 65.1165 12.9656C63.7308 11.8588 61.8645 12.1369 60.6641 13.6455C59.4637 15.1541 58.2826 16.6762 57.0918 18.1905C56.1712 19.3611 55.2506 20.5316 54.305 21.735H54.303Z" fill="white"/>
                  </svg>

                </div>
                <div
                  className="mt-3"
                  style={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Insurance Reduction
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
                    background: "#FFA006",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0095245 23.3466C0.422127 23.3466 0.746473 23.3466 1.06861 23.3466C18.1067 23.3466 35.1425 23.3422 52.1806 23.3685C52.7079 23.3685 53.3059 23.5767 53.7538 23.8681C56.311 25.5266 59.0845 26.4249 62.1493 26.3876C62.478 26.3832 62.809 26.381 63.1377 26.3788C63.1642 26.3788 63.1907 26.392 63.312 26.4249C63.3253 26.6812 63.3495 26.9682 63.3495 27.2574C63.3495 34.4721 63.3584 41.6889 63.3495 48.9036C63.3451 53.2416 60.5959 55.9912 56.2448 55.9934C39.8687 56.0022 23.4904 56.0022 7.11423 55.9934C2.76756 55.989 0.0117309 53.2219 0.0095245 48.9014C0.0095245 40.703 0.0095245 32.5024 0.0095245 24.304V23.3444V23.3466ZM21.2133 40.1575C24.5826 36.6236 23.5963 32.5003 21.4141 30.3685C18.9275 27.9388 14.9691 27.7613 12.4185 29.9851C11.1035 31.1287 10.3224 32.5791 10.0929 34.2924C9.78402 36.5841 10.5099 38.5318 12.2839 40.1246C11.9463 40.3218 11.6882 40.4664 11.4344 40.6198C9.0228 42.0833 7.42534 44.1603 6.74135 46.8902C6.62661 47.3481 6.62661 47.8761 6.73031 48.3384C7.07672 49.883 8.29909 50.7418 10.1084 50.7462C14.5102 50.7571 18.9142 50.7506 23.3161 50.7462C23.6161 50.7462 23.9206 50.7221 24.2185 50.6717C25.7343 50.4154 26.6963 49.3265 26.7802 47.8016C26.8618 46.3337 26.2749 45.0849 25.4695 43.9171C24.3818 42.3396 22.9785 41.0974 21.2133 40.1619V40.1575ZM42.3112 33.6921C45.6385 33.6921 48.9658 33.6965 52.2931 33.6877C52.6462 33.6877 53.019 33.6746 53.3478 33.5672C53.9722 33.3635 54.2591 32.8815 54.1951 32.233C54.1311 31.5845 53.7494 31.1945 53.0985 31.0915C52.8822 31.0586 52.6594 31.0674 52.441 31.0674C45.676 31.0674 38.9133 31.0674 32.1484 31.0674C31.9564 31.0674 31.7623 31.0586 31.5725 31.0827C30.8775 31.166 30.4693 31.5669 30.4075 32.2505C30.3458 32.9341 30.6833 33.4139 31.3541 33.5979C31.6652 33.6834 32.005 33.6899 32.3315 33.6899C35.6588 33.6965 38.9861 33.6943 42.3134 33.6943L42.3112 33.6921ZM42.3487 45.5011C38.856 45.5011 35.3654 45.4946 31.8726 45.5055C30.9459 45.5077 30.3965 46.0116 30.3943 46.7916C30.3943 47.5365 30.9216 48.0448 31.7821 48.1171C32.0006 48.1346 32.2212 48.1259 32.4419 48.1259C39.0126 48.1259 45.5856 48.1259 52.1563 48.1259C52.4851 48.1259 52.8205 48.1302 53.1404 48.0667C53.9038 47.9111 54.3142 47.2955 54.1884 46.5593C54.0715 45.878 53.5574 45.5099 52.6594 45.5077C49.2218 45.5011 45.7864 45.5055 42.3487 45.5077V45.5011ZM39.6414 38.2843C37.0864 38.2843 34.5291 38.2799 31.9741 38.2865C30.9525 38.2887 30.4053 38.7334 30.3833 39.5397C30.3612 40.3788 30.9327 40.9002 31.9741 40.9024C37.0864 40.9134 42.1965 40.9134 47.3088 40.9024C48.3657 40.9024 48.9394 40.4116 48.9416 39.5791C48.9416 38.7444 48.3789 38.2865 47.3088 38.2843C44.7537 38.2777 42.1965 38.2843 39.6414 38.2843Z" fill="white"/>
                  <path d="M0.0536531 20.6671C0.0536531 19.2058 -0.0831456 17.797 0.0801303 16.4255C0.492733 12.9595 3.28607 10.6568 6.94654 10.6525C14.294 10.6415 21.6414 10.6503 28.9866 10.6503C34.7917 10.6503 40.599 10.6503 46.4042 10.6503H47.4368C47.236 14.3573 48.1803 17.6481 50.3934 20.6693H0.0536531V20.6671Z" fill="white"/>
                  <path d="M74 11.8093C73.9912 18.5814 68.8017 23.6972 61.9264 23.7059C55.2917 23.7147 50.047 18.474 50.0668 11.8531C50.0845 5.32854 55.5388 -0.041387 62.1007 0.000240401C68.6295 0.0418678 74.0066 5.37893 73.9978 11.8093H74ZM52.9065 10.5955C54.5812 10.5955 56.2559 10.6108 57.9306 10.5758C58.1225 10.5714 58.3741 10.3194 58.4888 10.1201C59.2831 8.75294 60.4481 7.98612 62.0456 7.9905C63.6408 7.99489 64.8102 8.75513 65.5891 10.1376C65.6928 10.3216 65.909 10.5714 66.0789 10.5736C67.7735 10.6065 69.4702 10.5933 71.1669 10.5933C71.0191 6.39552 66.5555 2.57237 61.9727 2.62715C57.3591 2.68192 52.9242 6.54669 52.9065 10.5955ZM52.8955 13.2597C53.019 16.8659 57.2311 21.0286 60.704 20.9147C60.704 19.2343 60.7107 17.5495 60.693 15.8668C60.693 15.7441 60.5474 15.5667 60.426 15.5119C59.3978 15.0431 58.7094 14.2609 58.2902 13.2618H52.8955V13.2597ZM63.3606 20.9607C67.4359 20.6496 71.0919 16.638 71.1052 13.2202C69.4592 13.2202 67.8132 13.2093 66.165 13.2356C65.9796 13.2377 65.7744 13.4415 65.6156 13.5927C64.9757 14.2039 64.3491 14.8283 63.7246 15.4571C63.5856 15.5974 63.376 15.7704 63.3738 15.9304C63.3473 17.5889 63.3584 19.2452 63.3584 20.9607H63.3606ZM63.3165 11.8487C63.2988 11.1191 62.7141 10.5626 61.9882 10.5845C61.2645 10.6065 60.7261 11.1914 60.7482 11.932C60.7702 12.655 61.377 13.2421 62.072 13.2158C62.7715 13.1895 63.3341 12.5717 63.3165 11.8487Z" fill="white"/>
                  <path d="M16.774 48.1215C14.6007 48.1215 12.4273 48.1259 10.254 48.1215C9.2633 48.1193 9.10444 47.9221 9.44864 47.0019C10.6004 43.9171 12.8399 42.0921 16.1341 41.8423C19.2253 41.6057 21.7318 42.8677 23.3668 45.5274C24.6863 47.6723 24.4038 48.1237 21.9745 48.1237C20.2425 48.1237 18.5082 48.1237 16.7762 48.1237L16.774 48.1215Z" fill="white"/>
                  <path d="M16.7718 31.0718C18.9782 31.0893 20.7897 32.9187 20.7831 35.1228C20.7765 37.3553 18.9054 39.1847 16.6637 39.1541C14.4705 39.1256 12.6965 37.2852 12.7164 35.0571C12.7362 32.8398 14.5521 31.0543 16.7718 31.0718Z" fill="white"/>
                  </svg>


                </div>
                <div
                  className="mt-3"
                  style={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Mature Driver Courses
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
                    background: "#FFA006",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg width="66" height="74" viewBox="0 0 66 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.14283 74C2.18971 72.1013 2.16823 70.1988 2.30496 68.3059C2.40263 66.9442 2.9984 65.7177 3.83053 64.5858C8.57719 68.4624 13.318 68.4797 18.1252 64.5858C19.0003 65.7486 19.5863 67.062 19.6859 68.5203C19.809 70.3417 19.7953 72.1709 19.8422 73.9981H2.14283V74Z" fill="white"/>
                  <path d="M46.1676 74C46.2125 72.1747 46.2047 70.3437 46.3219 68.5222C46.4137 67.0813 47.0095 65.7853 47.8787 64.582C52.6254 68.4604 57.3681 68.4797 62.1714 64.5878C63.2848 66.0673 63.8025 67.7574 63.8415 69.5962C63.8728 71.0641 63.8591 72.5321 63.865 74H46.1676Z" fill="white"/>
                  <path d="M24.2294 74C24.2763 71.9816 24.2431 69.9593 24.4013 67.9486C24.499 66.7008 25.0967 65.5709 25.8878 64.5568C29.9723 68.4604 36.1273 68.3909 40.12 64.5568C41.1181 65.8645 41.6924 67.3324 41.7628 68.9452C41.837 70.6257 41.7784 72.3138 41.7784 73.9981H24.2275L24.2294 74Z" fill="white"/>
                  <path d="M11.0169 21.7488V39.144H15.3397V45.6454H0V0H66V45.6319H50.6857V39.1749H54.9948V21.7488C53.6587 21.7488 52.3499 21.6986 51.0471 21.7681C50.2618 21.8106 49.918 21.5653 49.6739 20.812C48.4354 16.9876 47.1189 13.1883 45.8609 9.36975C45.6792 8.81927 45.4253 8.6493 44.8334 8.6493C36.9614 8.67248 29.0894 8.67055 21.2154 8.65123C20.6118 8.65123 20.3305 8.80382 20.1352 9.40066C18.8518 13.312 17.5099 17.2059 16.2187 21.1153C16.0507 21.6252 15.8105 21.7739 15.2928 21.7604C13.8845 21.7276 12.4741 21.7488 11.0169 21.7488Z" fill="white"/>
                  <path d="M41.8135 26.1526V30.4136H46.1813V26.1565H50.5802V34.7498H15.4335V26.17H19.7875V30.4174H24.1806V26.1546H41.8135V26.1526Z" fill="white"/>
                  <path d="M20.6704 21.6966C20.9087 20.9704 21.1177 20.3118 21.3385 19.657C22.0124 17.6482 22.7039 15.6452 23.3602 13.6326C23.5086 13.1729 23.7137 12.9971 24.2294 12.9991C30.0797 13.0203 35.93 13.0145 41.7784 13.0068C42.1691 13.0068 42.4503 13.0319 42.6007 13.4935C43.4622 16.1242 44.3607 18.7434 45.2436 21.3683C45.2729 21.4533 45.269 21.5499 45.2886 21.6966H20.6704Z" fill="white"/>
                  <path d="M32.9922 52.2242C36.0277 52.2145 38.5378 54.7004 38.5143 57.6923C38.4909 60.6745 36.0238 63.1082 33.0156 63.1179C29.9879 63.1275 27.472 60.632 27.4935 57.644C27.515 54.6617 29.9782 52.2338 32.9922 52.2242Z" fill="white"/>
                  <path d="M5.48893 57.6652C5.48893 54.6675 7.90914 52.2531 10.9447 52.2222C13.9782 52.1913 16.4785 54.6521 16.4785 57.6691C16.4785 60.6803 13.9704 63.1488 10.9427 63.1179C7.92086 63.087 5.49088 60.6571 5.49088 57.6652H5.48893Z" fill="white"/>
                  <path d="M60.5208 57.6324C60.5345 60.6571 58.0713 63.1198 55.03 63.1179C52.0218 63.1179 49.5449 60.6764 49.5313 57.7019C49.5176 54.681 51.9886 52.2184 55.03 52.2203C58.0518 52.2222 60.5052 54.6405 60.5189 57.6305L60.5208 57.6324Z" fill="white"/>
                  <path d="M37.3462 45.6512H28.6616V39.2058H37.3462V45.6512Z" fill="white"/>
                  <path d="M24.1532 45.6396H19.8422V39.2135H24.1532V45.6396Z" fill="white"/>
                  <path d="M46.1734 39.1942V45.6242H41.8507V39.1942H46.1734Z" fill="white"/>
                  </svg>

                </div>
                <div
                  className="mt-3"
                  style={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}
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
                    background: "#FFA006",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg width="74" height="76" viewBox="0 0 74 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.8207 34.5686C52.3611 34.7022 49.5088 36.0007 47.2489 38.5879C47.1363 38.7165 46.9208 38.761 46.7494 38.8303C46.6858 38.855 46.605 38.8352 46.5315 38.8352C31.2071 38.8352 15.8827 38.8352 0.558231 38.8352C0.413777 38.8352 0.271771 38.8204 0.0465193 38.8055C0.0293806 38.526 0 38.2663 0 38.0066C0 29.2186 0 20.4282 0 11.6402C0 9.65157 0.905902 8.72158 2.85237 8.71663C5.61414 8.70921 8.37592 8.71663 11.1377 8.71663C11.3532 8.71663 11.5686 8.73889 11.8306 8.75126C11.6984 12.5578 13.3192 15.2612 16.8865 16.9135C16.0638 16.9506 15.393 16.9258 14.7417 17.0223C10.7141 17.6159 8.1066 20.3688 7.39412 24.717C6.88485 27.8311 6.3658 30.9451 5.84429 34.0566C5.55783 35.7657 6.63267 37.0964 8.35878 37.1013C13.8823 37.1112 19.4059 37.1112 24.9294 37.1013C26.4915 37.0989 27.488 36.0947 27.5027 34.5018C27.5223 32.5033 27.5076 30.5023 27.5076 28.5013C27.5076 28.2342 27.5076 27.9671 27.5076 27.601C27.9826 27.601 28.389 27.5936 28.7954 27.601C31.1655 27.6579 33.249 26.9184 34.8478 25.1326C35.7439 24.1333 36.7184 23.8093 38.043 23.8266C43.6645 23.9033 49.286 23.8588 54.9074 23.8588H55.8182V34.5686H55.8207Z" fill="white"/>
                  <path d="M38.7089 21.3928C39.9135 17.9226 39.5071 15.7559 37.3844 14.1457C36.5642 13.5224 35.6362 13.0649 34.6152 13.1292C33.6628 13.191 32.6516 13.332 31.8021 13.7352C30.928 14.1482 30.2179 14.9174 29.3855 15.5729C29.3757 15.3503 29.3586 15.14 29.3586 14.9323C29.3586 11.0565 29.3561 7.18065 29.3586 3.30236C29.3586 1.42258 30.2816 0.5 32.162 0.5C40.888 0.5 49.6116 0.5 58.3376 0.5C60.2327 0.5 61.1655 1.44978 61.168 3.37409C61.1704 8.40993 61.1704 13.4482 61.168 18.4841C61.168 20.4257 60.2057 21.3928 58.2789 21.3928C51.9743 21.3928 45.6672 21.3928 39.3627 21.3928H38.7089ZM46.4116 4.94717C44.2888 4.94717 42.1636 4.9447 40.0409 4.94717C39.0835 4.94717 38.5204 5.39238 38.4959 6.14182C38.4714 6.91352 39.0615 7.42057 40.0458 7.42304C44.2913 7.43046 48.5392 7.43046 52.7871 7.42304C53.7322 7.42304 54.2929 6.92836 54.2929 6.17398C54.2929 5.41712 53.7273 4.95212 52.7822 4.94964C50.6595 4.9447 48.5343 4.94964 46.4116 4.94964V4.94717ZM47.337 9.69857C45.5301 9.69857 43.7232 9.69362 41.9139 9.70104C41.0594 9.70599 40.5403 10.1537 40.5134 10.8784C40.484 11.6377 41.008 12.1695 41.8845 12.172C45.5473 12.1868 49.2125 12.1843 52.8753 12.172C53.7445 12.1695 54.3027 11.6402 54.288 10.9056C54.2733 10.1735 53.7126 9.69857 52.8288 9.69609C50.9974 9.68867 49.166 9.69609 47.3321 9.69609L47.337 9.69857ZM50.1258 14.445C49.1513 14.445 48.1768 14.4351 47.2024 14.4475C46.3112 14.4574 45.7872 14.9273 45.7848 15.6842C45.7848 16.4386 46.3087 16.9283 47.195 16.9357C49.095 16.9506 50.9949 16.9506 52.8949 16.9357C53.7469 16.9283 54.3125 16.3842 54.2929 15.657C54.2733 14.9545 53.7249 14.4623 52.9047 14.45C51.9792 14.4351 51.0537 14.4475 50.1282 14.445H50.1258Z" fill="white"/>
                  <path d="M0 41.3135H45.5081C44.1713 44.5735 44.1909 47.8062 45.6942 51.1329H44.8421C30.8643 51.1329 16.8865 51.1329 2.90868 51.1329C0.905902 51.1329 0.00489677 50.2178 0.00244838 48.1896C0 45.9215 0.00244838 43.6534 0.00244838 41.3135H0ZM27.9385 44.9717C27.3778 44.9717 26.8147 44.947 26.254 44.9767C25.5342 45.0162 25.0323 45.5381 25.0225 46.196C25.0127 46.854 25.5048 47.4154 26.2246 47.4426C27.346 47.4847 28.4723 47.4822 29.5936 47.4451C30.311 47.4228 30.8154 46.8737 30.8251 46.2232C30.8349 45.548 30.3012 45.0088 29.5495 44.9717C29.0133 44.947 28.4747 44.9668 27.9385 44.9692V44.9717Z" fill="white"/>
                  <path d="M55.8452 75.4984C50.6913 75.4984 45.5375 75.5033 40.3836 75.4959C38.1899 75.491 37.0269 73.6285 38.0748 71.6893C41.909 64.6006 47.8145 60.7 55.8427 60.6901C63.844 60.6803 69.7422 64.5486 73.5739 71.6127C74.6806 73.6532 73.5372 75.4811 71.2333 75.4811C66.1039 75.4811 60.9745 75.4811 55.8452 75.4811C55.8452 75.486 55.8452 75.4934 55.8452 75.4984Z" fill="white"/>
                  <path d="M14.9009 34.5661C15.2975 32.1669 15.6868 29.8098 16.0761 27.4526C16.2303 26.5251 15.8827 25.882 15.1408 25.7336C14.4161 25.5877 13.8285 26.0997 13.6767 27.0173C13.2849 29.3522 12.8834 31.6846 12.5137 34.022C12.4427 34.4795 12.2811 34.6403 11.8134 34.628C10.6456 34.5958 9.47769 34.6181 8.23881 34.6181C8.54976 32.7407 8.84356 30.9475 9.14471 29.1568C9.41403 27.5516 9.65153 25.9414 9.96982 24.346C10.5697 21.3384 12.8344 19.4586 15.8925 19.4388C19.9494 19.4116 24.0064 19.4116 28.0634 19.4487C28.8126 19.4561 29.3537 19.2508 29.8605 18.7067C30.5974 17.9177 31.3932 17.1831 32.1767 16.4411C33.4155 15.2662 35.1294 15.2612 36.2459 16.4163C37.3525 17.564 37.3011 19.3201 36.0965 20.5222C35.0535 21.5635 33.9885 22.58 32.9283 23.604C31.8731 24.6231 30.6146 25.1301 29.148 25.1153C27.8308 25.1029 26.516 25.1128 25.1082 25.1128V34.5636H14.9009V34.5661Z" fill="white"/>
                  <path d="M55.877 37.084C60.8081 37.0914 64.7499 41.1058 64.7304 46.0946C64.7108 51.0167 60.7175 55.0261 55.8427 55.0211C50.9582 55.0162 46.96 50.94 46.9771 45.9858C46.9943 41.0687 50.9876 37.0766 55.877 37.084Z" fill="white"/>
                  <path d="M19.5283 4.35355C22.4198 4.36839 24.7115 6.73296 24.6822 9.67136C24.6528 12.5331 22.2729 14.8878 19.4451 14.8556C16.6025 14.8234 14.279 12.4515 14.2814 9.58727C14.2814 6.67855 16.627 4.33871 19.5283 4.35355Z" fill="white"/>
                  <path d="M24.6797 53.6261H31.1043V59.3817C32.4803 59.3817 33.7657 59.3817 35.0511 59.3817C35.3693 59.3817 35.6901 59.3694 36.001 59.4188C36.6817 59.5277 37.0857 60.052 37.0416 60.7149C37 61.3431 36.5544 61.7859 35.9006 61.8477C35.7782 61.8601 35.6558 61.8526 35.5334 61.8526C30.4505 61.8526 25.3677 61.8526 20.2849 61.8526C19.4451 61.8526 18.9603 61.5311 18.8232 60.9103C18.6395 60.0817 19.2076 59.4065 20.1624 59.3891C21.4821 59.3644 22.8018 59.3817 24.1215 59.3792C24.288 59.3792 24.452 59.357 24.6822 59.3397V53.6261H24.6797Z" fill="white"/>
                  <path d="M26.8294 16.9357H22.3464C23.1886 16.305 24.1949 15.7312 24.9588 14.9273C25.7325 14.1136 26.2687 13.0673 26.8294 12.2412V16.9357Z" fill="white"/>
                  </svg>

                </div>
                <div
                  className="mt-3"
                  style={{ color: "#FFFFFF", fontWeight: 700, lineHeight: 1.2 }}
                >
                  Driver Ed Courses
                </div>
              </div>
            </Col>
          </Row>
          </Container>
        </Container>
      </section>
      
      <section className="py-5">
        <Container>
          <Row className="align-items-start g-4">
            {/* Left: Headline */}
            <Col xs={12} lg={5}>
              <h2 className="m-0" style={{ color: "#154393", fontWeight: 800, lineHeight: 1.15 }}>
                Become A GTTS Partner And
                <br />
                Make Money!
              </h2>
            </Col>

            {/* Right: Bullet list */}
            <Col xs={12} lg={7}>
              <ul className="list-unstyled m-0">
                {[
                  "Do you own a brick and mortar traffic school?",
                  "Has your school been losing customers daily?",
                  "Do you want to start offering an online traffic school course to get your customers back?",
                ].map((text, i) => (
                  <li key={i} className="d-flex gap-2 mb-2">
                    {/* red badge dot/check icon (inline SVG) */}
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: 18, height: 18, background: "#E93030" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M9.2 16.2 4.8 11.8l1.4-1.4 3 3 7.7-7.7 1.4 1.4-9.1 9.1Z" fill="#fff" />
                      </svg>
                    </span>
                    <span style={{ color: "#2A3D5E", fontWeight: 600 }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          {/* Video block */}
          <div className="mt-4">
            <div
              className="position-relative w-100 overflow-hidden"
              style={{
                borderRadius: 12,
                height: 0,
                paddingBottom: "45%", // 16:9-ish responsive ratio
                background:
                  "url('/src/assets/handshake.png') center/cover no-repeat",
                // fallback if you want to use an <img> instead:
                // background: `url(${yourImportedImage}) center/cover no-repeat`,
              }}
            >
            </div>
          </div>

          {/* Caption */}
          <p className="text-center mt-3 mb-3" style={{ color: "#6B7A90" }}>
            If you answered yes to all of those above questions then you must watch this short video.
            It will change your business
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="danger"
              style={{
                backgroundColor: "#E93030",
                borderColor: "#E93030",
                borderRadius: 9999,
                padding: "10px 22px",
                fontWeight: 700,
              }}
              onClick={() => {
                // TODO: handle CTA click
              }}
            >
              See How
            </Button>
          </div>
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







