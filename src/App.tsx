import profile from "./assets/profile-pic.jpg";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white gap-10">
      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white shadow-xl rounded-xl p-6 max-w-md">
        <h2 className="text-2xl font-bold text-green-500">About Me</h2>
        <p className="mt-2 text-white/80">
          I’m a fullstack developer focused on React, TypeScript, and backend
          systems.
        </p>
      </div>

      {/* Profile Image */}
      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-xl shadow-green-500 border-2 border-white/20 hover:scale-200 transition"
      />
    </div>
  );
}
