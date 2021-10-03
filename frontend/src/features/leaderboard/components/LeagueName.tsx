import React from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  leagueName: string;
}

const LeagueName: React.FC<Props> = ({ leagueName }) => {
  const leagueNameShort = leagueName.replace(/ .*/, '');
  const leagueNameClass = `${leagueNameShort.toLowerCase()}.500`;
  return (
    <Text
      px={1.5}
      py={0.5}
      bg={leagueNameClass}
      fontSize="xs"
      fontWeight="bold"
      textTransform="uppercase"
    >
      {leagueNameShort}
    </Text>
  );
};

export { LeagueName };
