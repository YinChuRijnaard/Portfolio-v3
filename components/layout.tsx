// Framework imports

// Dependency imports

// Type + Interface imports

// Context imports

// Util imports

// Component imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Style imports

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
