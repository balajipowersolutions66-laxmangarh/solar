// pages/projects.js

import Navbar from "../components/Navbar";
import Flyer from "../components/Flyer";
import { allProjects } from "../lib/projectsData";

export default function Projects() {
  return (
    <div className="bg-pearl min-h-screen">
      <Navbar />
      <Flyer />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald mb-10">
          Our Accomplished Projects
        </h1>

        {allProjects && allProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allProjects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = "/projects/placeholder.jpg")}
                />
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-emerald mb-2">
                    {p.title}
                  </h2>
                  <p className="text-gray-700 text-sm">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No project data available.</p>
        )}
      </section>

      <footer className="bg-white py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Shri Balaji Power Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
