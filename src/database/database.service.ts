import {
  Injectable,
  OnModuleDestroy,
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import {
  createPool,
  Pool,
} from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private readonly pool: Pool;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.pool = createPool({
      host: this.configService.get<string>('DB_HOST'),
      port: Number(
        this.configService.get<string>('DB_PORT'),
      ),
      user: this.configService.get<string>('DB_USER'),
      password:
        this.configService.get<string>('DB_PASSWORD'),
      database:
        this.configService.get<string>('DB_NAME'),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  getPool(): Pool {
    return this.pool;
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}