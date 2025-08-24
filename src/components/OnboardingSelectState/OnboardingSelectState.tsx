import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OnboardingSelectState.css";
import { useNavigate } from "react-router-dom";

/* ---- Fallback wordmark if you don't pass a logoSrc ---- */
const DefaultWordmark = () => (
  <div className="wordmark">
    <div className="mark-box me-3" aria-hidden="true" />
    <div className="line-1">
      <span>Go To</span>&nbsp;<strong>Traffic</strong>&nbsp;School Online
    </div>
  </div>
);

/* ---- US States (w/ DC) ---- */
const STATES = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["DC", "District of Columbia"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
];

export default function OnboardingSelectState({
  logoSrc, // optional: URL to your real logo
  onNext, // (payload) => void; called when user clicks Next
  initialStateAbbr = "", // optional: preselect a state ("CA")
}) {
  const navigate = useNavigate();
  const [stateAbbr, setStateAbbr] = useState(initialStateAbbr);
  const stateName = useMemo(
    () => STATES.find(([abbr]) => abbr === stateAbbr)?.[1] ?? "",
    [stateAbbr]
  );

  const handleNext = (e) => {
    e?.preventDefault?.();
    if (!stateAbbr) return;
    onNext?.({ abbr: stateAbbr, name: stateName });
    navigate(`/course-enrollment/select-upgrade/${stateName}`);
  };

  return (
    <div className="onboarding-page">
      <div className="onboard-card shadow-sm">
        <div className="text-center mb-3">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Go To Traffic School Online"
              className="brand-img mb-2"
            />
          ) : (
            <DefaultWordmark />
          )}
        </div>

        {/* Title divider */}
        <div className="heading-with-lines mb-3">
          <span>Select Your State</span>
        </div>

        {/* Select */}
        <form
          onSubmit={handleNext}
          className="mx-auto inner-narrow"
          role="search"
        >
          <div className="mb-1">
            {/* Hidden label for a11y */}
            <label htmlFor="state-select" className="visually-hidden">
              Select Your State
            </label>
            <select
              id="state-select"
              className="form-select form-select-lg ts-select"
              value={stateAbbr}
              onChange={(e) => setStateAbbr(e.target.value)}
            >
              <option value="">Select Your State Here</option>
              {STATES.map(([abbr, name]) => (
                <option key={abbr} value={abbr}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>

      {/* CTA below the card */}
      <div className="cta-below">
        <button
          type="button"
          className="btn btn-primary btn-lg w-100 next-btn"
          disabled={!stateAbbr}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
