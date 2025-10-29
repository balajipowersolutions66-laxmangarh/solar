import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const topSolutions = [
    { slug: "home-solar", title: "Home Solar" },
    { slug: "agriculture", title: "Agriculture" },
    { slug: "business", title: "Business & Industry" },
    { slug: "hybrid", title: "Hybrid (Battery + Grid)" },
    { slug: "on-grid", title: "On-Grid / Net Metering" },
    { slug: "battery-storage", title: "Battery Storage" },
  ];

  return (
    <nav className="bg-pearl text-emerald py-3 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Shri Balaji Power Solutions Logo" width={44} height={44} />
          <h1 className="text-lg md:text-xl font-bold">Shri Balaji Power Solutions</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-base">
          <Link href="/" className="hover:text-parrot">Home</Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="hover:text-parrot">Solutions ▾</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white rounded-xl shadow-lg p-4 w-64">
              <div className="grid grid-cols-1 gap-2">
                {topSolutions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="px-3 py-2 rounded hover:bg-pearl block"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t">
                <Link
                  href="/solutions"
                  className="block px-3 py-2 rounded bg-parrot text-emerald text-center hover:opacity-90"
                >
                  View all solutions →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/calculator" className="hover:text-parrot">Calculator</Link>
          <Link href="/products" className="hover:text-parrot">Products</Link>
          <Link href="/projects" className="hover:text-parrot">Projects</Link>
          <Link href="/testimonials" className="hover:text-parrot">Testimonials</Link>
          <Link href="/about" className="hover:text-parrot">About</Link>
          <Link href="/contact" className="hover:text-parrot">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
