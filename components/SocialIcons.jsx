// components/SocialIcons.jsx
import React from "react";

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
      {/* Facebook Business Page */}
      <a
        href="https://www.facebook.com/profile.php?id=61580830209181"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Page"
        title="Facebook Page"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
          <rect rx="4" width="24" height="24" fill="#1877F2" />
          <path
            d="M15.3 8.25h-1.35c-.4 0-.95.2-.95.97v1.12h2.3l-.3 2.25h-2v5.06h-2.5v-5.06h-1.7v-2.25h1.7V9.2c0-1.5.9-2.6 2.5-2.6.7 0 1.3.05 1.5.07v1.58z"
            fill="#fff"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sri.balaji.power.solutions/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#f58529" />
            <stop offset="0.5" stopColor="#dd2a7b" />
            <stop offset="1" stopColor="#8134af" />
          </linearGradient>
          <rect rx="5" width="24" height="24" fill="url(#g)" />
          <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6z" fill="#fff" opacity="0.95" />
          <circle cx="17.8" cy="6.2" r="0.9" fill="#fff" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a href="https://wa.me/919672484555" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
          <rect rx="4" width="24" height="24" fill="#25D366" />
          <path
            d="M17.1 6.9a6.1 6.1 0 0 0-10.9 4.3c0 1.08.29 2.09.82 2.98L6 18l3.04-.99c.86.47 1.84.72 2.85.72a6.1 6.1 0 0 0 4.2-10.77z"
            fill="#fff"
          />
        </svg>
      </a>

      {/* Call */}
      <a href="tel:+919672484555" aria-label="Call us" title="Call">
        <svg width="28" height="28" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
          <rect rx="4" width="24" height="24" fill="#0ea5a0" />
          <path
            d="M8.9 11.6c1.3 2.3 3.3 4.3 5.6 5.6l1.4-1.4a1 1 0 0 1 1-.2c1.1.4 2.4.6 3.6.6.6 0 1 .5 1 1V20c0 .6-.4 1-1 1C9.9 21 3 14.1 3 5.9 3 5.3 3.4 4.9 4 4.9h2.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.4 0 .9-.2 1.1L8.9 11.6z"
            fill="#fff"
          />
        </svg>
      </a>

      {/* Email */}
      <a href="mailto:balajipowersolutions66@gmail.com" aria-label="Email" title="Email">
        <svg width="28" height="28" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
          <rect rx="4" width="24" height="24" fill="#6366f1" />
          <path d="M5 8.5l7 5 7-5V7.2L12 12 5 7.2V8.5z" fill="#fff" />
          <path d="M5 9.5v7.5h14V9.5l-7 5-7-5z" fill="#fff" opacity="0.9" />
        </svg>
      </a>

      {/* Location */}
      <a
        href="https://www.google.com/maps/place/Shree+Balaji+Power+Solutions+Laxmangarh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Location"
        title="Location"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
          <rect rx="4" width="24" height="24" fill="#ef4444" />
          <path d="M12 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" fill="#fff" />
          <path
            d="M12 4.5C9 4.5 6.5 7.5 6.5 10.5 6.5 14.9 12 20 12 20s5.5-5.1 5.5-9.5C17.5 7.5 15 4.5 12 4.5z"
            fill="#fff"
            opacity="0.95"
          />
        </svg>
      </a>
    </div>
  );
}
