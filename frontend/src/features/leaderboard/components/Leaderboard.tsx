import { Button, ButtonGroup } from '@chakra-ui/button';
import { useBoolean } from '@chakra-ui/react';
import { SeasonLeaderboard } from './SeasonLeaderboard';
import { WeeklyLeaderboard } from './WeeklyLeaderboard';

const Leaderboard: React.FC = () => {
  const [isSeasonLeaderboard, setIsSeasonLeaderboard] = useBoolean(false);

  const leaderboard = isSeasonLeaderboard ? <SeasonLeaderboard /> : <WeeklyLeaderboard />;

  return (
    <>
      <div>
        <ButtonGroup size="sm" isAttached mb={4}>
          <Button isActive={!isSeasonLeaderboard} onClick={setIsSeasonLeaderboard.off}>
            Weekly
          </Button>
          <Button isActive={isSeasonLeaderboard} onClick={setIsSeasonLeaderboard.on}>
            Season
          </Button>
        </ButtonGroup>
      </div>
      {leaderboard}
    </>
  );
};

export { Leaderboard };
