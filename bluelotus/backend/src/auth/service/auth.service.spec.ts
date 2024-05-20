jest.mock("src/usuario/entity/usuario.entity", () => {
  return { Usuario: class Usuario {} };
});

import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { Usuario } from "src/usuario/entity/usuario.entity";

const usuarioRepository = {
  findOne: jest.fn(),
};

const jwtService = {
  sign: jest.fn().mockReturnValue("mockedJwtToken"),
  verify: jest.fn(),
  decode: jest.fn(),
};

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(Usuario),
          useValue: Usuario,
        },
        {
          provide: JwtService,
          useValue: jwtService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it("deve estar definido", () => {
    expect(service).toBeDefined();
  });

  describe("validateUsuario", () => {
    it("deve retornar dados do usuário sem a senha se o email e a senha forem válidos",
     async () => {
      const usuario = {
        id_usuario: 1,
        nome: "Test User",
        email: "test@example.com",
        senha: await bcrypt.hash("password", 10),
      };
      usuarioRepository.findOne.mockResolvedValue(usuario);

      const result = await service.validateUsuario("test@example.com", "password");
      expect(result).toEqual({
        id_usuario: 1,
        nome: "Test User",
        email: "test@example.com",
      });
    });
})
})
