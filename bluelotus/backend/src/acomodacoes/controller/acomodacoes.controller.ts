import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAcomodacaoDto, UpdateAcomodacaoDto} from '../dto/acomodacoes.dto';
import { AcomodacoesService } from '../service/acomodacoes.service';
import { ApiOperation,ApiTags,ApiResponse } from '@nestjs/swagger';

@Controller('acomodacao')
@ApiTags('Acomodações')
export class AcomodacoesController{
    constructor(private readonly acomodacoesService: AcomodacoesService){}
    

    @Post()
    @ApiOperation({summary: 'Adicionar acomodação.'})
    async create(@Body() CreateAcomodacaoDto: CreateAcomodacaoDto): Promise<any>{
        return this.acomodacoesService.create(CreateAcomodacaoDto);
    }

    @Get()
    @ApiOperation({summary: 'Consultar acomodações.'})
    async findAll(): Promise<any[]> {
        return this.acomodacoesService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Consultar uma acomodação.'})
    async findOne(@Param('id') id: number): Promise<any>{
        return this.acomodacoesService.findOne(id);
    }

    @Put (':id')
    @ApiOperation({summary: 'Atualizar uma acomodação.'})
    async update(
        @Param('id') id:number,
        @Body() UpdateAcomodacaoDto: UpdateAcomodacaoDto,
    ): Promise<any> {
        return this.acomodacoesService.update(id, UpdateAcomodacaoDto);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Excluir uma acomodação.'})
    async delete(@Param('id') id: number): Promise<void> {
       return this.acomodacoesService.delete(id);
    }
    
}
