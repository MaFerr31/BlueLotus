import React from "react";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";
import Acomodacao from "./Components/Acomodação/Acomodacao";





const AllPages=()=>{

    return (
        <div className="AllPages">
        
            <div>
                <GlobalStyle/>
                <Home/>
                <Sobre/>
                <Acomodacao/>
                
            </div>
        </div>
    )

}



export default AllPages;