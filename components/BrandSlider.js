import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

export default function BrandSlider() {
  const brands = [
    { id: 1, name: "Tata Solar", img: "/brands/tata.png", link: "/products#tata" },
    { id: 2, name: "Exide", img: "/brands/exide.png", link: "/products#exide" },
    { id: 3, name: "Luminous", img: "/brands/luminous.png", link: "/products#luminous" },
    { id: 4, name: "Adani", img: "/brands/adani.png", link: "/products#adani" },
    { id: 5, name: "Loom Solar", img: "/brands/loom.png", link: "/products#loom" },
    { id: 6, name: "Microtek", img: "/brands/microtek.png", link: "/products#microtek" },
    { id: 7, name: "Waaree", img: "/brands/waaree.png", link: "/products#waaree" },
    { id: 8, name: "K-Sun", img: "/brands/ksun.png", link: "/products#ksun" },
  ];

  return (
    <div className="bg-white py-6 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brands.map((b) => (
            <SwiperSlide key={b.id}>
              <Link href={b.link}>
                <div className="flex items-center justify-center cursor-pointer">
                  <img
                    src={b.img}
                    alt={b.name}
                    className="h-16 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
