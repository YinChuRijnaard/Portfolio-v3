// Component imports
import Button from "../components/Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <label className="p-2" htmlFor="name">
        Name
      </label>
      <input
        className="rounded bg-neutral-200 p-2 caret-red-600 selection:bg-red-500/50 dark:bg-neutral-800"
        type="text"
        placeholder="Your name"
        required
      />
      <br />
      <label className="p-2" htmlFor="email">
        Email address
      </label>
      <input
        className="rounded bg-neutral-200 p-2 caret-red-600 selection:bg-red-500/50 dark:bg-neutral-800"
        type="email"
        placeholder="Your email address"
        required
      />
      <br />
      <label className="p-2" htmlFor="message">
        Message
      </label>
      <textarea
        className="rounded bg-neutral-200 p-2 caret-red-600 selection:bg-red-500/50 dark:bg-neutral-800"
        placeholder="Your message"
        required
      />
      <br />
      <div className="flex justify-start">
        <Button text={"Submit"} />
      </div>
    </form>
  );
};

export default ContactForm;
