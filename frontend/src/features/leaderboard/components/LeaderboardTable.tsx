import { StandingsRow } from '../types';
import { LeaderboardHeader } from './LeaderboardHeader';
import { LeaderboardRow } from './LeaderboardRow';

const results: StandingsRow[] = [
  {
    rank: 21,
    name: 'christhrowrocks',
    leagueName: 'Admiral',
    weekPf: 180.2,
    weekPa: 160.6,
    seasonPf: 1038.85,
    seasonPa: 1080.25,
  },
  {
    rank: 22,
    name: 'Bootz',
    leagueName: 'Champions',
    weekPf: 179.1,
    weekPa: 144.45,
    seasonPf: 1221.1,
    seasonPa: 1140.55,
  },
  {
    rank: 23,
    name: 'Smelscifi',
    leagueName: 'Dragon',
    weekPf: 177.7,
    weekPa: 105.35,
    seasonPf: 1099.9,
    seasonPa: 1053.25,
  },
  {
    rank: 24,
    name: 'Noro',
    leagueName: 'Galaxy',
    weekPf: 177.3,
    weekPa: 125.35,
    seasonPf: 1140.0,
    seasonPa: 1003.7,
  },
  {
    rank: 25,
    name: 'Brando',
    leagueName: 'Monarch',
    weekPf: 176.3,
    weekPa: 165.35,
    seasonPf: 1177.75,
    seasonPa: 1105.05,
  },
];

const LeaderboardTable = () => {
  return (
    <div>
      <LeaderboardHeader />
      {results.map((result) => (
        <LeaderboardRow data={result} key={result.name} />
      ))}
    </div>
  );
};

export { LeaderboardTable };
