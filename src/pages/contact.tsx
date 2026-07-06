export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-green-400 mb-6">Contact</h1>

        <p className="text-gray-300 text-lg mb-8">
          Interested in working together or just want to chat about software
          engineering, Linux, or C++?{" "}
          <span className="animate-blink text-green-400">_</span>
        </p>
        <p className="text-green-400">Email:</p>
        <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
          glennrobey95@gmail.com
        </span>
        <p className="text-green-400">Github:</p>
        <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
          https://github.com/glennrobey
        </span>
        <p className="text-green-400">LinkedIn:</p>
        <span className="text-xs px-3 py-1 border border-green-500/30 rounded-full text-green-400">
          https://www.linkedin.com/in/glenn-robey/
        </span>
      </div>
    </main>
  );
}
