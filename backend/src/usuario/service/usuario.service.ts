import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entity/usuario.entity';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../dto/usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,

    ) { }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({ relations: ['perfil'] })
    }

    async findOne(id: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne({
            where: { id_usuario: id },
            relations: ['perfil', 'reserva'],
            
        })

        if (!usuario) {
            throw new HttpException(`Usuário não encontrado.`, HttpStatus.NOT_FOUND);
        } return usuario;
    }

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        try {
            const saltOrRounds = 10; // o custo do processamento, 10 é geralmente suficiente
            const hash = await bcrypt.hash(createUsuarioDto.senha, saltOrRounds);
            createUsuarioDto.senha = hash; // substitui a senha original pelo hash

            return await this.usuarioRepository.save(
                this.usuarioRepository.create(createUsuarioDto),
            );
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Email já registrado.', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Erro ao criar o registro. Tente novamente mais tarde.',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                )
            }
        }
    }

    async update(id: number, UpdateUsuarioDto: UpdateUsuarioDto): Promise<void> {
        const result = await this.usuarioRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException(`Usuário não encontrado. `, HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: number): Promise<void> {
        const result = await this.usuarioRepository.delete(id);
        if (result.affected === 0) {
          throw new HttpException(`Usuário não encontrado.`, HttpStatus.NOT_FOUND);
        }
      }
    }




