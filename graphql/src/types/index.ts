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

export type SleeperRoster = {
  starters: string[];
  settings: {
    wins: number;
    waiver_position: number;
    waiver_budget_used: number;
    total_moves: number;
    ties: number;
    losses: number;
    ppts: number;
    ppts_decimal: number;
    fpts_decimal: number;
    fpts_against_decimal: number;
    fpts_against: number;
    fpts: number;
  };
  roster_id: number;
  reserve: string[] | null;
  players: string[];
  player_map: unknown;
  metadata: {
    streak: string;
    record: string;
  };
  owner_id: string;
  league_id: string;
  taxi: string[] | null;
  co_owners: string[] | null;
};

export type SleeperUser = {
  user_id: string;
  settings: unknown;
  metadata: {
    team_name: string;
  };
  league_id: string;
  display_name: string;
};

export type FlexSpotToken = {
  userId: number;
  iat: number;
  exp: number;
};
