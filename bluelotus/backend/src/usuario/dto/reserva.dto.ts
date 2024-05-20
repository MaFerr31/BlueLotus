import { PartialType } from '@nestjs/mapped-types';
import { IsDate, Length, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {

    @IsDate()
    @ApiProperty({description:'Data de entrada da reserva'})
    @Length(10, 15, {message:'insira a data de entrada:'})
    check_in: Date;
    
    @IsDate()
    @ApiProperty({description:'Data de saída da reserva'})
    @Length(10, 15, {message:'insira a data de saída'})
    check_out: Date;

    @IsInt()
    @ApiProperty({description:'Quantidade de hóspedes'})
    @Length(1, 1, {message: 'insira o número de hóspedes: '})
    hospedes: number;

    @IsBoolean()
    @ApiProperty({description:'Status da reserva'})
    @Length(1, 1)
    status: boolean;

    @IsInt()
    usuarioId: number;


}

export class UpdateReservaDto extends PartialType(CreateReservaDto) {}
