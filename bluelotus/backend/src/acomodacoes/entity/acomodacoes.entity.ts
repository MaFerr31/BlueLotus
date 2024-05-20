import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('acomodacoes')
export class Acomodacoes {
    @PrimaryGeneratedColumn()
    id_quarto: number;

    @Column({ length: 20})
    nome: string;

    @Column({type:'decimal', precision: 6, scale: 2})
    valor: number; 

}

export class AcomodacoesEntity {}
