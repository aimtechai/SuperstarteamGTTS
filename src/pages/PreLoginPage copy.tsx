import React from 'react';

// Asset imports using existing project assets
const imgGoToSchoolOnline1 = "/src/assets/gttsonline.png";
const imgMaterialSymbolsFingerprint = "/src/assets/material-symbols_fingerprint.png";
const imgIcOutlineApple = "/src/assets/ic_outline-apple.png";
const imgDeviconGoogle = "/src/assets/devicon_google.png";
const imgLogosFacebook = "/src/assets/logos_facebook.png";
const imgDeviconLinkedin = "/src/assets/devicon_linkedin.png";
const imgLogosMicrosoftIcon = "/src/assets/logos_microsoft-icon.png";

export default function PreLoginPage() {
  return (
    <div className="bg-[#e7f4ff] relative min-h-screen w-full">
      {/* Top Header */}
      {/* <div className="relative w-full pt-2.5 pb-9">
        <div className="flex justify-end pr-[156px] pt-2.5">
          <div className="flex items-center gap-1.5">
            <div className="text-[#1c274c] text-[14px] font-medium">
              📞 1-(888)-329-7069
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 mt-4" />
      </div> */}

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#072e60] flex items-center justify-center py-2 z-10">
        <div className="text-white text-[14px] sm:text-[16px] font-medium text-center px-4">
          Copyright © 2025 Go To Traffic School. All Rights Reserved
        </div>
      </div>

      {/* Chat Bot */}
      <div className="fixed bottom-20 right-16 w-14 h-14  rounded-full flex items-center justify-center text-white text-2xl cursor-pointer hover:bg-blue-700 transition-colors z-50" style={{ backgroundColor: '#072E60' }}>
        <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 0C9.4697 0 6.3972 0.250672 3.40166 0.733235C1.39074 1.05718 0 2.81855 0 4.79624V12.0038C0 13.9814 1.39074 15.7428 3.40166 16.0668C5.0367 16.3302 6.69471 16.5245 8.37256 16.6467C8.76414 16.6752 9.10168 16.8984 9.27146 17.2249L11.6684 21.8344C11.8491 22.182 12.2083 22.4 12.6 22.4C12.9917 22.4 13.3509 22.182 13.5316 21.8344L15.9285 17.2249C16.0983 16.8984 16.4359 16.6752 16.8274 16.6467C18.5053 16.5245 20.1633 16.3302 21.7983 16.0668C23.8093 15.7428 25.2 13.9814 25.2 12.0038V4.79624C25.2 2.81855 23.8093 1.05718 21.7983 0.733235C18.8028 0.250672 15.7303 0 12.6 0ZM8.05 5.6C7.4701 5.6 7 6.0701 7 6.65C7 7.2299 7.4701 7.7 8.05 7.7H17.15C17.7299 7.7 18.2 7.2299 18.2 6.65C18.2 6.0701 17.7299 5.6 17.15 5.6H8.05ZM8.05 9.1C7.4701 9.1 7 9.5701 7 10.15C7 10.7299 7.4701 11.2 8.05 11.2H12.95C13.5299 11.2 14 10.7299 14 10.15C14 9.5701 13.5299 9.1 12.95 9.1H8.05Z" fill="#F3F4F6"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="flex justify-center items-start pt-16 pb-32 px-4">
        <div className="flex gap-16 max-w-[1300px] w-full">
          
          {/* Left Side - Login Form */}
          <div className="bg-white rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-16 w-[600px]">
            <div className="flex flex-col gap-10 max-w-[422px]">
              {/* Logo */}
              <div className="h-[90px] w-[180px]">
                <img src={imgGoToSchoolOnline1} alt="Go To School Online" className="h-full w-full object-contain" />
              </div>
              
              {/* Login Section */}
              <div className="flex flex-col gap-4 w-full">
                {/* Login Header with Lines */}
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 h-px bg-[#004985]" />
                  <div className="font-bold text-[#004985] text-[24px] px-4">
                    Login
                  </div>
                  <div className="flex-1 h-px bg-[#004985]" />
                </div>
                
                {/* Form Fields */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-[42px] bg-white border-[0.3px] border-[#004985] rounded-[10px] px-3 text-[12px] font-bold text-[#004985] placeholder:text-[#004985] focus:outline-none focus:ring-1 focus:ring-[#004985]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full h-[42px] bg-white border-[0.3px] border-[#004985] rounded-[10px] px-3 text-[12px] font-bold text-[#004985] placeholder:text-[#004985] focus:outline-none focus:ring-1 focus:ring-[#004985]"
                    />
                  </div>
                </div>
                
                {/* Login Button */}
                <button className="bg-[#004985] flex items-center justify-center h-[42px] rounded-[10px] w-full hover:bg-[#003366] transition-colors">
                  <span className="font-black text-white text-[16px]">Login</span>
                </button>

                {/* Sign Up Button */}
                <button className="bg-[#004985] flex items-center justify-center h-[42px] rounded-[10px] w-full hover:bg-[#003366] transition-colors">
                  <span className="font-black text-white text-[16px]">Sign Up</span>
                </button>
              </div>

              {/* Or Login with Section */}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex-1 h-px bg-[#004985]" />
                  <div className="font-normal text-[#004985] text-[16px] px-4">
                    Or Login with:
                  </div>
                  <div className="flex-1 h-px bg-[#004985]" />
                </div>

                {/* Biometric Login Button */}
                <button className="border border-[#004985] flex items-center gap-2.5 h-[42px] px-[76px] rounded-[10px] w-full hover:bg-gray-50 transition-colors">
                  <img alt="" className="w-6 h-6" src={imgMaterialSymbolsFingerprint} />
                  <span className="font-black text-[#004985] text-[16px]">Log in with Face ID / Fingerprint</span>
                </button>

                {/* Social Login Buttons */}
                <button className="border border-[#004985] flex items-center gap-2.5 h-[42px] px-[76px] rounded-[10px] w-full hover:bg-gray-50 transition-colors">
                  <img alt="" className="w-6 h-6" src={imgIcOutlineApple} />
                  <span className="font-black text-[#004985] text-[16px]">Log in with Apple</span>
                </button>

                <button className="border border-[#004985] flex items-center gap-2.5 h-[42px] px-[76px] rounded-[10px] w-full hover:bg-gray-50 transition-colors">
                  <img alt="" className="w-6 h-6" src={imgDeviconGoogle} />
                  <span className="font-black text-[#004985] text-[16px]">Log in with Google</span>
                </button>

                <button className="border border-[#004985] flex items-center gap-2.5 h-[42px] px-[76px] rounded-[10px] w-full hover:bg-gray-50 transition-colors">
                  <img alt="" className="w-6 h-6" src={imgLogosFacebook} />
                  <span className="font-black text-[#004985] text-[16px]">Log in with Facebook</span>
                </button>

                <button className="border border-[#004985] flex items-center gap-2.5 h-[42px] px-[76px] rounded-[10px] w-full hover:bg-gray-50 transition-colors">
                  <img alt="" className="w-6 h-6" src={imgDeviconLinkedin} />
                  <span className="font-black text-[#004985] text-[16px]">Log in with LinkedIn</span>
                </button>

                <button className="border border-[#004985] flex items-center gap-2.5 h-[42px] px-[76px] rounded-[10px] w-full hover:bg-gray-50 transition-colors">
                  <img alt="" className="w-6 h-6" src={imgLogosMicrosoftIcon} />
                  <span className="font-black text-[#004985] text-[16px]">Log in with Microsoft</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side - Information Cards */}
          <div className="flex flex-col gap-8 w-[640px]">
            {/* Login Information Card */}
            <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-bold text-[#004985] text-[32px] leading-tight">
                  Login
                </h2>
                <div className="flex flex-col gap-6 text-black text-[16px] leading-relaxed">
                  <p>
                    <strong>CERTIFICATE PROCESSING TIMELINE:</strong> Certificates of Completion are processed within 3 business days of your completion or sooner. If you order Same Day Processing, your certificate will be processed the same day as your completion as long as you complete your course prior to 3PM PST Monday - Friday. Otherwise, it will be processed the following business day.
                  </p>
                  <p>
                    <strong>CERTIFICATE SHIPPING TIMES:</strong> Regular and Certified USPS will arrive within 7 - 10 days from the date of shipment. FedEx shipments are processed each day until 3PM PST, Monday - Friday, and will be delivered according to the service selected. Electronic certificates, where available, are processed according to regular processing timelines and will be delivered to you via email.
                  </p>
                  <p className="font-semibold">
                    YOU MUST SIGNUP FIRST before you can LOGIN.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Registration Information Card */}
            <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-bold text-[#004985] text-[32px] leading-tight">
                  Registration
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-black text-[16px] leading-relaxed">
                    Haven't registered yet? Please select your site and click the registration button.
                  </p>
                  <button className="bg-[#004d85] flex items-center justify-center h-[50px] px-12 rounded-[10px] w-fit hover:bg-[#003366] transition-colors">
                    <span className="font-bold text-white text-[16px]">Register Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}