import React from "react";
import Nav from "./Components/Nav/Nav";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";
import Footer from "./Components/Footer/Footer";
import Acomodacao from "./Components/Acomodação/Acomodacao";
import Reserva from "./Reserva/Reserva";


const App=()=>{

    return (
        <div className="App">
        
            <div>
                
                <GlobalStyle/>
                <Nav/>
                <Home/> 
                <Sobre/>
                <Acomodacao/>
                <Reserva/>
                <Footer/>
                
            </div>
        </div>
    )

}



export default App;