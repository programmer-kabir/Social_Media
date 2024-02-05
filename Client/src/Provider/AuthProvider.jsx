import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
  } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) =>{
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    console.log(user);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          //  Get and Set token
        
          setLoading(false);
        });
        return () => {
          return unsubscribe;
        };
      }, []);
    //   Create New User
    const newRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const authInfo = {
        user,
        setLoading,
        loading,
        newRegister,
        
      };
      return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      );
};
export default AuthProvider;
