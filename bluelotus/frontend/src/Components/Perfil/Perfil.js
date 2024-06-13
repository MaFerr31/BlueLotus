import React, { useState } from "react";
import styles from "./Perfil.module.css"
import axios from "axios";

const Perfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [celular, setCelular] = useState("");
  const [usuarioId, setUsuarioId] = useState(0);
  const [mensagem, setMensagem] = useState("")

  const handlePerfil = async (e) => {
    e.preventDefault();
    console.log("batatafrita", {
      nome, email, endereco, cidade, celular, usuarioId
    } )
    try {
      await axios.post(`http://localhost:4000/perfil`, {
        nome, email, endereco, cidade, celular, usuarioId
      });
      console.log("batatafrita", {
        nome, email, endereco, cidade, celular, usuarioId
      } )
      setMensagem('Perfil registrado com sucesso!')
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMensagem("Informações inválidas!")
      } else {
        setMensagem("Falha ao realizar o perfil")
      }
      console.log(error)
    }
  };




  return (
    <div className={styles["container-profile"]}>
      <form onSubmit={handlePerfil} className={styles["box-profile"]}>
        <div className={styles["profile_text"]}>
          <h1 className={styles["title"]}>Criar o seu Perfil</h1>

          <div>
            <label className={styles["label-prof"]}> ID: </label>
            <input className={styles['in-prof']} type="number" name="usuarioId" 
            onChange={(e) => {
              const valor = parseInt(e.target.value, 10);
              if (!isNaN(valor)){
                setUsuarioId(valor)
              }
            }} ></input>
          </div>

          <div>
            <label className={styles["label-prof"]} name="nome">Nome: </label>
            <input className={styles['in-prof']} type="text" name="Nome" onChange={(e) => setNome(e.target.value)} value={nome.nome} ></input>
          </div>

          <div>
            <label className={styles["label-prof"]} name="email">E-mail: </label>
            <input className={styles['in-prof']} type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email.email} ></input>
          </div>

          <div>
            <label className={styles["label-prof"]} name="cidade">Cidade:</label>
            <input className={styles['in-prof']} type="text" name="cidade" onChange={(e) => setCidade(e.target.value)} value={cidade.cidade} ></input>
          </div>

          <div>
            <label className={styles["label-prof"]} name="Endereço">Endereço: </label>
            <input className={styles['in-prof']} type="text" name="endereco" onChange={(e) => setEndereco(e.target.value)} value={endereco.endereco} ></input>
          </div>

          <div>
            <label className={styles["label-prof"]} name="Celular">Celular: </label>
            <input className={styles['in-prof']} type="text" name="celular" onChange={(e) => setCelular(e.target.value)} value={celular.celular} ></input>
          </div>

          <div className={styles["mensagem"]}>{mensagem}</div>

          <div className="btn-div">
            <button className={styles["btn"]} type="submit">Enviar</button>
          </div>

        </div>



      </form>
      <div> <img className={styles["img-profile"]} src="IMG_PERFIL.jpg" alt="img-perfil"></img> </div>
    </div>
  )
}

export default Perfil;