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
      await axios.post('http://localhost:4000/usuarios', {
        tipo: 'CreateUsuarioDto',
        dados: { nome, email, senha }
      });

      setMensagem('Login realizado com sucesso')
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMensagem("Credenciais invalidas")
      } else {
        setMensagem("Erro ao tentar o login")
      }
      console.log(error)
    }
  };

  return (

    <div className={styles['container']}>

      <form onSubmit={handleLogin}>
        <div>
          <h1>Login</h1>
          <div className={styles["input-class"]}>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required
            />
          </div>

          <div className={styles["input-class"]}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <div className={styles["input-class"]}>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required
            />
          </div>
        </div>
        <div className={styles["bnt-login"]}>
          <button type="submit" className={styles["bnt-login"]}> Login</button>
        </div>
      </form>
      <div>
        <p>{mensagem}</p>
      </div>
    </div>
  );

};

export default Login;