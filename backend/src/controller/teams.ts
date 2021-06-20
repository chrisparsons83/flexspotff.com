import { Static, Type } from '@sinclair/typebox';

const Team = Type.Object({
  name: Type.String(),
});
type TeamType = Static<typeof Team>;

const testReturn: TeamType = {
  name: 'Test Team',
};

const setTeam = async function setTeam(): Promise<TeamType> {
  return testReturn;
};

export { setTeam, Team, TeamType };
