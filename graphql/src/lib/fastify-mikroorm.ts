import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { MikroORM, Options } from '@mikro-orm/core';

declare module 'fastify' {
  // eslint-disable-next-line no-unused-vars
  interface FastifyInstance {
    mikroorm: MikroORM;
  }
}

export interface FastifyMikroORMPluginOptions {
  type: string;
}

const mikroOrmConnector: FastifyPluginAsync<Options> = async (fastify, opts) => {
  const mikroorm = await MikroORM.init(opts);

  // Decorate
  fastify.decorate('mikroorm', mikroorm).addHook('onClose', async (instance) => {
    await instance.mikroorm.close();
  });
};

export default fastifyPlugin(mikroOrmConnector);
