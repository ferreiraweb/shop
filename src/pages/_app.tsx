import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";
import logo from "../assets/logo.svg";
import { AppContainer, Header } from "@/styles/pages/app";

import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Header>
        <Image src={logo.src} alt="logo" width={100} height={100} />
      </Header>
      <Component {...pageProps} />
    </AppContainer>
  );
}
