import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Documento } from './documento.entity';
import { Descritor } from './descritor.entity';

@Entity('palavrachave')
export class PalavraChave {
  @PrimaryGeneratedColumn()
  id_palavrachave: number;

  @Column({ length: 40 })
  palavra: string;

  @ManyToOne(() => Descritor, descritor => descritor.palavrasChave)
  descritor: Descritor;
  
  @ManyToOne(() => Documento, documento => documento.palavrasChave)
  documento: Documento;
}
