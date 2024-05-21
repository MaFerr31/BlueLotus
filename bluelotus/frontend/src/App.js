import React from "react";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import GlobalStyle from "./styles/globals";
import Home from "./Components/Home/Home";


const App=()=>{

    return (
        <div className="App">
        
            <div>
                
                <GlobalStyle/>
                <Nav/>
                <Login />
                
            </div>
        </div>
    )

}



export default App;