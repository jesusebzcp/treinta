import React, { useState } from "react";
import Lottie from "react-lottie";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

import util from "../../src/util";
import MyInput from "../../src/components/MyInput";
import ButtonPrimary from "../../src/components/ButtonPrimary";
import animation from "../../public/static/img/location.json";
import { addAddress } from "../../src/flux/actions/addressAction";

const AddLocal = () => {
  //Config
  Geocode.setLanguage("es");
  Geocode.setRegion("co");
  Geocode.enableDebug();
  Geocode.setApiKey(process.env.APIMAP);

  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const [name, setName] = useState("");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const addAddressDispatch = (data) => dispatch(addAddress(data));

  const addLocal = async () => {
    if (name === "" || !value) {
      swal({
        title: "Ups",
        text: "todos los campos son necesarios",
        icon: "warning",
      });
    } else {
      console.log(value);
      Geocode.fromAddress(value?.label).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const data = {
            coordinate: {
              lat,
              lng,
            },
            name,
            id: util.create_UUID(),
          };
          addAddressDispatch(data);
          swal({
            title: "Exelente",
            text: "Se agrego con exito",
            icon: "success",
          });
          setValue(null);
          setName("");
        },

        (error) => {
          console.error(error);
          return error;
        }
      );
    }
  };
  return (
    <div className="contAddLocal">
      <div className="cardSearch">
        <MyInput
          placeholder={"Escribe la dirección, Ejemplo (Carrera 98 20-10)"}
          type={"text"}
          labelName={"Agrega tu dirección"}
          id={"text"}
          htmlFor={"text"}
          setValue={setValue}
        />

        <MyInput
          placeholder={" Negocio de licor"}
          type={"text"}
          labelName={"Nombre de tu negocio"}
          id={"text"}
          htmlFor={"text"}
          setValue={setName}
        />
        <ButtonPrimary text={"Agregar negocio"} action={addLocal} />
      </div>
      <div className="lottieMap">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default AddLocal;
