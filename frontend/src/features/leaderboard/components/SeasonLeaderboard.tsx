import useSeasonLeaderboard from '../hooks/useSeasonLeaderboard';
import { SeasonLeaderboardTable } from './SeasonLeaderboardTable';

const SeasonLeaderboard = () => {
  const { status, data, error, isFetching } = useSeasonLeaderboard();

  if (!data) return <div>Loading...</div>;

  return <SeasonLeaderboardTable data={data} />;
};

export { SeasonLeaderboard };
