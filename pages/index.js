import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Flyer from "../components/Flyer";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ContactIcons from "../components/ContactIcons";
import { allProjects } from "../lib/projectsData";
import { testimonials } from "../lib/testimonialsData";

export default function Home() {
  // ✅ HERO IMAGES (Make sure hero1.jpg ... hero33.jpg exist in /public/hero/)
  const heroImages = Array.from({ length: 33 }, (_, i) => `/hero/hero${i + 1}.jpg`);

  // ✅ Taglines
  const taglines = [
    "सोलर लगाइए — बिल घटाइए, कमाई बढ़ाइए!",
    "Solar Se Azaadi: Zero Bill, Brighter Future!",
    "Subsidy + Solar = Smart Investment!",
    "इस दीपावली करें अपने घर को श्री बालाजी पावर सॉल्यूशन्स की बेहतरीन सोलर प्रोडक्ट्स की रेंज से रौशन!",
    "इस दीपावली सभी ब्रांडेड सोलर प्रोडक्ट्स पर विशेष छूट का लाभ उठाइये।",
    "कॉल कीजिये : 9672484555 व 9664431646 पर ऑफर केवल सिमित समय तक उपलब्ध।",
    "🌸 माँ लक्ष्मी भी मुस्कुराएंगी, जब श्री बालाजी पावर सॉल्यूशन्स के प्रोडक्ट्स से आपकी दीपावली जगमगाएगी!",
  ];

  // ✅ Brand Logos
  const brandLogos = [
    "/brands/adani-logo.jpg",
    "/brands/tata-logo.jpg",
    "/brands/exide-logo.jpg",
    "/brands/luminous-logo.jpg",
    "/brands/loom-logo.jpg",
    "/brands/microtek-logo.jpg",
    "/brands/waaree-logo.jpg",
    "/brands/ksun-logo.jpg",
  ];

  // ✅ States for Hero background & tagline
  const [currentHero, setCurrentHero] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 7000); // every 7 seconds

    const taglineTimer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000); // every 4 seconds

    return () => {
      clearInterval(heroTimer);
      clearInterval(taglineTimer);
    };
  }, []);

  return (
    <div className="bg-pearl min-h-screen overflow-x-hidden">
      <Navbar />
      <Flyer />

      {/* ✅ FIXED HERO SECTION */}
      <section className="relative hero-container bg-black text-center text-white flex flex-col justify-between overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`hero-${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-[2000ms] ${
                index === currentHero ? "opacity-100" : "opacity-0"
              }`}
              onError={(e) => (e.target.src = "/hero/hero1.jpg")}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/60"></div>
        </div>

        {/* Top Brand Text */}
        <div className="relative z-10 hero-title-top">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Shri Balaji Power Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-green-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            The Promising Future of Solar Energy
          </p>
        </div>

        {/* Bottom Tagline + Quote */}
        <div className="relative z-10 hero-bottom">
          <p className="hero-slider-text mb-4 text-yellow-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            {taglines[currentTagline]}
          </p>
          <a
            href="/contact"
            className="hero-quote-btn animate-pulseGlow"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* ✅ BRAND LOGOS SLIDER */}
      <section className="py-10 bg-white shadow-inner">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
        >
          {brandLogos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`brand-${idx}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ✅ PROJECTS SLIDER */}
      <section className="py-12 bg-pearl">
        <h2 className="text-3xl font-bold text-center text-emerald mb-6">
          Our Accomplished Projects
        </h2>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {allProjects?.map((p, idx) => (
              <SwiperSlide key={idx}>
                <Link href="/projects" legacyBehavior>
                  <a>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-52 object-cover"
                        onError={(e) => (e.target.src = "/projects/placeholder.jpg")}
                      />
                      <div className="bg-white p-3 text-center">
                        <p className="text-emerald font-semibold text-sm">{p.title}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ TESTIMONIALS (20 ENTRIES) */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-emerald mb-6">
          What Our Customers Say
        </h2>
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-pearl p-6 rounded-xl shadow hover:scale-105 transition text-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    onError={(e) => (e.target.src = "/testimonials/placeholder.jpg")}
                  />
                  <p className="text-gray-700 italic mb-3">“{t.text}”</p>
                  <h4 className="text-emerald font-bold">{t.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ContactIcons />

      <footer className="bg-white py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Shri Balaji Power Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
