import React, { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import heroVideo from "../assets/backvideo-C_O02uC7.mp4";

function LineInput({ icon, type = "text", placeholder = "" }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-white/85">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent pb-2 text-white placeholder-white/80 outline-none border-b border-white/50 focus:border-white transition"
      />
    </div>
  );
}

export default function Login() {
  // ✅ Plain JS state (no TS generic)
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(0,0,0,0.55))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4">
        <div className="w-full max-w-xl text-center">
          <div className="mx-auto mb-6 grid h-20 w-20 place-content-center rounded-full bg-white/90 shadow-lg">
            <FiUser className="h-10 w-10 text-gray-700" />
          </div>

          <h1 className="mb-10 text-white tracking-[0.35em] text-2xl sm:text-3xl font-light">
            {isLogin ? "CUSTOMER LOGIN" : "CUSTOMER REGISTER"}
          </h1>

          <div className="mx-auto w-full max-w-md space-y-8">
            {!isLogin && (
              <LineInput
                icon={<FiUser className="h-5 w-5" />}
                placeholder="Enter Name"
              />
            )}

            <LineInput
              icon={<FiMail className="h-5 w-5" />}
              type="email"
              placeholder={
                isLogin ? "Enter Email or Phone number" : "Enter Email or Phone"
              }
            />

            <LineInput
              icon={<FiLock className="h-5 w-5" />}
              type="password"
              placeholder="Enter Password"
            />

            <button
              type="button"
              className="mx-auto block w-full rounded-md bg-white/95 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg hover:bg-white transition"
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </button>

            <div className="pt-1 text-white/90">
              {isLogin ? (
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-white/95 underline-offset-4 hover:underline"
                >
                  New User? Create Account
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-white/95 underline-offset-4 hover:underline"
                >
                  Existing User? Continue Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-white/5" />
    </div>
  );
}
