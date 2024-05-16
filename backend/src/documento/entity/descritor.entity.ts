import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PalavraChave } from './palavra-chave.entity';

@Entity('descritor')
export class Descritor {
  @PrimaryGeneratedColumn()
  id_descritor: number;

  @Column({ length: 200 })
  titulo: string;

  @Column('text')
  resumo: string;

  @OneToMany(() => PalavraChave, palavraChave => palavraChave.documento)
  palavrasChave: PalavraChave[];
}
