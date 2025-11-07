import React, { useEffect, useMemo, useState } from "react";
import {
  FiUser,
  FiShoppingBag,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { products } from "../data/Products";

// your images
import BeautyImg from "../assets/be.jpg";
import CulinaryImg from "../assets/saffro.jpg";
import MedicineImg from "../assets/me.jpeg";
import PregnancyImg from "../assets/pr.jpg";

const mainLinks = [
  "Z KNOWLEDGE HUB",
  "PRODUCTS",
  "WHY CHOOSE US",
  "GOLDEN ELIXIR",
  "RECOMMENDAR",
  "LOGIN",
];

const PANEL_W = 500;

const ELIXIR_ITEMS = [
  { key: "beauty", title: "BEAUTY USES", img: BeautyImg, to: "/beauty-use" },
  { key: "culinary", title: "CULINARY", img: CulinaryImg, to: "/culinary-use" },
  {
    key: "medicinal",
    title: "MEDICINAL USES",
    img: MedicineImg,
    to: "/medicine-use",
  },
  {
    key: "pregnancy",
    title: "PREGNANCY",
    img: PregnancyImg,
    to: "/pregnancy-use",
  },
];

const productCategories = [
  {
    key: "kashmiri",
    label: "KASHMIRI SAFFRON",
    fullId: "67dd17c9fa0343a84871cc79",
    variants: [
      { key: "2g", label: "2 GRAMS", weight: 2 },
      { key: "5g", label: "5 GRAMS", weight: 5 },
    ],
  },
];

export default function Navbar() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(null); // null | knowledge | products | elixir | products.xx
  const [elixirKey, setElixirKey] = useState("beauty");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) setMenuPath(null);
  }, [menuOpen]);

  const navBase =
    "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-out";
  const navStyle =
    isScrolled || menuOpen
      ? "bg-white/95 backdrop-blur shadow-sm text-black"
      : "bg-transparent text-white";
  const iconClass = "h-5 w-5";

  const goTo = (path) => {
    setMenuOpen(false);
    setMenuPath(null);
    navigate(path);
  };

  const goBack = () => {
    if (!menuPath) return setMenuPath(null);
    if (menuPath.includes(".")) {
      const parts = menuPath.split(".");
      parts.pop();
      setMenuPath(parts.length ? parts.join(".") : null);
    } else setMenuPath(null);
  };

  const openVariant = (catKey, variantWeight) => {
    const cat = productCategories.find((c) => c.key === catKey);
    if (!cat) return;
    const prod = products.find(
      (p) =>
        p.fullProduct &&
        p.fullProduct._id === cat.fullId &&
        Number(p.weight) === Number(variantWeight)
    );
    if (!prod) return;
    setMenuOpen(false);
    setMenuPath(null);
    navigate(`/product/${prod._id}`, { state: prod });
  };

  const activeElixir = useMemo(
    () => ELIXIR_ITEMS.find((i) => i.key === elixirKey) || ELIXIR_ITEMS[0],
    [elixirKey]
  );

  return (
    <>
      {/* NAVBAR */}
      <header className={`${navBase} ${navStyle}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100"
            aria-label="Open menu"
          >
            <FiMenu className={iconClass} />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
            <span className="tracking-[0.35em] text-xs sm:text-sm">
              Z PRINCESS SAFFRON
            </span>
          </div>

          <nav className="flex items-center gap-5">
            {/* USER LOGIN POPUP */}
            <div className="relative group">
              <FiUser className={iconClass} />

              {/* POPUP */}
              <div
                className="absolute right-0 top-8 w-80 bg-white/90 backdrop-blur-md border border-white/30 rounded-xl p-5 shadow-xl
               opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300"
              >
                <h2 className="text-center text-gray-900 font-semibold tracking-wider mb-2">
                  ALREADY HAVE AN ACCOUNT?
                </h2>

                <button
                  onClick={() => navigate("/login")}
                  className="w-full bg-black text-white py-2 rounded-md mb-4 hover:bg-black/90 transition"
                >
                  LOGIN
                </button>

                <h2 className="text-center text-gray-900 font-semibold tracking-wider mb-2">
                  NOT REGISTERED YET?
                </h2>

                <button
                  onClick={() => navigate("/login")}
                  className="w-full bg-white text-gray-900 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  REGISTER
                </button>
              </div>
            </div>

            <FiShoppingBag className={iconClass} />
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FiShoppingCart className={iconClass} />
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                0
              </span>
            </div>

            {/* <div className="relative">
              <FiShoppingCart className={iconClass} />
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                0
              </span>
            </div> */}
          </nav>
        </div>
      </header>

      {/* OVERLAY / DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />

        {menuPath === "elixir" && (
          <div
            className="absolute top-0 bottom-0 right-0 z-[48] hidden sm:block"
            style={{ left: PANEL_W, width: `calc(100% - ${PANEL_W}px)` }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeElixir.img}
              alt={activeElixir.title}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="px-6 text-white tracking-[0.25em] text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow">
                  {activeElixir.title}
                </h2>
                <button
                  onClick={() => goTo(activeElixir.to)}
                  className="mx-auto mt-6 inline-flex items-center justify-center rounded-full bg-white/95 px-8 py-3 text-sm font-semibold text-gray-900 shadow-lg hover:bg-white"
                >
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
        )}

        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full transform transition-transform duration-300 text-white z-[49] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } relative`}
          style={{
            width: menuPath === "elixir" ? PANEL_W : "35%",
            maxWidth: menuPath === "elixir" ? PANEL_W : 980,
          }}
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/45" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(88,63,125,0.45)_0%,rgba(0,0,0,0.0)_98%)]" />
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 top-4 p-2 text-white/80 hover:text-white"
            aria-label="Close menu"
          >
            <FiX className="h-6 w-6" />
          </button>

          {!menuPath && (
            <nav className="mt-4 space-y-8 px-15">
              <button
                onClick={() => setMenuPath("knowledge")}
                className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                <span>KNOWLEDGE HUB</span>
              </button>

              <button
                onClick={() => setMenuPath("products")}
                className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                <span>PRODUCTS</span>
              </button>

              <button
                onClick={() => goTo("/choose-us")}
                className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                <span>WHY CHOOSE US</span>
              </button>

              <button
                onClick={() => {
                  setElixirKey("beauty");
                  setMenuPath("elixir");
                }}
                className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                <span>GOLDEN ELIXIR</span>
              </button>

              <button
                onClick={() => goTo("/login")}
                className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                <span>RECOMMENDAR</span>
              </button>
              <button
                onClick={() => goTo("/login")}
                className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                <span>LOGIN</span>
              </button>
            </nav>
          )}

          {menuPath === "knowledge" && (
            <nav className="mt-4 space-y-8 px-8">
              <button
                onClick={goBack}
                className="flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50" />
                <span>← KNOWLEDGE HUB</span>
              </button>

              <button
                onClick={() => goTo("/insight")}
                className="w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50" />
                <span>INSIGHT</span>
              </button>

              <button
                onClick={() => goTo("/kashmiri-saffron")}
                className="w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50" />
                <span>KASHMIRI SAFFRON</span>
              </button>
            </nav>
          )}

          {menuPath === "products" && (
            <nav className="mt-4 space-y-8 px-8">
              <button
                onClick={goBack}
                className="flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50" />
                <span>← PRODUCTS</span>
              </button>

              {productCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setMenuPath(`products.${cat.key}`)}
                  className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
                >
                  <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                  <span>{cat.label}</span>
                </button>
              ))}
            </nav>
          )}

          {menuPath?.startsWith("products.") &&
            (() => {
              const parts = menuPath.split(".");
              const catKey = parts[1];
              const cat = productCategories.find((c) => c.key === catKey);
              if (!cat) return null;
              return (
                <nav className="mt-4 space-y-8 px-8">
                  <button
                    onClick={goBack}
                    className="flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
                  >
                    <span className="h-6 w-px bg-white/50" />
                    <span>← {cat.label}</span>
                  </button>

                  {cat.variants.map((v) => (
                    <button
                      key={v.key}
                      onClick={() => openVariant(cat.key, v.weight)}
                      className="group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
                    >
                      <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                      <span>{v.label}</span>
                    </button>
                  ))}
                </nav>
              );
            })()}

          {menuPath === "elixir" && (
            <nav className="mt-4 space-y-8 px-8">
              <button
                onClick={goBack}
                className="flex items-center gap-4 text-[15px] tracking-[0.35em] opacity-90 hover:opacity-100"
              >
                <span className="h-6 w-px bg-white/50" />
                <span>← GOLDEN ELIXIR</span>
              </button>

              {ELIXIR_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setElixirKey(item.key)}
                  className={`group w-full text-left flex items-center gap-4 text-[15px] tracking-[0.35em] ${
                    elixirKey === item.key ? "opacity-100" : "opacity-90"
                  } hover:opacity-100`}
                >
                  <span className="h-6 w-px bg-white/50 group-hover:bg-white" />
                  <span>{item.title}</span>
                </button>
              ))}
            </nav>
          )}
        </aside>
      </div>
    </>
  );
}
