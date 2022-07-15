// Framework imports
import React, { useRef, useState } from "react";

// Dependency imports
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  //   const formRef = useRef<HTMLFormElement>(null);
  // Issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572

  const handleChange = (e: any) => {
    // Change type of e
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  //   const handleSubmit = (e: any) => {
  //     // Change type of e
  //     e.preventDefault();

  //     const SERVICE_ID: string = "service_5h9j6co";
  //     const TEMPLATE_ID: string = "template_2qs3hn8";
  //     const PUBLIC_KEY: string = "user_vHKsLdY3EWtkm82WyFJLq";

  //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.error(error.text);
  //       },
  //     );
  //   };

  return (
    <form className="flex flex-col">
      <label className="p-2" htmlFor="name">
        Name
      </label>
      <input
        className="rounded bg-neutral-200 p-2 caret-red-600 selection:bg-red-500/50 dark:bg-neutral-800"
        // onChange={handleChange}
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <br />
      <label className="p-2" htmlFor="email">
        Email address
      </label>
      <input
        className="rounded bg-neutral-200 p-2 caret-red-600 selection:bg-red-500/50 dark:bg-neutral-800"
        // onChange={handleChange}
        type="email"
        name="email"
        placeholder="Your email address"
        required
      />
      <br />
      <label className="p-2" htmlFor="message">
        Message
      </label>
      <textarea
        className="rounded bg-neutral-200 p-2 caret-red-600 selection:bg-red-500/50 dark:bg-neutral-800"
        // onChange={handleChange}
        name="message"
        placeholder="Your message"
        required
      />
      <br />
      <div className="flex justify-start">
        <button
          className="flex cursor-pointer items-center rounded border border-neutral-300 bg-neutral-200 px-4 py-2 duration-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 lg:hover:bg-neutral-300 lg:dark:hover:bg-neutral-700"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
