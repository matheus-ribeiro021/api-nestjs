import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class DisciplinasRepository {
  constructor(
    private readonly databaseService:
      DatabaseService,
  ) {}

  async findAll() {
    const pool =
      this.databaseService.getPool();

    const [rows] =
      await pool.query(
        `
        SELECT
          id,
          nome,
          carga_horaria
        FROM disciplinas
        `,
      );

    return rows;
  }

  async findById(id: number) {
    const pool =
      this.databaseService.getPool();

    const [rows]: any =
      await pool.query(
        `
        SELECT
          id,
          nome,
          carga_horaria
        FROM disciplinas
        WHERE id = ?
        `,
        [id],
      );

    return rows[0];
  }

  async create(
    nome: string,
    carga_horaria: number,
  ) {
    const pool =
      this.databaseService.getPool();

    const [result]: any =
      await pool.query(
        `
        INSERT INTO disciplinas (
          nome,
          carga_horaria
        )
        VALUES (?, ?)
        `,
        [
          nome,
          carga_horaria,
        ],
      );

    return this.findById(
      result.insertId,
    );
  }

  async update(
    id: number,
    nome: string,
    carga_horaria: number,
  ) {
    const pool =
      this.databaseService.getPool();

    await pool.query(
      `
      UPDATE disciplinas
      SET
        nome = ?,
        carga_horaria = ?
      WHERE id = ?
      `,
      [
        nome,
        carga_horaria,
        id,
      ],
    );
  }

  async delete(id: number) {
    const pool =
      this.databaseService.getPool();

    await pool.query(
      `
      DELETE FROM disciplinas
      WHERE id = ?
      `,
      [id],
    );
  }
}