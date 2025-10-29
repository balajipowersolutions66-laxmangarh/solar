export default function Footer() {
  return (
    <footer className="bg-emerald text-pearl py-10 text-center text-sm">
      {/* Copyright */}
      <p className="text-pearl/80">
        © {new Date().getFullYear()} Sri Balaji Power Solutions. All rights reserved.
      </p>

      {/* Disclaimer */}
      <div className="mt-4 max-w-4xl mx-auto text-xs text-pearl/70 px-6 leading-relaxed">
        <p>
          Disclaimer: Shri Balaji Power Solutions is an independent solar solutions provider and system
          integrator. We are not the manufacturers of Tata, Exide, Luminous, Adani, Waaree, Loom,
          Microtek, K-Sun or other brand products. All trademarks, product names, and logos are the
          property of their respective owners and are used on this website for identification and
          informational purposes only.
        </p>
        <p className="mt-2">
          Product specifications, prices, and availability are subject to change as per manufacturers
          and dealers. Customers are advised to confirm final pricing, warranty, and subsidy eligibility
          with our team before purchase.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mt-6 flex justify-center gap-6 text-xs">
        <a href="/about" className="hover:text-parrot transition">About Us</a>
        <a href="/contact" className="hover:text-parrot transition">Contact</a>
        <a href="/terms" className="hover:text-parrot transition">Terms</a>
        <a href="/privacy" className="hover:text-parrot transition">Privacy Policy</a>
      </div>

      {/* Hindi Disclaimer */}
      <div className="mt-6 max-w-4xl mx-auto text-xs text-pearl/70 px-6 italic leading-relaxed">
        <p>
          अस्वीकरण: श्री बालाजी पावर सॉल्यूशन्स एक स्वतंत्र सोलर समाधान प्रदाता है। 
          हम टाटा, एक्साइड, ल्यूमिनस, अदानी, वाड़ी, लूम, माइक्रोटेक, के-सन या अन्य ब्रांड्स 
          के निर्माता नहीं हैं। सभी उत्पाद नाम, लोगो और ब्रांड उनके संबंधित मालिकों की 
          संपत्ति हैं और केवल पहचान व जानकारी हेतु दिखाए गए हैं।
        </p>
      </div>
    </footer>
  );
}
