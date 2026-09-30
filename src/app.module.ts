import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  AlunosModule,
} from './alunos/alunos.module.js';

import {
  ProfessoresModule,
} from './professores/professores.module.js';

import {
  DisciplinasModule,
} from './disciplinas/disciplinas.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
  ],
})
export class AppModule {}