import "swiper/css/bundle";
import "../styles/globals.scss";
import LayoutWrapper from "../components/layout-wrapper";
import { SmootherProvider } from "../context/SmootherContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={["light", "dark"]}
      attribute="class"
    >
      <SmootherProvider>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </SmootherProvider>
    </ThemeProvider>
  );
}
