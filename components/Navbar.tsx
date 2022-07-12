// Framework imports
import { useState } from "react";
import Link from "next/link";

// Dependency imports
import { Squeeze as Hamburger } from "hamburger-react";

// Component imports
import Menu from "../components/Menu";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  const handleCloseViaLink = () => setOpen(!open);

  const handleCloseViaLogo = () => setOpen(false);

  return (
    <>
      <nav className="mx-4 flex items-center justify-between md:mx-32 lg:mx-64">
        <Link href="/">
          <a onClick={handleCloseViaLogo}>
            <Logo />
          </a>
        </Link>

        <button onClick={handleOpen}>
          <Hamburger toggled={open} toggle={setOpen} distance="lg" color="#dc2626" label="Show menu" rounded />
          {/* color: red-500 */}
        </button>
      </nav>

      {open ? <Menu handleCloseViaLink={handleCloseViaLink} /> : null}
    </>
  );
};

export default Navbar;
