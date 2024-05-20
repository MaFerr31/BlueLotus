import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from '../usuario/usuario.module'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entity/usuario.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthService } from './service/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), 
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: '60m' },
    }),
    UsuarioModule,
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}