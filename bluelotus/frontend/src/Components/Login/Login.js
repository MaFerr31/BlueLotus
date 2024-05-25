import React, { useState } from "react";
import axios from "axios";
import styles from './Login.module.css'

const Login = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/usuario', {
        tipo: 'data',
        dados: { nome, email, senha }
      });

      setMensagem('Login realizado com sucesso!')
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMensagem("Credenciais invalidas!")
      } else {
        setMensagem("Falha ao realizar o login")
      }
      console.log(error)
    }
  };

  return (

    <div className={styles['container']}>

      <form onSubmit={handleLogin} className={styles["form-login"]}>
        <div>
          <h1 className={styles["title-login"]}>Login</h1>
          <div className={styles["input-class"]}>
            <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome} required/>
          </div>

          <div className={styles["input-class"]}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
          </div>
          <div className={styles["input-class"]}>
            <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} value={senha} required/>
          </div>
        </div>
        <p className={styles["mensagem"]}>{mensagem}</p>
        <div className={styles["bnt-login"]}>
          <button type="submit" className={styles["bnt"]}> Login</button>
        </div>
      </form>
    </div>
  );

};

export default Login;