import React from "react";
import styles from './Home.module.css'
import Login from "../Login/Login";
import backgroundImage from './background/homeimage.jpg'

export default function Home() {
    return (
        <div>
            <section style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundSize: 'cover'
            }} className={styles["home"]} id="home">
                <div className={styles["content"]}>
                    <h3> Seja bem vindo!</h3>
                    <span>"Relaxe em nosso paraíso à beira-mar."</span>
                    <p>Bem-vindo ao nosso refúgio à beira-mar, onde a sofisticação encontra a
                        natureza. Desfrute de vistas panorâmicas do oceano, areias douradas e
                        uma atmosfera relaxante. Oferecemos uma variedade de atividades aquáticas
                        emocionantes, gastronomia requintada e acomodações luxuosas. Sua escapada
                        perfeita começa aqui, onde o mar encontra o conforto.
                    </p>
                    <button className={styles['btn']}>saiba mais</button>
                </div>
                <div className={styles["container"]}>
                  <Login/>
                </div>
            </section>
        </div>

    )

}
