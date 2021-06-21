import { Static, Type } from '@sinclair/typebox';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { BadRequest } from 'http-errors';

import LeagueEntity from '../entities/League';
import TeamEntity from '../entities/Team';

const NewTeam = Type.Object({
  name: Type.String(),
  leagueId: Type.Number(),
});
type NewTeamType = Static<typeof NewTeam>;
const Team = Type.Object({
  _id: Type.Number(),
  createdAt: Type.Any(),
  league: Type.Any(),
  name: Type.String(),
  updatedAt: Type.Any(),
});
const Teams = Type.Array(Team);
type TeamType = Static<typeof Team>;
type TeamsType = Static<typeof Teams>;

const getAllTeams = async function getAllTeams(this: FastifyInstance): Promise<TeamType[]> {
  const teams = await this.mikroorm.em.find(TeamEntity, {});

  return teams;
};

type SetTeamRequest = FastifyRequest<{
  Body: NewTeamType;
}>;
const setTeam = async function setTeam(
  this: FastifyInstance,
  req: SetTeamRequest,
): Promise<TeamType> {
  const { name, leagueId } = req.body;
  const league = await this.mikroorm.em.findOne(LeagueEntity, leagueId);

  if (!league) {
    throw new BadRequest('No league found with that ID.');
  }

  const newTeam = new TeamEntity(name);
  newTeam.league = league;

  await this.mikroorm.em.persistAndFlush(newTeam);

  return newTeam;
};

export { getAllTeams, setTeam, NewTeam, Team, Teams, NewTeamType, TeamType, TeamsType };
