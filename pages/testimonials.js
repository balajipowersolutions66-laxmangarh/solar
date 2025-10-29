import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// removed next/image to avoid blob/public path issues for uploaded images

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: "",
    msg: "",
    phone: "",
    address: "",
    img: null,
  });

  // ✅ Load testimonials from localStorage when page loads
  useEffect(() => {
    const saved = localStorage.getItem("testimonials");
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      // Default testimonial
      setTestimonials([
        {
          id: 1,
          name: "Raj Pal Rohilla",
          msg: "Best decision I ever made. My electricity bill is almost zero now!",
          phone: "+91 9876543210",
          address: "Jaipur, Rajasthan",
          img: "/user.png", // use existing public/user.png
        },
      ]);
    }
  }, []);

  // ✅ Save testimonials to localStorage whenever they change
  useEffect(() => {
    if (testimonials.length > 0) {
      localStorage.setItem("testimonials", JSON.stringify(testimonials));
    }
  }, [testimonials]);

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTestimonial = {
      id: testimonials.length + 1,
      name: form.name,
      msg: form.msg,
      phone: form.phone,
      address: form.address,
      // If user uploaded an image, use blob URL so it displays immediately.
      // Otherwise use the public default image (root /user.png).
      img: form.img ? URL.createObjectURL(form.img) : "/user.png",
    };

    setTestimonials([...testimonials, newTestimonial]);
    setForm({ name: "", msg: "", phone: "", address: "", img: null });
  };

  return (
    <div className="bg-pearl min-h-screen">
      <Navbar />

      <div className="pt-24 px-6">
        <h1 className="text-4xl font-bold text-center text-emerald mb-8">
          Customer Testimonials
        </h1>

        {/* ✅ Form */}
        <div className="max-w-xl mx-auto bg-parrot shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald">Add Your Testimonial</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              placeholder="Your Feedback"
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Your Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Your Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full p-3 border rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
              className="w-full"
            />
            <button
              type="submit"
              className="bg-emerald text-white px-6 py-2 rounded hover:bg-parrot hover:text-emerald transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* ✅ Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                {/* Use plain <img> so both public root paths and blob URLs work reliably */}
                <img
                  src={t.img || "/user.png"}
                  alt={t.name}
                  width={60}
                  height={60}
                  style={{ width: 60, height: 60, objectFit: "cover" }}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold text-emerald">{t.name}</h2>
                  <p className="text-sm text-gray-600">📍 {t.address}</p>
                  <p className="text-sm text-gray-600">📞 {t.phone}</p>
                </div>
              </div>
              <p className="italic text-gray-700 mt-4">“{t.msg}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
