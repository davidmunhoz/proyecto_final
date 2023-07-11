import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import  Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import Header from './components/Header/Header';
import Empleo from './components/Empleo/Empleo';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <BrowserRouter >
    <Header/>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/empleo' element={<Empleo/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}
export default App;