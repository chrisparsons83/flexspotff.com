import { Box, Flex, SimpleGrid, Spacer, useBreakpointValue } from '@chakra-ui/react';

const AdpTableHeader: React.FC = () => {
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
        <Box>Player</Box>
        <Spacer />
        <Box>Position</Box>
      </Flex>
      <Flex>
        <Box w={1 / 4}>ADP</Box>
        <Box w={1 / 4}>Min</Box>
        <Box w={1 / 4}>Max</Box>
        <Box w={1 / 4}>% Drafted</Box>
      </Flex>
    </SimpleGrid>
  );
};

export { AdpTableHeader };
