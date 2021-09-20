import { Arg, Mutation, Resolver } from 'type-graphql';
import Axios from '../lib/axios';
import mikroorm from '../lib/mikro-orm';
import { SleeperLeague } from '../types';
import League from '../entities/League';

@Resolver()
export default class LeagueResolver {
  @Mutation(() => Boolean)
  async createLeague(@Arg('sleeperLeagueId') sleeperLeagueId: string): Promise<boolean> {
    const response = await Axios.get<SleeperLeague>(`/v1/league/${sleeperLeagueId}`);
    const league = response.data;
    const newLeague = new League(league.name, league.season, league.league_id, league.draft_id);
    await (await mikroorm).em.persistAndFlush(newLeague);
    return true;
  }
}
