import { useEffect, useState } from "react";

export default function Flyer() {
  const slogans = [
    "सोलर लगाइए — बिल घटाइए, कमाई बढ़ाइए!",
    "सोलर से आज़ादी: शून्य बिल, बेहतर भविष्य!",
    "सब्सिडी + सोलर = स्मार्ट इन्वेस्टमेंट",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [mounted, setMounted] = useState(false);

  // ✅ Only render after client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slogans.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted, slogans.length]);

  if (!mounted) {
    // Render empty div during SSR to avoid hydration mismatch
    return <div className="h-[48px] w-full bg-gradient-to-r from-pearl via-white to-parrot border-b border-emerald shadow-md fixed top-[60px] z-40" />;
  }

  return (
    <div className="w-full bg-gradient-to-r from-pearl via-white to-parrot py-3 border-b border-emerald shadow-md fixed top-[60px] z-40">
      <p
        className={`text-emerald font-bold text-lg text-center transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {slogans[index]}
      </p>
    </div>
  );
}
