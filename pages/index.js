import React from "react";
import { useSelector } from "react-redux";
import Header from "../src/components/Header";
import Map from "../src/components/Map";

export default function Home() {
  const pins = useSelector((state) => state.addressReducer.addressLocal);

  return (
    <div>
      <Header />
      <div className="contHome">
        <div className="contP">
          <h2 className="titlePrimary">
            Treinta - ¡Aplicación financiera gratuita!
          </h2>
          <p className="pGloblal">
            Gestiona las transacciones de tu negocio, conoce la utilidad de tu
            negocio en cualquier momento y registra y cobra deudas 3 veces más
            eficazmente. Ayuda a tu negocio a crecer más con{" "}
            <span className="treinta">Treinta</span>, la aplicación financiera
            gratuita. <span className="treinta">¡Treinta</span> es gratis,
            seguro y fácil de usar!
          </p>
        </div>
        <div className="contP">
          <h3 className="titleSecundary">
            Miles de micro y pequeñas empresas confían en Treinta
          </h3>
          <p className="pGloblal">
            Encuentras quien usa <span className="treinta">Treinta</span> en tu
            ciudad mas cercana
          </p>
        </div>

        <Map pins={pins} />
      </div>
    </div>
  );
}
