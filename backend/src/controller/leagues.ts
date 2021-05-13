import { Static, Type } from '@sinclair/typebox';

const League = Type.Object({
  id: Type.Number(),
  season: Type.Number(),
});
const Leagues = Type.Array(League);
type LeagueType = Static<typeof League>;
type LeaguesType = Static<typeof Leagues>;

const leagues: LeagueType[] = [
  {
    id: 1,
    season: 2018,
  },
];

const getAllLeagues = async (): Promise<LeagueType[]> => {
  return leagues;
};

const getLeague = async (): Promise<LeagueType> => {
  return leagues[0];
};

export { getLeague, getAllLeagues, League, Leagues, LeagueType, LeaguesType };
