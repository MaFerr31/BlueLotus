import React, { useState } from 'react';
import axios from 'axios';
import styles from'./Login.module.css';
import { NavLink } from 'react-router-dom';

function Login() {
  
  const [email, setEmail] = useState("");  
  const [senha, setSenha] = useState(""); 
  const [mensagem, setMensagem] = useState(""); 
  const [error, setError] = useState("");  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Envia uma requisição POST para o endpoint de login da API
      const response = await axios.post("http://localhost:4000/auth/login", {
         email, senha,  
      });

      // Envia uma mensagem para o console com a resposta da API
      setMensagem("Login realizado com sucesso!", response.data);

      // Verifica se a resposta contém o token de acesso
      const token = response.data?.access_token;
      if (token) {
        localStorage.setItem("token", response.data.access_token);
        console.log("Token armazenado:", localStorage.getItem("token"));
      } else {
        throw new Error("Token não encontrado.");
      }


    } catch (error) {
      // Envia uma mensagem para o console contendo o erro
      console.error("Erro durante o login:", error);

      // Define uma mensagem de erro apropriada no estado
      if (error.response && error.response.status === 404) {
        setError("Credenciais inválidas");
      } else {
        setError(error.message || "Erro ao fazer login");
      }
    }
  };
  return (

    <div className={styles['container']}>

      <form onSubmit={handleLogin} className={styles["form-login"]}>
        <div>
          <h1 className={styles["title-login"]}>Login</h1>


          <div className={styles["input-class"]}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
          </div>
          <div className={styles["input-class"]}>
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} value={senha} required/>
          </div>
        </div>
        <p className={styles["mensagem"]}>{error}</p>
        <div className={styles["bnt-login"]}>
          <NavLink to = "/cadastro"className={styles["link"]}>Registre-se já!</NavLink>
        </div>
        <div className={styles["bnt-login"]}>
          <button type="submit"  className={styles["bnt"]}>Entrar</button>
        </div>
        <div className={styles["mensagem"]}>
          {mensagem}
        </div>
      </form>
    </div>
  );

};

export default Login;