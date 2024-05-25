import styles from "./Acomodacao.module.css";

export default function Acomodacao() {
    return (
        <div className={styles["main"]}>
            <h1>Nossos Quartos & Suítes</h1>
            <section className={styles["section-quarto"]}>
                <div className={styles["box-main"]}>
                    <img src="SUITE_DELUXE.png" alt="suitedeluxe" />
                    <div className={styles["title-p"]}>
                        <h2 className={styles["quarto-title"]}>suíte deluxe</h2>
                        <p><span>$759</span>/por noite</p>
                    </div>
                    <div className={styles["lista-atributos"]}>
                        <ul>
                            <li>Wi-fi gratuito disponível</li>
                            <li>Café da manhã incluso</li>
                            <li>Cama King e sala de estar</li>
                            <li>Até 3 pessoas</li>
                        </ul>
                        <button type="button" className={styles["btn-quarto"]}>reserve já</button>
                    </div>
                </div>


                <div className={styles["box-main"]}>
                    <img src="IMG_SUITE_DUPLA.png" alt="suitedeluxe" />
                    <div className={styles["title-p"]}>
                        <h2 className={styles["quarto-title"]}>suíte dupla</h2>
                        <p><span>$930</span>/por noite</p>
                    </div>
                    <div className={styles["lista-atributos"]}>
                        <ul>
                            <li>Wi-fi exclusivo disponível</li>
                            <li>Café da manhã incluso</li>
                            <li>Duas camas Queen</li>
                            <li>Até 4 pessoas</li>
                        </ul>
                        <button type="button" className={styles["btn-quarto"]}>reserve já</button>
                    </div>
                </div>

                <div className={styles["box-main"]}>
                    <div className={styles["img"]}><img src="SUITE_GRANDE.png" alt="suitedeluxe" /></div>
                    <div className={styles["title-p"]}>
                        <h2 className={styles["quarto-title"]}>suíte grande</h2>
                        <p><span>$589</span>/por noite</p>
                    </div>
                    <div className={styles["lista-atributos"]}>
                        <ul>
                            <li>Wi-fi gratuito disponível</li>
                            <li>Café da manhã incluso</li>
                            <li>Uma cama Queen</li>
                            <li>Até 2 pessoas</li>
                        </ul>
                        <button type="button" className={styles["btn-quarto"]}>reserve já</button>
                    </div>
                </div>
            </section>

        </div>
    )
}