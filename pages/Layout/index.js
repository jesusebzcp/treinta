import React, { useEffect, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import NavBar from "../../src/shared/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { observerUser } from "../../src/flux/actions/auhtActions";
import { auth } from "../../src/config/firebase";
import { getAddress } from "../../src/flux/actions/addressAction";
import Loading from "../../src/components/Loading";

const Layout = (props) => {
  const dispatch = useDispatch();
  const activeObserver = (uid) => dispatch(observerUser(uid));
  const activeGetAddress = () => dispatch(getAddress());
  const loadingAddress = useSelector((state) => state.addressReducer.loading);
  const loadingAuth = useSelector((state) => state.auhtReducer.loading);

  const [loading, setloading] = useState(true);

  function onAuthStateChanged(user) {
    if (user) {
      activeObserver(user.uid);
    }
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    activeGetAddress();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <html lang="es" />
        <title>Treinta</title>
        <link rel="stylesheet" href="/static/css/app.css" />
        <link
          rel="icon"
          type="image/png"
          href="https://www.google.com/s2/favicons?domain=https://www.treinta.co/"
        />
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

        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta
          name="description"
          content="Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.
Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar!"
        />
        <meta
          name="keywords"
          content="treinta finanzas, aumentar ingresos, manejar ingresos"
        />
      </Head>
      {loadingAddress || loadingAuth || loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className="containerLayout">
            <main>{props.children}</main>
          </div>
        </>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
