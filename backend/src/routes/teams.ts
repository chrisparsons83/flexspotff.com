import { RouteOptions } from 'fastify';
import * as teamsController from '../controller/teams';
import { getTeamSchema, getTeamsSchema, setTeamSchema } from '../schemas/teams';

const getTeamsRoute: RouteOptions = {
  method: 'GET',
  url: '/teams',
  handler: teamsController.getAllTeams,
  schema: getTeamsSchema,
};
const getTeamRoute: RouteOptions = {
  method: 'GET',
  url: '/teams/:id',
  handler: teamsController.getTeam,
  schema: getTeamSchema,
};
const setTeamRoute: RouteOptions = {
  method: 'POST',
  url: '/teams',
  handler: teamsController.setTeam,
  schema: setTeamSchema,
};

const routes = [getTeamsRoute, getTeamRoute, setTeamRoute];

export default routes;
