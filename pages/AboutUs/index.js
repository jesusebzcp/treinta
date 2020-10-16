import React from "react";
import Lottie from "react-lottie";
import animation from "../../public/static/img/about.json";

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />

      <div className="contP">
        <h2 className="titlePrimary">
          Treinta - ¡Aplicación financiera gratuita! -Nosotros
        </h2>
        <p className="pGloblal">
          Gestiona las transacciones de tu negocio, conoce la utilidad de tu
          negocio en cualquier momento y registra y cobra deudas 3 veces más
          eficazmente. Ayuda a tu negocio a crecer más con{" "}
          <span className="treinta">Treinta</span>, la aplicación financiera
          gratuita. <span className="treinta">¡Treinta</span> es gratis, seguro
          y fácil de usar!
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
