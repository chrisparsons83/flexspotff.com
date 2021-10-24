import useSeasonStandings from '../hooks/useSeasonStandings';
import { StandingsTable } from './StandingsTable';

const Standings: React.FC = () => {
  const { status, data, error, isFetching } = useSeasonStandings();

  if (!data) return <div>Loading...</div>;

  const tierOne = data.leagues.filter((league) => league.tier === 1);
  const tierTwo = data.leagues.filter((league) => league.tier === 2);

  return (
    <>
      {tierOne.map((league) => (
        <StandingsTable key={league.sleeperLeagueId} data={league} />
      ))}
      {tierTwo.map((league) => (
        <StandingsTable key={league.sleeperLeagueId} data={league} />
      ))}
    </>
  );
};

export { Standings };
