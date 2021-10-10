import { SeasonLeaderboardHeader } from '..';
import { SeasonLeaderboardResponse, WeeklyLeaderboardResponse } from '../types';
import { SeasonLeaderboardTableRow } from './SeasonLeaderboardRow';

interface Props {
  data: SeasonLeaderboardResponse;
}

const SeasonLeaderboardTable: React.FC<Props> = ({ data }) => {
  const { teams: results } = data;

  return (
    <div>
      <SeasonLeaderboardHeader />
      {results.map((result, zeroRank) => (
        <SeasonLeaderboardTableRow data={result} rank={zeroRank + 1} key={result.name} />
      ))}
    </div>
  );
};

export { SeasonLeaderboardTable };
