import React, {useState} from "react";
import axios from "axios";
import styles from "./Reserva.module.css";

const Reserva = () => {

    const[checkIn, setCheckIn] = useState('');
    const[checkOut, setCheckOut] = useState('');
    const[hospedes, setHospedes] = useState('');
    const[tipoQuarto, setTipoQuarto] = useState('');
    const[mensagem, setMensagem] = useState('');

    const handleReserva = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/reserva", {
                checkIn, checkOut, hospedes, tipoQuarto
            });
            
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
                <input type="date" name="check_In" onChange={(e) => setCheckIn(e.target.value)} value={checkIn} required className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check"]}>Check out:
                <input type="date" name="check_out" onChange={(e) => setCheckOut(e.target.value)} value={checkOut} required className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check-number"]}>Quantidade de Hóspedes:
                <input type="number" name="hospedes" onChange={(e) => setHospedes(e.target.value)} value={hospedes} required placeholder="Selecione o número" className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check-number"]}>Tipo do quarto
                <input type="number" name="hospedes" onChange={(e) => setTipoQuarto(e.target.value)} value={tipoQuarto} required placeholder="Selecione o número" className={styles["in_rvs"]} ></input>
                </label>
                <div className={styles["btn-reserva"]}>
                <button type="submit" className={styles["btn"]} >Reservar</button>
                <div>{mensagem}</div>
               </div>
                
               </div>

            </form>

        </div>
    )
}

export default Reserva;