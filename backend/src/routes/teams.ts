// import { RouteOptions } from 'fastify';
import { FastifyPluginAsync } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import * as teamsController from '../controller/teams';
import { getTeamSchema, getTeamsSchema, setTeamSchema } from '../schemas/teams';

const teams: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.route({
    method: 'GET',
    url: '/teams',
    schema: getTeamsSchema,
    handler: teamsController.getAllTeams,
  });

  fastify.route({
    method: 'GET',
    url: '/teams/:id',
    schema: getTeamSchema,
    handler: teamsController.getTeam,
  });

  fastify.route({
    method: 'POST',
    url: '/teams',
    schema: setTeamSchema,
    handler: teamsController.setTeam,
  });
};

export default fastifyPlugin(teams);
