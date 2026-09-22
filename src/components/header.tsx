import { Link } from "react-router";

export function Header() {
  return (
    <div className="flex justify-center bg-primary shadow-header absolute w-full font-fira font-medium">
      <nav className="text-lg text-accent flex gap-10 p-[1px]">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/projects">
          Projects
        </Link>
        <Link className="hover:underline" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}
