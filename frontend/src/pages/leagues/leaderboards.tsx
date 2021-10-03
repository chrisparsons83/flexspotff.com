import { Box, Center, Flex, Heading, SimpleGrid, Spacer } from '@chakra-ui/react';
import { Leaderboard } from '../../features/leaderboard';

const LeaderboardsPage = () => {
  return (
    <div>
      <Heading as="h1" mb={4}>
        Season Leaderboard
      </Heading>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardsPage;
