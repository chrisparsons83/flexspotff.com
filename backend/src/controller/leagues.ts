import { Static, Type } from '@sinclair/typebox';
import { BadRequest, NotFound } from 'http-errors';
import { FastifyInstance, FastifyRequest } from 'fastify';

import LeagueEntity from '../entities/League';

// TODO: Get rid of the Type.Any() here.
// TODO: Clean this mess up - this feels disorganized. Maybe link with LeagueEntity somehow?
const League = Type.Object({
  createdAt: Type.Any(),
  updatedAt: Type.Any(),
  isActive: Type.Boolean(),
  name: Type.String(),
  season: Type.Number(),
  sleeperId: Type.String(),
  tier: Type.Number(),
  _id: Type.Number(),
});
const Leagues = Type.Array(League);
const LeagueBody = Type.Object({
  name: Type.String(),
  season: Type.Number(),
  sleeperId: Type.String(),
  tier: Type.Optional(Type.Number()),
});
type LeagueType = Static<typeof League>;
type LeaguesType = Static<typeof Leagues>;

const getAllLeagues = async function getAllLeagues(this: FastifyInstance): Promise<LeagueType[]> {
  const leagues = await this.mikroorm.em.find(LeagueEntity, {});
  return leagues;
};

type GetLeagueRequest = FastifyRequest<{
  Params: { id: number };
}>;

const getLeague = async function getLeague(
  this: FastifyInstance,
  req: GetLeagueRequest,
): Promise<LeagueType | null> {
  try {
    const { id } = req.params;
    const league = await this.mikroorm.em.findOne(LeagueEntity, id);

    if (!league) {
      throw new NotFound();
    }

    return league;
  } catch (e) {
    throw new BadRequest(e);
  }
};

type SetLeagueRequest = FastifyRequest<{
  Body: {
    name: string;
    season: number;
    sleeperId: string;
    tier?: number;
  };
}>;

const setLeague = async function setLeague(
  this: FastifyInstance,
  req: SetLeagueRequest,
): Promise<LeagueType> {
  const { name, season, sleeperId, tier } = req.body;
  const newLeague = new LeagueEntity(name, season, sleeperId, tier);
  await this.mikroorm.em.persistAndFlush(newLeague);
  return newLeague;
};

export {
  getLeague,
  getAllLeagues,
  setLeague,
  League,
  Leagues,
  LeagueBody,
  LeagueType,
  LeaguesType,
};
