import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface IReactNode {
  children: ReactNode;
}

const Logout = ({ children }: IReactNode) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Logout;
