import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Projeto } from './projeto.entity';
import { Documento } from './documento.entity';
import { Usuario } from 'src/usuario/entity/usuario.entity';

@Entity('projeto_documento_user')
export class ProjetoDocumentoUser {
  @PrimaryColumn()
  userId: number;
  
  @PrimaryColumn()
  projetoId: number;

  @PrimaryColumn()
  documentoId: number;
  
  @Column({ default: false })
  proprietario: boolean;
  
  @ManyToOne(() => Projeto, projeto => projeto.projetoDocumentoUsers)
  @JoinColumn({ name: 'projetoId' })
  projeto: Projeto;

  @ManyToOne(() => Documento, documento => documento.projetoDocumentoUsers)
  @JoinColumn({ name: 'documentoId' })
  documento: Documento;

  @ManyToOne(() => Usuario, user => user.projetoDocumentoUsers)
  @JoinColumn({ name: 'userId' })
  user: Usuario;
}
