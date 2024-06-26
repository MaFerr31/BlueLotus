import React from "react";
import Nav from "./Components/Nav/Nav";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";
import Acomodacao from "./Components/Acomodação/Acomodacao";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPages from "./AllPages";
import Cadastro from "./Components/Cadastro/Cadastro";
import Perfil from "./Components/Perfil/Perfil";



const App=()=>{

    return (
        <div className="App">
        
            <div>
                <GlobalStyle/>
                <BrowserRouter>
                <Nav/>
                <Routes>
                <Route exact path="/" element={<AllPages/>} />
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/sobre" element={<Sobre/>}/>
                <Route exact path="/acomodacoes" element={<Acomodacao/>}/>
                <Route exact path="/cadastro" element={<Cadastro/>}/>
                <Route exact path="/perfil" element={<Perfil/>}/>
                </Routes>
                </BrowserRouter>
                
            </div>
        </div>
    )

}



export default App;