import { IsString, Length, IsDecimal} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAcomodacaoDto {
    @PrimaryGeneratedColumn()
    id_quarto: number;

    @IsString()
    @ApiProperty({description:'Nome da acomodação'})
    @Length(8, 40, {message: 'o tamanho mínimo do nome é 8 caracteres'})
    nome: string;

    @IsDecimal()
    @ApiProperty({description:'Valor do quarto'})
    valor: number;
}

export class UpdateAcomodacaoDto extends PartialType(CreateAcomodacaoDto) {}
