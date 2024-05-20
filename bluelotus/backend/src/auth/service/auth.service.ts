import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entity/usuario.entity';
import * as bcrypt from 'bcryptjs'
import { access } from 'fs';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private jwtService: JwtService,
    ) { }

    async validateUsuario(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioRepository.findOne({ where: { email } });
        if (usuario && await bcrypt.compare(senha, usuario.senha)) {
            const { senha, ...result } = usuario;
            return result;
        } 
            return null;
        }
    async login(usuario:any) {
        const payload = { usuarioname: usuario.email, sub: usuario.id_usuario};
     return {
        access_token: this.jwtService.sign(payload),
     }

    }

    

}
