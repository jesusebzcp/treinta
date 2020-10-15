import {
  REGISTRAR_USUARIO_NUEVO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGIN_USUARIO_NUEVO,
  LOGIN_USUARIO_EXITO,
  LOGIN_USUARIO_ERROR,
} from "../types";
import { db } from "../../firebase";

//Registrar usuario
export function registrarUsuario(usuario) {
  return async (dispatch) => {
    dispatch(crearUsuario());

    try {
      await db.collection("usersCliente").doc(usuario.uid).set({
        user: { usuario },
      });
      dispatch(registrarUsuarioExito(usuario));
    } catch (error) {
      dispatch(registrarUsuarioError(true));
      console.log("error registrar usuario", error);
    }
  };
}

//crear usuario
const crearUsuario = () => ({
  type: REGISTRAR_USUARIO_NUEVO,
});
const registrarUsuarioExito = (usuario) => ({
  type: REGISTRAR_USUARIO_EXITO,
  payload: usuario,
});
const registrarUsuarioError = (estado) => ({
  type: REGISTRAR_USUARIO_ERROR,
  payload: estado,
});

//Verificar usuario
export function iniciarSesion(usuario) {
  return async (dispatch) => {
    dispatch(iniciarUsuario());
    try {
      const { uid } = usuario;
      let resultado = await db.collection("usersCliente").doc(uid);
      resultado
        .get()
        .then((doc) => {
          if (!doc.exists) {
            console.log("No such document!");
            console.log("error documento no iterable", err);
            dispatch(loginUsuarioError(true));
          } else {
            console.log("Document data:", doc.data());
            const { usuario } = doc.data().user;
            console.log("resultado", usuario);
            dispatch(loginUsuarioExito(usuario));
          }
        })
        .catch((err) => {
          console.log("paso algo", err);
          dispatch(loginUsuarioError(true));
        });
    } catch (error) {
      console.log("error database login", error);
      dispatch(loginUsuarioError(true));
    }
  };
}
const iniciarUsuario = () => ({
  type: LOGIN_USUARIO_NUEVO,
});
const loginUsuarioExito = (login) => ({
  type: LOGIN_USUARIO_EXITO,
  payload: login,
});
const loginUsuarioError = (estado) => ({
  type: LOGIN_USUARIO_ERROR,
  payload: estado,
});
