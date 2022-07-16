// Framework imports
import type { NextPage } from "next";

// Component imports
import Button from "../components/Button";
import TypeformForm from "../components/TypeformForm";
import ContactForm from "../components/ContactForm";

const Contact: NextPage = () => {
  return (
    <main className="mx-4 my-8 min-h-fit space-y-8 p-4 md:mx-32 md:mt-16 lg:mx-64">
      <h1 className="font-serif text-6xl">
        Contact<span className="text-red-600">.</span>
      </h1>

      <TypeformForm />

      {/* <ContactForm /> */}

      <hr className="border-neutral-300 dark:border-neutral-700" />

      <p className="text-center">Prefer to have a chat instead?</p>

      <div className="flex justify-center">
        <Button href={"tel:+31618058625"} text={"Call me"} iClassName={"ri-phone-line ml-1"} />
      </div>
    </main>
  );
};

export default Contact;
