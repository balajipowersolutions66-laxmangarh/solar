// pages/gallery.js

import { useRouter } from "next/router";
import Image from "next/image";

const projects = [
  { id: 1, name: "Residential Rooftop – Jaipur", img: "/projects/p1.jpg", desc: "5kW rooftop system saving ₹6,000/month." },
  { id: 2, name: "School Project – Sikar", img: "/projects/p2.jpg", desc: "10kW system powering classrooms." },
  { id: 3, name: "Hospital – Ajmer", img: "/projects/p3.jpg", desc: "15kW solar + backup for critical equipment." },
  { id: 4, name: "Farm Irrigation – Churu", img: "/projects/p4.jpg", desc: "Solar pump saving 80% diesel cost." },
  { id: 5, name: "Warehouse – Jaipur", img: "/projects/p5.jpg", desc: "25kW industrial installation." },
  { id: 6, name: "Apartment Complex – Sikar", img: "/projects/p6.jpg", desc: "20kW community solar." },
  { id: 7, name: "Petrol Pump – Jhunjhunu", img: "/projects/p7.jpg", desc: "10kW solar reducing monthly bills." },
  { id: 8, name: "Factory – Pali", img: "/projects/p8.jpg", desc: "50kW industrial setup." },
  { id: 9, name: "College – Kota", img: "/projects/p9.jpg", desc: "40kW powering labs & hostels." },
  { id: 10, name: "Govt. Office – Sikar", img: "/projects/p10.jpg", desc: "30kW reducing grid dependency." }
];

export default function Gallery() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <p className="text-center mt-20 text-xl">Project not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Image
          src={project.img}
          alt={project.name}
          width={800}
          height={500}
          className="rounded-lg mx-auto"
        />
        <h1 className="text-3xl font-bold text-yellow-700 mt-4">{project.name}</h1>
        <p className="mt-2 text-gray-600">{project.desc}</p>
      </div>
    </div>
  );
}
