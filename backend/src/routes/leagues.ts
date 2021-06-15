import { RouteOptions } from 'fastify';
import * as leaguesController from '../controller/leagues';
import { getLeagueSchema, getLeaguesSchema, setLeagueSchema } from '../schemas/leagues';

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
const setLeagueRoute: RouteOptions = {
  method: 'POST',
  url: '/leagues',
  handler: leaguesController.setLeague,
  schema: setLeagueSchema,
};

const routes = [getLeaguesRoute, getLeagueRoute, setLeagueRoute];

export default routes;
