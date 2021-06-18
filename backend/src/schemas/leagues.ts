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
const setLeagueSchema = {
  body: leaguesController.LeagueBody,
  response: {
    '2xx': leaguesController.League,
  },
};

export { getLeagueSchema, getLeaguesSchema, setLeagueSchema };
