export default function Badge({ text, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold shadow-lg ${className}`}>
      <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
      {text}
    </div>
  );
}
