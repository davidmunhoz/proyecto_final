import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Empleo from "./views/Empleo/Empleo";
import PerfilUsuario from "./views/PerfilUsuario/PerfilUsuario";
import IndexLayout from "./layout/IndexLayout";
import RegisterRoute from "./components/RegisterRoute/RegisterRoute";
import AuthContextProvider from "./components/contexts/AuthContext";
// import RegisterEmpresario from "./views/Register/RegisterEmpresario";
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
            {/* <Route path="registerEmpresario" element={<RegisterEmpresario/>} /> */}
          </Route>
          <Route path="perfil" element={<PerfilUsuario />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;
