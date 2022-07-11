// Framework imports
import type { NextPage } from "next";

// Component imports
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <main className="h-screen mx-4 font-serif space-y-8 p-2">
      <h1 className="text-6xl">Hi 👋🏼</h1>
      <p className="text-3xl opacity-75">I&apos;m Yin Chu Rijnaard. A frontend web developer from the Netherlands.</p>
      <p className="text-lg opacity-[0.625] italic">Passionate&nbsp;•&nbsp;Dedicated&nbsp;•&nbsp;Dependable</p>

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
