export default function ActivityTile() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-3">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-5 rounded bg-emerald-500/60"
          />
        ))}
      </div>
    </section>
  );
}