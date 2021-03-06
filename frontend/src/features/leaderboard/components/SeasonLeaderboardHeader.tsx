import { Box, Flex, SimpleGrid, Spacer, useBreakpointValue } from '@chakra-ui/react';

const SeasonLeaderboardHeader: React.FC = () => {
  const breakpoint = useBreakpointValue({ base: 'hidden', md: 'visible' });

  if (breakpoint === 'hidden') return null;

  return (
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
        <Box w={1 / 5}>PF</Box>
        <Box w={1 / 5}>PA</Box>
        <Box w={1 / 5}>Wins</Box>
        <Box w={1 / 5}>Losses</Box>
        <Box w={1 / 5}>Ties</Box>
      </Flex>
    </SimpleGrid>
  );
};

export { SeasonLeaderboardHeader };
