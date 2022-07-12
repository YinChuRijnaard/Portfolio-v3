// Framework imports
import { useState } from "react";

// Dependency imports
import { useTheme } from "next-themes";
import { nanoid } from "nanoid";

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
        key={nanoid()}
        className="duration-300 hover:text-red-600 dark:hover:text-red-600"
        href={item.href}
        target="_blank"
        rel="noreferrer">
        <i className={item.iClassName}></i>
      </a>
    );
  });

  return (
    <footer className="space-y-4 border-t border-neutral-200 p-8 dark:border-neutral-800">
      <div className="flex justify-evenly">{footerDataMapped}</div>

      <div className="flex items-center justify-center">
        <button onClick={handleClick}>
          {darkMode ? <i className="ri-sun-line ri-lg"></i> : <i className="ri-moon-line ri-lg"></i>}
        </button>
      </div>

      <p className="text-center text-xs">&copy;&nbsp;{currentYear}</p>
    </footer>
  );
};

export default Footer;
