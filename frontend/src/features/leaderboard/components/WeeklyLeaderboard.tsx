import { useState } from 'react';
import { Select } from '@chakra-ui/react';

import { WeeklyLeaderboardTable } from '..';
import useWeeklyLeaderboard from '../hooks/useWeeklyLeaderboard';

const WeeklyLeaderboard = () => {
  const [week, setWeek] = useState(10);
  const { status, data, error, isFetching } = useWeeklyLeaderboard({ week });

  const weeksArray = Array.from({ length: 17 }, (_x, i) => i + 1);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Select value={week} onChange={(e) => setWeek(+e.currentTarget.value)} mb={4}>
        {weeksArray.map((week) => (
          <option value={week}>Week {week}</option>
        ))}
      </Select>
      <WeeklyLeaderboardTable data={data} />
    </>
  );
};

export { WeeklyLeaderboard };
