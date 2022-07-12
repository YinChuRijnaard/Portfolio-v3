// Component imports
import Navbar from "../components/Navbar";
import Flag from "../components/Flag";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Flag />
    </>
  );
};

export default Layout;
