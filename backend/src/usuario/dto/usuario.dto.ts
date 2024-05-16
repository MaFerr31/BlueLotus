import { IsEmail, IsString, Length, Matches } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {

    @IsString()
    @ApiProperty({description:'Nome do usuário'})
    @Length(8, 40, { message: 'o tamanho mínimo do nome é 8 caracteres' })
    nome: string;

    @IsEmail()
    @ApiProperty({description: 'Email do usuario'})
    @Length(8, 40, {message: 'o tamanho mínimo do e-mail é 8 caracteres'})
    email: string;

    @IsString()
    @ApiProperty({description: 'Senha do usuario'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
      message: 'a senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula'

    })
    senha:string;
}

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
