import { Controller, Body, Post, Get, Put, Param, Delete, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { PerfilService } from '../service/perfil.service';
import { CreatePerfilDto, UpdatePerfilDto } from '../dto/perfil.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';

@UseGuards(JwtAuthGuard)
@Controller('perfil')
@ApiTags('Perfil')
export class PerfilController {
    constructor(private readonly perfilService: PerfilService) {}
    

    @Post()
    @ApiOperation({summary:"Adicionar novo perfil."})
    async create(@Request() req, @Body() createPerfilDto: CreatePerfilDto) {
        createPerfilDto.usuarioId = req.user.usuarioId
        return await this.perfilService.create(createPerfilDto);
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
