import {
  Injectable,
} from '@nestjs/common';

import {
  PrismaService,
} from '../prisma/prisma.service.js';

@Injectable()
export class DisciplinasRepository {
  constructor(
    private readonly prisma:
      PrismaService,
  ) {}

  findAll() {
    return this.prisma.disciplina.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  findById(id: number) {
    return this.prisma.disciplina.findUnique({
      where: {
        id,
      },
    });
  }

  create(
    nome: string,
    cargaHoraria: number,
  ) {
    return this.prisma.disciplina.create({
      data: {
        nome,
        cargaHoraria,
      },
    });
  }

  update(
    id: number,
    nome: string,
    cargaHoraria: number,
  ) {
    return this.prisma.disciplina.update({
      where: {
        id,
      },

      data: {
        nome,
        cargaHoraria,
      },
    });
  }

  delete(id: number) {
    return this.prisma.disciplina.delete({
      where: {
        id,
      },
    });
  }
}