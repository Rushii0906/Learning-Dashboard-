interface AnimatedProgressProps {
  value: number;
}

export default function AnimatedProgress({
  value,
}: AnimatedProgressProps) {
  return (
    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
      <div
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-cyan-300
          shadow-[0_0_12px_rgba(34,211,238,0.5)]
          transition-all
          duration-1000
        "
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}