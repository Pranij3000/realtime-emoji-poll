import { useEffect, useState } from "react";
import SunIcon from "./../../assets/images/SunIcon";
import MoonIcon from "./../../assets/images/MoonIcon";
export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [isDark]);

  const modeChange = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div className="dark-button-wrapper fixed bottom-2 right-2">
        <button onClick={() => modeChange()} className="dark-button relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-full after:top-1 after:left-1 after:bg-primary hover:after:top-2 hover:after:left-2 after:transition-all after:duration-300 after:ease-in-out after:rounded-md">
          <div className="button-container bg-black dark:bg-white p-3 relative z-1 rounded-md">{isDark ? <SunIcon /> : <MoonIcon />}</div>
        </button>
      </div>
    </>
  );
}
