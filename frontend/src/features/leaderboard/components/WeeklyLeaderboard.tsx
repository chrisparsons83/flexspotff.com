import { WeeklyLeaderboardTable } from '..';
import useWeeklyLeaderboard from '../hooks/useWeeklyLeaderboard';

const WeeklyLeaderboard = () => {
  const { status, data, error, isFetching } = useWeeklyLeaderboard();

  if (!data) return <div>Loading...</div>;

  console.log(data);

  return <WeeklyLeaderboardTable data={data} />;
};

export { WeeklyLeaderboard };
