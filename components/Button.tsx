type ButtonProps = {
  onClick?: () => void;
  href?: string;
  text: string;
  iClassName?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <a
      className="flex cursor-pointer items-center rounded border border-neutral-300 bg-neutral-200 px-4 py-2 duration-300 dark:border-neutral-700 dark:bg-neutral-800 lg:hover:bg-neutral-300 lg:dark:hover:bg-neutral-700"
      onClick={props.onClick}
      href={props.href}
      target="_blank"
      rel="noreferrer">
      {props.text}
      <i className={props.iClassName}></i>
    </a>
  );
};

export default Button;
