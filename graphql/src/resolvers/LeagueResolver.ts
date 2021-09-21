import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperLeague } from '../types';
import League from '../entities/League';

@Resolver()
export default class LeagueResolver {
  @Mutation(() => Boolean)
  async createLeague(
    @Arg('sleeperLeagueId') sleeperLeagueId: string,
    @Ctx() ctx: GraphQLContext,
  ): Promise<boolean> {
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
    return true;
  }
}
