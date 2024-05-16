import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controller';
import { UsuarioService } from './service/usuario.service';
import { Usuario } from './entity/usuario.entity';
import { Perfil } from './entity/perfil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilService } from './service/perfil.service';
import { PerfilController } from './controller/perfil.controller';
import { Reserva } from './entity/reserva.entity';
import { ReservaService } from './service/reserva.service';
import { ReservaController } from './controller/reserva.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Perfil, Reserva])],
  providers: [UsuarioService, PerfilService, ReservaService],
  controllers: [UsuarioController, PerfilController, ReservaController]
})
export class UsuarioModule {}
