import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Acomodacoes } from '../entity/acomodacoes.entity';
import { CreateAcomodacaoDto, UpdateAcomodacaoDto } from '../dto/acomodacoes.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AcomodacoesService {
    constructor(
        @InjectRepository(Acomodacoes)
        private acomodacoesRepository: Repository<Acomodacoes>,
    ) { }

    async findAll(): Promise<Acomodacoes[]> {
        return await this.acomodacoesRepository.find()
    }

    async findOne(id: number): Promise<Acomodacoes> {
        const acomodacao = await this.acomodacoesRepository.findOne({
            where: { id_quarto: id },
        })

        if (!acomodacao) {
            throw new HttpException(`Acomodação não encontrada.`, HttpStatus.NOT_FOUND);
        } return acomodacao;

    }

    async create(createAcomodacaoDto: CreateAcomodacaoDto): Promise<Acomodacoes> {
        try {
            const newAcomodacao = this.acomodacoesRepository.create({
                ...createAcomodacaoDto,
            })
            return await this.acomodacoesRepository.save(newAcomodacao);

        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Acomodação já registrada.', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Erro ao criar o registro. Tente novamente mais tarde.',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                )
            }

        }
    }

    async update(id: number, UpdateAcomodacaoDto: UpdateAcomodacaoDto): Promise<void> {
        const atualizacao = await this.acomodacoesRepository.delete(id);
        if (atualizacao.affected === 0) {
            throw new HttpException(`Quarto não encontrado. `, HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: number): Promise<void> {
        const deletado = await this.acomodacoesRepository.delete(id);
        if (deletado.affected === 0) {
            throw new HttpException(`Quarto não encontrado. `, HttpStatus.NOT_FOUND);
        }
    }


}
