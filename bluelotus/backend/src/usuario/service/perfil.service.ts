import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioService } from './usuario.service';
import { Perfil } from '../entity/perfil.entity';
import { CreatePerfilDto, UpdatePerfilDto } from '../dto/perfil.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class PerfilService {
    constructor(
        @InjectRepository(Perfil)
        private perfilRepository: Repository<Perfil>,
        private UsuarioService: UsuarioService
    ){}

    async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
        const usuario = await this.UsuarioService.findOne(createPerfilDto.usuarioId);
        
        if(!usuario) {
            console.log('usuario', usuario)
            throw new NotFoundException(`Usuário não encontrado.`);
        }
        const newPerfil = this.perfilRepository.create({
            ...createPerfilDto,
            usuario: usuario
        });
        return await this.perfilRepository.save(newPerfil);
    }

    async findAll(): Promise<Perfil[]> {
       return await this.perfilRepository.find();
    }

    async findOne(id: number): Promise<Perfil>{
        const perfil = await this.perfilRepository.findOne({
            where: {id_perfil: id},
            relations:['usuario'],
        });
        if(!perfil){
            throw new NotFoundException(`Perfil não encontrado. `);
        }return perfil;
    }

    async update(
        id: number,
        updatePerfilDto: UpdatePerfilDto
    ): Promise<Perfil>{
        const perfil = await this.findOne(id);
        delete updatePerfilDto.usuarioId;

        const updated = this.perfilRepository.merge(perfil, updatePerfilDto)
        return await this.perfilRepository.save(updated);
    }

    async remove(id: number): Promise<void> {
        const perfil = await this.findOne(id);
        await this.perfilRepository.remove(perfil);
    }
}
