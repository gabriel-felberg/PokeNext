import Logout from "@/components/logout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Logout>
      <Component {...pageProps} />
    </Logout>
  );
}
