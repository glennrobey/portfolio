import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <p className="text-green-400 text-lg mb-2">Hello, I'm</p>

        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          Glenn <span className="text-green-400">Robey</span>
        </h1>

        <h2 className="text-2xl text-gray-300 mb-6">
          Full Stack Developer • C++ Student • Linux Enthusiast
        </h2>

        <p className="text-gray-400 leading-relaxed mb-10">
          I build fast, modern web applications while expanding my knowledge of
          C++, Linux, and backend development. I'm passionate about creating
          efficient software and continuously improving my skills.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-green-500 text-green-400 hover:bg-green-500/10 transition"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-16 text-green-400 animate-pulse text-xl">
          ↓ Scroll or use the navigation ↓
        </p>
      </div>
    </main>
  );
}
