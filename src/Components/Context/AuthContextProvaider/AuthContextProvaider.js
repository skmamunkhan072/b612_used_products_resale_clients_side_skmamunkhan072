import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firbase/Firbase.config";

// export Auth context
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvaider = new GoogleAuthProvider();

const AuthContextProvaider = ({ children }) => {
  // state start
  const [user, setUser] = useState(null);
  const [dataBaseUser, setDataBaseUser] = useState({});
  //   console.log(user);
  const [loading, setloading] = useState(true);

  // state end

  // user create email and password
  const createUserEmailPassword = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  //user Login function
  const loginUser = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login function
  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvaider);
  };

  // password forgot function
  const forgotPassword = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // user Log Out function
  const logOut = () => {
    setloading(true);

    return signOut(auth);
  };

  // user tack
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user apice");
      setUser(currentUser);
      setloading(false);
    });
    return () => unsubscribe();
  }, []);

  // auth info object
  const authInfo = {
    createUserEmailPassword,
    updateUser,
    user,
    logOut,
    loginUser,
    forgotPassword,
    loading,
    setloading,
    dataBaseUser,
    setDataBaseUser,
    GoogleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvaider;
