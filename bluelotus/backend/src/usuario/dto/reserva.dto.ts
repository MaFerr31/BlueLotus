import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsInt, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateReservaDto {

    @IsDate()
    @ApiProperty({description:'Data de entrada da reserva'})
    @Type(() => Date)
    checkInDate: string;
    

    @IsDate()
    @ApiProperty({description:'Data de saída da reserva'})
    @Type(() => Date)
    checkOutDate: string;

    @IsNumber()
    @ApiProperty({description:'Quantidade de hóspedes'})
    hospedes: number;

    @IsNumber()
    @ApiProperty({description:'Status da reserva'})
    tipoQuarto: number;
    
    @IsInt()
    usuarioId: number;


}

export class UpdateReservaDto extends PartialType(CreateReservaDto) {}
