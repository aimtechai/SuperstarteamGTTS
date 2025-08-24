import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/** Hardcoded pricing (easy to swap later) */
const BASE_PRICE = 18.9;
const SHIPPING = { label: "Electronic Processing (included)", amount: 0 };

/** Optional promo codes (demo only) */
const COUPONS = {
  SAVE5: { type: "amount", value: 5 },
  OFF10: { type: "percent", value: 10 },
};

export type Props = {
  headerLogoSrc?: string;
  courseName?: string;
  onClose?: () => void;
  onProceed?: (args: {
    subtotal: number;
    discount: number;
    total: number;
    coupon: { type: "amount" | "percent"; value: number } | null;
    items: { label: string; price: number }[];
  }) => void;
  upgrades?: { label: string; price: number }[];
};

export default function OrderSummary({
  headerLogoSrc, // full wordmark (top-left, optional)
  courseName = "California Traffic School - Online",
  onClose, // () => void
  onProceed, // ({subtotal, discount, total, coupon}) => void
  upgrades = [], // optional: [{label, price}]
}: Props) {
  const navigate = useNavigate();
  const [codeInput, setCodeInput] = useState("");
  const [coupon, setCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  const upgradesTotal = useMemo(
    () => upgrades.reduce((sum, u) => sum + (u.price || 0), 0),
    [upgrades]
  );

  const subtotal = useMemo(
    () => BASE_PRICE + upgradesTotal + SHIPPING.amount,
    [upgradesTotal]
  );

  const discount = useMemo(() => {
    if (!coupon) return 0;
    if (coupon.type === "amount") return Math.min(coupon.value, subtotal);
    if (coupon.type === "percent")
      return Math.min((coupon.value / 100) * subtotal, subtotal);
    return 0;
  }, [coupon, subtotal]);

  const total = useMemo(
    () => Math.max(subtotal - discount, 0),
    [subtotal, discount]
  );

  const applyCode = () => {
    const key = codeInput.trim().toUpperCase();
    if (!key) return setCouponError("Please enter a code.");
    if (!COUPONS[key]) return setCouponError("Code not recognized.");
    setCoupon(COUPONS[key]);
    setCouponError("");
  };

  const clearCode = () => {
    setCoupon(null);
    setCodeInput("");
    setCouponError("");
  };

  const proceed = () => {
    onProceed?.({
      subtotal,
      discount,
      total,
      coupon: coupon ? { type: coupon.type, value: coupon.value } : null,
      items: [{ label: courseName, price: BASE_PRICE }, ...upgrades],
    });
    navigate('/student-enrollment/payment');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2 sm:p-4">
      <div className="py-20">
        <div>
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/src/assets/logo.png"
              alt="Go To Traffic School Online"
              className="h-[90px] w-[180px]"
            />
          </div>
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

        <div className="relative bg-[#f7f9fb] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full max-w-[710px] p-4 sm:p-8">

        {/* Close button */}
        <button
          type="button"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 bg-[#004985] rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold hover:bg-[#072e60] transition-colors"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col gap-16">
          {/* Title */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-[24px] sm:text-[28px] leading-tight sm:leading-[55.28px] text-[#072e60]">
              Order Summary
            </h1>

            <div className="flex flex-col gap-3">
              {/* Course row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                <div className="flex flex-col flex-1">
                  <div className="font-bold text-[18px] leading-[21px] text-[#004985]">
                    Course
                  </div>
                  <div className="font-normal text-[18px] leading-[1.2] text-[#004985] break-words">
                    {courseName}
                  </div>
                </div>
                <div className="font-black text-[22px] leading-[1.2] text-[#004985] self-end">
                  {USD.format(BASE_PRICE)}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#004985] opacity-20"></div>

              {/* Shipping row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                <div className="flex flex-col flex-1">
                  <div className="font-bold text-[18px] leading-[21px] text-[#004985]">
                    Shipping Options:
                  </div>
                  <div className="font-normal text-[18px] leading-[1.2] text-[#004985]">
                    {SHIPPING.label}
                  </div>
                </div>
                <div className="font-black text-[22px] leading-[1.2] text-[#004985] self-end">
                  FREE
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#004985] opacity-20"></div>

              {/* Discount code section */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 bg-white border border-[#004985] rounded-[10px] px-[13px] py-2.5 h-[48px] flex items-center">
                  <input
                    className="w-full font-bold text-[18px] leading-[21px] text-[#004985] placeholder-[#004985] placeholder-opacity-40 bg-transparent outline-none"
                    placeholder="Discount Code"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="bg-[#004985] hover:bg-[#072e60] transition-colors rounded-[10px] px-[26px] py-2.5 h-[48px] flex items-center justify-center min-w-[120px]"
                  onClick={coupon ? clearCode : applyCode}
                >
                  <span className="font-black text-[18px] leading-[21px] text-white">
                    {coupon ? "Remove" : "Apply"}
                  </span>
                </button>
              </div>

              {/* Error message */}
              {couponError && (
                <div className="text-red-500 text-[18px] font-['Lato']">
                  {couponError}
                </div>
              )}

              {/* Applied coupon */}
              {coupon && (
                <div className="text-green-600 text-[18px] font-medium">
                  Applied: {coupon.type === "amount" 
                    ? `-${USD.format(coupon.value)}` 
                    : `-${coupon.value}%`}
                </div>
              )}
            </div>

            {/* Final divider */}
            <div className="h-px bg-[#004985]"></div>

            {/* Total row */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
              <div className="flex flex-col flex-1">
                <div className="font-bold text-[18px] leading-[21px] text-[#004985]">
                  Total:
                </div>
              </div>
              <div className="font-black text-[22px] leading-[1.2] text-[#004985] self-end">
                {USD.format(total)}
              </div>
            </div>

            {/* Proceed button */}
            <button
              type="button"
              className="w-full bg-[#004985] hover:bg-[#072e60] transition-colors rounded-[10px] px-[26px] py-3 h-[52px] flex items-center justify-center"
              onClick={proceed}
            >
              <span className="font-black text-[18px] leading-[21px] text-white">
                Proceed to Payment
              </span>
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#072e60] flex items-center justify-center py-2 z-10">
          <div className="text-white text-[18px] font-medium text-center px-4">
            Copyright © 2025 Go To Traffic School. All Rights Reserved
          </div>
        </div>
    </div>
  );
}
