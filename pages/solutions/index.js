import Navbar from "../../components/Navbar";
import Link from "next/link";
import { SOLUTIONS } from "../../lib/solutionsData";

export default function SolutionsIndex() {
  return (
    <div className="bg-pearl min-h-screen">
      <Navbar />
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald text-center">Solar Solutions</h1>
        <p className="text-gray-700 text-center mt-2">
          Explore our solar solutions. Click a card to learn more.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {SOLUTIONS.map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`} className="block">
              <div className="bg-parrot rounded-xl p-5 shadow hover:shadow-lg hover:scale-[1.02] transition">
                <div className="text-4xl">{s.emoji}</div>
                <div className="mt-3">
                  <h3 className="font-semibold text-emerald">{s.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{s.blurb}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
