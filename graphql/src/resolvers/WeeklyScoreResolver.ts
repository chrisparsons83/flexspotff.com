import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import League from '../entities/League';
import Team from '../entities/Team';
import Week from '../entities/Week';
import WeeklyScore from '../entities/WeeklyScore';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperMatchup } from '../types';

@Resolver()
export default class WeeklyScoreResolver {
  @Mutation(() => Boolean)
  async createWeeklyScores(
    @Arg('week') weekNumber: number,
    @Ctx() ctx: GraphQLContext,
  ): Promise<boolean> {
    const leagues = await ctx.em.find(League, {});
    const week = await ctx.em.findOneOrFail(Week, { weekNumber });
    const teams = await ctx.em.find(Team, {});
    console.log(teams);

    for (const league of leagues) {
      const { sleeperLeagueId } = league;

      // eslint-disable-next-line no-await-in-loop
      const responseMatchups = await Axios.get<SleeperMatchup[]>(
        `/v1/league/${sleeperLeagueId}/matchups/${week.weekNumber}`,
      );
      const matchups = responseMatchups.data;

      for (const matchup of matchups) {
        const team = teams.find(
          (x) => x.rosterId === matchup.roster_id && x.league.sleeperLeagueId === sleeperLeagueId,
        );

        if (team) {
          const weeklyScore = new WeeklyScore(matchup.matchup_id, matchup.points, team, week);
          ctx.em.persist(weeklyScore);
        }
      }
    }
    await ctx.em.flush();

    return true;
  }
}
