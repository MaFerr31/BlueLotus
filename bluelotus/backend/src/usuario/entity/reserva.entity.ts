import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity('reserva')
export class Reserva{
    @PrimaryGeneratedColumn()
    id_reserva: number;

    @Column()
    check_in: Date; 

    @Column()
    check_out: Date;

    @Column({type: 'int'})
    hospedes: number;

    @Column()
    tipoQuarto: number;

    @ManyToOne(() => Usuario, usuario => usuario.reserva)
    usuario: Usuario;


}
