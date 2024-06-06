import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Perfil } from './perfil.entity';
import { Reserva } from './reserva.entity';

@Entity('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nome: string;

    @Column({ unique: true,length: 40 })
    email: string;

    @Column()
    senha: string;

    @OneToMany(() => Reserva, reserva => reserva.usuario)
    reserva: Reserva[];

    @OneToMany(() => Perfil, perfil => perfil.usuario)
    perfil: Perfil[];
}


export class UsuarioEntity {}
