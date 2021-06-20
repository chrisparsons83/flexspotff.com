import { RouteOptions } from 'fastify';
import * as teamsController from '../controller/teams';
import { setTeamSchema } from '../schemas/teams';

const setTeamRoute: RouteOptions = {
  method: 'POST',
  url: '/teams',
  handler: teamsController.setTeam,
  schema: setTeamSchema,
};

const routes = [setTeamRoute];

export default routes;
