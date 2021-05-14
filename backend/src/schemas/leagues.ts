import * as leaguesController from '../controller/leagues';

const getLeagueSchema = {
  response: {
    '2xx': leaguesController.League,
  },
};
const getLeaguesSchema = {
  response: {
    '2xx': leaguesController.Leagues,
  },
};

export { getLeagueSchema, getLeaguesSchema };
