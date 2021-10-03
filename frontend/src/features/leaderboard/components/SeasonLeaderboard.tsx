import useSeasonLeaderboard from '../hooks/useSeasonLeaderboard';
import { LeaderboardTable } from './LeaderboardTable';

const SeasonLeaderboard = () => {
  const { status, data, error, isFetching } = useSeasonLeaderboard();

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <LeaderboardTable data={data} />
    </>
  );
};

export { SeasonLeaderboard };
