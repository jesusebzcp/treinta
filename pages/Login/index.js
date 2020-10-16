import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import MyInput from "../../src/components/MyInput";
import animation from "../../public/static/img/login.json";
import ButtonPrimary from "../../src/components/ButtonPrimary";
import ButtonUnderline from "../../src/components/ButtonUnderline";

import { loginUser } from "../../src/flux/actions/auhtActions";
import swal from "sweetalert";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.auhtReducer.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const loginDispatch = (cred) => dispatch(loginUser(cred));

  const handleLogin = () => {
    if (email === "" || password === "") {
      swal({
        title: "Lo siento",
        text: "todos los campos son necesarios",
        icon: "warning",
      });
    } else {
      loginDispatch({ email, password });
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

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

        <ButtonPrimary text={"Iniciar sesión"} action={handleLogin} />

        <ButtonUnderline
          title={"Al iniciar sesión"}
          text={"Acepto términos y condiciones"}
        />
      </div>
    </div>
  );
};
export default Login;
