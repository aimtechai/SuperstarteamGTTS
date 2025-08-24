import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/** ---- Hardcoded pricing (change here later) ---- */
const PRICING = {
  baseCourse: 18.9,
  upgrades: [
    {
      id: "studentCopy",
      label: "Student Copy Upgrade",
      desc: "Order an electronic copy of your certificate of completion, which you can print-out and keep for your records. This certificate copy can NOT be sent to your court as evidence of your completion - it is for your records only.",
      price: 4.99,
    },
    {
      id: "readAlong",
      label: "Read-Along Upgrade",
      desc: "The convenient audio narration will read the course aloud as you follow along with the text.",
      price: 4.99,
    },
    {
      id: "completionReceipt",
      label: "Completion Receipt Confirmation",
      desc: "Get email proof once your completion information has been successfully uploaded to the DMV database. This information is NOT included as part of the free completion receipt that you will get at the end of the course.",
      price: 5.0,
    },
    {
      id: "studyGuide",
      label: "California Traffic School Study Guide",
      desc: "Order an electronic copy of your certificate of completion, which you can print-out and keep for your records. This certificate copy can NOT be sent to your court as evidence of your completion - it is for your records only.",
      price: 9.95,
    },
    {
      id: "sameDay",
      label: "Same Day Processing Upgrade",
      desc: "Certificates of completion are processed and shipped within 2 to 3 business days. If you order same day processing, your certificate will be processed and shipped the same day that you complete the course (if you complete the course before our shipping cut-off times.)",
      price: 9.98,
    },
    {
      id: "unlimitedAttempts",
      label: "Unlimited Course Attempts",
      desc: "If you fail the final exam, you will fail the course. However, with unlimited final exam retakes, if you fail the course you will be able to start the course from the beginning and retake the final exam again. You can do this an unlimited number of times until you pass the exam so it's impossible to fail the course!",
      price: 9.95,
    },
  ],
  freeDelivery: {
    id: "emailDelivery",
    label: "Email (Free)",
    desc: "Available for download through your online account.",
    price: 0,
  },
};

export default function OnboardingUpgradeSelection({
  courseTitle = "Traffic School - Online",
  onNext, // (payload) => void
  logoSrc, // optional: brand image
}) {
  const { stateName } = useParams();
  const [language, setLanguage] = useState("en");
  // By default nothing selected except free delivery.
  const [selected, setSelected] = useState({});

  const courseName = `${stateName} ${courseTitle}`;

  const selectedUpgrades = useMemo(
    () => PRICING.upgrades.filter((u) => selected[u.id]),
    [selected]
  );

  const subtotal = useMemo(
    () =>
      PRICING.baseCourse + selectedUpgrades.reduce((s, u) => s + u.price, 0),
    [selectedUpgrades]
  );

  const handleToggle = (id: string) => setSelected((s) => ({ ...s, [id]: !s[id] }));

  const payload = useMemo(
    () => ({
      language,
      course: { name: courseName, price: PRICING.baseCourse },
      upgrades: selectedUpgrades.map((u) => ({
        id: u.id,
        label: u.label,
        price: u.price,
      })),
      freeDelivery: PRICING.freeDelivery,
      total: subtotal,
    }),
    [language, courseName, selectedUpgrades, subtotal]
  );

  const handleNext = () => onNext?.(payload);

  return (
    <div className="min-h-screen bg-white py-[18px] px-0 pb-[28px]">
      <div className="max-w-[1140px] mx-auto px-4 py-20">
        {/* Page header */}
        <div className="mb-[40px]">
          <img
            src={logoSrc}
            alt="Go To Traffic School Online"
            className="h-[60px] w-[120px] lg:h-[90px] lg:w-[180px] object-contain mb-[32px] lg:mb-[64px]"
          />
          <div className="w-full h-auto min-h-[61px] lg:h-[61px] bg-white border border-[#3D75A2] rounded-[15px] flex items-center px-[14px] py-2">
            <h1 className="text-[24px] lg:text-[32px] font-bold text-[#004985] leading-[1.727]">
              Course Enrollment - Upgrade Selection
            </h1>
          </div>
        </div>

        <div className="flex gap-[37px] lg:flex-row flex-col mb-[40px]">
          {/* LEFT column */}
          <div className="flex-1 max-w-[739px]">
            {/* Base course row */}
            <div className="border border-[#dfe9f5] rounded-xl p-[14px] bg-white shadow-sm mb-[22px]">
              <div className="flex items-start gap-4">
                <input
                  className="mt-2 w-[17px] h-[17px] text-[#004985] border-2 border-[#004985] rounded focus:ring-[#004985] focus:ring-2 focus:ring-offset-0"
                  type="checkbox"
                  checked
                  disabled
                  id="baseCourse"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-[6px]">
                    <label className="text-lg font-bold cursor-pointer" htmlFor="baseCourse">
                      <span className="text-[#004985]">{stateName}</span>{" "}
                      {courseTitle}
                    </label>
                    <div className="text-[#FF4E4E] font-black text-[30px] leading-[1.2] ml-4">
                      {USD.format(PRICING.baseCourse)}
                    </div>
                  </div>
                  <p className="text-[#495866] text-sm leading-[1.2] mb-0">
                    This DMV licensed online traffic school is accepted in the
                    State of {stateName}. This course will mask a single traffic
                    violation on your driving record once every 18 months.
                  </p>
                </div>
              </div>
            </div>

            {/* Language select */}
            <div className="mb-4">
              <div className="flex items-center justify-center text-[#1e4f7c] font-extrabold text-[15px] mb-2">
                <div className="flex-1 h-0.5 bg-[#dbe6f3] mr-3"></div>
                Please Select Your Course Language
                <div className="flex-1 h-0.5 bg-[#dbe6f3] ml-3"></div>
              </div>
              <div className="max-w-[760px] w-full">
                <div className="relative">
                  <select
                    className="w-full h-[50px] border-2 border-[#004985] rounded-xl font-bold text-[#004985] px-4 pr-12 bg-white appearance-none focus:border-[#004985] focus:ring-2 focus:ring-[#004985]/12"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                  </select>
                  <div className="absolute right-[14px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="#004985">
                      <path d="M5.5 7.5 10 12l4.5-4.5" stroke="#004985" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Upgrade Selection */}
            <h2 className="text-[32px] font-bold text-[#004985] leading-[1.727] mb-[30px] mt-2">Upgrade Selection</h2>

            <div className="bg-white">
              {PRICING.upgrades.map((u) => (
                <div key={u.id} className="bg-white rounded-[18px] p-4 pr-4 mb-2.5 hover:bg-gray-50 border border-transparent hover:border-gray-200">
                  <div className="flex items-start gap-4">
                    <input
                      className="mt-1 w-[17px] h-[17px] text-[#004985] border-2 border-[#004985] rounded focus:ring-[#004985] focus:ring-2 focus:ring-offset-0"
                      type="checkbox"
                      id={`u-${u.id}`}
                      checked={!!selected[u.id]}
                      onChange={() => handleToggle(u.id)}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2.5">
                        <label className="text-lg font-bold text-[#072E60] leading-[1.2] cursor-pointer" htmlFor={`u-${u.id}`}>
                          {u.label}
                        </label>
                        <div className="text-[28px] font-bold text-[#072E60] leading-[1.974] text-right ml-4">
                          {USD.format(u.price)}
                        </div>
                      </div>
                      <p className="text-base text-[#09101D] opacity-80 leading-[1.3] mb-0">{u.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificate Delivery section */}
            <div className="mt-[30px]">
              <h3 className="text-[32px] font-bold text-[#004985] leading-[1.2] mb-[30px]">
                Certificate Delivery For Completion Receipt Confirmation
              </h3>

              <div className="bg-white rounded-[18px] p-4 pr-4">
                <div className="flex items-start gap-4">
                  <input
                    className="mt-1 w-[17px] h-[17px] text-[#004985] border-2 border-[#004985] rounded focus:ring-[#004985] focus:ring-2 focus:ring-offset-0"
                    type="checkbox"
                    id="free-delivery"
                    checked
                    disabled
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2.5">
                      <label className="text-lg font-bold text-[#072E60] leading-[1.2] cursor-pointer" htmlFor="free-delivery">
                        {PRICING.freeDelivery.label}
                      </label>
                      <div className="text-[28px] font-bold text-[#072E60] leading-[1.974] text-right ml-4">
                        FREE
                      </div>
                    </div>
                    <p className="text-base text-[#09101D] opacity-80 leading-[1.3] mb-0">
                      {PRICING.freeDelivery.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT summary */}
          <div className="w-full lg:w-[364px] lg:shrink-0">
            <aside className="lg:sticky lg:top-4 border-2 border-[#004985] rounded-[18px] p-[25px] bg-white lg:mt-0 -mt-1">
              <div className="text-[28px] font-bold text-[#072E60] leading-[1.974] text-center mb-4">Your Selection</div>

              <div className="flex flex-col gap-3 mb-4">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-bold text-[#004985]">Courses:</div>
                  <div className="flex justify-between items-end gap-12">
                    <div className="flex flex-col w-[187px]">
                      <div className="text-xs text-[#004985] leading-[1.2]">{courseName}</div>
                    </div>
                    <div className="text-[22px] font-black text-[#004985] leading-[1.2] text-right">
                      {USD.format(PRICING.baseCourse)}
                    </div>
                  </div>
                </div>

                {selectedUpgrades.length > 0 && (
                  <>
                    <div className="h-px bg-black/10"></div>
                    <div className="flex flex-col gap-0.5">
                      <div className="text-sm font-bold text-[#004985]">Courses:</div>
                      {selectedUpgrades.map((u) => (
                        <div key={`sum-${u.id}`} className="flex justify-between items-end gap-12">
                          <div className="flex flex-col w-[213px]">
                            <div className="text-xs text-[#004985] leading-[1.2]">{u.label}</div>
                          </div>
                          <div className="text-[22px] font-black text-[#004985] leading-[1.2] text-right">
                            {USD.format(u.price)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="h-px bg-black/50 mb-3"></div>

              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-[#004985]">Total:</div>
                <div className="text-[22px] font-black text-[#004985] leading-[1.2]">{USD.format(subtotal)}</div>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA - Right aligned button */}
        <div className="flex justify-end lg:justify-end justify-center">
          <button
            className="w-[141px] h-[42px] rounded-[10px] font-black text-base bg-[#004985] hover:bg-[#08395a] text-white border-0 transition-colors flex items-center justify-center px-[26px] py-[10px]"
            onClick={handleNext}
          >
            Next
          </button>
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

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#072e60] flex items-center justify-center py-2 z-10">
            <div className="text-white text-[18px] font-medium text-center px-4">
              Copyright © 2025 Go To Traffic School. All Rights Reserved
            </div>
          </div>
      </div>
    </div>
  );
}
