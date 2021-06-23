import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import * as leaguesController from '../controller/leagues';
import { getLeaguesSchema, getLeagueSchema, setLeagueSchema } from '../schemas/leagues';

const leagues: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.route({
    method: 'GET',
    url: '/leagues',
    schema: getLeaguesSchema,
    handler: leaguesController.getAllLeagues,
  });

  fastify.route({
    method: 'GET',
    url: '/leagues/:id',
    schema: getLeagueSchema,
    handler: leaguesController.getLeague,
  });

  fastify.route({
    method: 'POST',
    url: '/leagues',
    schema: setLeagueSchema,
    handler: leaguesController.setLeague,
  });
};

export default fastifyPlugin(leagues);
