import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProjetoDocumentoUser } from './projeto_documento_user.entity';

@Entity('projeto')
export class Projeto {
  @PrimaryGeneratedColumn()
  id_projeto: number;

  @Column({ length: 40 })
  titulo: string;

  @Column({ type: 'int' })
  ano_inicial: number;

  @Column({ type: 'int' })
  ano_final: number;
  
  @OneToMany(() => ProjetoDocumentoUser, pd => pd.user)
  projetoDocumentoUsers: ProjetoDocumentoUser[];
    
  @OneToMany(() => ProjetoDocumentoUser, pd => pd.projeto)
  projetoDocumento: ProjetoDocumentoUser[];
    
}