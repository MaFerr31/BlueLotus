import styles from "./Sobre.module.css";

export default function Sobre() {
    return (
        <div className={styles["section"]}>
            <section className={styles["sobre-container"]} id="sobre">
                <div className={styles["sobre-main"]} id="sobre">
                    <div className={styles["sobre_text"]}>
                        <h2>Os Melhores Hotéis de Luxo</h2>
                        <h1 className={styles["title"]}>Viver experiências únicas</h1>
                        <p>Bem-vindo ao nosso hotel, onde luxo e conforto se fundem para criar uma experiência única e memorável
                            para os
                            nossos hóspedes. Com uma vasta gama de serviços de qualidade, incluindo quartos elegantemente
                            decorados,
                            gastronomia excepcional, estamos comprometidos em proporcionar a você uma estadia verdadeiramente
                            inesquecível.</p>
                        <button type="button">Visualizar acomodações</button>

                    </div>
                <div className={styles["img-sobre"]}><img src="IMG_SOBRE.jpg"alt="sobre"/></div>
                    
                </div>
                
            </section>
        </div>
    )
}