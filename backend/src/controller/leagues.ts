import { Static, Type } from '@sinclair/typebox';
import { BadRequest, NotFound } from 'http-errors';
import { FastifyInstance } from 'fastify';

import LeagueEntity from '../entities/League';

// TODO: Get rid of the Type.Any() here.
const League = Type.Object({
  createdAt: Type.Any(),
  updatedAt: Type.Any(),
  isActive: Type.Boolean(),
  name: Type.String(),
  season: Type.Number(),
  sleeperUrl: Type.String(),
  _id: Type.Number(),
});
const Leagues = Type.Array(League);
type LeagueType = Static<typeof League>;
type LeaguesType = Static<typeof Leagues>;

const getAllLeagues = async function getAllLeagues(this: FastifyInstance): Promise<LeagueType[]> {
  const leagues = await this.mikroorm.em.find(LeagueEntity, {});
  return leagues;
};

// TODO: Hook up to param.
const getLeague = async function getLeague(this: FastifyInstance): Promise<LeagueType | null> {
  try {
    const { id } = { id: 3 };
    const league = await this.mikroorm.em.findOne(LeagueEntity, id);

    if (!league) {
      throw new NotFound();
    }

    return league;
  } catch (e) {
    throw new BadRequest(e);
  }
};

// TODO: Get information from POST.
const setLeague = async function setLeague(this: FastifyInstance): Promise<LeagueType> {
  const newLeague = new LeagueEntity(
    'Admiral',
    2020,
    'https://sleeper.app/leagues/601317479402237952',
  );
  await this.mikroorm.em.persistAndFlush(newLeague);
  return newLeague;
};

export { getLeague, getAllLeagues, setLeague, League, Leagues, LeagueType, LeaguesType };
