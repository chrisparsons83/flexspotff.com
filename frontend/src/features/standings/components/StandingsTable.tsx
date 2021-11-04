import { Box, Heading } from '@chakra-ui/layout';
import { Table, Thead, Th, Tbody, Tr, Td } from '@chakra-ui/react';
import { SeasonStandingsRow, SeasonStandingTeam } from '../types';

interface Props {
  data: SeasonStandingsRow;
}

const StandingsTable: React.FC<Props> = ({ data }) => {
  const { name: leagueName, teams } = data;

  teams.sort((a: SeasonStandingTeam, b: SeasonStandingTeam) => {
    const aPct = a.wins + (0.5 * a.ties) / (a.wins + a.ties + a.losses);
    const bPct = b.wins + (0.5 * b.ties) / (b.wins + b.ties + b.losses);

    if (aPct !== bPct) return bPct - aPct;

    return b.pointsFor - a.pointsFor;
  });

  return (
    <>
      <Heading as="h2" size="md">
        {leagueName}
      </Heading>
      <Box overflowX="auto" my={4}>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>Rank</Th>
              <Th>Name</Th>
              <Th>Record</Th>
              <Th>PF</Th>
              <Th>PA</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teams.map((team, index) => (
              <Tr key={team.name}>
                <Td>{index + 1}</Td>
                <Td>{team.name}</Td>
                <Td>
                  {team.wins} - {team.losses}
                  {!team.ties || ` - ${team.ties}`}
                </Td>
                <Td>{team.pointsFor}</Td>
                <Td>{team.pointsAgainst}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export { StandingsTable };
