import { useContext, useState, createContext } from "react";
import {useNavigate} from "react-router-dom"

const AuthContext = createContext({
  fetchLogin: () => {},
  logout: () => {},
  user: null,
  errorMessage: "",
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate()

  //Aqui el useFetch --> const {response,error} = useFetch(url,options)

  async function fetchLogin(values){
    try{
   const response = await fetch("http://localhost:3001/user/login",{
     method: "POST",
     body: JSON.stringify(values),
     headers: { "Content-Type": "application/json" },
   })
     const data = await response.json()
     console.log(data)
     if(response.status === 200){
      setUser(data)
      navigate("/")
     }else{
         setErrorMessage(true)
       }
   }catch(error){
     console.log(error)
   }}


  function logout() {
    setUser(null);
    navigate("/")
  }

  const value = {
    user,
    errorMessage,
    fetchLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}