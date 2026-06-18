import { useEffect, useRef } from "react";
import { loadAnime } from "../lib/loadAnime";
import FloatingShape from "./FloatingShape";
import Badge from "./Badge";

// Big title with a word-by-word slide + skew reveal that loops gently —
// deliberately different motion from the Home hero's per-letter pop.
function ConstructionTitle({ line1, line2 }) {
  const ref = useRef(null);

  useEffect(() => {
    let anim;
    let cancelled = false;

    loadAnime().then((anime) => {
      if (cancelled || !anime || !ref.current) return;
      const words = ref.current.querySelectorAll(".cword");
      anim = anime
        .timeline({ loop: true })
        .add({
          targets: words,
          translateY: [40, 0],
          skewX: [8, 0],
          opacity: [0, 1],
          duration: 900,
          easing: "easeOutCubic",
          delay: anime.stagger(120),
        })
        .add({
          targets: words,
          opacity: [1, 0.35],
          duration: 900,
          easing: "easeInOutSine",
          delay: anime.stagger(60),
        }, "+=1600")
        .add({
          targets: words,
          opacity: 1,
          translateY: 0,
          skewX: 0,
          duration: 1,
        })
        .add({
          targets: words,
          translateY: 40,
          skewX: 8,
          opacity: 0,
          duration: 1,
        });
    });

    return () => {
      cancelled = true;
      if (anim) anim.pause();
    };
  }, []);

  const renderWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="cword inline-block mr-3">
        {word}
      </span>
    ));

  return (
    <h1 ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
      <span className="block text-white">{renderWords(line1)}</span>
      <span className="block font-serif italic font-normal text-lime mt-2">{renderWords(line2)}</span>
    </h1>
  );
}

export default function UnderConstruction({ pageName }) {
  return (
    <div className="relative bg-navy min-h-screen flex items-center overflow-hidden px-4 md:px-8 lg:px-12 py-32">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-lime/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-navy-mid/80 blur-[120px] pointer-events-none" />

      <FloatingShape type="ring" className="w-16 h-16 opacity-20 top-24 right-[12%] animate-float-slow" />
      <FloatingShape type="dot" className="w-4 h-4 opacity-40 bottom-1/3 left-[8%] animate-float-fast" style={{ animationDelay: "1s" }} />
      <FloatingShape type="plus" className="opacity-30 top-1/3 left-[20%] animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Badge text="Page Under Construction" className="mb-8 bg-navy-mid border-navy-border text-white" />

        <ConstructionTitle line1="Building Something" line2={`New for ${pageName}.`} />

        <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed font-medium">
          We're crafting a better experience for this page, with the same care behind everything else at Fluency Bridge Global. Check back soon.
        </p>

        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="w-2 h-2 rounded-full bg-lime animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 rounded-full bg-lime animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 rounded-full bg-lime animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
