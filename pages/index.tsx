// Framework imports
import type { NextPage } from "next";

// Component imports
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <main className="mx-4 mt-8 h-screen space-y-16 p-4 font-serif">
      <h1 className="text-6xl">Nice to meet ya 👋🏼</h1>

      <p className="text-3xl leading-normal opacity-75">
        I&apos;m Yin Chu Rijnaard. A frontend web developer from the Netherlands<span className="text-red-600">.</span>
      </p>

      <p className="text-lg italic opacity-[0.625]">Passionate • Dedicated • Dependable</p>

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
  - Everything: mx-4 + p-4 + mt-8 + space-y-16/8/4
  - Navbar: mx-4
  - Footer: mt-16 p-8
*/
