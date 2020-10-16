import { ADD_ADDRESS_ERROR, GET_ADDRESS, LOADING } from "../../types";

//State
const initialState = {
  addressLocal: [],
  error: false,
  loading: false,
  errorMessage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case ADD_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case GET_ADDRESS:
      return {
        ...state,
        addressLocal: action.payload,
      };

    default:
      return state;
  }
}
