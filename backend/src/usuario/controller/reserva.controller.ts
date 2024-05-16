import { Controller, Body, Post, Get, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReservaService } from '../service/reserva.service';
import { CreateReservaDto, UpdateReservaDto } from '../dto/reserva.dto';
@ApiTags('Reserva')
@Controller('reserva')
export class ReservaController {
    constructor(private readonly reservaService: ReservaService) {}

    @Post()
    @ApiOperation({ summary: 'Adicionar reserva.' })
    async create(@Body() CreateReservaDto: CreateReservaDto) {
        return await this.reservaService.create(CreateReservaDto);
    }

    @Get()
    @ApiOperation({ summary: 'Consultar reservas.' })
    async findAll() {
        return await this.reservaService.findAll();
    }

    @Get(":id")
    @ApiOperation({ summary: 'Consultar uma reserva.' })
    async findOne (@Param("id") id:number){
        return await this.reservaService.findOne(id);
    }

    @Put(":id")
    @ApiOperation({ summary: 'Atualizar uma reserva.' })
    async update(
        @Param("id") id: number,
        @Body() updateReservaDto: UpdateReservaDto
    ) {
        return await this.reservaService.update(id, updateReservaDto);
    }

    @Delete(":id")
    @ApiOperation({ summary: 'Excluir uma reserva.' })
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param("id") id: number){
        return await this.reservaService.remove(id);
    }
}

