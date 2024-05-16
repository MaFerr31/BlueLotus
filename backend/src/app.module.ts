import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AcomodacoesModule } from './acomodacoes/acomodacoes.module';
import { AuthModule } from './auth/auth.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { DocumentoModule } from './documento/documento.module';

@Module({
  imports: [DatabaseModule, UsuarioModule, AcomodacoesModule, AuthModule, PagamentoModule, DocumentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
