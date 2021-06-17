import dotenv from 'dotenv';
import { Options } from '@mikro-orm/core';

import BaseEntity from './entities/BaseEntity';
import League from './entities/League';

dotenv.config();

const config: Options = {
  dbName: process.env.DB_NAME,
  entities: [BaseEntity, League],
  host: process.env.DB_HOST,
  migrations: {
    path: 'src/migrations/',
    tableName: 'migrationsHistory',
    transactional: true,
  },
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  type: 'postgresql',
  user: process.env.DB_USER,
};

export default config;
