/* eslint-disable camelcase */
import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { FastifyRequest, FastifyReply } from 'fastify';

export type DiscordUser = {
  id: string;
  username: string;
  avatar?: string;
  discriminator: string;
  public_flags?: number;
  flags?: number;
  banner?: string;
  banner_color?: number;
  accent_color?: number;
  locale?: string;
  mfa_enabled?: boolean;
  premium_type?: number;
};

export interface GraphQLContext {
  request: FastifyRequest;
  reply: FastifyReply;
  em: EntityManager<IDatabaseDriver<Connection>>;
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

export type FlexSpotToken = {
  userId: number;
  iat: number;
  exp: number;
};
