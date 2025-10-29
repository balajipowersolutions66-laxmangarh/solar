import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const PROJECTS = [
  { id: 1, name: "Rooftop Solar - Delhi", image: "/projects/project1.jpg" },
  { id: 2, name: "Commercial Solar - Mumbai", image: "/projects/project2.jpg" },
  { id: 3, name: "Industrial Solar - Pune", image: "/projects/project3.jpg" },
];

export default function ProjectSlider() {
  return (
    <div className="w-full bg-gray-100 py-8">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Our Accomplished Projects
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {PROJECTS.map((project) => (
          <SwiperSlide key={project.id}>
            <a href={`/projects#${project.id}`}>
              <div className="flex flex-col items-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
                <p className="mt-2 text-gray-700 font-medium">
                  {project.name}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
