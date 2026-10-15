import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { GrSun } from "react-icons/gr";

export function ToggleButton() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleDark() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
      document
        .getElementsByClassName("toggleBall")[0]
        .classList.add("translate-x-10");
    } else {
      document.documentElement.classList.toggle("dark");
      setDarkMode(true);
      document
        .getElementsByClassName("toggleBall")[0]
        .classList.remove("translate-x-10");
    }
  }

  return (
    <div
      onClick={toggleDark}
      className="toggleButton flex items-center p-[1px] h-[30px] w-[75px] rounded-xl bg-linear-to-t from-gray-200 to-gray-500"
    >
      <div className="toggleBall w-[28px] h-[28px] transform rounded-3xl bg-conic from-gray-100 via-gray-500 to-gray-200 transition duration-400"></div>
      {darkMode && <FaMoon className="transform translate-x-5" />}
      {!darkMode && <GrSun className="transform -translate-x-5 " />}
    </div>
  );
}
