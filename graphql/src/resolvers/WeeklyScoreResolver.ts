import { QueryOrder, wrap } from '@mikro-orm/core';
import { Arg, Authorized, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import League from '../entities/League';
import Team from '../entities/Team';
import Week from '../entities/Week';
import WeeklyScore from '../entities/WeeklyScore';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperMatchup } from '../types';

@Resolver()
export default class WeeklyScoreResolver {
  @Authorized('ADMIN')
  @Mutation(() => Boolean)
  async createWeeklyScores(
    @Arg('week', () => Int) weekNumber: number,
    @Ctx() ctx: GraphQLContext,
  ): Promise<boolean> {
    const leagues = await ctx.em.find(League, {});
    const week = await ctx.em.findOneOrFail(Week, { weekNumber });
    const teams = await ctx.em.find(Team, {});

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

  @Authorized('ADMIN')
  @Mutation(() => Boolean)
  async updateWeeklyScores(
    @Arg('week', () => Int) weekNumber: number,
    @Ctx() ctx: GraphQLContext,
  ): Promise<boolean> {
    const leagues = await ctx.em.find(League, {});

    for (const league of leagues) {
      const { sleeperLeagueId } = league;

      // eslint-disable-next-line no-await-in-loop
      const responseMatchups = await Axios.get<SleeperMatchup[]>(
        `/v1/league/${sleeperLeagueId}/matchups/${weekNumber}`,
      );
      const matchups = responseMatchups.data;

      for (const matchup of matchups) {
        // Get current matchup
        // eslint-disable-next-line no-await-in-loop
        const weeklyScore = await ctx.em.findOneOrFail(
          WeeklyScore,
          {
            team: {
              rosterId: matchup.roster_id,
              league: {
                sleeperLeagueId,
              },
            },
            week: {
              weekNumber,
            },
          },
          ['team'],
        );
        wrap(weeklyScore).assign({ points: matchup.points });
        ctx.em.persist(weeklyScore);
      }
    }
    await ctx.em.flush();

    return true;
  }

  @Query(() => [WeeklyScore])
  async weeklyScores(
    @Arg('week', () => Int) weekNumber: number,
    @Ctx() ctx: GraphQLContext,
  ): Promise<WeeklyScore[]> {
    const weeklyScores = await ctx.em.find(WeeklyScore, { week: { weekNumber } }, ['team.league'], {
      points: QueryOrder.DESC,
      team: {
        name: QueryOrder.ASC,
      },
    });
    return weeklyScores;
  }
}
