
import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Autenticador')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({summary:"Autenticação de login."})
  async login(@Body() loginDto: {email: string, senha: string}) {
    const usuario = await this.authService.validateUsuario(loginDto.email, loginDto.senha);
    if (!usuario) {
      throw new NotFoundException('Credenciais inválidas');
    }
    return this.authService.login(usuario);
  }

}
