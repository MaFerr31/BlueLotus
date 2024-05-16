import { Controller, Body, Post, Get, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { PerfilService } from '../service/perfil.service';
import { CreatePerfilDto, UpdatePerfilDto } from '../dto/perfil.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('perfil')
@ApiTags('Perfil')
export class PerfilController {
    constructor(private readonly perfilService: PerfilService) {}
    

    @Post()
    @ApiOperation({summary:"Adicionar novo perfil."})
    async create(@Body() CreatePerfilDto: CreatePerfilDto) {
        return await this.perfilService.create(CreatePerfilDto);
    }

    @Get()
    @ApiOperation({summary:"Consultar perfils."})
    async findAll() {
        return await this.perfilService.findAll();
    }

    @Get(":id")
    @ApiOperation({summary:"Consultar um perfil."})
    async findOne (@Param("id") id:number){
        return await this.perfilService.findOne(id);
    }

    @Put(":id")
    @ApiOperation({summary:"Atualizar um perfil."})
    async update(
        @Param("id") id: number,
        @Body() updatePerfilDto: UpdatePerfilDto
    ) {
        return await this.perfilService.update(id, updatePerfilDto);
    }

    @Delete(":id")
    @ApiOperation({summary:"Excluir um perfil."})
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param("id") id: number){
        return await this.perfilService.remove(id);
    }
}
