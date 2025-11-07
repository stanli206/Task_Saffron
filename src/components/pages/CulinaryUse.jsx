import React, { useEffect, useMemo, useRef, useState } from "react";
import heroImg from "../../assets/ioio.jpeg";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
const CARDS = [
  {
    key: "biryani",
    heading: "BIRYANI",
    intro:
      "Saffron adds a unique and subtle flavor to Biryani. It has a slightly sweet, earthy taste that enhances the overall flavor profile of the dish.",
    blocks: [
      {
        title: "AROMA",
        text: "The aroma of saffron is distinct and can elevate the biryani with its warm, floral notes. This fragrance is often one of the first things people notice.",
      },
      {
        title: "COLOR",
        text: "Saffron imparts a vibrant golden-yellow color to the rice and meat in the biryani. This color is visually appealing and contributes to the dish's richness and elegance.",
      },
      {
        title: "INFUSION",
        text: "Saffron threads are typically steeped in warm milk or water before being added to the biryani. This helps release the color and flavor. Just a few threads are usually enough to achieve the desired effect.",
      },
      {
        title: "AVOID OVERUSE",
        text: "Too much saffron can overpower the dish. Stick to a small quantity to maintain a balanced flavor.",
      },
    ],
  },
  {
    key: "gulab-jamun",
    heading: "GULAB JAMUN",
    intro:
      "Saffron adds a subtle, exotic flavor to Gulab Jamun. Its unique, slightly sweet, and earthy notes enhance the overall taste of the dessert, giving it a refined touch.",
    blocks: [
      {
        title: "AROMA",
        text: "Saffron imparts a warm, floral aroma that elevates the sensory experience of Gulab Jamun. This aroma makes the dessert more inviting and enhances its appeal.",
      },
      {
        title: "COLOR",
        text: "Saffron infuses a beautiful golden hue into the syrup or the dough of Gulab Jamun. This vibrant color not only adds elegance to the dessert but also visually signifies its luxurious flavor.",
      },
      {
        title: "INFUSION",
        text: "Soak saffron threads in a small amount of warm milk or water to release their color and flavor. Let it steep for about 10–15 minutes.",
      },
      {
        title: "AVOID OVERUSE",
        text: "Since saffron is potent, using too much can overpower the dessert. Stick to a small quantity to maintain balance.",
      },
    ],
  },
  {
    key: "ice-cream",
    heading: "SAFFRON INFUSED ICE-CREAM",
    intro:
      "Saffron imparts a unique, slightly sweet, and earthy flavor to ice cream. This complex taste can add depth and sophistication, making the ice cream stand out from more traditional flavors.",
    blocks: [
      {
        title: "AROMA",
        text: "Saffron adds a floral, warm aroma to ice cream. This pleasant scent can enhance the sensory experience, making each bite more aromatic and inviting.",
      },
      {
        title: "COLOR",
        text: "Saffron infuses a beautiful golden-yellow hue into the ice cream. This vibrant color makes the ice cream visually striking and adds an element of elegance.",
      },
      {
        title: "INFUSION",
        text: "Start by steeping saffron threads in a small amount of warm milk or cream. This helps to release the color and flavor. Let it sit for about 10–15 minutes.",
      },
      {
        title: "AVOID OVERUSE",
        text: "Ensure that the saffron flavor complements the other ingredients in the ice cream. It should enhance the overall taste without overpowering it.",
      },
    ],
  },
  {
    key: "stews",
    heading: "STEWS",
    intro:
      "Saffron introduces a subtle, complex taste to stews. Its delicate, slightly sweet, and earthy notes can enhance the overall flavor profile, complementing the other ingredients in the stew.",
    blocks: [
      {
        title: "AROMA",
        text: "The floral and warm aroma of saffron can make stews more fragrant and appealing. It adds a layer of richness that can elevate the dish’s sensory experience.",
      },
      {
        title: "COLOR",
        text: "Saffron imparts a golden-yellow hue to stews, giving them a visually appealing and rich appearance. This color can make the stew look more vibrant and appetizing.",
      },
      {
        title: "INFUSION",
        text: "To get the most out of saffron, steep the threads in a small amount of hot water or broth before adding them to the stew. This helps to release the color and flavor. A pinch of saffron is usually sufficient for most stews.",
      },
      {
        title: "AVOID OVERUSE",
        text: "Since saffron is strong, using too much can overpower the stew. Stick to a small quantity to maintain balance.",
      },
    ],
  },
  {
    key: "pilaf",
    heading: "PILAF",
    intro:
      "Saffron contributes a subtle, complex flavor to pilaf. Its unique, slightly sweet and earthy taste complements the other ingredients, adding depth and richness.",
    blocks: [
      {
        title: "AROMA",
        text: "The delicate, floral aroma of saffron can transform the aroma profile of a pilaf, making it more fragrant and inviting.",
      },
      {
        title: "COLOR",
        text: "Saffron imparts a warm golden-yellow hue to the rice in pilaf. This vibrant color enhances the visual appeal of the dish, making it look more appetizing and elegant.",
      },
      {
        title: "INFUSION",
        text: "Before adding saffron to your pilaf, steep the threads in a small amount of warm water or broth. This helps release the color and flavor. A few threads are usually sufficient for a pot of pilaf.",
      },
      {
        title: "AVOID OVERUSE",
        text: "Since saffron is intense, a little goes a long way. Using too much can overpower the dish.",
      },
    ],
  },
];

const Dot = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-1.5 w-6 rounded-full transition-all ${
      active ? "bg-emerald-600" : "bg-emerald-300/60 hover:bg-emerald-400"
    }`}
    aria-label="Go to slide"
  />
);

export default function CulinaryUse() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);

  const current = useMemo(() => CARDS[index], [index]);

  // autoplay
  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % CARDS.length),
      7000
    );
    return () => clearInterval(timerRef.current);
  }, [playing]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key.toLowerCase() === " ") setPlaying((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <h1 className="text-white tracking-[0.35em] text-4xl sm:text-6xl md:text-7xl drop-shadow">
            CULINARY USES
          </h1>
        </div>
      </section>

      <section className="relative min-h-screen w-full bg-[#dff7f3] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          {/* controls row */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="h-8 w-8 rounded-full bg-white shadow hover:shadow-md grid place-content-center"
                aria-label="Previous"
                title="Previous"
              >
                <span className="inline-block -translate-x-[1px] select-none">
                  ←
                </span>
              </button>
              <button
                onClick={next}
                className="h-8 w-8 rounded-full bg-white shadow hover:shadow-md grid place-content-center"
                aria-label="Next"
                title="Next"
              >
                <span className="inline-block translate-x-[1px] select-none">
                  →
                </span>
              </button>
            </div>

            <button
              onClick={() => setPlaying((p) => !p)}
              className="h-8 w-8 rounded-full bg-white shadow hover:shadow-md grid place-content-center"
              aria-label="Play/Pause"
              title={playing ? "Pause" : "Play"}
            >
              {playing ? "⏸" : "▶"}
            </button>
          </div>

          {/* card */}
          <div className="rounded-2xl bg-white/70 shadow-lg ring-1 ring-emerald-900/5 backdrop-blur">
            <div className="px-4 py-10 sm:px-10 sm:py-14">
              <h2 className="mb-2 text-center text-xl tracking-[0.35em] text-emerald-900 sm:text-2xl">
                {current.heading}
              </h2>
              <p className="mx-auto mb-10 max-w-4xl text-center text-[13px] leading-7 text-emerald-900/90 sm:text-[15px]">
                {current.intro}
              </p>

              <div className="space-y-10">
                {current.blocks.map((b) => (
                  <div key={b.title} className="text-center">
                    <h3 className="mb-2 text-sm tracking-[0.5em] text-emerald-800 sm:text-base">
                      {b.title}
                    </h3>
                    <p className="mx-auto max-w-5xl text-[12.5px] leading-7 text-emerald-900/80 sm:text-[14.5px]">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* dots */}
              <div className="mt-12 flex items-center justify-center gap-2">
                {CARDS.map((_, i) => (
                  <Dot
                    key={i}
                    active={i === index}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
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
