import crypt0 from "../assets/crypt0.png";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-3xl w-full">
        {/* Terminal command */}
        <p className="text-green-400 text-lg mb-6 font-mono animate-pulse [animation-duration:1.2s]">
          glenn@portfolio:~$ ls projects
        </p>

        {/* Project 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400">
            crypt0.current_
          </h2>

          {/* Image (fixed placement) */}
          <div className="mt-4 border border-green-500/20 rounded-lg overflow-hidden">
            <img src={crypt0} alt="crypt0 preview" className="w-full" />
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Cryptocurrency and fiat currency converter built with React, Vite,
            PostgreSQL, Node.js, authentication, and a community forum.
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>

        <hr className="border-green-500/20 my-6" />

        {/* Project 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-green-400">Portfolio</h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            My personal portfolio showcasing my projects, Linux journey,
            software engineering skills, and my transition into systems
            programming with C++ and Linux.
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>
      </div>
    </main>
  );
}
