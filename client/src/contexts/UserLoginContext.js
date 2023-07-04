import { createContext, useState, useContext } from "react";
import LoginFormik from "../components/LoginFormik/LoginFormik";

const UserLoginContext = createContext({
  usuario: {},
  login: () => {}
});

export function UserLoginContextProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(user, e) {
    e.preventDefault();
    if (user.email === "pepe@mail.com" && user.password === "1234") {
      setUsuario(usuario);
    }
  }

  const value = {
    usuario,
    login
  };

  return (
    <UserLoginContext.Provider value={value}>
      {children}
    </UserLoginContext.Provider>
  );
}

export function useUserLoginContext() {
  return useContext(UserLoginContext);
}
