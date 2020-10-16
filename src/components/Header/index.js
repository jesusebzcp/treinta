import React, { useState } from "react";
import moment from "moment";
import Lottie from "react-lottie";

import ButtonPrimary from "../ButtonPrimary";
import MyInput from "../MyInput";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../flux/actions/auhtActions";
import animation from "../../../public/static/img/home.json";
import util from "../../util";
import swal from "sweetalert";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const createUserDispatch = (newUser) => dispatch(createUser(newUser));
  const user = useSelector((state) => state.auhtReducer.user);

  const handleLogin = () => {
    if (email === "" || password === "" || firstName === "") {
      swal({
        title: "Lo siento",
        text: "todos los campos son necesarios",
        icon: "warning",
      });
    } else {
      const insertDb = {
        email,
        firstName,
        create: moment().format("LLLL"),
        platform: "web",
      };
      const authUser = {
        email,
        password,
      };
      createUserDispatch({
        insertDb,
        authUser,
      });
    }
  };

  return (
    <>
      <div className="contHeader">
        <div className="headerImg">
          <img src="/static/img/header.png" />
        </div>
        <div>
          {user ? (
            <div>
              <h2 className="titlePrimary">
                Bienvenido,{" "}
                <span className="treinta">
                  {util.capitalize(user.firstName)}
                </span>
              </h2>
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
          ) : (
            <div className="cardRegistre">
              <h2>
                Registrarte para obtener los beneficios de{" "}
                <span className="treinta">Treinta</span>.
              </h2>
              <MyInput
                placeholder={"Jhoe Doe"}
                type={"text"}
                labelName={"Ingresa tu Nombre"}
                id={"text"}
                htmlFor={"text"}
                setValue={setFirstName}
              />
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

              <ButtonPrimary text={"Registrarme"} action={handleLogin} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
