import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 pb-24">
      {" "}
      <div className="text-center max-w-3xl">
        {/* WHOAMI CARD */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-2xl w-full text-center mb-16">
          <p className="text-green-400 text-lg mb-2 animate-pulse [animation-duration:1.2s] font-mono">
            glenn@portfolio:~$ whoami
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-green-400">
            Glenn <span className="text-green-400">Robey</span>
          </h1>

          <h2 className="text-2xl text-green-400 mb-6">
            Fullstack Programmer - Linux
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10">
            | Fullstack Programmer | Linux Power User | TypeScript + C++ |
            <br></br>
            <br></br>Expanding knowledge in computer architecture, systems
            programming, and backend engineering.
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>

        {/* QUOTE SECTION */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 max-w-2xl w-full mx-auto font-mono text-left -mt-6">
          {" "}
          <p className="text-green-400 animate-pulse [animation-duration:1.2s] mb-3">
            glenn@portfolio:~$ echo "quote"
          </p>
          <p className="text-white-400">
            <span className="text-green-400">[quote]</span> "Be nice to nerds.
            Chances are you'll end up working for one."
          </p>
          <p className="text-white-400 mt-2">
            <span className="text-green-400">[source]</span> Bill Gates
            <span className="animate-blink text-green-400">_</span>
          </p>{" "}
        </div>
      </div>
    </main>
  );
}
