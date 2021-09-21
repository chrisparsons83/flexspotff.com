import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperLeague } from '../types';
import League from '../entities/League';

@Resolver()
export default class LeagueResolver {
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

  @Query(() => [League])
  async leagues(@Ctx() ctx: GraphQLContext): Promise<League[]> {
    const leagues = await ctx.em.find(League, {});
    return leagues;
  }
}
