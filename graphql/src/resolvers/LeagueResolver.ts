import { wrap } from '@mikro-orm/core';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import League from '../entities/League';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperLeague } from '../types';

@Resolver()
export default class LeagueResolver {
  @Authorized('ADMIN')
  @Mutation(() => League)
  async createLeague(
    @Arg('sleeperLeagueId') sleeperLeagueId: string,
    @Ctx() ctx: GraphQLContext,
  ): Promise<League> {
    const response = await Axios.get<SleeperLeague>(`/v1/league/${sleeperLeagueId}`);
    const league = response.data;
    const tier = league.name === 'Champions League' ? 1 : 2;
    const newLeague = new League(
      league.name,
      league.season,
      league.league_id,
      league.draft_id,
      tier,
    );
    await ctx.em.persistAndFlush(newLeague);
    return newLeague;
  }

  @Authorized('ADMIN')
  @Mutation(() => Boolean)
  async deleteLeague(
    @Arg('sleeperLeagueId') sleeperLeagueId: string,
    @Ctx() ctx: GraphQLContext,
  ): Promise<boolean> {
    const league = await ctx.em.findOneOrFail(League, { sleeperLeagueId });
    await ctx.em.removeAndFlush(league);
    return true;
  }

  @Query(() => [League])
  async leagues(@Ctx() ctx: GraphQLContext): Promise<League[]> {
    const leagues = await ctx.em.find(League, {});
    return leagues;
  }

  @Authorized('ADMIN')
  @Mutation(() => League)
  async updateLeague(
    @Arg('sleeperLeagueId') sleeperLeagueId: string,
    @Ctx() ctx: GraphQLContext,
  ): Promise<League> {
    const league = await ctx.em.findOneOrFail(League, { sleeperLeagueId });
    const response = await Axios.get<SleeperLeague>(`/v1/league/${sleeperLeagueId}`);
    const sleeperLeague = response.data;
    const tier = sleeperLeague.name === 'Champions League' ? 1 : 2;
    wrap(league).assign({
      name: sleeperLeague.name,
      season: sleeperLeague.season,
      sleeperLeagueId: sleeperLeague.league_id,
      sleeperDraftId: sleeperLeague.draft_id,
      tier,
    });
    await ctx.em.persistAndFlush(league);
    return league;
  }
}
