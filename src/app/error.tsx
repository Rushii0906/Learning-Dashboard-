"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-3 text-zinc-400">
          {error.message}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="
            mt-6
            rounded-xl
            bg-blue-600
            px-5
            py-3
            text-white
          "
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}