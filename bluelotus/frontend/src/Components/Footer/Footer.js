import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div>
            <div className={styles['container']}>
                <div className={styles['contato']}>
                    <div className={styles['direito']}>
                        <p>© 2024 Todos os Direitos Reservados. Desenvolvido por BluLotusCompany</p>
                    </div>
                    <address>
                        <h4>Informação de Contato</h4>
                        <br />
                        Telefone: 0321-6789
                        <br />
                        E-mail: bluelotus@contact.com.br
                        <br />
                        10334 Av. Miguel Estefno Santos - Guarujá, São Paulo
                    </address>
                </div>
            </div>
        </div>
    )
}