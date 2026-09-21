import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/public/assets/images/homeHeroDark.webp')] flex flex-row justify-center bg-cover bg-center h-[100dvh]">
        <h1 className="transform translate-y-10 lg:translate-y-40 text-5xl text-background italic ">
          Web developer & Student
        </h1>
        <NavLink
          to="/projects"
          className=" self-center justify-self-center text-background bg-accent/100 hover:bg-accent/80 hover:cursor-pointer p-4 rounded-lg transition duration-300 ease-in-out transform -translate-x-21 translate-y-21 hover:scale-105"
        >
          <p className="animate-pulse font-bold">Discover my work</p>
        </NavLink>
      </div>

      <div>
        <h2></h2>
      </div>
    </div>
  );
}
