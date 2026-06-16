import { useId } from "react";

export default function ImgPlaceholder({ label, suggestion, className = "", aspect = "4/5" }) {
  const uid = useId();
  const patternId = `grid-${uid.replace(/:/g, "")}`;

  /* Derive a staggered float delay from the render-order index baked into uid.
     React 18 uid format is ":r0:", ":r1:", etc. */
  const idx = parseInt(uid.replace(/\D/g, ""), 10) || 0;
  const delay = `${(idx * 1.3) % 5}s`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-start justify-start p-5 img-float ${className}`}
      style={{ aspectRatio: aspect, animationDelay: delay }}
    >
      <span className="font-mono text-xs text-slate-500 leading-relaxed">
        [{label}]
        {suggestion && (
          <>
            <br />
            <span className="text-green-500 font-semibold">Suggested:</span>{" "}
            {suggestion}
          </>
        )}
      </span>

      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
