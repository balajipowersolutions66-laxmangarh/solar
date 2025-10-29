import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-pearl min-h-screen py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald mb-10">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-6 text-lg">
        <p>
          📍 Address: Next to CGPS School, Opposite Manasi Power Grid, N.H. 52, 
          Laxmangarh, Sikar, Rajasthan
        </p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:balajipowersolutions66@gmail.com"
            className="text-emerald hover:underline"
          >
            balajipowersolutions66@gmail.com
          </a>
        </p>
        <p>
          📞 WhatsApp / Call:{" "}
          <a
            href="https://wa.me/919672484555"
            target="_blank"
            rel="noreferrer"
            className="text-emerald hover:underline"
          >
            +91 96724 84555
          </a>{" "}
          |{" "}
          <a
            href="https://wa.me/919664431646"
            target="_blank"
            rel="noreferrer"
            className="text-emerald hover:underline"
          >
            +91 96644 31646
          </a>
        </p>
        <p>
          🌐 Instagram:{" "}
          <a
            href="https://www.instagram.com/balaji.power_agero_solutions"
            target="_blank"
            rel="noreferrer"
            className="text-emerald hover:underline"
          >
            @balaji.power_agero_solutions
          </a>
        </p>
        <p>
          👍 Facebook:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61580830209181"
            target="_blank"
            rel="noreferrer"
            className="text-emerald hover:underline"
          >
            Facebook Page
          </a>
        </p>
        <p>
          📍 Google Maps:{" "}
          <a
            href="https://goo.gl/maps/zHXNWVZfvhyypS499"
            target="_blank"
            rel="noreferrer"
            className="text-emerald hover:underline"
          >
            View Location →
          </a>
        </p>
      </div>

      {/* ✅ Add footer at the bottom */}
      <Footer />
    </div>
  );
}
