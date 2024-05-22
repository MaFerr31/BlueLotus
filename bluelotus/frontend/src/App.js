import React from "react";
import Nav from "./Components/Nav/Nav";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";


const App=()=>{

    return (
        <div className="App">
        
            <div>
                
                <GlobalStyle/>
                <Nav/>
                <Home/> 
                
            </div>
        </div>
    )

}



export default App;