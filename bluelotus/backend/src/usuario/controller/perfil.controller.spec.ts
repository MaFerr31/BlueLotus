import { Test, TestingModule } from '@nestjs/testing';
import { PerfilController } from './perfil.controller';

describe('PerfilController', () => {
  let controller: PerfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilController],
    }).compile();

    controller = module.get<PerfilController>(PerfilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
