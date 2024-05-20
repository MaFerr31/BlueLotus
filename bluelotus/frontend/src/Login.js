import React, { useState } from "react";
import axios from "axios";

const Login = () => {

const[email, setEmail] =  useState('');
const[senha, setSenha] = useState('');
const[mensagem, setMensagem] = useState('');

const handleLogin  = async(e) => {
  e.preventDefault();

  try {
    await axios.post('http://localhost:4000/usuarios', {
      tipo: 'usuarioLogado',
      dados:{email, senha}
    });

    setMensagem('Login realizado com sucesso')
  }catch(error){
    if(error.response && error.response.status === 400){
     setMensagem("Credenciais invalidas") 
    }else {
      setMensagem("Erro ao tentar o login")
    }
    console.log(error)
  }
};

return(
  <div>
  <h1>Login</h1>
  <form onSubmit={handleLogin}>
    <div>
      <label>Email:</label>
      <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      /> 
  </div>
  <div>
      <label>Senha:</label>
      <input
      type="password"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      required
      /> 

  </div>
  <button type="submit"> Login</button>
  </form>
  </div>
);

};

export default Login;