import { Link } from "react-router-dom";

export const NavBar = () => (
  <nav
    className={[
      "z-10",
      "flex",
      "justify-between",
      "items-center", // Center items vertically
      "w-full",
      "text-white",
      "px-4",
      "py-4",
      "bg-sky-700",
      "top-0",
      "sticky",
      "inset-0",
      "h-full",
    ].join(" ")}
  >
    <img src="/logo.png" className="h-14" alt="Logo" />

    <div className="flex space-x-8">
      <Link
        to="/"
        className="text-white px-3 py-2 rounded-lg hover:text-sky-800 hover:bg-white hover:shadow-md hover:scale-105 transition duration-300"
      >
        Home
      </Link>
      <Link
        to="/lets-play"
        className="text-white px-3 py-2 rounded-lg hover:text-sky-800 hover:bg-white hover:shadow-md hover:scale-105 transition duration-300"
      >
        Let's Play
      </Link>
    </div>
  </nav>
);
