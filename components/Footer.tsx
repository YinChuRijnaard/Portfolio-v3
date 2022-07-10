// Framework imports
import { useState } from "react";

// Dependency imports
import { useTheme } from "next-themes";

// Data imports
import { footerData } from "../data/footerData";

const Footer = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const currentYear: number = new Date().getFullYear();

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

  const footerDataMapped = footerData.map((item) => {
    return (
      <a
        className="hover:text-red-600 dark:hover:text-red-600 duration-300"
        href={item.href}
        target="_blank"
        rel="noreferrer">
        <i className={item.iClassName}></i>
      </a>
    );
  });

  // Find out why Prettier doesn't sort my Tailwind classes!!!

  return (
    <footer className="space-y-4 p-2 mt-2">
      <div className="flex justify-evenly">{footerDataMapped}</div>

      <div className="flex justify-center items-center">
        <button onClick={handleClick}>
          {darkMode ? <i className="ri-sun-line ri-lg"></i> : <i className="ri-moon-line ri-lg"></i>}
        </button>
      </div>

      <p className="text-xs text-center">&copy;&nbsp;{currentYear}</p>
    </footer>
  );
};

export default Footer;
