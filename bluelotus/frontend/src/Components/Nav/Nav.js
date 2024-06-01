import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <div>
            <header className={styles['nav_home']}>
                <NavLink to = "/" className={styles["nav_link"]}><img src="LOGO_COM_NOME.png" alt="L" className ={styles['nav_img']}></img></NavLink>
                <nav className={styles['nav_menu']}>
                    <ul className={styles['nav_lista']}>
                        <li><NavLink to ="/home">Home</NavLink></li>
                        <li><NavLink to ="/sobre">Sobre</NavLink></li>
                        <li><NavLink to ="/acomodacoes">acomodações</NavLink></li>
                        <li><NavLink to ='/reservas'>reservas</NavLink></li>
                        <li><a href='/contato'>contato</a></li>
                    </ul>
                </nav>
                <div className={styles["icons"]}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30 32.5C34.1421 32.5 37.5 29.1421 37.5 25C37.5 20.8579 34.1421 17.5 30 17.5C25.8579 17.5 22.5 20.8579 22.5 25C22.5 29.1421 25.8579 32.5 30 32.5Z"
                            stroke="#222222" stroke-width="2.5" stroke-linecap="round" />
                        <path
                            d="M30 52.5C42.4264 52.5 52.5 42.4264 52.5 30C52.5 17.5736 42.4264 7.5 30 7.5C17.5736 7.5 7.5 17.5736 7.5 30C7.5 42.4264 17.5736 52.5 30 52.5Z"
                            stroke="#222222" stroke-width="2.5" />
                        <path
                            d="M45 46.7648C44.1153 44.1068 42.1655 41.7582 39.4535 40.083C36.7415 38.408 33.4185 37.5 30 37.5C26.5815 37.5 23.2585 38.408 20.5465 40.083C17.8344 41.7582 15.8848 44.1068 15 46.7648"
                            stroke="#222222" stroke-width="2.5" stroke-linecap="round" />
                    </svg>

                </div>
            </header>
        </div>
    )
}

