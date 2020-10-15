import React, { useState } from "react";
import Lottie from "react-lottie";
import MyInput from "../../src/components/MyInput";
import animation from "../../src/animation/login.json";
import ButtonPrimary from "../../src/components/ButtonPrimary";
import ButtonUnderline from "../../src/components/ButtonUnderline";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email", email);
  console.log("password", password);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="containerLogin">
      <Lottie options={defaultOptions} height={200} width={200} />
      <h2 className="">
        Inicia sesión para Obtener los beneficios de{" "}
        <span className="treinta">Treinta</span>.
      </h2>

      <div className="cardLogin">
        <MyInput
          placeholder={"Correo@correo.com"}
          type={"email"}
          labelName={"Ingresa tu Correo"}
          id={"email"}
          htmlFor={"email"}
          setValue={setEmail}
        />
        <MyInput
          placeholder={"Tu contraseña"}
          type={"password"}
          labelName={"Ingresa tu contraseña"}
          id={"password"}
          htmlFor={"password"}
          setValue={setPassword}
        />

        <ButtonPrimary text={"Iniciar sesión"} />

        <ButtonUnderline
          title={"No tengo cuenta"}
          text={" Quiero registrarme"}
        />
      </div>
    </div>
  );
};
export default Login;
