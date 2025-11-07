import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mx-auto mb-8 h-56 w-56 select-none">
            <svg
              viewBox="0 0 300 220"
              className="h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="bagA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a5d8ff" />
                  <stop offset="100%" stopColor="#74c0fc" />
                </linearGradient>
                <linearGradient id="bagB" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffd8a8" />
                  <stop offset="100%" stopColor="#ffa94d" />
                </linearGradient>
                <linearGradient id="bagC" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e599f7" />
                  <stop offset="100%" stopColor="#cc5de8" />
                </linearGradient>
              </defs>

             
              <g fill="#f08c00" opacity="0.8">
                <circle cx="70" cy="20" r="2" />
                <circle cx="115" cy="10" r="2" />
                <circle cx="200" cy="15" r="2" />
                <circle cx="240" cy="32" r="2" />
                <circle cx="260" cy="68" r="2" />
                <circle cx="45" cy="60" r="2" />
                <circle cx="95" cy="46" r="2" />
              </g>

              {/* left bag */}
              <g transform="translate(70,110)">
                <rect width="80" height="70" rx="8" fill="url(#bagA)" />
                <path
                  d="M20 0c0-16 12-28 28-28s28 12 28 28"
                  fill="none"
                  stroke="#4dabf7"
                  strokeWidth="6"
                />
                <rect
                  x="18"
                  y="20"
                  width="44"
                  height="6"
                  rx="3"
                  fill="#4dabf7"
                  opacity="0.3"
                />
              </g>

              
              <g transform="translate(120,80)">
                <rect width="90" height="100" rx="10" fill="url(#bagB)" />
                <path
                  d="M22 -2c0-18 14-32 32-32s32 14 32 32"
                  fill="none"
                  stroke="#fd7e14"
                  strokeWidth="6"
                />
                <rect
                  x="20"
                  y="26"
                  width="50"
                  height="8"
                  rx="4"
                  fill="#fd7e14"
                  opacity="0.3"
                />
              </g>

              {/* right small bag */}
              <g transform="translate(200,120)">
                <rect width="70" height="60" rx="8" fill="url(#bagC)" />
                <path
                  d="M15 0c0-14 10-24 24-24s24 10 24 24"
                  fill="none"
                  stroke="#ae3ec9"
                  strokeWidth="6"
                />
                <rect
                  x="14"
                  y="18"
                  width="40"
                  height="6"
                  rx="3"
                  fill="#ae3ec9"
                  opacity="0.35"
                />
              </g>
            </svg>
          </div>

          {/* Heading */}
          <h1 className="mb-2 text-[28px] sm:text-[34px] tracking-[0.35em] font-light text-gray-900">
            YOUR CART IS EMPTY
          </h1>

          {/* Subtext */}
          <p className="mb-8 text-gray-600">Sign Up To Add Items</p>

          {/* CTA */}
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white text-sm font-semibold tracking-widest hover:bg-black/90 transition"
          >
            SIGN UP
          </button>
        </div>
      </section>
      <footer className="bg-[#231a38] text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Logo */}
          <h2 className="footer-logo text-center text-lg md:text-xl tracking-[0.35em] text-gray-200 mb-6">
            Z PRINCESS SAFFRON
          </h2>

          <hr className="border-gray-500/40 mb-10" />

          {/* Links */}
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left text-sm">
            <div className="space-y-3 tracking-[0.2em]">
              <a href="#" className="block hover:text-white">
                CONTACT
              </a>
              <a href="#" className="block hover:text-white">
                ABOUT
              </a>
            </div>

            <div className="space-y-3 tracking-[0.2em]">
              <a href="#" className="block hover:text-white">
                TERMS AND CONDITION
              </a>
              <a href="#" className="block hover:text-white">
                PRIVACY POLICY
              </a>
              <a
                href="#"
                className="block hover:text-white flex items-center gap-2 justify-center md:justify-start"
              >
                CORPORATE ESSENTIALS <span>▼</span>
              </a>
            </div>

            <div className="space-y-3 tracking-[0.2em]">
              <a href="#" className="block hover:text-white">
                REFUND POLICY
              </a>
              <a href="#" className="block hover:text-white">
                SHIPPING POLICY
              </a>
              <a href="#" className="block hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-10 text-gray-400 text-xl">
            <FiFacebook className="hover:text-white cursor-pointer" size={22} />
            <FiMessageCircle
              className="hover:text-white cursor-pointer"
              size={22}
            />
            <FiInstagram
              className="hover:text-white cursor-pointer"
              size={22}
            />
            <FiMail className="hover:text-white cursor-pointer" size={22} />
            <FiLinkedin className="hover:text-white cursor-pointer" size={22} />
          </div>

          <hr className="border-gray-500/40 mt-10" />
        </div>
      </footer>
    </div>
  );
}
