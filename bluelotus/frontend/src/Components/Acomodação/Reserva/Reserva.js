import React, {useState} from "react";
import axios from "axios";
import styles from "./Reserva.module.css";

const Reserva = () => {

    const[checkInDate, setCheckInDate] = useState('');
    const[checkOutDate, setCheckOutDate] = useState('');
    const[hospedes, setHospedes] = useState('');
    const[tipoQuarto, setTipoQuarto] = useState('');
    const[mensagem, setMensagem] = useState('');

    const handleReserva = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
            let usuarioId = 0
            await axios.post("http://localhost:4000/reserva", {
                checkInDate, checkOutDate, hospedes, tipoQuarto, usuarioId
            }, config);
            
            setMensagem("Reserva realizada com sucesso!")
        } catch (error){
            if(error.response && error.response.status === 400){
            setMensagem("Informações invalidas.")
            }else{
            setMensagem("Falha ao criar reserva.")
            }
            console.log(error)
        }
    };

    return(
        <div className={styles["content"]}>
            <form onSubmit={handleReserva} className={styles["form-reserva"]}>
               <div className={styles["reserva-input"]}>
                <label className={styles["check"]}>Check In:
                <input type="date" name="check_In" onChange={(e) => setCheckInDate(e.target.value)} value={checkInDate} required className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check"]}>Check out:
                <input type="date" name="check_out" onChange={(e) => setCheckOutDate(e.target.value)} value={checkOutDate} required className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check-number"]}>Quantidade de Hóspedes:
                <input type="number" name="hospedes" 
                onChange={(e) => {const valor = parseInt(e.target.value, 5); 
                    if(!isNaN(valor)){setHospedes(valor)}
                }} required placeholder="Selecione o número" className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check-number"]}>Tipo do quarto
                <input type="number" name="hospedes" 
                onChange={(e) => {const valor = parseInt(e.target.value, 5); 
                    if(!isNaN(valor)){setTipoQuarto(valor)}
                }} required placeholder="Selecione o número" className={styles["in_rvs"]} ></input>
                </label>
                <div className={styles["btn-reserva"]}>
                <button type="submit" className={styles["btn"]} >Reservar</button>
                <div className={styles["mensagem"]}>{mensagem}</div>
               </div>
                
               </div>

            </form>

        </div>
    )
}

export default Reserva;