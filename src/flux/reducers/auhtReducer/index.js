import { REGISTER_ERROR_USER, OBSERVER_USER, LOADING } from "../../types";

//State
const initialState = {
  user: null,
  error: false,
  loading: false,
  errorMessage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_ERROR_USER:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    case OBSERVER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
