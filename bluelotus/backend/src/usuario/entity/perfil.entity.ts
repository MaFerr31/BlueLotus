import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity('perfil')
export class Perfil {
    @PrimaryGeneratedColumn()
    id_perfil: number;

    @Column({ length: 40 })
    nome: string;

    @Column({unique: true, length: 40})
    email: string;

    @Column({ length: 40 })
    endereco: string;

    @Column({ length: 40 })
    cidade: string;

    @Column({ type: 'int'})
    celular: number;

    @ManyToOne(() => Usuario, usuario => usuario.perfil)
    usuario: Usuario;
}

export class PerfilEntity {}
