import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/** ---- Static values for this step (can be replaced later) ---- */
const BASE_PRICE = 18.9;
const DELIVERY = {
  id: "electronic",
  label: "Electronic Processing (included)",
  price: 0,
};

export default function StudentEnrollment({
  courseTitle = "California Traffic School - Online",
  headerLogoSrc, // full wordmark from Figma
  onNext, // (payload) => void
}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    marketingOptIn: true,
    delivery: DELIVERY.id,
  });

  const courseName = `${courseTitle}`;
  const total = useMemo(() => BASE_PRICE + DELIVERY.price, []);

  const update = (k) => (e) =>
    setForm((s) => ({
      ...s,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const submit = (e) => {
    e.preventDefault();
    onNext?.({
      student: {
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        email: form.email,
        marketingOptIn: form.marketingOptIn,
      },
      account: { password: form.password },
      delivery: DELIVERY,
      course: { name: courseName, price: BASE_PRICE },
      totals: { total },
    });

    // Show success modal instead of navigating immediately
    setShowModal(true);
  };

  const handleStartCourse = () => {
    setShowModal(false);
    navigate("/student-enrollment/order-summary");
  };

  return (
    <div className="bg-white min-h-screen relative text-[18px]">

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Logo */}
          {headerLogoSrc && (
            <div className="mb-8">
              <img
                src={headerLogoSrc}
                alt="Go To Traffic School Online"
                className="h-[90px] w-[180px]"
              />
            </div>
          )}

          {/* Page Title */}
          <div className="bg-white border-2 border-[#004985] rounded-[15px] px-6 py-4 mb-8">
            <h1 className="text-[#004985] text-[32px] font-bold">
              Course Enrollment - Student Information
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT column - Form */}
            <div className="lg:col-span-2">
              <form onSubmit={submit} className="space-y-8">
                {/* Student Information panel */}
                <div className="bg-white border border-[#004985] rounded-[15px] p-8">
                  <h2 className="text-[#004985] text-[24px] font-bold leading-[21px] mb-7">Student Information</h2>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        className="w-full h-[42px] px-3 py-2 bg-white border border-[#004985] rounded-[10px] text-[#004985] text-[18px] placeholder-[#004985] placeholder:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-transparent"
                        placeholder="First Name"
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={update("firstName")}
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        className="w-full h-[42px] px-3 py-2 bg-white border border-[#004985] rounded-[10px] text-[#004985] text-[18px] placeholder-[#004985] placeholder:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-transparent"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={update("lastName")}
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        className="w-full h-[42px] px-3 py-2 bg-white border border-[#004985] rounded-[10px] text-[#004985] text-[18px] placeholder-[#004985] placeholder:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-transparent"
                        type="tel"
                        placeholder="Phone Number"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        className="w-full h-[42px] px-3 py-2 bg-white border border-[#004985] rounded-[10px] text-[#004985] text-[18px] placeholder-[#004985] placeholder:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-transparent"
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        className="w-full h-[42px] px-3 py-2 bg-white border border-[#004985] rounded-[10px] text-[#004985] text-[18px] placeholder-[#004985] placeholder:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-transparent"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        value={form.password}
                        onChange={update("password")}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Certificate Delivery panel */}
                <div className="bg-white border border-[#004985] rounded-[15px] p-8">
                  <h2 className="text-[#004985] text-[24px] font-bold leading-[21px] mb-7">Certificate Delivery</h2>
                  
                  <div className="space-y-3">
                    <div className="relative">
                      <select
                        id="delivery"
                        className="w-full h-[42px] px-3 py-2 bg-white border border-[#004985] rounded-[10px] text-[#004985] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#004985] focus:border-transparent appearance-none"
                        value={form.delivery}
                        onChange={update("delivery")}
                      >
                        <option value={DELIVERY.id}>{DELIVERY.label} - FREE</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-3 h-2 text-[#004985]" fill="currentColor" viewBox="0 0 12 8">
                          <path d="M6 8L0 0h12L6 8z"/>
                        </svg>
                      </div>
                    </div>

                    <p className="text-[#004985] text-[18px] leading-[1.4]">
                      Available for download through your online account.
                    </p>

                    <div className="flex items-start gap-3 mt-4">
                      <div className="relative">
                        <input
                          id="marketingOptIn"
                          type="checkbox"
                          checked={form.marketingOptIn}
                          onChange={update("marketingOptIn")}
                          className="w-5 h-5 text-[#004985] bg-white border border-[#004985] rounded focus:ring-[#004985] focus:ring-2"
                        />
                      </div>
                      <label htmlFor="marketingOptIn" className="text-[#004985] text-[18px] font-black leading-[21px]">
                        Yes, I want to receive driving tips, discounts, and course updates via email.{" "}
                        <span className="underline cursor-pointer">
                          Read our Policy
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end mt-8">
                  <button 
                    type="submit" 
                    className="bg-[#004985] text-white px-[26px] py-2.5 rounded-[10px] font-black text-[18px] leading-[21px] hover:bg-[#003366] transition-colors h-[42px] w-[141px]"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT column: Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#004985] rounded-[15px] p-6 h-fit">
                <h3 className="text-[#004985] text-[24px] font-bold leading-[21px] mb-6">Your Selection</h3>
                
                <div className="space-y-4 text-[18px]">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[#004985] font-bold mb-1">Course</div>
                      <div className="text-[#004985]">{courseName}</div>
                    </div>
                    <div className="text-[#004985] font-black">
                      {USD.format(BASE_PRICE)}
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[#004985] font-bold mb-1">Shipping Options:</div>
                      <div className="text-[#004985]">{DELIVERY.label}</div>
                    </div>
                    <div className="text-[#004985] font-black">
                      FREE
                    </div>
                  </div>

                  <hr className="border-[#004985] my-4" />

                  <div className="flex justify-between items-end">
                    <div className="text-[#004985] font-bold">Total:</div>
                    <div className="text-[#004985] font-black">
                      {USD.format(total)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Bot */}
        <div className="fixed bottom-20 right-4 md:right-16 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-xl md:text-2xl cursor-pointer hover:bg-blue-700 transition-colors z-50" style={{ backgroundColor: '#072E60' }}>
          <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.6 0C9.4697 0 6.3972 0.250672 3.40166 0.733235C1.39074 1.05718 0 2.81855 0 4.79624V12.0038C0 13.9814 1.39074 15.7428 3.40166 16.0668C5.0367 16.3302 6.69471 16.5245 8.37256 16.6467C8.76414 16.6752 9.10168 16.8984 9.27146 17.2249L11.6684 21.8344C11.8491 22.182 12.2083 22.4 12.6 22.4C12.9917 22.4 13.3509 22.182 13.5316 21.8344L15.9285 17.2249C16.0983 16.8984 16.4359 16.6752 16.8274 16.6467C18.5053 16.5245 20.1633 16.3302 21.7983 16.0668C23.8093 15.7428 25.2 13.9814 25.2 12.0038V4.79624C25.2 2.81855 23.8093 1.05718 21.7983 0.733235C18.8028 0.250672 15.7303 0 12.6 0ZM8.05 5.6C7.4701 5.6 7 6.0701 7 6.65C7 7.2299 7.4701 7.7 8.05 7.7H17.15C17.7299 7.7 18.2 7.2299 18.2 6.65C18.2 6.0701 17.7299 5.6 17.15 5.6H8.05ZM8.05 9.1C7.4701 9.1 7 9.5701 7 10.15C7 10.7299 7.4701 11.2 8.05 11.2H12.95C13.5299 11.2 14 10.7299 14 10.15C14 9.5701 13.5299 9.1 12.95 9.1H8.05Z" fill="#F3F4F6"/>
          </svg>
        </div>

        {/* Footer */}
        <footer className="bg-[#072e60] py-2 mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-white text-[18px] font-medium text-center">
              Copyright © 2025 Go To Traffic School. All Rights Reserved
            </p>
          </div>
        </footer>

        {/* Success Modal */}
        {showModal && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <div className="relative bg-[#f7f9fb] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[355px] max-h-[90vh] overflow-y-auto text-[18px]">
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
                      <p className="font-normal text-[18px] leading-[1.4] text-[#09101d] opacity-80">
                        All information has been sent to your email!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Receipt Section */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-[28px] leading-[1.2] text-[#072e60]">
                    Receipt
                  </h3>

                  <div className="flex flex-col gap-3">
                    {/* Course row */}
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col flex-1">
                        <div className="font-bold text-[18px] leading-[21px] text-[#004985]">
                          Course
                        </div>
                        <div className="font-normal text-[18px] leading-[1.4] text-[#004985]">
                          {courseName}
                        </div>
                      </div>
                      <div className="font-normal text-[18px] leading-[1.4] text-[#004985] ml-4">
                        {USD.format(BASE_PRICE)}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#004985] opacity-20"></div>

                    {/* Shipping row */}
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col flex-1">
                        <div className="font-bold text-[18px] leading-[21px] text-[#004985]">
                          Shipping Options:
                        </div>
                        <div className="font-normal text-[18px] leading-[1.4] text-[#004985]">
                          {DELIVERY.label}
                        </div>
                      </div>
                      <div className="font-normal text-[18px] leading-[1.4] text-[#004985] ml-4">
                        FREE
                      </div>
                    </div>

                    {/* Final divider */}
                    <div className="h-px bg-[#004985]"></div>

                    {/* Total row */}
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col flex-1">
                        <div className="font-bold text-[18px] leading-[21px] text-[#004985]">
                          Total:
                        </div>
                      </div>
                      <div className="font-normal text-[18px] leading-[1.4] text-[#004985] ml-4">
                        {USD.format(total)}
                      </div>
                    </div>

                    {/* Ready to begin section */}
                    <div className="text-center mt-6">
                      <h4 className="font-bold text-[24px] leading-[1.2] text-[#072e60] mb-4">
                        Ready to begin your course?
                      </h4>
                      <div className="font-normal text-[18px] leading-[1.4] text-[#09101d] opacity-80 mb-6">
                        <p className="mb-2">
                          Start taking your traffic school course today by clicking on the link below.
                        </p>
                        <p>Good luck and drive safe!</p>
                      </div>
                    </div>

                    {/* Start Course button */}
                    <button
                      onClick={handleStartCourse}
                      className="w-full bg-[#004985] hover:bg-[#072e60] transition-colors rounded-[10px] px-[26px] py-2.5 h-[42px] flex items-center justify-center"
                    >
                      <span className="font-black text-[18px] leading-[21px] text-white">
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
