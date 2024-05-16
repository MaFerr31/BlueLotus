import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Perfil } from './perfil.entity';
import { Reserva } from './reserva.entity';
import { ProjetoDocumentoUser } from 'src/documento/entity/projeto_documento_user.entity';

@Entity('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ unique: true,length: 40 })
    email: string;

    @Column()
    senha: string;

    @OneToMany(() => ProjetoDocumentoUser, pd => pd.user)
    projetoDocumentoUsers: ProjetoDocumentoUser[];

    @OneToMany(() => Reserva, reserva => reserva.usuario)
    reserva: Reserva[];

    @OneToMany(() => Perfil, perfil => perfil.usuario)
    perfil: Perfil[];
}


export class UsuarioEntity {}
