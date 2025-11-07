import React, { useState, useEffect } from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
// import bgImg from "../assets/saf.jpg";
import heroVideo from "../assets/backvideo-C_O02uC7.mp4";
import basket from "../assets/bas.jpeg";
import { useNavigate } from "react-router-dom";
import { products } from "../data/Products";

function Home() {
  const [showProducts, setShowProducts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showProducts) return;

    let timer;

    const handleScroll = () => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        setShowProducts(false);
      }, 900);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [showProducts]);

  return (
    <div>
      <header>
        <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
          {/* BACKGROUND VIDEO */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          
          <div className="absolute inset-0 " />

          
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(0,0,0,0.55))]" />

         
          <div className="relative z-10 mx-auto flex h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-2xl sm:text-5xl md:text-2xl lg:text-4xl font-light tracking-[0.35em] [word-spacing:0.2em]">
              Z PRINCESS SAFFRON
            </h1>

            <p className="mt-6 text-xs sm:text-sm tracking-[0.4em] uppercase opacity-90">
              World&apos;s Finest Saffron
            </p>

        
            <button
              onClick={() => navigate("/about-us")}
              className="mt-10 rounded-full bg-white/95 px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-black shadow-lg backdrop-blur hover:bg-white transition-transform duration-200 hover:scale-105"
            >
              DISCOVER NOW
            </button>
          </div>
        </div>
      </header>
      <section
        className="relative h-[99vh] w-full overflow-hidden pt-16"
        id="products"
      >
        <img
          src={basket}
          alt="Basket of saffron flowers"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center text-center px-4 transition-all duration-500 
      ${
        showProducts
          ? "opacity-0 pointer-events-none translate-y-4"
          : "opacity-100 translate-y-0"
      }
    `}
        >
          <div>
            <h1 className="text-white font-light tracking-[0.35em] text-4xl md:text-6xl lg:text-7xl drop-shadow">
              OUR PRODUCTS
            </h1>
            <button
              onClick={() => setShowProducts(true)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100"
            >
              DISCOVER NOW
            </button>
          </div>
        </div>

        
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500
        ${
          showProducts
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
        >
          <div className="absolute inset-0 bg-stone-200" />
          <div className="relative mx-auto w-[92%] max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((p) => (
                <article
                  key={p._id}
                  onClick={() => navigate(`/product/${p._id}`, { state: p })}
                  className="cursor-pointer overflow-hidden rounded-md bg-white shadow-md hover:shadow-lg transition"
                >
                  {/* image */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-[460px] w-full object-cover"
                  />
                
                  <div className="bg-stone-200/80 px-4 py-3">
                    <h3 className="text-[13px] tracking-[0.18em] text-gray-900">
                      {p.name.toUpperCase()}
                    </h3>
                    <p className="text-sm text-gray-800">
                      Price: ₹{p.price}
                      <span className="ml-2 text-gray-600">/ {p.weight}g</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7e9f9] py-20 px-6 md:px-12 lg:px-28">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl tracking-[0.28em] font-light text-gray-900 mb-16">
          WHAT SET US APART
        </h2>

        
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            {
              title: "TRANSPARENCY",
              desc: "We provide detailed information about the origin and processing of our saffron, so you know exactly what you're buying.",
            },
            {
              title: "INNOVATION",
              desc: "We continuously explore new ways to enhance the quality and usability of our saffron, ensuring we stay ahead of the market.",
            },
            {
              title: "PASSION",
              desc: "Our passion for saffron drives us to maintain the highest standards and share this incredible spice with the world.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl tracking-[0.2em] font-light mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

    
        <div className="mt-28 text-center">
          <h2 className="text-2xl md:text-4xl tracking-[0.28em] font-light text-gray-900 mb-10">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>

          <form className="flex justify-center items-center gap-3 max-w-lg mx-auto border-b border-gray-800 pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent outline-none placeholder-gray-600 text-gray-900"
            />
            <button
              type="submit"
              className="bg-black text-white px-5 py-2 text-sm tracking-widest hover:bg-gray-800 transition"
            >
              SUBSCRIBE
            </button>
          </form>
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

export default Home;
