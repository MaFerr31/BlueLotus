import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioService } from './usuario.service';
import { Reserva } from '../entity/reserva.entity';
import { CreateReservaDto, UpdateReservaDto } from '../dto/reserva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entity/usuario.entity';

@Injectable()
export class ReservaService {
    constructor(
        @InjectRepository(Reserva)
        private reservaRepository: Repository<Reserva>,
        private UsuarioService: UsuarioService
    ){}

    async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
        const usuario = await this.UsuarioService.findOne(createReservaDto.usuarioId);
        if(!usuario) {
            throw new NotFoundException(`Usuário não encontrado.`);
        }
        const newReserva = this.reservaRepository.create({
            ...createReservaDto,
            usuario: usuario       });
        return await this.reservaRepository.save(newReserva);
    }

    async findAll(): Promise<Reserva[]> {
       return await this.reservaRepository.find();
    }

    async findOne(id: number): Promise<Reserva>{
        const reserva = await this.reservaRepository.findOne({
            where: {id_reserva: id},
            relations:['usuario'],
        });
        if(!reserva){
            throw new NotFoundException(`Reserva não encontrada.`);
        }return reserva;
    }

    async update(
        id: number,
        updateReservaDto: UpdateReservaDto
    ): Promise<Reserva>{
        const reserva = await this.findOne(id);
        delete updateReservaDto.usuarioId;

        const updated = this.reservaRepository.merge(reserva, updateReservaDto)
        return await this.reservaRepository.save(updated);
    }

    async remove(id: number): Promise<void> {
        const reserva = await this.findOne(id);
        await this.reservaRepository.remove(reserva);
    }
}

