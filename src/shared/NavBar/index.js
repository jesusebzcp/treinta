import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="contNavBar">
      <a className="contLogo">
        <img src="/static/img/logo.png" />
      </a>

      <div className="contLinks">
        <a onClick={() => router.push("/")}>Home</a>
        <a onClick={() => router.push("/AboutUs")}>Nosotros</a>
        <a onClick={() => router.push("/Profile")}>Perfil</a>
        <div className="btnsNav">
          <a className="btnPrimary" onClick={() => router.push("/Login")}>
            Ingresar
          </a>
          <a className="btnSecundary">Descargarla Gratis</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
