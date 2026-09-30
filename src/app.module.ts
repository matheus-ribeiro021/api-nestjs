import { Module } from '@nestjs/common';
import { AlunosModule } from './alunos/alunos.module.js';
import { ProfessoresModule } from './professores/professores.module.js';

@Module({
  imports: [
    AlunosModule,
    ProfessoresModule,
  ],
})
export class AppModule {}