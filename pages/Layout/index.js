import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
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
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        ></link>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:layout" content="layout" key="layout" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <NavBar />
      <div className="containerLayout">
        <main>{props.children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
