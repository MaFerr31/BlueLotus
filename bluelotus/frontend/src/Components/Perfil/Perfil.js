import React from "react";
import styles from "./Perfil.module.css"

function Perfil () {
  return(
    <div className={styles["container-profile"]}>
        <form className={styles["box-profile"]}>
                    <div className={styles["profile_text"]}>
                        <h1 className={styles["title"]}>Criar o seu Perfil</h1>
                        <div>
                        <label className={styles["label-prof"]}name="Nome">Nome: </label>
                        <input className={styles['in-prof']} type="text" name="Nome"></input>
                        </div>

                        <div>
                        <label className={styles["label-prof"]}name="E-mail">E-mail: </label>
                        <input className={styles['in-prof']} type="email" name="E-mail"></input>
                        </div>

                        <div>
                        <label className={styles["label-prof"]}name="Cidade">Cidade:</label>
                        <input className={styles['in-prof']} type="text" name="Cidade"></input>
                        </div>
                        
                        <div>
                        <label className={styles["label-prof"]}name="Endereço">Endereço: </label>
                        <input className={styles['in-prof']} type="text" name="Endereço"></input>
                        </div>

                        <div>
                        <label className={styles["label-prof"]}name="Cidade">Cidade: </label>
                        <input className={styles['in-prof']}type="text" name="Cidade"></input>
                        </div>

                        <div className="btn-div">
                        <button className={styles["btn"]}type="button">Enviar</button>
                        </div>

                    </div>
                    
            
        
        </form>
        <div> <img className={styles["img-profile"]}src="IMG_PERFIL.jpg"></img> </div>
    </div>
  )
}

export default Perfil;