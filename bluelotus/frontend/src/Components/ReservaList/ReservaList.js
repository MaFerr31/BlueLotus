import { useState } from "react";
import axios from "axios";
import styles from './ReservaList.module.css';

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

function ReservaList() {
    const [usuario, setUsuario] = useState([])

    api.get('/usuario').then( (response) =>{
        console.log(response.data)
        setUsuario(response.data)
    })

    return(
        <div className={styles['container']}>
            <h1 className={styles['title_reserva']}>Consultar Reservas</h1>
            <ul className={styles['list_reserva']}>
                {usuario.map(usuario => (
                    <li className={styles['item_lista']} key={usuario.id}> Email: {usuario.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default ReservaList;
