import {
  Injectable,
} from '@nestjs/common';

import {
  PrismaService,
} from '../prisma/prisma.service.js';

@Injectable()
export class AlunosRepository {
  constructor(
    private readonly prisma:
      PrismaService,
  ) {}

  findAll(
    curso?: string,
    nome?: string,
    page = 1,
    limit = 10,
  ) {
    const skip =
      (page - 1) * limit;

    return this.prisma.aluno.findMany({
      where: {
        ...(curso
          ? {
              curso,
            }
          : {}),

        ...(nome
          ? {
              nome: {
                contains: nome,
              },
            }
          : {}),
      },

      orderBy: {
        id: 'asc',
      },

      skip,
      take: limit,
    });
  }

  findById(id: number) {
    return this.prisma.aluno.findUnique({
      where: {
        id,
      },
    });
  }

  create(
    nome: string,
    email: string,
    curso: string,
  ) {
    return this.prisma.aluno.create({
      data: {
        nome,
        email,
        curso,
      },
    });
  }

  update(
    id: number,
    nome: string,
    email: string,
    curso: string,
  ) {
    return this.prisma.aluno.update({
      where: {
        id,
      },

      data: {
        nome,
        email,
        curso,
      },
    });
  }

  patch(
    id: number,
    data: {
      nome?: string;
      email?: string;
      curso?: string;
    },
  ) {
    return this.prisma.aluno.update({
      where: {
        id,
      },

      data,
    });
  }

  delete(id: number) {
    return this.prisma.aluno.delete({
      where: {
        id,
      },
    });
  }
}