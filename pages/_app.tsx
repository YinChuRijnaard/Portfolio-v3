// Framework imports
import type { AppProps } from "next/app";

// Dependency imports
import { ThemeProvider } from "next-themes";
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
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
