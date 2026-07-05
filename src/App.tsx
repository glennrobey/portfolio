import profile from "./assets/profile-pic.jpg";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl">
        {/* Text Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-md">
          <h2 className="text-3xl font-bold text-green-400">About Me</h2>

          <p className="mt-4 text-white/80 leading-relaxed">
            I’m a fullstack developer focused on building fast, clean web
            applications. I work with React, TypeScript, and backend systems,
            and I enjoy Linux and low-level programming.
            <span className="animate-blink text-green-400">_</span>
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-2">
            <p className="text-green-400">Skills:</p>
            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
              C++
            </span>
            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
              TypeScript
            </span>
            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
              Linux
            </span>
            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
              Tailwind
            </span>
          </div>
        </div>

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-2 border-green-400/30 shadow-xl shadow-green-500/20 hover:scale-125 transition"
        />
      </div>
    </div>
  );
}
