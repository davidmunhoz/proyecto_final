import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Empleo from "./views/Empleo/Empleo";
import PerfilUsuario from "./views/PerfilUsuario/PerfilUsuario";
import IndexLayout from "./layout/IndexLayout";
// import PublicRoute from "./components/router/PublicRoute";
// import PrivateRoute from "./components/router/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="empleo" element={<Empleo />} />
          <Route path="perfil" element={<PerfilUsuario />} />
        </Route>
          <Route path="perfil" element={<PerfilUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
