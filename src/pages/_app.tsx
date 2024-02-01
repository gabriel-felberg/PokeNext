import Logout from "@/components/logout";
import { PokemonProvider } from "@/context/pokemon";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <Logout>
        <Component {...pageProps} />
      </Logout>
    </PokemonProvider>
  );
}
