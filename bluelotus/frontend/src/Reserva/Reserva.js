import React, {useState} from "react";
import axios from "axios";
import styles from "./Reserva.module.css";

const Reserva = () => {

    const[checkIn, setCheckIn] = useState('');
    const[checkOut, setCheckOut] = useState('');
    const[hospedes, setHospedes] = useState('');
    const[status, setStatus] = useState('');
    const[mensagem, setMensagem] = useState('');

    const handleReserva = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/reserva", {
                tipo: 'data',
                dados: {checkIn, checkOut, hospedes, status},
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
               <div className={styles["title-reserva"]}> <h1>Reserva: </h1> </div>
                <label className={styles["check"]}>Check In:
                <input type="datetime-local" name="check_In" onChange={(e) => setCheckIn(e.target.value)} value={checkIn} required className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check"]}>Check out:
                <input type="datetime-local" name="check_out" onChange={(e) => setCheckOut(e.target.value)} value={checkOut} required className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check-number"]}>N° Hóspedes:
                <input type="number" name="hospedes" onChange={(e) => setHospedes(e.target.value)} value={hospedes} required placeholder="Selecione o número" className={styles["in_rvs"]} ></input>
                </label>
                <label className={styles["check-number"]}>Quartos:
                <input type= "number" name="hospedes" onChange={(e) => setStatus(e.target.value)} value={status} required placeholder="Digite o quarto" className={styles["in_rvs"]} ></input>
                </label>
                <div className={styles["btn-reserva"]}>
                <button type="submit" className={styles["btn"]} >Confirmar</button>
               </div>
                
               </div>

            </form>

        </div>
    )
}

export default Reserva;