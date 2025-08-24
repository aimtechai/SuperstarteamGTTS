import React, { useState } from "react";
// Tailwind CSS classes are used; removed Bootstrap and component CSS
import FingerPrintImg from '../../assets/material-symbols_fingerprint.png'
import AppleImg from '../../assets/ic_outline-apple.png'
import GoogleImg from '../../assets/devicon_google.png'
import FacebookImg from '../../assets/logos_facebook.png'
import LinkedInImg from '../../assets/devicon_linkedin.png'
import MicrosoftImg from '../../assets/logos_microsoft-icon.png'

const DefaultWordmark = () => (
  <div className="flex items-center justify-center">
    <div className="w-6 h-6 bg-[#004985] rounded mr-3" aria-hidden="true" />
    <div className="text-[#004985] font-bold text-[22px] sm:text-[24px]">
      <span className="font-normal">Go To</span>&nbsp;<strong>Traffic</strong>&nbsp;School Online
    </div>
  </div>
);

type SSOHandlers = Partial<{
  apple: () => void;
  google: () => void;
  facebook: () => void;
  linkedin: () => void;
  microsoft: () => void;
  biometrics: () => void;
}>;

type SSOButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

/* ========== Reusable button ========== */
const SSOButton: React.FC<SSOButtonProps> = ({ onClick, children }) => (
  <button
    type="button"
    className="w-full bg-white border-2 border-[#004985] text-[#004985] h-[46px] rounded-[10px] font-bold flex items-center justify-center gap-[10px] text-[14.5px] transition-colors hover:bg-[#004985]/5"
    onClick={onClick}
  >
    {children}
  </button>
);

interface Credentials { email: string; password: string }

interface TrafficSchoolLoginProps {
  logoSrc?: string;
  onSubmit?: (creds: Credentials) => void;
  onSSO?: SSOHandlers;
}

export default function TrafficSchoolLogin({
  logoSrc,
  onSubmit,
  onSSO = {},
}: TrafficSchoolLoginProps) {
  const [creds, setCreds] = useState({ email: "", password: "" });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(creds);
  };

  return (
    // bg-[#E7F4FF] shadow-lg
      <div className="min-h-screen grid place-items-center py-20 px-3 font-sans text-[18px]">
        <div className="bg-white rounded-[18px] w-full max-w-[560px] border border-[#e7eef7] px-[22px] py-6">
          {/* Header / Logo */}
          <div className="text-center mb-2">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Go To Traffic School Online"
                className="max-w-[380px] w-[92%] h-auto inline-block mb-2"
              />
            ) : (
              <DefaultWordmark />
            )}
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

          {/* Login title with dividers */}
          <div className="flex items-center justify-center gap-[10px] text-[#113a5b] font-bold text-[20px] mt-[6px] mb-[10px]">
            <div className="h-[2px] bg-[#dbe6f3] flex-1 max-w-[32%]" />
            <span>Login</span>
            <div className="h-[2px] bg-[#dbe6f3] flex-1 max-w-[32%]" />
          </div>

          {/* Email / Password form */}
          <form onSubmit={submit} className="mx-auto max-w-[560px]">
            <div className="mb-3">
              <input
                className="w-full border-[1.5px] border-[#d6e3f3] rounded-[10px] h-[44px] px-[14px] py-[10px] text-[18px] focus:outline-none focus:border-[#004985] focus:ring-2 focus:ring-[#004985]/20"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={creds.email}
                onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <input
                className="w-full border-[1.5px] border-[#d6e3f3] rounded-[10px] h-[44px] px-[14px] py-[10px] text-[18px] focus:outline-none focus:border-[#004985] focus:ring-2 focus:ring-[#004985]/20"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={creds.password}
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                required
              />
            </div>

            <button
              className="w-full mb-4 bg-[#004985] hover:bg-[#08395a] text-white rounded-[10px] h-[44px] font-bold text-[18px]"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center gap-[10px] text-[#5c6b7c] font-semibold justify-center text-[18px] mt-[6px] mb-[10px]">
            <div className="h-[2px] bg-[#dbe6f3] flex-1 max-w-[220px]" />
            <span>Or Login with:</span>
            <div className="h-[2px] bg-[#dbe6f3] flex-1 max-w-[220px]" />
          </div>

          {/* SSO Buttons */}
          <div className="mx-auto max-w-[560px] text-[18px]">
            <div className="mb-3">
              <SSOButton onClick={onSSO.biometrics}>
                <img src={FingerPrintImg} alt="Face ID / Fingerprint" className="w-5 h-5" />
                <span>Face ID / Fingerprint</span>
              </SSOButton>
            </div>

            <div className="mb-3">
              <SSOButton onClick={onSSO.apple}>
                <img src={AppleImg} alt="Apple" className="w-5 h-5" />
                <span>Apple</span>
              </SSOButton>
            </div>

            <div className="mb-3">
              <SSOButton onClick={onSSO.google}>
                <img src={GoogleImg} alt="Google" className="w-5 h-5" />
                <span>Google</span>
              </SSOButton>
            </div>

            <div className="mb-3">
              <SSOButton onClick={onSSO.facebook}>
                <img src={FacebookImg} alt="Facebook" className="w-5 h-5" />
                <span>Facebook</span>
              </SSOButton>
            </div>

            <div className="mb-3">
              <SSOButton onClick={onSSO.linkedin}>
                <img src={LinkedInImg} alt="LinkedIn" className="w-5 h-5" />
                <span>LinkedIn</span>
              </SSOButton>
            </div>

            <div className="mb-1">
              <SSOButton onClick={onSSO.microsoft}>
                <img src={MicrosoftImg} alt="Microsoft" className="w-5 h-5" />
                <span>Microsoft</span>
              </SSOButton>
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
