import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { ToggleButton } from "./toggleButton";
//Functions taken from https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs#36862446
function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

export function Header() {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  if (width > 700) {
    return (
      <div className="grid grid-cols-3 bg-primary shadow-header absolute w-full font-fira font-medium">
        <div className="EMPTY SPACER"></div>
        <nav className="flex justify-center text-lg text-accent flex gap-10 p-[1px]">
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
        <div className="flex justify-end p-1">
          <ToggleButton />
        </div>
      </div>
    );
  } else {
    return (
      <>
        {open ? (
          <div className="text-standardtext fixed left-0 flex flex-col w-[75%] h-screen z-50 bg-blue-400/95 ">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl underline">Navigation</h1>
              <FaCaretLeft
                className="text-6xl hover:text-red-500 text-red-800 hover:cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <nav className="flex flex-col gap-10">
              <Link className="text-3xl hover:text-gray-300" to="/">
                Home
              </Link>
              <Link className="text-3xl hover:text-gray-300" to="/projects">
                Projects
              </Link>
              <Link className="text-3xl hover:text-gray-300" to="/about">
                About
              </Link>
            </nav>
            <div className="flex w-[100%] items-center justify-center m-5">
              <ToggleButton />
            </div>
          </div>
        ) : (
          <FaCaretRight
            className="fixed top-2 -left-3  text-6xl hover:text-green-600 hover:cursor-pointer text-green-300 stroke-10 stroke-black"
            onClick={() => setOpen(true)}
          />
        )}
      </>
    );
  }
}
