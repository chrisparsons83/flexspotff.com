import dotenv from 'dotenv';
import { Options } from '@mikro-orm/core';

import BaseEntity from './entities/BaseEntity';
import League from './entities/League';
import PodcastEpisode from './entities/PodcastEpisode';
import User from './entities/User';

dotenv.config();

const config: Options = {
  dbName: process.env.DB_NAME,
  debug: true,
  entities: [BaseEntity, League, PodcastEpisode, User],
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
