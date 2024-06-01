import React from "react";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";
import Acomodacao from "./Components/Acomodação/Acomodacao";
import Imagens from "./Components/Seq-Imagens/Imagens";
import Footer from "./Components/Footer/Footer";


const AllPages=()=>{

    return (
        <div className="AllPages">
        
            <div>
                <GlobalStyle/>
                <Home/>
                <Sobre/>
                <Acomodacao/>
                <Imagens/>
                <Footer/>
                
            </div>
        </div>
    )

}



export default AllPages;