import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiLinkedin,
  FiMessageCircle,
} from "react-icons/fi";
import essenceImg from "../../assets/cu.jpg";
import medicinalImg from "../../assets/bac.jpeg";
import culinaryImg from "../../assets/ka.jpeg";
import harvestImg from "../../assets/kash.jpeg";
import beautyImg from "../../assets/saffranhim.jpg";

export default function KashmiriSaffron() {
  return (
    <main className="font-[system-ui] text-[#1d1230]">
      
      <section className="bg-[#2a0f3b] text-white">
        <div className="mx-auto max-w-6xl px-6 py-62 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-[0.25em]">
            KASHMIR SAFFRON
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-sm sm:text-base tracking-[0.3em] opacity-90">
            THE GOLDEN ESSENCE OF THE HIMALAYAS
          </p>

          <p className="mx-auto mt-8 max-w-4xl text-[15px] leading-8 opacity-90">
            Nestled in the heart of the enchanting Kashmir Valley, Kashmiri
            saffron is a treasure of unparalleled beauty and potency. Known for
            its deep crimson threads, this “Red Gold” is celebrated worldwide
            for its rich flavor, vibrant color, and remarkable medicinal
            properties. Each thread is a testament to pristine Himalayan soils
            and climate—meticulously hand-harvested to ensure the highest
            quality.
          </p>
        </div>
      </section>

      
      <section className="bg-[#f6e7f3]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        
          <div>
            <h2 className="text-2xl sm:text-3xl tracking-[0.3em]">
              THE ESSENCE OF OPULENCE
            </h2>
            <p className="mt-6 text-[15px] leading-8">
              Kashmiri saffron epitomizes opulence and wellness. Whether
              enhancing the flavors of a gourmet dish, adding a golden touch to
              desserts, or revitalizing the skin, this golden essence from the
              Himalayas offers a touch of luxury and a myriad of benefits. It is
              more than just a spice; it is a symbol of tradition, quality, and
              the timeless beauty of nature. Embrace its rich heritage and
              exceptional qualities to elevate your culinary, beauty, and
              wellness routines—and discover why this exquisite spice is
              cherished around the world.
            </p>
          </div>
          {/* Image */}
          <div className="relative">
            <img
              src={essenceImg}
              alt="Kashmir saffron flowers"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f6e7f3]">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          
          <div className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
            {/* Text */}
            <div>
              <h3 className="text-xl sm:text-2xl tracking-[0.3em]">
                MEDICINAL MARVEL
              </h3>
              <p className="mt-6 text-[15px] leading-8">
                Kashmiri saffron isn’t just a culinary and cosmetic wonder; it’s
                celebrated for medicinal qualities too. Rich in antioxidants and
                vital nutrients, it has been used in traditional remedies to
                support digestion, improve mood, aid heart health, and reduce
                stress. Its natural anti-inflammatory and antibacterial
                properties also contribute to holistic well-being.
              </p>
            </div>
            {/* Image */}
            <div>
              <img
                src={medicinalImg}
                alt="Saffron tea"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>

        
          <div className="my-2 h-px w-full bg-black/5" />

          
          <div className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
            
            <div className="order-1 md:order-none">
              <img
                src={culinaryImg}
                alt="Saffron dessert"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
            {/* Text */}
            <div className="order-none md:order-1">
              <h3 className="text-xl sm:text-2xl tracking-[0.3em]">
                A CULINARY GEM
              </h3>
              <p className="mt-6 text-[15px] leading-8">
                With high crocin content, Kashmiri saffron lends dishes a
                brilliant golden hue and a distinctive aroma. From biryanis and
                pilafs to creamy saffron-infused ice creams and classic Indian
                sweets, it elevates every preparation—bringing depth, warmth,
                and a delicate luxury chefs and home cooks adore.
              </p>
            </div>
          </div>

         
          <div className="my-2 h-px w-full bg-black/5" />

          
          <div className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
            
            <div>
              <h3 className="text-xl sm:text-2xl tracking-[0.3em]">
                CULTIVATION AND HARVESTING
              </h3>
              <p className="mt-6 text-[15px] leading-8">
                The art of cultivating Kashmiri saffron is passed down through
                generations. Each delicate flower is hand-picked at dawn to
                protect its precious stigmas, which are carefully dried to
                retain potency and purity. A labor-intensive process and limited
                geography give this spice its rarity and value.
              </p>
            </div>
            {/* Image */}
            <div>
              <img
                src={harvestImg}
                alt="Harvesting saffron"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 items-center gap-10 pt-6 md:grid-cols-2">
            
            <div className="order-1 md:order-none">
              <img
                src={beautyImg}
                alt="Beauty and wellness"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
            {/* Text */}
            <div className="order-none md:order-1">
              <h3 className="text-xl sm:text-2xl tracking-[0.3em]">
                BEAUTY AND WELLNESS
              </h3>
              <p className="mt-6 text-[15px] leading-8">
                Beyond the kitchen, Kashmiri saffron is a revered beauty
                ritual—brightening and rejuvenating skin with its antioxidant
                richness. In masks, creams, and serums, it helps diminish dark
                spots, even tone, and impart a radiant glow—an age-old secret
                cherished since royal times.
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
