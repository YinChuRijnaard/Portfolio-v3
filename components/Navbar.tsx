// Dependency imports
import { Squeeze as Hamburger } from "hamburger-react";

// Component imports
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2">
      <Logo />

      <Hamburger distance="lg" color="#dc2626" label="Show menu" rounded />
      {/* color: red-500 */}
    </nav>
  );
};

export default Navbar;
