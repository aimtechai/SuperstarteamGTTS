import React, { useMemo, useState } from "react";

/* ---------- Tiny inline icons (no extra deps) ---------- */
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6 10V8a6 6 0 1 1 12 0v2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1Zm2 0h8V8a4 4 0 1 0-8 0v2Zm4 4a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2Z"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Zm0 5.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM10.75 18h2.5v-7h-2.5v7Z"
    />
  </svg>
);

/* Logos (simple) */
const PayPalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#003087"
      d="M16 38l3-20c1-6 5-9 11-9h8c1 0 2 1 2 2l-3 18c-1 6-4 9-10 9h-9c-1 0-2-0-2-0z"
    />
    <path
      fill="#009cde"
      d="M14 38l4-24c1-6 5-9 11-9h5c-6 1-9 4-10 10l-3 19c0 2-1 3-3 4h-4z"
    />
  </svg>
);
const VenmoIcon = () => (
  <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
    <rect width="36" height="36" x="6" y="6" rx="6" fill="#3d95ce" />
    <path
      fill="#fff"
      d="M28 14c2 0 4 1 4 4 0 8-7 16-10 20h-7l-4-20h7l2 11c2-3 3-7 4-11 1-3 2-4 4-4z"
    />
  </svg>
);
const ApplePayIcon = () => (
  <svg width="32" height="20" viewBox="0 0 64 40" aria-hidden="true">
    <rect
      x="1"
      y="1"
      width="62"
      height="38"
      rx="6"
      fill="#fff"
      stroke="#C9D7E6"
    />
    <path
      d="M16.3 17.6c0-2 1.6-3 1.7-3-.9-1.3-2.4-1.5-2.9-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.1-.3 5.1.8 6.8.6.9 1.3 2 2.3 2 1 0 1.3-.6 2.5-.6s1.4.6 2.5.6 1.7-1 2.3-1.9c.7-1 1-2 1-2.1-.1 0-2-.7-2-2.7Zm2.7-5.1c.5-.6.9-1.5.8-2.4-.8.1-1.7.5-2.2 1.1-.5.6-.9 1.5-.8 2.4.8 0 1.6-.5 2.2-1.1Z"
      fill="#000"
    />
    <text
      x="28"
      y="25"
      fontFamily="system-ui, -apple-system"
      fontSize="12"
      fontWeight="700"
      fill="#000"
    >
      Pay
    </text>
  </svg>
);

/* Card badges */
const CardBadges = () => (
  <div className="flex gap-2 flex-wrap" aria-hidden="true">
    <span className="px-3 py-2 bg-blue-600 text-white text-sm font-bold rounded">VISA</span>
    <span className="px-3 py-2 bg-red-500 text-white text-sm font-bold rounded">MC</span>
    <span className="px-3 py-2 bg-orange-500 text-white text-sm font-bold rounded">DISC</span>
    <span className="px-3 py-2 bg-blue-500 text-white text-sm font-bold rounded">AMEX</span>
  </div>
);

const formatCard = (v) =>
  v
    .replace(/\D/g, "")
    .slice(0, 19)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
const formatExpiry = (v) => {
  const digits = v.replace(/\D/g, "").slice(0, 4);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + "/" + digits.slice(2);
};

export type Props = {
  headerLogoSrc?: string;
  total?: number;
  courseName?: string;
  shippingLabel?: string;
  onSubmit?: (payload: {
    method: string;
    payLater: boolean;
    total: number;
    card: {
      number: string;
      exp: string;
      cvc: string;
      name: string;
      zip: string;
    } | null;
  }) => void | Promise<void>;
  onStartCourse?: () => void;
};

export default function Payment({
  headerLogoSrc,
  total = 18.9, // from Order Summary
  courseName = "California Traffic School - Online",
  shippingLabel = "Electronic Processing (included)",
  onSubmit, // may return a Promise
  onStartCourse, // optional: called from modal
}: Props) {
  const [method, setMethod] = useState("card"); // 'card' | 'paypal' | 'venmo' | 'apple'
  const [payLater, setPayLater] = useState(false);

  const [card, setCard] = useState({
    number: "",
    exp: "",
    cvc: "",
    name: "",
    zip: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cardValid = useMemo(() => {
    if (payLater || method !== "card") return true;
    const digits = card.number.replace(/\s/g, "");
    const [mm, yy] = card.exp.split("/");
    const validExp = mm && yy && +mm >= 1 && +mm <= 12 && yy.length === 2;
    const cvcOk = card.cvc.replace(/\D/g, "").length >= 3;
    const zipOk = card.zip.replace(/\D/g, "").length >= 5;
    return (
      digits.length >= 12 &&
      validExp &&
      cvcOk &&
      zipOk &&
      card.name.trim().length >= 2
    );
  }, [card, method, payLater]);

  const disabledForm = payLater || method !== "card";

  const submit = async (e) => {
    e.preventDefault();
    if (!cardValid) return;
    try {
      setSubmitting(true);
      const payload = {
        method,
        payLater,
        total,
        card: method === "card" && !payLater ? card : null,
      };
      const maybePromise = onSubmit?.(payload);
      if (maybePromise && typeof maybePromise.then === "function") {
        await maybePromise;
      }
      setShowModal(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[569px] bg-white py-20">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/src/assets/logo.png"
            alt="Go To Traffic School Online"
            className="h-[90px] w-[180px]"
          />
        </div>

        {/* Chat Bot */}
        <div className="fixed bottom-20 right-4 md:right-16 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-xl md:text-2xl cursor-pointer hover:bg-blue-700 transition-colors z-50"
            style={{ backgroundColor: "#072E60" }}
          >
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6 0C9.4697 0 6.3972 0.250672 3.40166 0.733235C1.39074 1.05718 0 2.81855 0 4.79624V12.0038C0 13.9814 1.39074 15.7428 3.40166 16.0668C5.0367 16.3302 6.69471 16.5245 8.37256 16.6467C8.76414 16.6752 9.10168 16.8984 9.27146 17.2249L11.6684 21.8344C11.8491 22.182 12.2083 22.4 12.6 22.4C12.9917 22.4 13.3509 22.182 13.5316 21.8344L15.9285 17.2249C16.0983 16.8984 16.4359 16.6752 16.8274 16.6467C18.5053 16.5245 20.1633 16.3302 21.7983 16.0668C23.8093 15.7428 25.2 13.9814 25.2 12.0038V4.79624C25.2 2.81855 23.8093 1.05718 21.7983 0.733235C18.8028 0.250672 15.7303 0 12.6 0ZM8.05 5.6C7.4701 5.6 7 6.0701 7 6.65C7 7.2299 7.4701 7.7 8.05 7.7H17.15C17.7299 7.7 18.2 7.2299 18.2 6.65C18.2 6.0701 17.7299 5.6 17.15 5.6H8.05ZM8.05 9.1C7.4701 9.1 7 9.5701 7 10.15C7 10.7299 7.4701 11.2 8.05 11.2H12.95C13.5299 11.2 14 10.7299 14 10.15C14 9.5701 13.5299 9.1 12.95 9.1H8.05Z"
                fill="#F3F4F6"
              />
            </svg>
          </div>

        {/* Header */}
        <div className="bg-[#004985] text-white text-center py-3 mb-6 font-bold text-[18px]">
          PAYMENT
        </div>

        {/* Main content */}
        <div className="px-6">
          {/* Intro section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-bold text-[18px] text-[#004985] mb-2">
                How would you like to pay?
              </h2>
              <p className="font-normal text-[18px] text-[#004985]">
                Choose your payment method from the options below.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="paylater"
                type="checkbox"
                checked={payLater}
                onChange={(e) => setPayLater(e.target.checked)}
                className="w-4 h-4 text-[#004985] border-[#004985] rounded focus:ring-[#004985]"
              />
              <label htmlFor="paylater" className="font-normal text-[18px] text-[#004985]">
                I'd like to pay later
              </label>
            </div>
          </div>

          {/* Payment method tiles */}
          <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 mb-6 max-[480px]:grid-cols-1">
            <MethodTile
              label="Credit/debit card"
              active={method === "card" && !payLater}
              onClick={() => setMethod("card")}
              disabled={payLater}
              icon={
                <svg width="26" height="20" viewBox="0 0 48 32">
                  <rect
                    x="1"
                    y="5"
                    width="46"
                    height="22"
                    rx="4"
                    fill="#0b4a76"
                    opacity=".1"
                  />
                  <rect
                    x="1"
                    y="9"
                    width="46"
                    height="4"
                    fill="#0b4a76"
                    opacity=".2"
                  />
                </svg>
              }
            />
            <MethodTile
              label="PayPal"
              active={method === "paypal" && !payLater}
              onClick={() => setMethod("paypal")}
              disabled={payLater}
              icon={<PayPalIcon />}
            />
            <MethodTile
              label="Venmo"
              active={method === "venmo" && !payLater}
              onClick={() => setMethod("venmo")}
              disabled={payLater}
              icon={<VenmoIcon />}
            />
            <MethodTile
              label="Apple Pay"
              active={method === "apple" && !payLater}
              onClick={() => setMethod("apple")}
              disabled={payLater}
              icon={<ApplePayIcon />}
            />
          </div>

          {/* Card form */}
          <form onSubmit={submit}>
            <div className={`grid grid-cols-2 gap-4 mb-4 ${disabledForm ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="col-span-2">
                <label className="block font-normal text-[18px] text-[#004985] mb-2">
                  Card number
                </label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-[#004985]"
                    value={card.number}
                    onChange={(e) =>
                      setCard((s) => ({
                        ...s,
                        number: formatCard(e.target.value),
                      }))
                    }
                    placeholder="•••• •••• •••• ••••"
                    inputMode="numeric"
                    disabled={disabledForm}
                    aria-describedby="accepted-cards"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <LockIcon />
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-normal text-[18px] text-[#004985] mb-2">
                  Expiration
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-[#004985]"
                  placeholder="MM / YY"
                  value={card.exp}
                  onChange={(e) =>
                    setCard((s) => ({
                      ...s,
                      exp: formatExpiry(e.target.value),
                    }))
                  }
                  inputMode="numeric"
                  disabled={disabledForm}
                />
              </div>

              <div>
                <label className="block font-normal text-[18px] text-[#004985] mb-2">
                  CVC
                </label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-[#004985]"
                    placeholder="123"
                    value={card.cvc}
                    onChange={(e) =>
                      setCard((s) => ({
                        ...s,
                        cvc: e.target.value.replace(/\D/g, "").slice(0, 4),
                      }))
                    }
                    inputMode="numeric"
                    disabled={disabledForm}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <InfoIcon />
                  </span>
                </div>
              </div>

              <div className="col-span-2">
                <label className="block font-normal text-[18px] text-[#004985] mb-2">
                  Cardholder name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-[#004985]"
                  placeholder="aureliano sanchada"
                  value={card.name}
                  onChange={(e) =>
                    setCard((s) => ({ ...s, name: e.target.value }))
                  }
                  disabled={disabledForm}
                />
              </div>

              <div>
                <label className="block font-normal text-[18px] text-[#004985] mb-2">
                  ZIP Code
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-[#004985]"
                  placeholder="12345"
                  value={card.zip}
                  onChange={(e) =>
                    setCard((s) => ({
                      ...s,
                      zip: e.target.value.replace(/\D/g, "").slice(0, 10),
                    }))
                  }
                  inputMode="numeric"
                  disabled={disabledForm}
                />
              </div>
            </div>

            <div id="accepted-cards" className="mb-4">
              <CardBadges />
            </div>

            <p className="font-normal text-[18px] text-[#004985] mb-4 leading-relaxed">
              By placing your order, you agree to our{" "}
              <a href="#" className="text-[#004985] underline">Terms of Service</a> and{" "}
              <a href="#" className="text-[#004985] underline">Privacy Policy</a>. No additional transfer fees or taxes apply.
              <br />
              <span className="text-[16px]">Payment services brought to you by: Intuit Payments Inc. 2700 Coast Avenue, Mountain View, CA 94043 Phone number: 1-888-829-8589 NMLS #1016819</span>
            </p>

            <div className="text-center">
              <button
                className="w-full bg-[#ff6b6b] hover:bg-[#e55a5a] text-white font-bold text-[18px] py-4 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={!cardValid || submitting}
                title={
                  !cardValid && method === "card" && !payLater
                    ? "Please complete card details"
                    : undefined
                }
              >
                {submitting ? "PROCESSING..." : "COMPLETE PAYMENT"}
              </button>
            </div>
          </form>

          {method !== "card" && !payLater && (
            <div className="text-center mt-4 text-[18px] text-[#004985]">
              You'll be redirected to{" "}
              <strong>
                {method === "paypal"
                  ? "PayPal"
                  : method === "venmo"
                  ? "Venmo"
                  : "Apple Pay"}
              </strong>{" "}
              to finish the payment.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#072e60] flex items-center justify-center py-2 z-10">
          <div className="text-white text-[18px] font-medium text-center px-4">
            Copyright © 2025 Go To Traffic School. All Rights Reserved
          </div>
        </div>
      </div>

      {/* ===== Success Modal ===== */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="ts-receipt-title"
        >
          <div className="relative bg-[#f7f9fb] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[355px] max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-9 h-9 bg-[#004985] rounded-full flex items-center justify-center text-white text-lg font-bold hover:bg-[#072e60] transition-colors z-10"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="p-6 pt-12">
              {/* Success Banner */}
              <div className="mb-8">
                <div className="bg-white rounded-lg p-4 border border-[#004985] border-opacity-20">
                  <div className="text-center">
                    <h2 className="font-bold text-[24px] leading-[1.2] text-[#072e60] mb-2">
                      Registration Successful!
                    </h2>
                    <p className="font-normal text-[12px] leading-[1.2] text-[#09101d] opacity-80">
                      All information has been sent to your email!
                    </p>
                  </div>
                </div>
              </div>

              {/* Receipt Section */}
              <div className="flex flex-col gap-4">
                <h3 id="ts-receipt-title" className="font-bold text-[28px] leading-[1.2] text-[#072e60]">
                  Receipt
                </h3>

                <div className="flex flex-col gap-3">
                  {/* Course row */}
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col flex-1">
                      <div className="font-bold text-[14px] leading-[21px] text-[#004985]">
                        Course
                      </div>
                      <div className="font-normal text-[12px] leading-[1.2] text-[#004985]">
                        {courseName}
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[1.2] text-[#004985] ml-4">
                      ${total.toFixed(2)}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#004985] opacity-20"></div>

                  {/* Shipping row */}
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col flex-1">
                      <div className="font-bold text-[14px] leading-[21px] text-[#004985]">
                        Shipping Options:
                      </div>
                      <div className="font-normal text-[12px] leading-[1.2] text-[#004985]">
                        {shippingLabel}
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[1.2] text-[#004985] ml-4">
                      FREE
                    </div>
                  </div>

                  {/* Final divider */}
                  <div className="h-px bg-[#004985]"></div>

                  {/* Total row */}
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col flex-1">
                      <div className="font-bold text-[14px] leading-[21px] text-[#004985]">
                        Total:
                      </div>
                    </div>
                    <div className="font-normal text-[12px] leading-[1.2] text-[#004985] ml-4">
                      ${total.toFixed(2)}
                    </div>
                  </div>

                  {/* Ready to begin section */}
                  <div className="text-center mt-6">
                    <h4 className="font-bold text-[24px] leading-[1.2] text-[#072e60] mb-4">
                      Ready to begin your course?
                    </h4>
                    <div className="font-normal text-[12px] leading-[1.2] text-[#09101d] opacity-80 mb-6">
                      <p className="mb-2">
                        Start taking your traffic school course today by clicking on the link below.
                      </p>
                      <p>Good luck and drive safe!</p>
                    </div>
                  </div>

                  {/* Start Course button */}
                  <button
                    onClick={() => {
                      setShowModal(false);
                      onStartCourse?.();
                    }}
                    className="w-full bg-[#004985] hover:bg-[#072e60] transition-colors rounded-[10px] px-[26px] py-2.5 h-[42px] flex items-center justify-center"
                  >
                    <span className="font-black text-[16px] leading-[21px] text-white">
                      Start Course
                    </span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---- Payment method tile ---- */
function MethodTile({ label, active, onClick, disabled, icon }: {
  label: string;
  active: boolean;
  onClick: () => void;
  disabled: boolean;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`relative flex flex-col items-center p-4 border-2 rounded-lg transition-colors ${
        active 
          ? 'border-[#004985] bg-blue-50' 
          : 'border-gray-200 hover:border-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="mb-2">{icon}</div>
      <div className="font-normal text-[18px] text-[#004985] text-center">
        {label}
      </div>
      {active && (
        <span className="absolute top-2 right-2 w-5 h-5 bg-[#004985] text-white rounded-full flex items-center justify-center text-xs" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}
