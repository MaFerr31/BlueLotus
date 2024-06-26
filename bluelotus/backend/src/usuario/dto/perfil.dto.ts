import { IsEmail, IsString, Length, IsInt, IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePerfilDto {

    @ApiProperty({description:'Nome'})
    @IsString()
    @Length(8, 40, {message: 'o tamanho mínimo do nome é 8 caracteres'})
    nome: string;

    @ApiProperty({description:'Email'})
    @IsEmail()
    @Length(15, 40, {message: 'o tamanho mínimo do e-mail é 15 caracteres'})
    email: string;
    
    @ApiProperty({description:'Endereço'})
    @IsString()
    @Length(12, 40, {message: 'o tamanho mínimo do endereço é 12 caracteres'})
    endereco: string;
    
    @ApiProperty({description:'Cidade'})
    @IsString()
    @Length(5, 30, {message: 'o tamanho mínimo do nome da cidade é de 5 caracteres'})
    cidade: string;
    
    @ApiProperty({description:'Celular com DDD'})
    @IsString()
    @Length(9, 20, {message: 'insira o numero de telefone com o DDD'})
    celular: string;

    @IsInt()
    usuarioId: number;
}


export class UpdatePerfilDto extends PartialType(CreatePerfilDto) {}
