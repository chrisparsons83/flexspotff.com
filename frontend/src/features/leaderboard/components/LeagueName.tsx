import React from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  leagueName: string;
}

const LeagueName: React.FC<Props> = ({ leagueName }) => {
  const leagueNameClass = `${leagueName.toLowerCase()}.500`;
  return (
    <Box as="span" p={1} bg={leagueNameClass}>
      {leagueName}
    </Box>
  );
};

export { LeagueName };
