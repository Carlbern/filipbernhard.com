import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GrSun } from "react-icons/gr";

export function ToggleButton() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);

    if (theme === "light") {
      document
        .getElementsByClassName("toggleBall")[0]
        .classList.add("translate-x-11");
    }
  }, [theme]);

  function toggleDark() {
    if (theme === "dark") {
      setTheme("light");
      document
        .getElementsByClassName("toggleBall")[0]
        .classList.add("translate-x-11");
    } else {
      setTheme("dark");
      document
        .getElementsByClassName("toggleBall")[0]
        .classList.remove("translate-x-11");
    }
  }

  return (
    <div
      onClick={toggleDark}
      className="toggleButton flex items-center p-[1px] h-[30px] w-[75px] rounded-xl bg-linear-to-t from-gray-200 to-gray-500"
    >
      <div className="toggleBall w-[28px] h-[28px] transform rounded-3xl bg-conic from-gray-100 via-gray-500 to-gray-200 transition duration-400"></div>
      {theme === "dark" ? (
        <FaMoon className="transform translate-x-5" />
      ) : (
        <GrSun className="transform -translate-x-5 " />
      )}
    </div>
  );
}
