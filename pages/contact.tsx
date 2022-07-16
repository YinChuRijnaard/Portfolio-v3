// Framework imports
import type { NextPage } from "next";

// Component imports
import Button from "../components/Button";
import TypeformForm from "../components/TypeformForm";

const Contact: NextPage = () => {
  return (
    <main className="mx-4 my-8 min-h-fit space-y-8 p-4 md:mx-32 md:mt-16 lg:mx-64">
      <h1 className="font-serif text-6xl">
        Contact<span className="text-red-600">.</span>
      </h1>

      <p className="">Click on the sidetab to fill out the contact form :&#41;</p>

      <hr className="w-1/2 border-neutral-300 dark:border-neutral-700" />

      <p className="">Prefer to have a chat instead?</p>

      <div className="flex justify-start">
        <Button href={"tel:+31618058625"} text={"Call me"} iClassName={"ri-phone-line ml-1"} />
      </div>

      <TypeformForm />
    </main>
  );
};

export default Contact;
