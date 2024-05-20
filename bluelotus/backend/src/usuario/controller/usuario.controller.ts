import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../dto/usuario.dto';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../entity/usuario.entity';

@Controller('usuario')
@ApiTags('Usuários')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Post()
    @ApiOperation({ summary: 'Adicionar novo usuário.' })
    @ApiResponse({ status: 401, description: 'Não autorizado.' })
    @ApiResponse({ status: 404, description: 'Página não encontrada.' })
    @ApiResponse({ status: 500, description: 'Erro interno do servidor.' })
    @ApiResponse({ status: 503, description: 'Serviço não disponível.' })
    async create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return this.usuarioService.create(createUsuarioDto);
    }

    @Get()
    @ApiOperation({ summary: 'Encontrar usuário.' })
    async findAll(): Promise<any[]> {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Encontrar um usuário.' })
    async findOne(@Param('id') id: number): Promise<any> {
        return this.usuarioService.findOne(id);

    }

    @Put(':id')
    @ApiOperation({ summary: 'Atualizar um usuário.' })
    async update(
        @Param('id') id: number,
        @Body() UpdateUsuarioDto: UpdateUsuarioDto,
    ): Promise<any> {
        return this.usuarioService.update(id, UpdateUsuarioDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deletar um usuário.' })
    async delete(@Param('id') id: number): Promise<void> {
        return this.usuarioService.delete(id);
    }
}
