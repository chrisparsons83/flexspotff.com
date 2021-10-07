import { QueryOrder, wrap } from '@mikro-orm/core';
import { Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import League from '../entities/League';
import Team from '../entities/Team';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperRoster, SleeperUser } from '../types';

@Resolver()
export default class TeamResolver {
  @Authorized('ADMIN')
  @Mutation(() => Boolean)
  async createAllTeams(@Ctx() ctx: GraphQLContext): Promise<boolean> {
    const leagues = await ctx.em.find(League, {});

    for (const league of leagues) {
      const { sleeperLeagueId } = league;

      // eslint-disable-next-line no-await-in-loop
      const responseRosters = await Axios.get<SleeperRoster[]>(
        `/v1/league/${sleeperLeagueId}/rosters`,
      );
      const rosters = responseRosters.data;

      // eslint-disable-next-line no-await-in-loop
      const responseUsers = await Axios.get<SleeperUser[]>(`/v1/league/${sleeperLeagueId}/users`);
      const users = responseUsers.data;

      for (const roster of rosters) {
        const user = users.find((x) => roster.owner_id === x.user_id);
        const name = user?.display_name || 'Unknown';
        const newTeam = new Team(name, league);
        newTeam.wins = roster.settings.wins;
        newTeam.ties = roster.settings.ties;
        newTeam.losses = roster.settings.losses;
        newTeam.rosterId = roster.roster_id;
        newTeam.sleeperOwnerId = roster.owner_id;
        newTeam.pointsFor = (100 * roster.settings.fpts + roster.settings.fpts_decimal) / 100;
        newTeam.pointsAgainst =
          (100 * roster.settings.fpts_against + roster.settings.fpts_against_decimal) / 100;
        ctx.em.persist(newTeam);
      }
    }
    await ctx.em.flush();

    return true;
  }

  @Query(() => [Team])
  async teams(@Ctx() ctx: GraphQLContext): Promise<Team[]> {
    const teams = await ctx.em.find(Team, {}, ['league'], { pointsFor: QueryOrder.DESC });
    return teams;
  }

  @Authorized('ADMIN')
  @Mutation(() => Boolean)
  async updateAllTeams(@Ctx() ctx: GraphQLContext): Promise<boolean> {
    const leagues = await ctx.em.find(League, {});

    for (const league of leagues) {
      const { sleeperLeagueId } = league;

      // eslint-disable-next-line no-await-in-loop
      const responseRosters = await Axios.get<SleeperRoster[]>(
        `/v1/league/${sleeperLeagueId}/rosters`,
      );
      const rosters = responseRosters.data;

      // eslint-disable-next-line no-await-in-loop
      const responseUsers = await Axios.get<SleeperUser[]>(`/v1/league/${sleeperLeagueId}/users`);
      const users = responseUsers.data;

      for (const roster of rosters) {
        const user = users.find((x) => roster.owner_id === x.user_id);
        const name = user?.display_name || 'Unknown';
        // eslint-disable-next-line no-await-in-loop
        const newTeam = await ctx.em.findOneOrFail(Team, { sleeperOwnerId: roster.owner_id });
        wrap(newTeam).assign({
          name,
          wins: roster.settings.wins,
          ties: roster.settings.ties,
          losses: roster.settings.losses,
          pointsFor: (100 * roster.settings.fpts + roster.settings.fpts_decimal) / 100,
          pointsAgainst:
            (100 * roster.settings.fpts_against + roster.settings.fpts_against_decimal) / 100,
          rosterId: roster.roster_id,
        });
        ctx.em.persist(newTeam);
      }
    }
    await ctx.em.flush();

    return true;
  }
}
