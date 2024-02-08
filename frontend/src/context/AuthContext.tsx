'use client'
import React, { ReactNode, useState, useEffect, useContext, createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);
export const AuthContext = createContext({ user: null });
export const useAuthContext = () => useContext(AuthContext);

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : props.children}
    </AuthContext.Provider>
  );
};
