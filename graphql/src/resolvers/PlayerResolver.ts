import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Player from '../entities/Player';
import Axios from '../lib/axios';
import { GraphQLContext, SleeperPlayers } from '../types';

@Resolver()
export default class PlayerResolver {
  @Authorized('ADMIN')
  @Mutation(() => Boolean)
  async loadPlayers(@Ctx() ctx: GraphQLContext): Promise<boolean> {
    const playersResponse = await Axios.get<SleeperPlayers>(`v1/players/nfl`);
    const players = playersResponse.data;

    for (const sleeperId of Object.keys(players)) {
      const sleeperPlayer = players[sleeperId];
      // eslint-disable-next-line no-await-in-loop
      let player = await ctx.em.findOne(Player, { sleeperId });

      if (player) {
        player.team = sleeperPlayer.team;
        player.basePosition = sleeperPlayer.position;
      }

      if (!player) {
        player = new Player(
          sleeperId,
          sleeperPlayer.first_name,
          sleeperPlayer.last_name,
          sleeperPlayer.team,
          sleeperPlayer.position,
        );
      }
      ctx.em.persist(player);
    }

    await ctx.em.flush();

    return true;
  }

  @Query(() => Player)
  async getPlayer(
    @Arg('sleeperId') sleeperId: string,
    @Ctx() ctx: GraphQLContext,
  ): Promise<Player> {
    const player = await ctx.em.findOneOrFail(Player, { sleeperId });
    return player;
  }
}
