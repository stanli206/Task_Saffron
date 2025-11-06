import React from "react";
import crocusImg from "../assets/saf.jpg";
import petalImg from "../assets/bas.jpeg";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";

export default function AboutUs() {
  return (
    <div className="font-sans text-gray-800">
      {/* HERO / BRAND INTRO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b61d6] via-[#b192e6]/60 to-white" />

        {/* center content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.35em] [word-spacing:0.2em]">
            Z PRINCESS SAFFRON
          </h1>

          <p className="mt-8 max-w-4xl text-sm sm:text-base md:text-lg tracking-[0.2em] text-white/90">
            At the crossroads of ancient heritage and modern purity, Z PRINCESS
            SAFFRON embodies the golden promise of authenticity.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-center px-6">
        <h2 className="tracking-[0.3em] text-2xl md:text-3xl mb-10">
          WHO WE ARE
        </h2>

        <p className="max-w-5xl mx-auto text-[15px] leading-relaxed tracking-wide opacity-80 mb-10">
          Z PRINCESS SAFFRON is more than a saffron brand—it is the fruit of
          passion, tradition, and technological excellence. This project was
          proudly launched by HeyRam Infrastructure, an IT services, web
          development, and digital marketing company led by Managing Director
          Raja K. With deep roots in innovation and quality, HeyRam
          Infrastructure envisioned a brand that brings the richness of saffron
          to the world with modern integrity and ancient reverence. Our journey
          blends the digital future with age-old agricultural heritage. Every
          strand of saffron we offer is a symbol of luxury, purity, and
          authenticity—sourced directly from the highlands of Kashmir and
          presented to you with meticulous care and quality assurance.
        </p>

        {/* <p className="max-w-4xl mx-auto text-[15px] leading-relaxed opacity-80 mb-10">
          Launched by HeyRam Infrastructure, led by MD Raja K, blending digital
          innovation with ancient saffron heritage.
        </p>

        <p className="max-w-4xl mx-auto text-[15px] leading-relaxed opacity-80">
          Sourced from the highlands of Kashmir with meticulous care and purity
          assurance.
        </p> */}
      </section>
      <section className="py-24 bg-white text-center">
        <h2 className="tracking-[0.3em] text-2xl md:text-3xl mb-8">
          OUR ESSENCE
        </h2>

        <p className="max-w-4xl mx-auto text-[15px] leading-relaxed tracking-wide opacity-80 mb-16">
          We aren’t just merchants of saffron—we’re curators of a legacy. Each
          strand tells a story from high Himalayan valleys and sun-kissed
          Spanish fields. With every harvest, we preserve heritage, transforming
          kitchens, ceremonies, and lives.
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="tracking-[0.2em] text-[16px] mb-3">
              ORIGIN-BASED SOURCING
            </h3>
            <p className="text-[14px] opacity-90 leading-relaxed">
              Direct farm partnerships ensure true traceability and freshness.
            </p>
          </div>

          <div>
            <h3 className="tracking-[0.2em] text-[16px] mb-3">
              LABORATORY TESTED
            </h3>
            <p className="text-[14px] opacity-90 leading-relaxed">
              Each batch is tested for purity, aroma, and color before reaching
              you.
            </p>
          </div>

          <div>
            <h3 className="tracking-[0.2em] text-[16px] mb-3">
              CRAFTED EXPERIENCES
            </h3>
            <p className="text-[14px] opacity-90 leading-relaxed">
              More than spice—saffron is a symbol of wellness, celebration, and
              royalty.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="relative py-24 px-6 bg-white">
        <div className="absolute inset-0">
          <img
            src={crocusImg}
            className="w-full h-full object-cover opacity-20"
            alt="Crocus Saffron"
          />
        </div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <img
              src={petalImg}
              className="rounded-3xl w-[80%] md:w-[90%] shadow-xl"
              alt="Flower"
            />
          </div>

          <div>
            <h2 className="tracking-[0.3em] text-2xl md:text-3xl mb-6 text-center md:text-left">
              A CULTURE OF SAFFRON
            </h2>

            <p className="text-[15px] leading-relaxed text-center md:text-left tracking-wide opacity-80 mb-4">
              Our vision is simple: Make luxury ethical, and authenticity
              accessible. From sacred rituals to Michelin-starred dishes, our
              saffron enriches every moment.
            </p>

            <p className="text-[15px] leading-relaxed text-center md:text-left tracking-wide opacity-80 mb-4">
              We're proud to redefine saffron—from commodity to craft.
            </p>

            <p className="text-[15px] leading-relaxed text-center md:text-left tracking-wide opacity-80">
              Explore our journey, share our story, and taste the legacy in
              every golden thread.
            </p>
          </div>
        </div>
      </section>

      {/* OUR ESSE.. */}
      

      {/* SIGNATURE QUOTE */}
      <section className="py-24 bg-white text-center">
        <h2 className="tracking-[0.28em] text-[15px] text-gray-500 mb-6">
          SIGNATURE QUOTE
        </h2>
        <p className="text-xl italic tracking-wide text-[#9A6B2F] max-w-3xl mx-auto">
          “Every thread must whisper luxury, heritage, and healing.”
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
    </div>
  );
}
