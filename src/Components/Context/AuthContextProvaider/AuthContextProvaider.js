import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firbase/Firbase.config";

// export Auth context
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthContextProvaider = ({ children }) => {
  //user state
  const [user, setUser] = useState(null);
  //   console.log(user);
  // Loding state
  const [loading, setloading] = useState(true);

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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvaider;