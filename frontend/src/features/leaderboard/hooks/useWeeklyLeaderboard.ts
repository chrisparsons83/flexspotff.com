import { useQuery } from 'react-query';
import { getWeeklyLeaderboard } from '../api';

const useWeeklyLeaderboard = () => useQuery('weeklyLeaderboard', getWeeklyLeaderboard);

export default useWeeklyLeaderboard;
