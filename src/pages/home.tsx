import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-5">
      <div className="flex h-[100dvh] justify-center items-center">
        <div className="flex flex-col p-5 bg-teal-200 w-[95%] lg:w-[80%] h-[80%] border-3 rounded-md">
          <h1 className="text-4xl lg:text-5xl">Web developer</h1>
          <div className="h-full flex items-center justify-around">
            <NavLink
              to="/projects"
              className="flex items-center justify-center md:text-xl w-30 h-25 md:w-75 md:h-15 p-1 border-2 hover:translate-x-1 transition cursor-pointer hover:shadow-none rounded-sm bg-purple-500 shadow-small"
            >
              Discover my work
            </NavLink>
            <img
              className="h-50 transform translate-y-20 md:translate-y-0 lg:h-100"
              src="./assets/images/fullbodySketch.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
