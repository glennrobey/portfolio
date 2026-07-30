import crypt0 from "../assets/crypt0.png";
import cppcalc from "../assets/cppcalc.jpg";
import intweather from "../assets/intweather.png";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 pb-28">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-8 max-w-3xl w-full">
        {/* Terminal command */}
        <p className="text-green-400 text-lg mb-6 font-mono animate-pulse [animation-duration:1.2s]">
          glenn@portfolio:~$ ls projects
        </p>

        {/* Portfolio */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400">Portfolio</h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            My personal portfolio showcasing my projects, Linux journey,
            software engineering skills, and my transition into systems
            programming with C++ and Linux.
            <span className="animate-blink text-green-400">_</span>
          </p>
        </div>

        <hr className="border-green-500/20 my-6" />

        {/* Project 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 hover:text-green-300 transition">
            <a
              href="https://github.com/YOUR_USERNAME/crypt0"
              target="_blank"
              rel="noopener noreferrer"
            >
              crypt0.current_
            </a>
          </h2>

          <div className="mt-4 border border-green-500/20 rounded-lg overflow-hidden">
            <a
              href="https://github.com/glennrobey/crypt0.current_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={crypt0}
                alt="crypt0 preview"
                className="w-full cursor-pointer transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30"
              />
            </a>
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Cryptocurrency and fiat currency converter built with React, Vite,
            PostgreSQL, Node.js, authentication, and a community forum.
            <span className="animate-blink text-green-400">_</span>
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/glennrobey/crypt0.current_"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://YOUR_DEMO_URL.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-500 rounded hover:bg-green-500/10 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        <hr className="border-green-500/20 my-6" />

        {/* Project 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 hover:text-green-300 transition">
            <a
              href="https://github.com/YOUR_USERNAME/cppcalc"
              target="_blank"
              rel="noopener noreferrer"
            >
              C++Calc
            </a>
          </h2>

          <div className="mt-4 border border-green-500/20 rounded-lg overflow-hidden">
            <a
              href="https://github.com/YOUR_USERNAME/cppcalc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={cppcalc}
                alt="C++Calc preview"
                className="w-full cursor-pointer transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30"
              />
            </a>
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Scientific calculator built with C++, React, Drogon, Docker, custom
            tokenization, expression parsing, and REST API communication.
            <span className="animate-blink text-green-400">_</span>
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/glennrobey/cppcalc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://cpp-calc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-500 rounded hover:bg-green-500/10 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        <hr className="border-green-500/20 my-6" />

        {/* Project 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 hover:text-green-300 transition">
            <a
              href="https://github.com/glennrobey/IntWeather"
              target="_blank"
              rel="noopener noreferrer"
            >
              IntWeather
            </a>
          </h2>

          <div className="mt-4 border border-green-500/20 rounded-lg overflow-hidden">
            <a
              href="https://intweather.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={intweather}
                alt="IntWeather preview"
                className="w-full cursor-pointer transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30"
              />
            </a>
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed">
            International weather application built with C++, React, Vite,
            Drogon, Docker, REST APIs, geolocation services, autocomplete
            search, and full-stack deployment using Render and Vercel.
            <span className="animate-blink text-green-400">_</span>
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/glennrobey/IntWeather"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://intweather.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-500 rounded hover:bg-green-500/10 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        <hr className="border-green-500/20 my-6" />
      </div>
    </main>
  );
}
