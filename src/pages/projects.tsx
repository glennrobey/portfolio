export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center pt-24 px-8">
      <h1 className="text-5xl font-bold text-green-400 mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
        <div className="border border-green-500/20 rounded-xl p-6 bg-zinc-900">
          <h2 className="text-2xl font-semibold mb-2">crypt0.current_</h2>

          <p className="text-gray-400">
            Cryptocurrency and fiat currency converter built with React, Vite,
            PostgreSQL, Node.js, authentication, and a community forum.{" "}
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>

        <div className="border border-green-500/20 rounded-xl p-6 bg-zinc-900">
          <h2 className="text-2xl font-semibold mb-2">Portfolio</h2>

          <p className="text-gray-400">
            My personal portfolio showcasing my projects, Linux journey, and
            software engineering skills.{" "}
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>
      </div>
    </main>
  );
}
