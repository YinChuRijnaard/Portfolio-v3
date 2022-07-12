// Framework imports
import Link from "next/link";

const Menu = () => {
  return (
    <main className="absolute z-10 h-screen w-screen rounded bg-neutral-100 p-32 font-serif dark:bg-neutral-900">
      <ul className="space-y-16 text-center text-4xl">
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Menu;
