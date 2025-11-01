// components/SocialIcons.jsx
import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function SocialIcons() {
  const iconStyle = "w-7 h-7 hover:scale-110 transition-transform duration-200";

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center mt-6">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61580830209181"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <Facebook className={`${iconStyle} text-blue-600`} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sri.balaji.power.solutions/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <Instagram className={`${iconStyle} text-pink-500`} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919672484555"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <MessageCircle className={`${iconStyle} text-green-500`} />
      </a>

      {/* Call */}
      <a href="tel:+919672484555" title="Call">
        <Phone className={`${iconStyle} text-teal-500`} />
      </a>

      {/* Email */}
      <a
        href="mailto:balajipowersolutions66@gmail.com"
        title="Email"
      >
        <Mail className={`${iconStyle} text-indigo-500`} />
      </a>

      {/* Location */}
      <a
        href="https://www.google.com/maps/place/Shree+Balaji+Power+Solutions+Laxmangarh"
        target="_blank"
        rel="noopener noreferrer"
        title="Location"
      >
        <MapPin className={`${iconStyle} text-red-500`} />
      </a>
    </div>
  );
}
