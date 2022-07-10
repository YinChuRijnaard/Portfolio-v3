// Framework imports
import type { NextPage } from "next";

// Component imports
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <main className="h-full mb-8 p-2">
      <div className="font-serif text-center"></div>

      <br />

      <div className="flex justify-center items-center">
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
