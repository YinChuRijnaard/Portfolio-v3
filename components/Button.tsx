type ButtonProps = {
  href: string;
  text: string;
  iClassName?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <a
      className="flex items-center rounded border border-neutral-300 bg-neutral-200 px-4 py-2 duration-300 hover:bg-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600"
      href={props.href}
      target="_blank"
      rel="noreferrer">
      {props.text}
      <i className={props.iClassName}></i>
    </a>
  );
};

export default Button;
