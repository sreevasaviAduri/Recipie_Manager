import { firebase, googleAuthProvider } from "../firebase/firebase";

export const authUserLogIn = uid => ({
  type: "USER_LOGIN",
  uid
});

export const logIn = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const authUserLogOut = () => ({
  type: "USER_LOGOUT"
});

export const logOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
