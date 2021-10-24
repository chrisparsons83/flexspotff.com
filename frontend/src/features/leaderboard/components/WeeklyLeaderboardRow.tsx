import {
  Box,
  Button,
  Center,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import { LeagueName } from './LeagueName';
import { Player, WeeklyLeaderboardRow } from '../types';

interface Props {
  data: WeeklyLeaderboardRow;
  rank: number;
}

const WeeklyLeaderboardTableRow: React.FC<Props> = ({ data, rank }) => {
  const {
    points: weeklyPF,
    team: {
      name: teamName,
      pointsFor: seasonPF,
      pointsAgainst: seasonPA,
      wins,
      losses,
      ties,
      league: { name: leagueName },
    },
    starters,
  } = data;
  const breakpoint = useBreakpointValue({ base: null, md: 'md' });

  const positionSorting = {
    QB: 0,
    RB: 1,
    WR: 2,
    TE: 3,
    DEF: 4,
  };
  starters.sort((a: Player, b: Player): number => {
    if (a.basePosition !== b.basePosition)
      return positionSorting[a.basePosition] - positionSorting[b.basePosition];
    return 0;
  });

  const sxWeek = {
    '&:before': {
      content: '"Week: "',
    },
  };
  const sxSeason = {
    '&:before': {
      content: '"Season: "',
    },
    '&:after': {
      content: '",\\00a0"',
    },
  };
  const sxPFPA = {
    '&:after': {
      content: '"-"',
    },
  };
  const pointsWidth = breakpoint === 'md' ? 0.25 : null;
  const showSpacer = breakpoint !== 'md' ? <Spacer /> : null;
  const weekScoreBefore = breakpoint !== 'md' ? sxWeek : null;
  const weekBetween = breakpoint !== 'md' ? sxSeason : null;
  const pfPABetween = breakpoint !== 'md' ? sxPFPA : null;

  return (
    <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
      <Flex>
        <Center w={10} mr={4} bg="brand.400">
          {rank}
        </Center>
        <Box>
          <Popover>
            <PopoverTrigger>
              <div>{teamName}</div>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Starting Roster</PopoverHeader>
              <PopoverBody>
                {starters.map((starter) => {
                  const key = `starter-${teamName}-${starter.sleeperId}`;
                  return (
                    <p key={key}>
                      {starter.basePosition} - {starter.firstName} {starter.lastName} (
                      {starter.team})
                    </p>
                  );
                })}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Spacer />
        <Box>
          <LeagueName leagueName={leagueName} />
        </Box>
      </Flex>
      <Flex>
        <Box w={pointsWidth} sx={weekScoreBefore}>
          {weeklyPF}
        </Box>
        {showSpacer}
        <Box w={pointsWidth} sx={weekBetween}>
          {wins}-{losses}-{ties}
        </Box>
        <Box w={pointsWidth} sx={pfPABetween}>
          {seasonPF}
        </Box>
        <Box w={pointsWidth}>{seasonPA}</Box>
      </Flex>
    </SimpleGrid>
  );
};

export { WeeklyLeaderboardTableRow };
