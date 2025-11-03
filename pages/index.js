// pages/index.js
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Flyer from "../components/Flyer";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ContactIcons from "../components/ContactIcons";
import { allProjects } from "../lib/projectsData";
import { testimonials } from "../lib/testimonialsData";

export default function Home() {
  // ✅ HERO IMAGES (Make sure hero1.jpg ... hero33.jpg exist in /public/hero/)
  const heroImages = Array.from({ length: 33 }, (_, i) => `/hero/hero${i + 1}.jpg`);

  // ✅ Taglines (Hindi-first, inclusive)
  const taglines = [
    "साल भर रौशन रहे आपका घर, सोलर से हर त्योहार हो ख़ास!",
    "सूरज की रौशनी से हर दिन नई ऊर्जा, नई बचत।",
    "अब बिजली का बिल नहीं — बिजली से कमाई करें!",
    "सोलर अपनाइए, हर त्यौहार पर उजाला फैलाइए।",
    "Switch to Solar, Celebrate Every Festival with Savings & Light!",
    "बचत का सबसे उज्ज्वल तरीका — श्री बालाजी पावर सॉल्यूशन्स।",
    "सूरज अब आपके काम आएगा — Free Energy for Lifetime!",
    "हर घर सोलर घर — हर छत से आत्मनिर्भर भारत।",
    "Light up your Home, Power up your Future — with Balaji Solar.",
    "सोलर लगाइए, खुशहाली बढ़ाइए — यही असली त्यौहार है!",
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
  const [currentTagline, setCurrentTagline] = useState(0);

  // For Thumb + Main Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const taglineTimer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000); // every 4 seconds

    return () => {
      clearInterval(taglineTimer);
    };
  }, []);

  return (
    <div className="bg-pearl min-h-screen overflow-x-hidden">
      <Navbar />
      <Flyer />

      {/* ===== HERO: Option 3 - Big hero with synced thumbnail strip ===== */}
      <section className="relative hero-container bg-black text-center text-white flex flex-col justify-between overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main hero swiper */}
          <Swiper
            modules={[Autoplay, Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            navigation
            loop
            thumbs={{ swiper: thumbsSwiper }}
            className="relative"
          >
            {heroImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-[85vh]">
                  <img
                    src={src}
                    alt={`hero-${idx}`}
                    className="w-full h-full object-cover object-center hero-img"
                    onError={(e) => (e.target.src = "/hero/hero1.jpg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />
                  {/* Overlay content (title + tagline + CTA) */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
                    <div className="hero-title-top -mt-8">
                      {/* responsive title sizes: smaller on phones so it won't be cut */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        Shri Balaji Power Solutions
                      </h1>
                      <p className="text-sm sm:text-lg md:text-2xl font-semibold text-green-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                        The Promising Future of Solar Energy
                      </p>
                    </div>

                    <div className="mt-6">
                      <p
                        className="hero-slider-text mb-4 text-yellow-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] text-center max-w-3xl mx-auto"
                        aria-live="polite"
                      >
                        {taglines[currentTagline]}
                      </p>
                      <a
                        href="/contact"
                        className="hero-quote-btn animate-pulseGlow inline-block px-6 py-3 rounded-full bg-emerald-800 text-white shadow-lg"
                      >
                        Get a Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails swiper (small strip below hero) */}
          <div className="mt-4 px-4">
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Autoplay, Navigation, Thumbs]}
              spaceBetween={8}
              slidesPerView={7}
              watchSlidesProgress
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 5 },
                1024: { slidesPerView: 7 },
              }}
              className="thumbs-swiper"
              style={{ paddingBottom: 10 }}
            >
              {heroImages.map((src, idx) => (
                <SwiperSlide key={`thumb-${idx}`} className="cursor-pointer">
                  <div className="rounded overflow-hidden border-2 border-transparent thumb-item">
                    <img
                      src={src}
                      alt={`thumb-${idx}`}
                      className="w-full h-20 object-cover object-center"
                      onError={(e) => (e.target.src = "/hero/hero1.jpg")}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ===== BRAND LOGOS SLIDER (unchanged) ===== */}
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
                <Image src={logo} alt={`brand-${idx}`} width={120} height={60} className="object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ===== PROJECTS SLIDER (unchanged) ===== */}
      <section className="py-12 bg-pearl">
        <h2 className="text-3xl font-bold text-center text-emerald mb-6">Our Accomplished Projects</h2>
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
                      <img src={p.img} alt={p.title} className="w-full h-52 object-cover" onError={(e) => (e.target.src = "/projects/placeholder.jpg")} />
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

      {/* ===== TESTIMONIALS (unchanged) ===== */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-emerald mb-6">What Our Customers Say</h2>
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
                  <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" onError={(e) => (e.target.src = "/testimonials/placeholder.jpg")} />
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
