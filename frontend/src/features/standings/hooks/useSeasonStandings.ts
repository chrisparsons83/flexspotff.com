import { useQuery } from 'react-query';
import { getStandings } from '../api';

const useSeasonStandings = () => useQuery('seasonStandings', getStandings);

export default useSeasonStandings;
