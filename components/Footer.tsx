// Framework imports
import { useState } from "react";

// Dependency imports
import { useTheme } from "next-themes";

const Footer = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const handleClick = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      setTheme("light");
      setDarkMode(false);
    } else {
      setTheme("dark");
      setDarkMode(true);
    }
  };

  return (
    <>
      <h1 className="text-xl text-blue-500">Footer component</h1>

      <button onClick={handleClick}>
        {darkMode ? (
          <span className="flex items-center border border-white px-4 py-2">
            <i className="ri-sun-fill mr-2"></i>Light
          </span>
        ) : (
          <span className="flex items-center border border-black px-4 py-2">
            <i className="ri-moon-fill mr-2"></i>Dark
          </span>
        )}
      </button>
    </>
  );
};

export default Footer;
