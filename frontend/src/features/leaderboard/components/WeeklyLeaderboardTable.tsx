import { WeeklyLeaderboardHeader, WeeklyLeaderboardTableRow } from '..';
import { WeeklyLeaderboardResponse } from '../types';

interface Props {
  data: WeeklyLeaderboardResponse;
}

const WeeklyLeaderboardTable: React.FC<Props> = ({ data }) => {
  const { weeklyScores: results } = data;

  console.log(results);

  return (
    <div>
      <WeeklyLeaderboardHeader />
      {results.map((result, zeroRank) => (
        <WeeklyLeaderboardTableRow data={result} rank={zeroRank + 1} key={result.team.name} />
      ))}
    </div>
  );
};

export { WeeklyLeaderboardTable };
