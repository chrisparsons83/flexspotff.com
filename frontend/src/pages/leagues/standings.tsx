import { Heading } from '@chakra-ui/react';
import { Standings } from '../../features/standings';

const LeaderboardsPage = () => {
  return (
    <div>
      <Heading as="h1" mb={4}>
        League Standings
      </Heading>
      <Standings />
    </div>
  );
};

export default LeaderboardsPage;
