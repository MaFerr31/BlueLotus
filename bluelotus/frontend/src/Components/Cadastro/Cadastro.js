import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const handleCadastro = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('http://localhost:4000/usuario', {
            nome, email, senha 
        });
  
        setMensagem('Cadastro realizado com sucesso!')
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setMensagem("Informações inválidas!")
        } else {
          setMensagem("Falha ao realizar o cadastro")
        }
        console.log(error)
      }
    };
   
  return (
    <div className={styles["container"]}>
      <div className={styles["form-image"]}>
        <img src="IMG-9.jpg" alt="" />
      </div>
      <div className={styles["form"]}>
        <form onSubmit={handleCadastro}>
          <div className={styles["form-header"]}>
            <div className={styles["title"]}>
              <h1>Cadastre-se</h1>
            </div>
          </div>

          <div className={styles["input-group"]}>
            <div className={styles["input-box"]}>
              <label className={styles["label-cds"]}htmlFor="firstname">Nome Completo:</label>
              <input id="firstname" type="text" name="firstname" onChange={(e) => setNome(e.target.value)} value={nome.nome} required />
            </div>

            <div className={styles["input-box"]}>
              <label className={styles["label-cds"]}htmlFor="email">E-mail:</label>
              <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email.email} required />
            </div>

            <div className={styles["input-box"]}>
              <label className={styles["label-cds"]}htmlFor="password">Senha:</label>
              <input id="password" type="password" name="password" onChange={(e) => setSenha(e.target.value)} value={senha.senha} required />
            </div>

            <div className={styles["input-box"]}>
              <label className={styles["label-cds"]} htmlFor="confirmPassword">Confirme sua senha: </label>
              <input id="confirmPassword" type="password" name="confirmPassword"  onChange={(e) => setSenha(e.target.value)} value={senha.senha} required />
            </div>
          </div>
          <div className={styles["mensagem"]}>{mensagem}</div>
          <div className={styles["continue-button"]}>
            <button><NavLink to = "/home">Voltar</NavLink></button>
            <button>Cadastrar</button>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default Cadastro;