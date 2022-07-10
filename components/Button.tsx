type ButtonProps = {
  href: string;
  text: string;
  iClassName?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <a
      className="flex items-center bg-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600 duration-300 dark:bg-neutral-700 border border-neutral-300 rounded dark:border-neutral-600 px-4 py-2"
      href={props.href}
      target="_blank"
      rel="noreferrer">
      {props.text}
      <i className={props.iClassName}></i>
    </a>
  );
};

export default Button;
