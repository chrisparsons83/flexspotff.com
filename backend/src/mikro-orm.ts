import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { MikroORM } from '@mikro-orm/core';

import config from './mikro-orm.config';

declare module 'fastify' {
  interface FastifyInstance {
    orm: MikroORM;
  }
}

export interface FastifyMikroORMPluginOptions {
  type: string;
}

const mikroOrmConnector: FastifyPluginAsync<FastifyMikroORMPluginOptions> = async (fastify) => {
  const orm = await MikroORM.init(config);

  // Decorate
  fastify.decorate('orm', orm).addHook('onClose', async (instance) => {
    await instance.orm.close();
  });
};

export default fastifyPlugin(mikroOrmConnector);
