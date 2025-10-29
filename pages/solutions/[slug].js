// pages/solutions/[slug].js
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { SOLUTIONS, DETAILS } from "../../lib/solutionsData";

export async function getStaticPaths() {
  return {
    paths: SOLUTIONS.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const solution = SOLUTIONS.find((s) => s.slug === params.slug) || null;
  const detail = DETAILS[params.slug] || null;
  return { props: { solution, detail } };
}

export default function SolutionDetail({ solution, detail }) {
  // Fallback text if DETAILS entry is not added yet
  const hero = detail?.hero || solution.title;
  const overview = detail?.overview || solution.blurb;

  return (
    <div className="bg-pearl min-h-screen">
      <Navbar />
      <main className="pt-24 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{solution.emoji}</div>
            <h1 className="text-3xl font-bold text-emerald">{hero}</h1>
          </div>

          <p className="mt-4 text-gray-700">{overview}</p>

          {detail?.benefits?.length ? (
            <>
              <h2 className="mt-8 text-xl font-semibold text-emerald">Benefits</h2>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                {detail.benefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </>
          ) : null}

          {detail?.includes?.length ? (
            <>
              <h2 className="mt-6 text-xl font-semibold text-emerald">What’s Included</h2>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                {detail.includes.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </>
          ) : null}

          {detail?.idealFor ? (
            <p className="mt-6 text-gray-700">
              <span className="font-semibold">Ideal for:</span> {detail.idealFor}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="px-5 py-3 bg-emerald text-white rounded-lg hover:bg-parrot hover:text-emerald transition"
            >
              {detail?.cta || "Request a Quote"}
            </a>
            <Link href="/solutions" className="px-5 py-3 border rounded-lg">← All Solutions</Link>
            <Link href="/" className="px-5 py-3 border rounded-lg">Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
