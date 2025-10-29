import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TestimonialSlider() {
  const testimonials = [
    { id: 1, name: "Rahul Sharma", text: "Great service! My electricity bill is almost zero now.", img: "/testimonials/t1.jpg" },
    { id: 2, name: "Priya Verma", text: "सोलर लगाने के बाद से बिल की चिंता खत्म, धन्यवाद श्री बालाजी पावर।", img: "/testimonials/t2.jpg" },
    { id: 3, name: "Anil Kumar", text: "Professional installation and excellent support team.", img: "/testimonials/t3.jpg" },
    { id: 4, name: "Suman Gupta", text: "अब बिजली की कोई टेंशन नहीं, बहुत अच्छा निवेश।", img: "/testimonials/t4.jpg" },
    { id: 5, name: "Vikram Singh", text: "They gave me the best hybrid solar solution for my farm.", img: "/testimonials/t5.jpg" },
    { id: 6, name: "Neha Patel", text: "घर का सारा काम अब सोलर से चलता है, बहुत बढ़िया।", img: "/testimonials/t6.jpg" },
    { id: 7, name: "Rajesh Mehta", text: "My factory now saves lakhs annually, highly recommended.", img: "/testimonials/t7.jpg" },
    { id: 8, name: "Pooja Sharma", text: "सरकारी सब्सिडी और शानदार टीम, दोनों का सही फायदा मिला।", img: "/testimonials/t8.jpg" },
  ];

  return (
    <div className="bg-white shadow-md py-6 px-4 rounded-xl max-w-5xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="flex flex-col items-center text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <p className="italic text-gray-700 max-w-xl">“{t.text}”</p>
              <h3 className="mt-3 font-semibold text-emerald">{t.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
