import styles from "./Acomodacao.module.css";
import Reserva from "./Reserva/Reserva";

export default function Acomodacao() {
    return (
        <div className={styles["main"]}>
            <h1>Acomodações</h1>
            <section className={styles["section-quarto"]}>
                <div>
                    <Reserva />
                </div>
                <div className={styles["box-main"]}>
                    <div className={styles["option"]}><h2>Opções de quartos: </h2></div>
                    <div className={styles["conteudo-quarto"]}>
                        <img src="SUITE_DELUXE.png" alt="suitedeluxe" />
                        <div>
                            <h2 className={styles["title-quarto"]}> Suíte Deluxe</h2>
                            <p> Cama Queen | 28 m² | 3 hóspedes</p>
                            <ul>
                                <li>Wi-fi grátis</li>
                                <li>Ar condicionado</li>
                                <li>Serviço de quarto</li>
                                <li>Café da manhã</li>
                            </ul>
                        </div>
                        <span> <strong>Especificações</strong>
                            <br />
                            Tipo: 1
                            <br />
                            Check In: antes 4pm
                            <br /> Check out: Antes 12pm</span>
                        <h3>Valor: <strong className={styles["valor-strong"]}>$645,00</strong> a diária</h3>
                    </div>

                    <div className={styles["conteudo-quarto"]}>
                        <img src="IMG_SUITE_DUPLA.png" alt="suitedeluxe" />
                        <div>
                            <h2 className={styles["title-quarto"]}> Suíte Deluxe Dupla</h2>
                            <p> Cama King | 30 m² | 4 hóspedes</p>
                            <ul>
                                <li>Wi-fi grátis</li>
                                <li>Ar condicionado</li>
                                <li>Serviço de quarto</li>
                                <li>Café da manhã</li>
                            </ul>
                        </div>
                        <span> <strong>Especificações</strong>
                            <br />
                            Tipo: 2
                            <br />
                            Check In: antes 4pm
                            <br /> Check out: Antes 12pm</span>
                        <h3>Valor: <strong className={styles["valor-strong"]}>$789,00</strong> a diária </h3>
                    </div>

                    <div className={styles["conteudo-quarto"]}>
                        <img src="SUITE_GRANDE.png" alt="suitedeluxe" />
                        <div>
                            <h2 className={styles["title-quarto"]}> Suíte Grande</h2>
                            <p> Cama Casal | 21 m² | 2 hóspedes</p>
                            <ul>
                                <li>Wi-fi grátis</li>
                                <li>Ar condicionado</li>
                                <li>Serviço de quarto</li>
                                <li>Café da manhã</li>
                            </ul>
                        </div>
                        <span> <strong>Especificações</strong>
                            <br />
                            Tipo: 3
                            <br />
                            Check In: antes 4pm
                            <br /> Check out: Antes 12pm</span>
                        <h3>Valor: <strong className={styles["valor-strong"]}>$569,00</strong> a diária</h3>

                    </div>


                </div>

            </section>



        </div>
    )
}