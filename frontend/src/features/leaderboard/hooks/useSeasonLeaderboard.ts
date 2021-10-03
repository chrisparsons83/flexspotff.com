import { useQuery } from 'react-query';
import { getSeasonLeaderboard } from '../api';

const useSeasonLeaderboard = () => useQuery('seasonLeaderboard', getSeasonLeaderboard);

export default useSeasonLeaderboard;
