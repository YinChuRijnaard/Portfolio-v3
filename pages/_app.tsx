// Framework imports
import type { AppProps } from "next/app";

// Dependency imports
import { ThemeProvider } from "next-themes";
import "remixicon/fonts/remixicon.css";

// Component imports
import Layout from "../components/layout";

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

// Framework imports
// Dependency imports
// Type + Interface imports
// Context + Store imports
// Hook imports
// Util imports
// Data imports
// Component imports
// Asset imports
// Style imports
