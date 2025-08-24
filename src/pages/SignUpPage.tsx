import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoImage from "../assets/logo.png";
import appleIcon from "../assets/ic_outline-apple.png";
import googleIcon from "../assets/devicon_google.png";
import facebookIcon from "../assets/logos_facebook.png";
import linkedinIcon from "../assets/devicon_linkedin.png";
import microsoftIcon from "../assets/logos_microsoft-icon.png";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[550px] p-[42px]">
          {/* Logo */}
          <div className="flex justify-center mb-[39px]">
            <img
              src={logoImage}
              alt="Go To Traffic School Online"
              className="h-[120px] w-auto object-contain"
            />
          </div>

          {/* Sign Up Section */}
          <div className="space-y-4">
            {/* Sign Up Title with Lines */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <h1 className="font-bold text-[24px] text-[#004985] px-2">
                Sign Up with
              </h1>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Sign Up Buttons */}
            <button className="w-full h-[42px] px-4 py-2.5 rounded-[10px] border-2 border-[#004985] flex items-center justify-center gap-2.5 hover:bg-[#004985] hover:text-white transition-colors group">
              <Mail className="w-[23px] h-[17px] text-[#004985] group-hover:text-white" />
              <span className="font-bold text-[18px] text-[#004985] group-hover:text-white">
                Email
              </span>
            </button>

            <button className="w-full h-[42px] px-4 py-2.5 rounded-[10px] border-2 border-[#004985] flex items-center justify-center gap-2.5 hover:bg-[#004985] hover:text-white transition-colors group">
              <img src={appleIcon} alt="Apple" className="w-6 h-6" />
              <span className="font-bold text-[18px] text-[#004985] group-hover:text-white">
                Apple
              </span>
            </button>

            <button className="w-full h-[42px] px-4 py-2.5 rounded-[10px] border-2 border-[#004985] flex items-center justify-center gap-2.5 hover:bg-[#004985] hover:text-white transition-colors group">
              <img src={googleIcon} alt="Google" className="w-6 h-6" />
              <span className="font-bold text-[18px] text-[#004985] group-hover:text-white">
                Google
              </span>
            </button>

            <button className="w-full h-[42px] px-4 py-2.5 rounded-[10px] border-2 border-[#004985] flex items-center justify-center gap-2.5 hover:bg-[#004985] hover:text-white transition-colors group">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              <span className="font-bold text-[18px] text-[#004985] group-hover:text-white">
                Facebook
              </span>
            </button>

            <button className="w-full h-[42px] px-4 py-2.5 rounded-[10px] border-2 border-[#004985] flex items-center justify-center gap-2.5 hover:bg-[#004985] hover:text-white transition-colors group">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              <span className="font-bold text-[18px] text-[#004985] group-hover:text-white">
                LinkedIn
              </span>
            </button>

            <button className="w-full h-[42px] px-4 py-2.5 rounded-[10px] border-2 border-[#004985] flex items-center justify-center gap-2.5 hover:bg-[#004985] hover:text-white transition-colors group">
              <img src={microsoftIcon} alt="Microsoft" className="w-6 h-6" />
              <span className="font-bold text-[18px] text-[#004985] group-hover:text-white">
                Microsoft
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#072e60] flex items-center justify-center py-2 z-10">
        <div className="text-white text-[18px] font-medium text-center px-4">
          Copyright © 2025 Go To Traffic School. All Rights Reserved
        </div>
      </div>

      {/* Chat Bot */}
      <div
        className="fixed bottom-20 right-4 md:right-16 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-xl md:text-2xl cursor-pointer hover:bg-blue-700 transition-colors z-50"
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
    </div>

  );
}