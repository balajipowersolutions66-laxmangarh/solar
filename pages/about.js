import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-pearl min-h-screen py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald mb-10">
        About Us
      </h1>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <span className="font-semibold">Shri Balaji Power Solutions</span>,
          we are committed to delivering affordable, reliable, and sustainable
          solar energy solutions across India. From homes and farms to
          industries, we partner with top brands like Tata, Exide, Luminous,
          and Adani to provide complete solar systems.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to make every household and business energy
          independent while contributing to a greener, cleaner environment.
          With 15+ years of expertise and 500+ successful projects, we are
          proud to be a trusted name in solar power solutions.
        </p>
      </div>

      {/* ✅ Add Footer at the bottom */}
      <Footer />
    </div>
  );
}
