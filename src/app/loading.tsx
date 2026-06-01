export default function Loading() {
  return (
    <main className="p-8">
      <div className="space-y-6">
        <div className="h-40 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
          <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
          <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
          <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />
        </div>
      </div>
    </main>
  );
}