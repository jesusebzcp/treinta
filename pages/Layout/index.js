import React from "react";
import Head from "next/head";
import NavBar from "../../src/shared/NavBar";

const Layout = (props) => {
  return (
    <>
      <Head>
        <html lang="es" />
        <title>Treinta</title>
        <link rel="stylesheet" href="/static/css/app.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
          crossorigin="anonymous"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:layout" content="layout" key="layout" />
      </Head>
      <NavBar />
      <div className="containerLayout">
        <main>{props.children}</main>
      </div>
    </>
  );
};
export default Layout;
