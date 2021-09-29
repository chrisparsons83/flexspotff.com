import dotenv from 'dotenv';
import { Options } from '@mikro-orm/core';

dotenv.config();

const config: Options = {
  dbName: process.env.DB_NAME,
  debug: true,
  entities: ['dist/entities/**/*.js'],
  entitiesTs: ['src/entities/**/*.ts'],
  host: process.env.DB_HOST,
  migrations: {
    path: 'src/migrations/',
    tableName: 'migrationsHistory',
    transactional: true,
  },
  password: process.env.DB_PASSWORD,
  port: 5432,
  type: 'postgresql',
  user: process.env.DB_USER,
};

export default config;
