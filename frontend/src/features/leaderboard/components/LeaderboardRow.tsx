import { Box, Center, Flex, SimpleGrid, Spacer } from '@chakra-ui/react';
import { LeagueName } from './LeagueName';
import { StandingsRow } from '../types';

interface Props {
  data: StandingsRow;
}

const LeaderboardRow: React.FC<Props> = ({ data }) => {
  const { rank, name, leagueName, weekPf, weekPa, seasonPf, seasonPa } = data;

  return (
    <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
      <Flex>
        <Center w={10} mr={4} bg="brand.400">
          {rank}
        </Center>
        <Box>{name}</Box>
        <Spacer />
        <Box>
          <LeagueName leagueName={leagueName} />
        </Box>
      </Flex>
      <Flex>
        <Box w={1 / 4}>{weekPf}</Box>
        <Box w={1 / 4}>{weekPa}</Box>
        <Box w={1 / 4}>{seasonPf}</Box>
        <Box w={1 / 4}>{seasonPa}</Box>
      </Flex>
    </SimpleGrid>
  );
};

export { LeaderboardRow };
