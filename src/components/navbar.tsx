import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `transition duration-300 ${
      location.pathname === path
        ? "text-green-300"
        : "text-green-500 hover:text-green-300"
    }`;

  return (
    <nav className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
      <div className="flex gap-8 px-8 py-4 rounded-full border border-green-500/20 bg-black/70 backdrop-blur-md shadow-lg shadow-green-500/20">
        <Link className={linkStyle("/")} to="/">
          Home
        </Link>

        <Link className={linkStyle("/about")} to="/about">
          About
        </Link>

        <Link className={linkStyle("/projects")} to="/projects">
          Projects
        </Link>

        <Link className={linkStyle("/contact")} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
