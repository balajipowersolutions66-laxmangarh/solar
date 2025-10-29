// pages/products.js

import { useState } from "react";
import Navbar from "../components/Navbar";
import Flyer from "../components/Flyer";
import { productsData } from "../lib/productsData";

export default function Products() {
  const brands = Object.keys(productsData);
  const [selectedBrand, setSelectedBrand] = useState("Tata Solar");
  const [budget, setBudget] = useState("");
  const [usage, setUsage] = useState("Home");
  const [recommendation, setRecommendation] = useState(null);

  // Function to recommend system
  const buildSolarPlan = () => {
    let filtered = [];
    Object.values(productsData).forEach((brand) => {
      Object.values(brand).forEach((category) => {
        filtered.push(...category);
      });
    });

    // Budget-based filtering logic
    const budgetRange = parseInt(budget) || 0;
    let selected = filtered.filter((item) => item.price <= budgetRange);

    if (selected.length === 0) {
      setRecommendation({
        message:
          "We couldn’t find a perfect match for your budget. Please contact Shri Balaji Power Solutions for a personalized quote!",
      });
      return;
    }

    // Sort by rating for the best suggestion
    selected.sort((a, b) => b.rating - a.rating);
    setRecommendation({
      best: selected.slice(0, 3),
      message:
        "Based on your budget and usage, we recommend the following top-rated solar products.",
    });
  };

  return (
    <div className="bg-pearl min-h-screen">
      <Navbar />
      <Flyer />

      {/* Header */}
      <section className="text-center py-14 bg-gradient-to-r from-parrot to-pearl">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald mb-3">
          Build Your Solar Plan
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Choose from India’s top solar brands and find your ideal system — by budget, usage, or product range.
        </p>
      </section>

      {/* Brand + Product Section */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-10 px-6 gap-10">
        {/* Brand Tabs */}
        <div className="md:w-1/5 bg-white rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-bold text-emerald mb-4">Select Brand</h2>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`block w-full text-left px-3 py-2 rounded-lg mb-2 font-medium transition ${
                selectedBrand === brand
                  ? "bg-emerald text-white"
                  : "bg-pearl hover:bg-emerald/10"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Product Listing */}
        <div className="md:w-4/5">
          <h2 className="text-2xl font-bold text-emerald mb-4">{selectedBrand}</h2>

          {Object.entries(productsData[selectedBrand] || {}).map(
            ([category, items]) => (
              <div key={category} className="mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((p, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition"
                    >
                      <h4 className="text-emerald font-semibold text-lg mb-1">
                        {p.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">{p.desc}</p>
                      <p className="text-gray-800 font-semibold mb-1">
                        ₹ {p.price.toLocaleString()}
                      </p>
                      <div className="flex gap-1 text-yellow-500">
                        {"★".repeat(Math.round(p.rating))}{" "}
                        <span className="text-gray-500 text-sm ml-1">
                          ({p.rating})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Plan Builder Section */}
      <section className="bg-white py-14 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-emerald mb-6">
          Customize Your Solar Plan
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <input
            type="number"
            placeholder="Enter Your Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border rounded-lg p-3 w-full md:w-1/3 focus:outline-parrot"
          />
          <select
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
            className="border rounded-lg p-3 w-full md:w-1/3 focus:outline-parrot"
          >
            <option>Home</option>
            <option>Agriculture</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
          <button
            onClick={buildSolarPlan}
            className="bg-emerald text-white font-semibold px-6 py-3 rounded-lg hover:bg-parrot transition"
          >
            Get Recommendations
          </button>
        </div>

        {/* Show Recommendations */}
        {recommendation && (
          <div className="mt-10 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 text-lg">
              {recommendation.message}
            </p>
            {recommendation.best && (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recommendation.best.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-pearl rounded-xl p-5 shadow hover:scale-105 transition"
                  >
                    <h4 className="text-emerald font-bold">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    <p className="font-semibold text-gray-800 mt-2">
                      ₹ {item.price.toLocaleString()}
                    </p>
                    <div className="text-yellow-500 mt-1">
                      {"★".repeat(Math.round(item.rating))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="py-10 text-center bg-emerald text-white">
        <h3 className="text-2xl font-bold mb-4">
          Still Confused About the Right Solar Plan?
        </h3>
        <p className="text-lg mb-6">
          Let Shri Balaji Power Solutions help you choose the perfect, most
          economical solar setup for your needs.
        </p>
        <a
          href="/contact"
          className="bg-parrot text-emerald px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald transition"
        >
          Contact Us for a Free Consultation
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Shri Balaji Power Solutions. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
