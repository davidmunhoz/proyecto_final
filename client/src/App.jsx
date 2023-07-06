import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import  Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import Header from './components/Header/Header';
import Empleo from './components/Empleo/Empleo';
function App() {
  return (
    <BrowserRouter >
    <Header/>
    <br/> <br/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/empleo' element={<Empleo/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;