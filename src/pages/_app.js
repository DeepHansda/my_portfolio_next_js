import AppContextProvider from "@/Context/AppContext";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </AppContextProvider>
  );
}
