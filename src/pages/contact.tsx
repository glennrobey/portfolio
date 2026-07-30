export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-green-400 text-lg mb-4 animate-pulse [animation-duration:1.2s] font-mono">
          glenn@portfolio:~$ ping glenn
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Interested in working together or just want to chat about software
          engineering, Linux, or C++?{" "}
          <span className="animate-blink text-green-400">_</span>
        </p>

        <p className="text-green-400">Email:</p>
        <a
          href="mailto:glennrobey95@gmail.com"
          className="inline-block text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 hover:bg-green-500/10 transition"
        >
          glennrobey95@gmail.com
        </a>

        <p className="text-green-400 mt-4">GitHub:</p>
        <a
          href="https://github.com/glennrobey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 hover:bg-green-500/10 transition"
        >
          github.com/glennrobey
        </a>

        <p className="text-green-400 mt-4">LinkedIn:</p>
        <a
          href="https://www.linkedin.com/in/glenn-robey/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400 hover:bg-green-500/10 transition"
        >
          linkedin.com/in/glenn-robey
        </a>
      </div>
    </main>
  );
}
