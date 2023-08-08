import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Empleo from "./views/Empleo/Empleo";
import PerfilUsuario from "./views/PerfilUsuario/PerfilUsuario";
import IndexLayout from "./layout/IndexLayout";
import RegisterRoute from "./views/Register/RegisterRoute/RegisterRoute";
import AuthContextProvider from "./components/contexts/AuthContext";
import RegisterTrabajador from "./views/Register/RegisterTrabajador/RegisterTrabajador";
import RegisterEmpresario from "./views/Register/RegisterEmpresario/RegisterEmpresario";
// import PublicRoute from "./components/router/PublicRoute";
// import PrivateRoute from "./components/router/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<IndexLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterRoute />} />
            <Route path="empleo" element={<Empleo />} />
            <Route path="perfil" element={<PerfilUsuario />} />
            <Route path="register1" element={<RegisterEmpresario/>} />
            <Route path="register2" element={<RegisterTrabajador/>} />
          </Route>
          <Route path="perfil" element={<PerfilUsuario />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
