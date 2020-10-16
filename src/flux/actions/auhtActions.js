import { REGISTER_ERROR_USER, OBSERVER_USER, LOADING } from "../types";
import { auth, db } from "../../config/firebase";

export function createUser(user) {
  const { authUser, insertDb } = user;

  return async (dispatch) => {
    try {
      setLoading(true);

      const res = await auth.createUserWithEmailAndPassword(
        authUser.email,
        authUser.password
      );

      const ref = db.collection("userTreinta").doc(res.user.uid);
      const userDb = Object.assign(insertDb, { uid: res.user.uid });

      ref.set(userDb);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      dispatch(handleError(true));
      console.log("error create user", error.message);
    }
  };
}
export function observerUser(uid) {
  return async (dispatch) => {
    try {
      let ref = db.collection("userTreinta").doc(uid);
      ref.onSnapshot((result) => {
        if (result.exists) {
          const user = result.data();
          dispatch(activeObserverUser(user));
        }
      });
    } catch (error) {
      dispatch(handleError(true));
      console.log("error create user", error.message);
    }
  };
}
export function loginUser(cred) {
  return async (dispatch) => {
    try {
      setLoading(true);

      await auth.signInWithEmailAndPassword(cred.email, cred.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      dispatch(handleError(true));
      console.log("error create user", error.message);
    }
  };
}
export function exitUser() {
  return async (dispatch) => {
    try {
      setLoading(true);
      await auth.signOut();
      dispatch(activeObserverUser(null));
      setLoading(false);
    } catch (error) {
      dispatch(handleError(true));
      setLoading(false);

      console.log("error create user", error.message);
    }
  };
}

export function setLoading(data) {
  return async (dispatch) => {
    dispatch(activeLoading(data));
  };
}

//Create user

const handleError = (status) => ({
  type: REGISTER_ERROR_USER,
  payload: status,
});
const activeObserverUser = (user) => ({
  type: OBSERVER_USER,
  payload: user,
});
const activeLoading = (loading) => ({
  type: LOADING,
  payload: loading,
});
