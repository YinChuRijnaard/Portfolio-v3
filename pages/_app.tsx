// Framework imports
import type { AppProps } from "next/app";

// Dependency imports
import "remixicon/fonts/remixicon.css";

// Type + Interface imports

// Context imports

// Util imports

// Component imports
import Layout from "../components/layout";

// Asset imports

// Style imports
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
