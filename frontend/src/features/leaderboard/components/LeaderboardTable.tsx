import { LeaderboardHeader } from '..';
import { SeasonLeaderboardResponse } from '../types';
import { LeaderboardTableRow } from './LeaderboardRow';

interface Props {
  data: SeasonLeaderboardResponse;
}

const LeaderboardTable: React.FC<Props> = ({ data }) => {
  const { teams: results } = data;

  return (
    <div>
      <LeaderboardHeader />
      {results.map((result, zeroRank) => (
        <LeaderboardTableRow data={result} rank={zeroRank + 1} key={result.name} />
      ))}
    </div>
  );
};

export { LeaderboardTable };
