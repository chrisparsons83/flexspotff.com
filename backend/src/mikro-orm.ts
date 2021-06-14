import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { MikroORM } from '@mikro-orm/core';

import config from './mikro-orm.config';

declare module 'fastify' {
  interface FastifyInstance {
    mikroorm: MikroORM;
  }
}

export interface FastifyMikroORMPluginOptions {
  type: string;
}

const mikroOrmConnector: FastifyPluginAsync<FastifyMikroORMPluginOptions> = async (fastify) => {
  const mikroorm = await MikroORM.init(config);

  // Decorate
  fastify.decorate('mikroorm', mikroorm).addHook('onClose', async (instance) => {
    await instance.mikroorm.close();
  });
};

export default fastifyPlugin(mikroOrmConnector);
