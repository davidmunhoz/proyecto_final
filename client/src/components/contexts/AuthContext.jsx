import { useContext, useState, createContext } from "react";
import {useNavigate} from "react-router-dom"

const AuthContext = createContext({
  fetchLogin: () => {},
  logout: () => {},
  userEmpresario: null,
  userTrabajador: null,
  errorMessage: "",
});

export default function AuthContextProvider({ children }) {
  const [userTrabajador, setUserTrabajador] = useState(null);
  const [userEmpresario, setUserEmpresario] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(userEmpresario)
  const navigate = useNavigate()

  async function fetchLogin(values){
    try{
   const response = await fetch("http://localhost:3001/user/loginTrabajador",{
     method: "POST",
     body: JSON.stringify(values),
     headers: { "Content-Type": "application/json" },
   })
     const data = await response.json()
     if(response.status === 200){
      console.log(data)
      setUserTrabajador(data.user[0])
      navigate("/")
     }else{
         setErrorMessage(true)
       }
   }catch(error){
     console.log(error)
   }
  
   try{
    const response = await fetch("http://localhost:3001/user/loginEmpresario",{
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      const data = await response.json()
      console.log(data)
      if(response.status === 200){
       setUserEmpresario(data.user[0])
       navigate("/perfil2")
      }else{
          setErrorMessage(true)
        }
    }catch(error){
      console.log(error)
    }
  
  }


  function logout() {
    setUserTrabajador(null);
    setUserEmpresario(null);
    navigate("/")
  }

  const value = {
    userTrabajador,
    userEmpresario,
    errorMessage,
    fetchLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}