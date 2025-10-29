import Navbar from "./Navbar";
import Flyer from "./Flyer";

export default function Layout({ children }) {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Promo Flyer below Navbar */}
      <Flyer />

      {/* Page content with top padding so it doesn’t overlap */}
      <main className="pt-[120px]">
        {children}
      </main>

      {/* ✅ Future Footer can go here */}
    </div>
  );
}
