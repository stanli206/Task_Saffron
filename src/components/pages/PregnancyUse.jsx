import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import heroImg from "../../assets/preg.jpg";

const CARDS = [
  {
    key: "benefits",
    heading: "POTENTIAL BENEFITS",
    intro:
      "Below are gentle, dietary-level benefits that are often discussed for saffron during pregnancy. This is general info only — always follow your clinician’s guidance.",
    blocks: [
      {
        title: "MOOD REGULATION",
        text: "Compounds like crocin and safranal may influence neurotransmitters involved in mood. During pregnancy, hormonal changes can trigger mood swings, anxiety, and low mood. Gentle, food-level intake of saffron is often associated with calm and balance, but medical advice is essential for any supplement use.",
      },
      {
        title: "DIGESTIVE SUPPORT",
        text: "Common concerns include nausea, indigestion, and constipation, often due to hormonal shifts and pressure from the growing uterus. Saffron is traditionally thought to support digestive enzyme secretion and bile flow, which may ease nausea, improve digestion, and help with bloating or constipation at culinary amounts.",
      },
      {
        title: "IRON BOOST",
        text: "Iron is crucial for hemoglobin, carrying oxygen to you and your baby. Pregnancy increases iron needs. Saffron contains a small amount of iron and, as part of an overall diet with iron-rich foods (and clinician-approved supplementation where needed), can contribute modestly to total intake.",
      },
      {
        title: "SLEEP ENHANCEMENT",
        text: "Sleep can be disrupted by hormonal changes, physical discomfort, and anxiety. Saffron’s mild soothing properties (potentially via neurotransmitter effects) are commonly associated with relaxation and better sleep quality. Prioritize safe sleep habits; discuss any supplement use with your healthcare provider.",
      },
    ],
  },
];

// dots (kept for future extensibility)
const Dot = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-1.5 w-6 rounded-full transition-all ${
      active ? "bg-rose-700" : "bg-rose-300/60 hover:bg-rose-400"
    }`}
    aria-label="Go to slide"
  />
);

export default function PregnancyUse() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);

  const current = useMemo(() => CARDS[index], [index]);
  const hasMultiple = CARDS.length > 1;

  // autoplay (only if multiple slides)
  useEffect(() => {
    if (!hasMultiple || !playing) return;
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % CARDS.length),
      7000
    );
    return () => clearInterval(timerRef.current);
  }, [playing, hasMultiple]);

  // keyboard nav
  useEffect(() => {
    if (!hasMultiple) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " ") setPlaying((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasMultiple]);

  const prev = () => setIndex((i) => (i - 1 + CARDS.length) % CARDS.length);
  const next = () => setIndex((i) => (i + 1) % CARDS.length);

  return (
    <main>
      <section className="relative h-[100svh] w-full overflow-hidden">
        {/* ✅ Background Image (No Video) */}
        <img
          src={heroImg}
          alt="Beauty Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* ✅ Vignette Fade */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(0,0,0,0.55))]" />

        {/* ✅ CENTER TITLE */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-light tracking-[0.35em] [word-spacing:0.2em] text-4xl md:text-5xl">
            PREGNANT WOMAN
          </h1>
          <p className="mt-6 text-xs sm:text-sm tracking-[0.35em] uppercase opacity-90">
            Saffron is known to help improve digestion, enhance mood, and
            promote relaxation, making it a beneficial spice for pregnant women
            when used in moderation.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen w-full bg-[#f6dbe8] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          {/* controls (hidden if only one slide) */}
          {hasMultiple && (
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="grid h-8 w-8 place-content-center rounded-full bg-white shadow hover:shadow-md"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="grid h-8 w-8 place-content-center rounded-full bg-white shadow hover:shadow-md"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
              <button
                onClick={() => setPlaying((p) => !p)}
                className="grid h-8 w-8 place-content-center rounded-full bg-white shadow hover:shadow-md"
                aria-label="Play/Pause"
                title={playing ? "Pause" : "Play"}
              >
                {playing ? "⏸" : "▶"}
              </button>
            </div>
          )}

          {/* card */}
          <div className="rounded-2xl bg-white/75 shadow-lg ring-1 ring-rose-900/5 backdrop-blur">
            <div className="px-4 py-10 sm:px-10 sm:py-14">
              <h2 className="mb-2 text-center text-xl tracking-[0.35em] text-rose-900 sm:text-2xl">
                {current.heading}
              </h2>
              <p className="mx-auto mb-10 max-w-4xl text-center text-[13px] leading-7 text-rose-900/90 sm:text-[15px]">
                {current.intro}
              </p>

              <div className="space-y-12">
                {current.blocks.map((b) => (
                  <div key={b.title} className="text-center">
                    <h3 className="mb-2 text-sm tracking-[0.5em] text-rose-800 sm:text-base">
                      {b.title}
                    </h3>
                    <p className="mx-auto max-w-5xl text-[12.5px] leading-7 text-rose-900/80 sm:text-[14.5px]">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* dots (only if multiple slides) */}
              {hasMultiple && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  {CARDS.map((_, i) => (
                    <Dot
                      key={i}
                      active={i === index}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>
              )}

              {/* gentle medical note */}
              <p className="mt-10 text-center text-[11.5px] leading-6 text-rose-900/70 sm:text-[12.5px]">
                Note: Information above is educational and not medical advice.
                During pregnancy, avoid self-supplementation and consult your
                healthcare provider for what’s safe for you.
              </p>
            </div>
          </div>
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
    </main>
  );
}
