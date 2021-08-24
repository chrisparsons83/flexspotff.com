import { Box, Center, Flex, SimpleGrid, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { LeagueName } from './LeagueName';
import { StandingsRow } from '../types';

interface Props {
  data: StandingsRow;
}

const LeaderboardRow: React.FC<Props> = ({ data }) => {
  const { rank, name, leagueName, weekPf, weekPa, seasonPf, seasonPa } = data;
  const breakpoint = useBreakpointValue({ base: null, md: 'md' });

  const sxWeek = {
    '&:before': {
      content: '"W: "',
    },
    '&:after': {
      content: '" –\\00a0"',
    },
  };
  const sxSeason = {
    '&:before': {
      content: '"S: "',
    },
    '&:after': {
      content: '" –\\00a0"',
    },
  };

  const pointsWidth = breakpoint === 'md' ? 0.25 : null;
  const showSpacer = breakpoint !== 'md' ? <Spacer /> : null;
  const weekBefore = breakpoint !== 'md' ? sxWeek : null;
  const weekBetween = breakpoint !== 'md' ? sxSeason : null;

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
        <Box w={pointsWidth} sx={weekBefore}>
          {weekPf}
        </Box>
        <Box w={pointsWidth}>{weekPa}</Box>
        {showSpacer}
        <Box w={pointsWidth} sx={weekBetween}>
          {seasonPf}
        </Box>
        <Box w={pointsWidth}>{seasonPa}</Box>
      </Flex>
    </SimpleGrid>
  );
};

export { LeaderboardRow };
