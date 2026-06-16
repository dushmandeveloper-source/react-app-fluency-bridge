export default function BridgeMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="#0f172a" />
      <path d="M7 27 Q20 11 33 27" fill="none" stroke="#16a34a" strokeWidth="2" />
      <line x1="14" y1="20.5" x2="14" y2="27" stroke="#16a34a" strokeWidth="1.3" />
      <line x1="20" y1="17.2" x2="20" y2="27" stroke="#16a34a" strokeWidth="1.3" />
      <line x1="26" y1="20.5" x2="26" y2="27" stroke="#16a34a" strokeWidth="1.3" />
      <line x1="7" y1="27" x2="33" y2="27" stroke="#94a3b8" strokeWidth="1.6" />
      <circle cx="20" cy="13.3" r="2.4" fill="#14532d" />
    </svg>
  );
}
