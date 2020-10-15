import React from "react";

import Link from "next/link";
import Router from "next/router";

const NavBar = () => {
  return (
    <nav className="contNavBar">
      <a className="contLogo">
        <img src="/static/img/logo.png" />
      </a>

      <div className="contLinks">
        <a onClick={() => Router.push("/")}>Home</a>
        <a onClick={() => Router.push("/AboutUs")}>Nosotros</a>
        <a onClick={() => Router.push("/Profile")}>Perfil</a>
        <div className="btnsNav">
          <a className="btnPrimary" onClick={() => Router.push("/Login")}>
            Ingresar
          </a>
          <a className="btnSecundary">Descargarla Gratis</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
