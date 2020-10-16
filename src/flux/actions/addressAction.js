import { ADD_ADDRESS_ERROR, LOADING, GET_ADDRESS } from "../types";
import { db } from "../../config/firebase";

export function setLoading(data) {
  return async (dispatch) => {
    dispatch(activeLoading(data));
  };
}

export function addAddress(data) {
  return async (dispatch) => {
    try {
      setLoading(true);
      const ref = db.collection("address").doc(data.id);

      await ref.set(data);
      await getAddress();
      setLoading(false);
    } catch (error) {
      dispatch(handleError(true));
      console.log("error create user", error.message);
    }
  };
}
export function getAddress() {
  return async (dispatch) => {
    try {
      setLoading(true);
      const ref = await db.collection("address").get();

      const data = ref.docs.map((doc) => {
        const item = doc.data();
        return {
          ...item,
          id: doc.id,
        };
      });

      dispatch(getAddressReducer(data));
      setLoading(false);
    } catch (error) {
      dispatch(handleError(true));
      console.log("error create user", error.message);
    }
  };
}

const handleError = (status) => ({
  type: ADD_ADDRESS_ERROR,
  payload: status,
});
const activeLoading = (loading) => ({
  type: LOADING,
  payload: loading,
});
const getAddressReducer = (data) => ({
  type: GET_ADDRESS,
  payload: data,
});
