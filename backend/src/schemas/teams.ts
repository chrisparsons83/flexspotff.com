import * as teamsController from '../controller/teams';

const setTeamSchema = {
  response: {
    '2xx': teamsController.Team,
  },
};

export { setTeamSchema };
