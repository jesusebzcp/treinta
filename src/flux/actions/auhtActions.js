import { REGISTER_ERROR_USER, OBSERVER_USER, LOADING } from "../types";
import { auth, db } from "../../config/firebase";
import swal from "sweetalert";

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

      setLoading(false, dispatch);
      console.log("error from login==>", error.message);
      if (
        error.message.includes(
          "There is no user record corresponding to this identifier. The user may have been deleted."
        )
      ) {
        const message = "Verifica tu correo o contraseña";

        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      } else if (
        error.message.includes(
          "The password is invalid or the user does not have a password."
        )
      ) {
        const message = "Verifica tu contraseña";
        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      } else if (
        error.message.includes(
          "The email address is already in use by another account."
        )
      ) {
        const message = "Este correo ya esta en uso por otra persona";
        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      } else if (
        error.message.includes("Password should be at least 6 characters")
      ) {
        const message = "La contraseña debe ser mayor a 6 caracteres";
        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      } else if (
        error.message.includes("The email address is badly formatted.")
      ) {
        const message =
          "El correo es invalido, verifique que este bien escrito";
        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      }
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
      setLoading(false);

      setLoading(false, dispatch);
      console.log("error from login==>", error.message);
      if (
        error.message.includes(
          "There is no user record corresponding to this identifier. The user may have been deleted."
        )
      ) {
        const message = "Verifica tu correo o contraseña";

        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      } else if (
        error.message.includes(
          "The password is invalid or the user does not have a password."
        )
      ) {
        const message = "Verifica tu contraseña";
        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      } else if (
        error.message.includes(
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        )
      ) {
        const message =
          "El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde.";
        swal({
          title: "Lo siento",
          text: message,
          icon: "warning",
        });
      }
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
