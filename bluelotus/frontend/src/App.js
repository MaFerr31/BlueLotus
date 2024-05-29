import React from "react";
import Nav from "./Components/Nav/Nav";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";
import Footer from "./Components/Footer/Footer";
import Acomodacao from "./Components/Acomodação/Acomodacao";
import Imagens from "./Components/Seq-Imagens/Imagens";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPages from "./AllPages";



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
                </Routes>
                <Imagens/>
                <Footer/>
                </BrowserRouter>
                
            </div>
        </div>
    )

}



export default App;