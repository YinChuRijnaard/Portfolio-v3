// Framework imports
import React from "react";
// Dependency imports
// import { useDarkMode } from "usehooks-ts";

// Type + Interface imports

// Context imports

// Util imports

// Component imports

// Asset imports

// Style imports

const Footer = () => {
  // const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <>
      <h1 className="text-xl text-emerald-500">Footer component</h1>

      {/* <p>Current theme: {isDarkMode ? "dark" : "light"}</p> */}

      {/* <button
        className="flex items-center justify-center border border-green-500 px-4 py-2 dark:border-red-500"
        onClick={toggle}
      >
        {isDarkMode ? (
          <>
            <i className="ri-sun-fill ri-xl mx-1"></i>
            <span className="mx-1">Light</span>
          </>
        ) : (
          <>
            <i className="ri-moon-fill ri-xl mx-1"></i>
            <span className="mx-1">Dark</span>
          </>
        )}
      </button> */}
    </>
  );
};

export default Footer;
