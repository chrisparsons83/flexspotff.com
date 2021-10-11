import { useQuery } from 'react-query';
import { getWeeklyLeaderboard } from '../api';

const useWeeklyLeaderboard = ({ week }: { week: number }) =>
  useQuery({
    queryKey: ['weeklyLeaderboard', week],
    queryFn: () => getWeeklyLeaderboard({ week }),
  });

export default useWeeklyLeaderboard;
