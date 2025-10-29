// components/ContactIcons.js
import Link from "next/link";

export default function ContactIcons(){
  return (
    <section className="py-8 bg-emerald-700 text-white">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-8">
        <a href="https://wa.me/919672484555" target="_blank" rel="noreferrer" className="text-center">
          <div className="text-2xl">📱</div>
          <div className="text-sm">WhatsApp</div>
        </a>
        <a href="mailto:sribalajipowersolutions66@gmail.com" className="text-center">
          <div className="text-2xl">✉️</div>
          <div className="text-sm">Email</div>
        </a>
        <a href="https://www.instagram.com/balaji.power_agero_solutions" target="_blank" rel="noreferrer" className="text-center">
          <div className="text-2xl">📸</div>
          <div className="text-sm">Instagram</div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61580830209181" target="_blank" rel="noreferrer" className="text-center">
          <div className="text-2xl">🔗</div>
          <div className="text-sm">Facebook</div>
        </a>
        <a href="https://goo.gl/maps/zHXNWVZfvhyypS499" target="_blank" rel="noreferrer" className="text-center">
          <div className="text-2xl">📍</div>
          <div className="text-sm">Location</div>
        </a>
      </div>
    </section>
  );
}
