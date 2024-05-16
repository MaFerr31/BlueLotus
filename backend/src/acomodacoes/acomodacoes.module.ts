import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcomodacoesController } from './controller/acomodacoes.controller';
import { AcomodacoesService } from './service/acomodacoes.service';
import { Acomodacoes } from './entity/acomodacoes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Acomodacoes])],
    providers: [AcomodacoesService],
    controllers: [AcomodacoesController]
})
export class AcomodacoesModule { }
