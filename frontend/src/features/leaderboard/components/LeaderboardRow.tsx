import { Box, Center, Flex, SimpleGrid, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { LeagueName } from './LeagueName';
import { LeaderboardRow } from '../types';

interface Props {
  data: LeaderboardRow;
  rank: number;
}

const LeaderboardTableRow: React.FC<Props> = ({ data, rank }) => {
  const {
    name,
    league: { name: leagueName },
    wins,
    losses,
    ties,
    pointsFor,
    pointsAgainst,
  } = data;
  const breakpoint = useBreakpointValue({ base: null, md: 'md' });

  const sxWeek = {
    '&:before': {
      content: '"PF-PA: "',
    },
    '&:after': {
      content: '" –\\00a0"',
    },
  };
  const sxSeason = {
    '&:before': {
      content: '"Record: "',
    },
    '&:after': {
      content: '" –\\00a0"',
    },
  };
  const sxTies = {
    '&:before': {
      content: '"\\00a0–\\00a0"',
    },
  };

  const pointsWidth = breakpoint === 'md' ? 0.2 : null;
  const showSpacer = breakpoint !== 'md' ? <Spacer /> : null;
  const weekBefore = breakpoint !== 'md' ? sxWeek : null;
  const weekBetween = breakpoint !== 'md' ? sxSeason : null;
  const tiesBefore = breakpoint !== 'md' ? sxTies : null;

  const tiesBox =
    ties === 0 ? (
      <Box w={pointsWidth} />
    ) : (
      <Box w={pointsWidth} sx={ties > 0 ? tiesBefore : null}>
        {ties}
      </Box>
    );

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
          {pointsFor}
        </Box>
        <Box w={pointsWidth}>{pointsAgainst}</Box>
        {showSpacer}
        <Box w={pointsWidth} sx={weekBetween}>
          {wins}
        </Box>
        <Box w={pointsWidth}>{losses}</Box>
        {tiesBox}
      </Flex>
    </SimpleGrid>
  );
};

export { LeaderboardTableRow };
