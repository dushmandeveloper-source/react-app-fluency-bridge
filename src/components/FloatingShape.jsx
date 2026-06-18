export default function FloatingShape({ type, className = "", style }) {
  if (type === "dot") return <div className={`absolute rounded-full bg-lime ${className}`} style={style} />;
  if (type === "ring") return <div className={`absolute rounded-full border-2 border-lime ${className}`} style={style} />;
  if (type === "plus") {
    return (
      <div className={`absolute text-lime ${className}`} style={style}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    );
  }
  return null;
}
