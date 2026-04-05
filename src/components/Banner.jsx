import { useEffect, useState, useRef } from "react";
import heroBg from "../assets/banner_img.jpg";

const rotatingWords = ["Results", "Growth", "Impact", "Success"];

export default function Banner() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section
      className="relative h-[88vh] min-h-130 overflow-hidden rounded-2xl"
      style={{ margin: "72px 16px 16px", width: "calc(100% - 32px)" }}
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transform: mounted ? "scale(1)" : "scale(1.08)",
          transition: "transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/25"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease" }}
      />

      {/* Center dot */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s ease",
          transitionDelay: "0.8s",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>

      {/* Bottom-left headline */}
      <div className="absolute bottom-10 left-10 z-10">
        <div style={{ overflow: "hidden" }}>
          <h1
            className="text-white font-bold leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              transform: mounted ? "translateY(0)" : "translateY(110%)",
              opacity: mounted ? 1 : 0,
              transition:
                "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease",
              transitionDelay: "0.1s",
            }}
          >
            Floka
          </h1>
        </div>

        <div style={{ overflow: "hidden" }}>
          <p
            className="text-white/50 font-light uppercase"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
              transform: mounted ? "translateY(0)" : "translateY(110%)",
              opacity: mounted ? 1 : 0,
              transition:
                "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease",
              transitionDelay: "0.25s",
            }}
          >
            Studio
          </p>
        </div>
      </div>

      {/* Bottom-right card */}
      <div
        className="absolute bottom-10 right-10 z-10"
        style={{
          width: '340px',
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          opacity: mounted ? 1 : 0,
          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease',
          transitionDelay: '0.45s',
        }}
      >
        {/* White card */}
        <div className="bg-white rounded-2xl shadow-xl mb-4 flex gap-4 items-stretch overflow-hidden">
          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="Almond D. Nelsi"
            className="w-36 h-36 object-cover shrink-0"
          />
          <div className="flex flex-col justify-between px-5 py-4 flex-1">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">Head of Idea</p>
              <p className="text-lg font-bold text-gray-900 leading-snug">Almond D. Nelsi</p>
            </div>
            <button className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-xl shrink-0">+</span>
              <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Let's Talk</span>
            </button>
          </div>
        </div>

        {/* Text below card */}
        <p className="text-white font-bold text-[18px] my-1">No cookie-cutter websites. No fluff.</p>
        <p className="text-white/60 text-[18px] leading-relaxed">
          Just real tools and smart strategies to grow your business and elevate your brand.
        </p>
      </div>
    </section>
  );
}
