import FloatingShape from "./FloatingShape";
import Badge from "./Badge";

// Big title with a 3D rise-in stagger (line 1) followed by a continuously
// shimmering gradient sweep (line 2) — pure CSS so the motion always plays,
// and deliberately different from the Home hero's per-letter pop animation.
function ConstructionTitle({ line1, line2 }) {
  const renderWords = (text, startDelay) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="animate-construction-rise mr-3"
        style={{ animationDelay: `${startDelay + i * 0.12}s` }}
      >
        {word}
      </span>
    ));

  const line1Words = line1.split(" ").length;

  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
      <span className="block text-white">{renderWords(line1, 0.1)}</span>
      <span className="block font-serif italic font-normal mt-2">
        {line2.split(" ").map((word, i) => (
          <span
            key={i}
            className="animate-construction-rise text-shimmer mr-3"
            style={{ animationDelay: `${0.1 + (line1Words + i) * 0.12}s` }}
          >
            {word}
          </span>
        ))}
      </span>
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
