import { RouteOptions } from 'fastify';
import * as teamsController from '../controller/teams';
import { getTeamsSchema, setTeamSchema } from '../schemas/teams';

const getTeamsRoute: RouteOptions = {
  method: 'GET',
  url: '/teams',
  handler: teamsController.getAllTeams,
  schema: getTeamsSchema,
};
const setTeamRoute: RouteOptions = {
  method: 'POST',
  url: '/teams',
  handler: teamsController.setTeam,
  schema: setTeamSchema,
};

const routes = [getTeamsRoute, setTeamRoute];

export default routes;
