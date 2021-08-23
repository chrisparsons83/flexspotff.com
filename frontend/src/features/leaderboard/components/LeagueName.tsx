import React from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  leagueName: string;
}

const LeagueName: React.FC<Props> = ({ leagueName }) => {
  const leagueNameClass = `${leagueName.toLowerCase()}.500`;
  return (
    <Text p={1} bg={leagueNameClass} fontSize="xs" fontWeight="bold" textTransform="uppercase">
      {leagueName}
    </Text>
  );
};

export { LeagueName };
