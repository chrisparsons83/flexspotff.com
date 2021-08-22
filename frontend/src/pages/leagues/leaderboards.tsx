import { Box, Flex, Heading, SimpleGrid, Spacer } from '@chakra-ui/react';
import { LeagueName } from '../../features/leaderboard';

const LeaderboardsPage = () => {
  return (
    <div>
      <Heading as="h1">Week 1 Leaderboard</Heading>
      <div className="leaderboard">
        <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
          <Flex>
            <Box>Rank</Box>
            <Box>Manager</Box>
            <Spacer />
            <Box>League</Box>
          </Flex>
          <Flex>
            <Box w={1 / 4}>PF Week</Box>
            <Box w={1 / 4}>PA Week</Box>
            <Box w={1 / 4}>PF Season</Box>
            <Box w={1 / 4}>PA Season</Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
          <Flex>
            <Box>1.</Box>
            <Box>christhrowrocks</Box>
            <Spacer />
            <Box>
              <LeagueName leagueName="Admiral" />
            </Box>
          </Flex>
          <Flex>
            <Box w={1 / 4}>180.20</Box>
            <Box w={1 / 4}>160.6</Box>
            <Box w={1 / 4}>1038.85</Box>
            <Box w={1 / 4}>1080.25</Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
          <Flex>
            <Box>23.</Box>
            <Box>Noro</Box>
            <Spacer />
            <Box>
              <LeagueName leagueName="Galaxy" />
            </Box>
          </Flex>
          <Flex>
            <Box w={1 / 4}>177.30</Box>
            <Box w={1 / 4}>125.35</Box>
            <Box w={1 / 4}>1140.00</Box>
            <Box w={1 / 4}>1003.70</Box>
          </Flex>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default LeaderboardsPage;
