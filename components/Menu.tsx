// Framework imports
import Link from "next/link";

// Dependency imports
import { nanoid } from "nanoid";

// Data imports
import { routes } from "../data/routes";

type MenuProps = {
  handleCloseViaLink: () => void;
};

const Menu = (props: MenuProps) => {
  const routesMapped = routes.map((route) => {
    return (
      <li key={nanoid()} className="decoration-neutral-300 duration-300 dark:decoration-neutral-700 lg:hover:underline">
        <Link href={route.route}>
          <a onClick={props.handleCloseViaLink}>{route.text}</a>
        </Link>
      </li>
    );
  });
  return (
    <main className="absolute z-10 h-screen w-screen rounded bg-neutral-100 p-32 font-serif dark:bg-neutral-900">
      <ul className="space-y-16 text-center text-4xl">{routesMapped}</ul>
    </main>
  );
};

export default Menu;
