import { Box, Center, Flex, Heading, SimpleGrid, Spacer } from '@chakra-ui/react';
import { LeagueName } from '../../features/leaderboard';

const LeaderboardsPage = () => {
  return (
    <div>
      <Heading as="h1" mb={4}>
        Week 1 Leaderboard
      </Heading>
      <div>
        <SimpleGrid
          columns={[1, null, 2]}
          spacingX={10}
          spacingY={3}
          mb={2}
          p={2}
          bg="brand.300"
          fontWeight="bold"
        >
          <Flex>
            <Box w={14}>Rank</Box>
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
            <Center w={10} mr={4} bg="brand.400">
              21
            </Center>
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
            <Center w={10} mr={4} bg="brand.400">
              22
            </Center>
            <Box>Bootz</Box>
            <Spacer />
            <Box>
              <LeagueName leagueName="Champions" />
            </Box>
          </Flex>
          <Flex>
            <Box w={1 / 4}>179.10</Box>
            <Box w={1 / 4}>144.45</Box>
            <Box w={1 / 4}>1221.10</Box>
            <Box w={1 / 4}>1140.55</Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
          <Flex>
            <Center w={10} mr={4} bg="brand.400">
              23
            </Center>
            <Box>Smelscifi</Box>
            <Spacer />
            <Box>
              <LeagueName leagueName="Dragon" />
            </Box>
          </Flex>
          <Flex>
            <Box w={1 / 4}>177.70</Box>
            <Box w={1 / 4}>105.35</Box>
            <Box w={1 / 4}>1099.90</Box>
            <Box w={1 / 4}>1053.25</Box>
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
          <Flex>
            <Center w={10} mr={4} bg="brand.400">
              24
            </Center>
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
        <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
          <Flex>
            <Center w={10} mr={4} bg="brand.400">
              25
            </Center>
            <Box>Brando</Box>
            <Spacer />
            <Box>
              <LeagueName leagueName="Monarch" />
            </Box>
          </Flex>
          <Flex>
            <Box w={1 / 4}>176.30</Box>
            <Box w={1 / 4}>165.35</Box>
            <Box w={1 / 4}>1177.75</Box>
            <Box w={1 / 4}>1105.05</Box>
          </Flex>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default LeaderboardsPage;