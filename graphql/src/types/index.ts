/* eslint-disable camelcase */
import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { FastifyRequest, FastifyReply } from 'fastify';

export interface GraphQLContext {
  req: FastifyRequest;
  res: FastifyReply;
  em: EntityManager<IDatabaseDriver<Connection>>;
  userId?: number;
}

export type SleeperLeague = {
  total_rosters: number;
  status: string;
  sport: string;
  settings: unknown;
  season_type: string;
  season: string;
  scoring_settings: unknown;
  roster_positions: unknown;
  previous_league_id: string;
  name: string;
  league_id: string;
  draft_id: string;
  avatar: string;
};
