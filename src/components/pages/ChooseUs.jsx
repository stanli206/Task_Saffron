import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import heroVideo from "../../assets/v4-BTT1jpwy.mp4";

import imgCulinary from "../../assets/or.webp";
import imgBeauty from "../../assets/yy.jpeg";
import imgLiving from "../../assets/uG.jpeg";

import imgQualityLeft from "../../assets/FN.jpeg";
import imgFieldRight from "../../assets/et.jpeg";
import imgii from "../../assets/cro.jpg";

function ChooseUs() {
  return (
    <div className="bg-[#FFF5DE]">
      
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

        
        <div className="relative z-10 mx-auto flex h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-2xl sm:text-5xl md:text-2xl lg:text-4xl font-light tracking-[0.35em] [word-spacing:0.2em]">
            OUR SAFFRON
          </h1>

          <p className="mt-6 text-xs sm:text-sm tracking-[0.4em] uppercase opacity-90">
            At Z Princess Saffron, we pride ourselves on offering the highest
            quality saffron sourced from the renowned regions of Kashmir, Iran,
            and Spain.
          </p>

        </div>

        {/* Content */}
      </header>

      <section className="py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          {/* Image Left */}
          <img
            src={imgQualityLeft}
            className="w-full h-[350px] md:h-[420px] object-cover rounded-xl shadow-lg"
          />

          {/* Text Right */}
          <div>
            <h2 className="text-3xl tracking-[0.25em]">
              UNMATCHED QUALITY AND PURITY
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our Saffron Is Celebrated For Its Vibrant Color, Rich Flavor, And
              Notable Health Benefits.
            </p>
          </div>
        </div>
      </section>

      
      <section className="pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          {/* Text Left */}
          <div>
            <h2 className="text-3xl tracking-[0.25em]">
              ETHICAL AND SUSTAINABLE SOURCING
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We Ensure Fair Compensation And Support Traditional Farming
              Methods While Maintaining Exceptional Quality.
            </p>
          </div>

          {/* Image Right */}
          <img
            src={imgFieldRight}
            className="w-full h-[350px] md:h-[420px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

    
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl text-center tracking-[0.25em] mb-14">
          VERSATILE USES
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center">
            <img
              src={imgCulinary}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-6 text-xl tracking-[0.2em]">CULINARY DELIGHTS</h3>
            <p className="mt-3 text-gray-700">
              Enhance Flavors With Our Premium Saffron.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center">
            <img
              src={imgBeauty}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-6 text-xl tracking-[0.2em]">RADIANT GLOW</h3>
            <p className="mt-3 text-gray-700">
              Boost Skin Health With Antioxidant-Rich Saffron.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center">
            <img
              src={imgLiving}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-6 text-xl tracking-[0.2em]">BALANCED LIVING</h3>
            <p className="mt-3 text-gray-700">
              Experience Saffron&apos;s Stress-Relief Benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[65vh] w-full overflow-hidden">
   
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgii})` }}
        ></div>

       
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_55%,rgba(0,0,0,0.55))]"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-white font-light tracking-[0.35em] text-3xl sm:text-4xl md:text-5xl">
            ELEVATE YOUR EXPERIENCE
          </h1>

          <p className="mt-6 max-w-3xl text-white text-xs sm:text-sm md:text-base tracking-[0.25em] opacity-90">
            Choose Z Princess Saffron For Culinary, Beauty, And Wellness
            Excellence.
          </p>
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

export default ChooseUs;
