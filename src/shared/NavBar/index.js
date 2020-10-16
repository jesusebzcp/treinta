import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { exitUser } from "../../flux/actions/auhtActions";

const NavBar = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const user = useSelector((state) => state.auhtReducer.user);
  const exitDispatch = () => dispatch(exitUser());

  const handleExitUser = () => {
    swal({
      title: "Oye!",
      text: "Realmente deseas Cerrar Sesión",
      icon: "warning",
      dangerMode: true,
      buttons: ["No", "Si, salir"],
    }).then((userExit) => {
      if (userExit) {
        swal("Adios, hasta la proxima", {
          icon: "success",
        });

        exitDispatch();
      } else {
        swal("Gracias por quedarte");
      }
    });
  };
  return (
    <nav className="contNavBar">
      <a className="contLogo">
        <img
          src="/static/img/logo.png"
          onClick={() => router.push("/")}
          alt="treinta"
        />
      </a>

      <div className="contLinks">
        <a onClick={() => router.push("/")}>Home</a>
        <a onClick={() => router.push("/AboutUs")}>Nosotros</a>

        <div className="btnsNav">
          {!user ? (
            <a className="btnPrimary" onClick={() => router.push("/Login")}>
              Ingresar
            </a>
          ) : (
            <a className="btnPrimary" onClick={() => handleExitUser()}>
              Cerrar sesión
            </a>
          )}
          {!user ? (
            <a
              href={
                "https://play.google.com/store/apps/details?id=com.treintaapp"
              }
              className="btnSecundary"
              rel="noopener noreferrer"
              target="_blank"
            >
              Descargarla Gratis
            </a>
          ) : (
            <a
              className="btnSecundary"
              onClick={() => router.push("/AddLocal")}
            >
              Agregar negocio
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
