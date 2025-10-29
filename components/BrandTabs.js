export default function BrandTabs({ brands, activeBrand, onTabClick }) {
  const brandList = Object.keys(brands);

  return (
    <div className="flex flex-wrap justify-center mb-12">
      {brandList.map((brand) => (
        <button
          key={brand}
          onClick={() => {
            onTabClick(brand);
            // scroll down to brand section
            const el = document.getElementById(`brand-${brand.replace(/\s+/g, "-")}`);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`px-8 py-4 m-2 rounded-full text-base md:text-lg font-semibold transition ${
            activeBrand === brand
              ? "bg-emerald text-white shadow-lg scale-105"
              : "bg-white border-2 border-emerald text-emerald hover:bg-parrot hover:text-white"
          }`}
        >
          {brand}
        </button>
      ))}
    </div>
  );
}
