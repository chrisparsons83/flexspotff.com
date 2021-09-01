import { Box, Center, Flex, SimpleGrid, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { DraftPickRow } from '../types';

interface Props {
  data: DraftPickRow;
}

const AdpTableRow: React.FC<Props> = ({ data }) => {
  const { rank, name, position, adp, min, max, percentDrafted } = data;

  const maxDisplay = percentDrafted === 1 ? max : 'UD';

  const breakpoint = useBreakpointValue({ base: null, md: 'md' });

  const sxadpBefore = {
    '&:before': {
      content: '"ADP: "',
    },
  };
  const sxminBefore = {
    '&:before': {
      content: '"Min: "',
    },
    '&:after': {
      content: '",\\00a0"',
    },
  };
  const sxmaxBefore = {
    '&:before': {
      content: '"Max: "',
    },
    '&:after': {
      content: '",\\00a0"',
    },
  };
  const sxownBefore = {
    '&:before': {
      content: '"Own: "',
    },
  };

  const pointsWidth = breakpoint === 'md' ? 0.25 : null;
  const showSpacer = breakpoint !== 'md' ? <Spacer /> : null;
  const adpBefore = breakpoint !== 'md' ? sxadpBefore : null;
  const minBefore = breakpoint !== 'md' ? sxminBefore : null;
  const maxBefore = breakpoint !== 'md' ? sxmaxBefore : null;
  const ownBefore = breakpoint !== 'md' ? sxownBefore : null;

  return (
    <SimpleGrid columns={[1, null, 2]} spacingX={10} spacingY={3} mb={2} p={2} bg="brand.300">
      <Flex>
        <Center w={10} mr={4} bg="brand.400">
          {rank}
        </Center>
        <Box>{name}</Box>
        <Spacer />
        <Box>{position}</Box>
      </Flex>
      <Flex>
        <Box w={pointsWidth} sx={adpBefore}>
          {adp.toFixed(1)}
        </Box>
        {showSpacer}
        <Box w={pointsWidth} sx={minBefore}>
          {min}
        </Box>
        <Box w={pointsWidth} sx={maxBefore}>
          {maxDisplay}
        </Box>
        <Box w={pointsWidth} sx={ownBefore}>
          {(percentDrafted * 100).toFixed(0) + '%'}
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export { AdpTableRow };
