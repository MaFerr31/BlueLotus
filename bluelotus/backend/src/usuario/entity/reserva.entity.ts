import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity('reserva')
export class Reserva{
    @PrimaryGeneratedColumn()
    id_reserva: number;

    @Column()
    checkInDate: string; 

    @Column()
    checkOutDate: string;

    @Column()
    hospedes: number;

    @Column()
    tipoQuarto: number;

    @ManyToOne(() => Usuario, usuario => usuario.reserva)
    usuario: Usuario;

    @Column()
    usuarioId: number;


}
