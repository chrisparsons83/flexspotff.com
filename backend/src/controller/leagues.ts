import { Static, Type } from '@sinclair/typebox';

const League = Type.Object({
  id: Type.Number(),
  season: Type.Number(),
  name: Type.String(),
});
const Leagues = Type.Array(League);
type LeagueType = Static<typeof League>;
type LeaguesType = Static<typeof Leagues>;

// TODO: Hook this up to Mikro-ORM
const leagues: LeagueType[] = [
  {
    id: 1,
    season: 2018,
    name: 'Test name',
  },
];

const getAllLeagues = async (): Promise<LeagueType[]> => {
  return leagues;
};

const getLeague = async (): Promise<LeagueType> => {
  return leagues[0];
};

const setLeague = async (): Promise<LeagueType> => {
  return leagues[0];
};

export { getLeague, getAllLeagues, setLeague, League, Leagues, LeagueType, LeaguesType };
