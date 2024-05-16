import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PalavraChave } from './palavra-chave.entity';
import { ProjetoDocumentoUser } from './projeto_documento_user.entity';

@Entity('documento')
export class Documento {
  @PrimaryGeneratedColumn()
  id_documento: number;

  @Column()
  anoPublicacao: number;

  @Column({ length: 100 })
  titulo: string;

  @Column({ length: 100 })
  discente: string;

  @Column({ length: 100 })
  orientador: string;

  @Column('text')
  resumo: string;

  @OneToMany(() => PalavraChave, palavraChave => palavraChave.documento)
  palavrasChave: PalavraChave[];
  
  @OneToMany(() => ProjetoDocumentoUser, pd => pd.documento)
  projetoDocumentoUsers: ProjetoDocumentoUser[];
}

