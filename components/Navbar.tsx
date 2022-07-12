// Framework imports
import { useState } from "react";

// Dependency imports
import { Squeeze as Hamburger } from "hamburger-react";

// Component imports
import Menu from "../components/Menu";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <nav className="mx-4 flex items-center justify-between md:mx-32 lg:mx-64">
        <Logo />

        <button onClick={handleOpen}>
          <Hamburger distance="lg" color="#dc2626" label="Show menu" rounded />
          {/* color: red-500 */}
        </button>
      </nav>

      {open ? <Menu /> : null}
    </>
  );
};

export default Navbar;
