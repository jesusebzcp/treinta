import {
  REGISTRAR_USUARIO_NUEVO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  LOGIN_USUARIO_NUEVO,
  LOGIN_USUARIO_EXITO,
  LOGIN_USUARIO_ERROR,
} from "../../types";
//Estado
const initialState = {
  usuario: null,
  error: null,
  loading: false,
  usuarioData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRAR_USUARIO_NUEVO:
    case LOGIN_USUARIO_NUEVO:
      return {
        ...state,
        loading: true,
      };
    case REGISTRAR_USUARIO_EXITO:
    case LOGIN_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        usuario: true,
        usuarioData: [...state.usuarioData, action.payload],
      };
    case REGISTRAR_USUARIO_ERROR:
    case LOGIN_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
