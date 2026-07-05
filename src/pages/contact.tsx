export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-green-400 mb-8">Contact</h1>

      <p className="text-gray-300 text-lg text-center max-w-xl">
        Interested in working together or just want to chat about software
        engineering, Linux, or C++?{" "}
        <span className="animate-blink text-green-400">_</span>
      </p>

      <div className="mt-10 space-y-4 text-center">
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/glennrobey</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </div>
    </main>
  );
}
