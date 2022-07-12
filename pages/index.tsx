// Framework imports
import type { NextPage } from "next";

// Dependency imports
import ScrollToTop from "react-scroll-to-top";

// Component imports
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <main className="h-full mx-4 mt-8 p-4 font-serif space-y-16">
      <ScrollToTop
        style={{ background: "none", display: "flex", justifyContent: "center", alignItems: "center" }}
        color="#dc2626"
        smooth
      />

      <h1 className="text-6xl">Hi 👋🏼</h1>

      <p className="text-3xl opacity-75">I&apos;m Yin Chu Rijnaard. A frontend web developer from the Netherlands.</p>

      <p className="text-lg opacity-[0.625] italic">Passionate&nbsp;•&nbsp;Dedicated&nbsp;•&nbsp;Dependable</p>

      {/* <ul className="list-disc text-lg italic opacity-[0.625] ml-4">
        <li>Passionate</li>
        <li>Dedicated</li>
        <li>Dependable</li>
      </ul> */}

      <div className="flex justify-start">
        <Button
          href={"https://cv-yin-chu-rijnaard.vercel.app/"}
          text={"View my resume"}
          iClassName={"ri-external-link-line ml-1"}
        />
      </div>
    </main>
  );
};

export default Home;

// Styling === basis for other pages!

/*
NORMAL
  Everything
    - mx-4 + p-4 + mt-8
    - Navbar: mx-4
    - Footer: mx-4 + p-4
*/
