import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class AlunosRepository {
  constructor(
    private readonly databaseService: DatabaseService,
  ) {}

  async findAll() {
    const pool = this.databaseService.getPool();

    const [rows] = await pool.query(
      `
      SELECT
        id,
        nome,
        email,
        curso
      FROM alunos
      `,
    );

    return rows;
  }

  async findById(id: number) {
    const pool = this.databaseService.getPool();

    const [rows]: any = await pool.query(
      `
      SELECT
        id,
        nome,
        email,
        curso
      FROM alunos
      WHERE id = ?
      `,
      [id],
    );

    return rows[0];
  }

  async create(
    nome: string,
    email: string,
    curso: string,
  ) {
    const pool = this.databaseService.getPool();

    const [result]: any = await pool.query(
      `
      INSERT INTO alunos (
        nome,
        email,
        curso
      )
      VALUES (?, ?, ?)
      `,
      [
        nome,
        email,
        curso,
      ],
    );

    return {
      id: result.insertId,
      nome,
      email,
      curso,
    };
  }

  async update(
    id: number,
    nome: string,
    email: string,
    curso: string,
  ) {
    const pool = this.databaseService.getPool();

    const [result]: any = await pool.query(
      `
      UPDATE alunos
      SET
        nome = ?,
        email = ?,
        curso = ?
      WHERE id = ?
      `,
      [
        nome,
        email,
        curso,
        id,
      ],
    );

    if (result.affectedRows === 0) {
      return null;
    }

    return {
      id,
      nome,
      email,
      curso,
    };
  }

  async delete(id: number) {
    const pool = this.databaseService.getPool();

    const [result]: any = await pool.query(
      `
      DELETE FROM alunos
      WHERE id = ?
      `,
      [id],
    );

    return result.affectedRows > 0;
  }
}