import { FiMenu, FiUser, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import React, { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";

// import beautyHero from "../../assets/beauty-hero.mp4"; // put your beauty hero video here (or remove <video> if not using)

import heroImg from "../../assets/cC.png";

function Beautyuse() {
  
  const slides = useMemo(
    () => [
      {
        id: "brightening",
        title: "SKIN BRIGHTENING AND RADIANCE",
        lead: "Saffron’s rich antioxidant content helps to lighten skin pigmentation and enhance radiance. Compounds like crocin and safranal work to reduce melanin production, leading to a more even skin tone.",
        blocks: [
          {
            subtitle: "CHEMICAL COMPOSITION",
            body: "This carotenoid pigment (crocin) is primarily responsible for saffron’s color and has potent antioxidant properties. It helps reduce oxidative stress in skin cells, leading to a more luminous complexion.",
          },
          {
            subtitle: "CLINICAL STUDIES",
            body: "Studies suggest saffron extracts can improve skin brightness and reduce hyperpigmentation. A saffron-based topical formulation improved skin radiance and evenness in participants.",
          },
          {
            subtitle: "MECHANISM OF ACTION",
            body: "Saffron’s actives can inhibit tyrosinase (key enzyme in melanin synthesis). By lowering tyrosinase, saffron helps lighten dark spots and even out skin tone.",
          },
          {
            subtitle: "FORMULATION AND APPLICATION",
            body: "Commonly included in creams, serums, and masks to deliver targeted topical benefits.",
          },
          {
            subtitle: "CONSIDERATIONS",
            body: "Generally safe, but perform a patch test if you have sensitive skin or are trying a new product.",
          },
        ],
      },
      {
        id: "acne",
        title: "ACNE TREATMENT AND SKIN CLARITY",
        lead: "Saffron’s antibacterial and anti-inflammatory properties make it helpful for managing acne and reducing breakouts, improving overall skin clarity.",
        blocks: [
          {
            subtitle: "ANTIMICROBIAL PROPERTIES",
            body: "Crocin and safranal can inhibit acne-causing bacteria (e.g., Propionibacterium acnes), reducing breakout severity and frequency.",
          },
          {
            subtitle: "ANTI-INFLAMMATORY EFFECTS",
            body: "Calms redness, swelling, and irritation associated with acne, making lesions less noticeable and skin clearer.",
          },
          {
            subtitle: "ANTIOXIDANT BENEFITS",
            body: "Neutralizes free radicals that worsen inflammation and damage skin cells, supporting a calmer, clearer look over time.",
          },
        ],
      },
      {
        id: "antiaging",
        title: "ANTI-AGING AND WRINKLE REDUCTION",
        lead: "Saffron’s antioxidants combat oxidative stress and may support collagen, improving elasticity and softening the look of fine lines and wrinkles.",
        blocks: [
          {
            subtitle: "ANTIOXIDANT PROPERTIES",
            body: "Powerful antioxidants (crocin, crocetin, safranal) neutralize free radicals that accelerate aging and contribute to wrinkle formation.",
          },
          {
            subtitle: "ANTI-INFLAMMATORY EFFECTS",
            body: "Reducing chronic inflammation helps maintain skin health and elasticity—an important factor in youthful appearance.",
          },
          {
            subtitle: "SKIN HYDRATION",
            body: "Can support moisture retention so skin feels more supple and shows fewer fine lines.",
          },
        ],
      },
      {
        id: "redness",
        title: "EVEN SKIN TONE AND REDNESS REDUCTION",
        lead: "Saffron’s anti-inflammatory benefits help calm irritation and reduce redness. It also assists with balancing skin tone (e.g., rosacea-like concerns).",
        blocks: [
          {
            subtitle: "MELANIN REGULATION",
            body: "Crocin and picrocrocin may inhibit tyrosinase—crucial for melanin production. Less melanin means lighter dark spots and a more uniform tone.",
          },
          {
            subtitle: "ANTI-INFLAMMATORY PROPERTIES",
            body: "Compounds like crocetin and safranal soothe inflammation and redness; particularly helpful for post-acne redness or reactive skin.",
          },
          {
            subtitle: "ANTIOXIDANT EFFECTS",
            body: "Protects skin from oxidative stress that can exacerbate redness and uneven tone, supporting a calmer, healthier complexion.",
          },
        ],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  // autoplay
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [auto, slides.length]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const active = slides[index];

  ////////////

  return (
    <main>
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Beauty Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

      
        <div className="absolute inset-0 bg-black/35" />

       
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(0,0,0,0.55))]" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <h1 className="text-white tracking-[0.35em] text-4xl sm:text-6xl md:text-7xl drop-shadow">
            BEAUTY USES
          </h1>
        </div>
      </section>

      <section className="w-full bg-pink-200/60 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4">
          {/* Card container */}
          <div className="relative rounded-3xl bg-pink-100 shadow-xl ring-1 ring-pink-200/60">
            {/* Controls */}
            <div className="absolute left-3 top-3 z-10 flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition"
              >
                <FiChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition"
              >
                <FiChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute right-3 top-3 z-10">
              <button
                onClick={() => setAuto((a) => !a)}
                aria-label={auto ? "Pause autoplay" : "Play autoplay"}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition"
              >
                {auto ? (
                  <FiPause className="h-4 w-4" />
                ) : (
                  <FiPlay className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Slide content */}
            <div
              key={active.id}
              className="grid gap-8 p-6 sm:p-10 transition-all duration-500 ease-out"
            >
              <div className="text-center">
                <h2 className="text-lg sm:text-xl tracking-[0.35em] text-gray-900">
                  {active.title}
                </h2>
                <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-gray-700">
                  {active.lead}
                </p>
              </div>

              {/* Blocks */}
              <div className="mx-auto w-full max-w-5xl">
                <div className="grid grid-cols-1 gap-10 sm:gap-12">
                  {active.blocks.map((b, i) => (
                    <div key={i} className="text-center">
                      <h3 className="text-base font-semibold tracking-[0.25em] text-gray-900">
                        {b.subtitle}
                      </h3>
                      <p className="mx-auto mt-3 max-w-4xl text-sm leading-relaxed text-gray-700">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="mb-6 mt-2 flex items-center justify-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index
                        ? "bg-pink-500"
                        : "bg-pink-300 hover:bg-pink-400"
                    }`}
                    aria-label={`Go to ${s.title}`}
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
              <a className="block hover:text-white">
                CONTACT
              </a>
              <a className="block hover:text-white">
                ABOUT
              </a>
            </div>

            <div className="space-y-3 tracking-[0.2em]">
              <a className="block hover:text-white">
                TERMS AND CONDITION
              </a>
              <a className="block hover:text-white">
                PRIVACY POLICY
              </a>
              <a
               
                className="block hover:text-white flex items-center gap-2 justify-center md:justify-start"
              >
                CORPORATE ESSENTIALS <span>▼</span>
              </a>
            </div>

            <div className="space-y-3 tracking-[0.2em]">
              <a className="block hover:text-white">
                REFUND POLICY
              </a>
              <a className="block hover:text-white">
                SHIPPING POLICY
              </a>
              <a className="block hover:text-white">
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

export default Beautyuse;
