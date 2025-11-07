import React from "react";
import { useEffect } from "react";
import heroVideo from "../../assets/insightvideo-QZD8qk3w.mp4";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";

import retwo from "../../assets/retwo.jpg";
import reone from "../../assets/reone.jpeg";
import rethree from "../../assets/rethree.jpg";

export default function Insight() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="bg-white text-[#0e0e0e]">
      <header className="relative h-[99.99vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(0,0,0,0.55))]" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-light tracking-[0.35em] [word-spacing:0.2em] text-4xl md:text-5xl">
            INSIGHT
          </h1>
          <p className="mt-6 text-xs sm:text-sm tracking-[0.35em] uppercase opacity-90">
            In the delicate petals of saffron, tradition finds its fragrance,
            and life its vibrance.
          </p>

          <button
            className="mt-8 rounded-full bg-white/95 px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg backdrop-blur transition hover:bg-white"
            onClick={() => {
              const el = document.getElementById("quality");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            DISCOVER
          </button>
        </div>
      </header>

      <section id="quality" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl tracking-[0.25em]">
          QUALITY AND TRADITION
        </h2>
        <p className="mx-auto mt-8 max-w-5xl text-center leading-8 md:leading-9 text-[#1f2937]">
          Our premium saffron is the key to unlocking this ancient magic. Each
          thread is a result of meticulous hand-picking and drying processes,
          ensuring the highest quality and potency.
        </p>
      </section>

      <section className="bg-[#bcd6d1] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl md:text-4xl tracking-[0.25em]">
            EXPERIENCE THE MAGIC
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {/* Card 1 */}
            <article className="rounded-xl bg-[#bcd6d1] shadow-xl">
              <img
                src={reone}
                alt="Culinary Mastery"
                className="h-64 w-full rounded-xl object-cover"
              />
              <div className="px-4 pb-6 pt-5">
                <h3 className="text-center text-xl tracking-[0.25em]">
                  CULINARY MASTERY
                </h3>
                <p className="mt-4 text-center leading-7 text-[#223]">
                  Add a single thread of saffron to your dish, and the moment it
                  touches your food, the air fills with a rich, honeyed aroma.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="rounded-xl bg-[#bcd6d1] shadow-xl">
              <img
                src={retwo}
                alt="Timeless Beauty"
                className="h-64 w-full rounded-xl object-cover"
              />
              <div className="px-4 pb-6 pt-5">
                <h3 className="text-center text-xl tracking-[0.25em]">
                  TIMELESS BEAUTY
                </h3>
                <p className="mt-4 text-center leading-7 text-[#223]">
                  Saffron is cherished for its beauty-enhancing properties,
                  helping reduce fine lines and wrinkles, improve skin texture,
                  and impart a radiant glow.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="rounded-xl bg-[#bcd6d1] shadow-xl">
              <img
                src={rethree}
                alt="Holistic Well-Being"
                className="h-64 w-full rounded-xl object-cover"
              />
              <div className="px-4 pb-6 pt-5">
                <h3 className="text-center text-xl tracking-[0.25em]">
                  HOLISTIC WELL-BEING
                </h3>
                <p className="mt-4 text-center leading-7 text-[#223]">
                  Saffron is celebrated for its remarkable health benefits,
                  promoting mood enhancement, stress reduction, and digestive
                  support.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl tracking-[0.25em]">
          THE SECRETS OF THE CROCUS SATIVUS
        </h2>
        <p className="mx-auto mt-8 text-center leading-8 md:leading-9 text-[#1f2937]">
          Step into a world where history and luxury meet with our premium
          saffron collection. Cultivated with deep respect for its legendary
          qualities, each saffron thread tells a story of ancient royalty and
          offers the promise of vibrant culinary delights, radiant skin, and a
          touch of well-being magic.
        </p>
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
    </main>
  );
}
