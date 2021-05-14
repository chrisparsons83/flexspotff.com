import { RouteOptions } from 'fastify';
import * as leaguesController from '../controller/leagues';
import { getLeagueSchema, getLeaguesSchema } from '../schemas/leagues';

const getLeaguesRoute: RouteOptions = {
  method: 'GET',
  url: '/leagues',
  handler: leaguesController.getAllLeagues,
  schema: getLeaguesSchema,
};
const getLeagueRoute: RouteOptions = {
  method: 'GET',
  url: '/leagues/:id',
  handler: leaguesController.getLeague,
  schema: getLeagueSchema,
};

const routes = [getLeaguesRoute, getLeagueRoute];

export default routes;
