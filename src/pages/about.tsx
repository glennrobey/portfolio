import profile from "../assets/profile-pic.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl">
        {/* Terminal Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-md w-full">
          {/* Command line */}
          <p className="text-green-400 text-lg mb-4 animate-pulse [animation-duration:1.2s] font-mono">
            glenn@portfolio:~$ cat about.txt
          </p>

          {/* About text */}
          <p className="text-gray-300 leading-relaxed">
            I’m a fullstack developer focused on building fast, clean web
            applications. I work with React, TypeScript, and backend systems,
            and I enjoy Linux and low-level programming.
            <span className="animate-blink text-green-400">_</span>
          </p>

          {/* Skills command */}
          <br></br>
          <p className="text-green-400 text-lg mb-4 animate-pulse [animation-duration:1.2s] font-mono">
            glenn@portfolio:~$ ls skills
          </p>
          <br></br>
          {/* Skills row */}
          <div className="flex justify-center gap-3 flex-nowrap overflow-x-auto">
            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 whitespace-nowrap">
              C++
            </span>

            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 whitespace-nowrap">
              TypeScript
            </span>

            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 whitespace-nowrap">
              Linux
            </span>

            <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 whitespace-nowrap">
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
