import * as teamsController from '../controller/teams';

const getTeamsSchema = {
  response: {
    '2xx': teamsController.Teams,
  },
};
const getTeamSchema = {
  response: {
    '2xx': teamsController.Team,
  },
};
const setTeamSchema = {
  response: {
    '2xx': teamsController.Team,
  },
};

export { getTeamsSchema, getTeamSchema, setTeamSchema };
