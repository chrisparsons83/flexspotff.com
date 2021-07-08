import LeagueStandings from '../../components/LeagueStandings';

const StandingsPage: React.FC = () => {
  return (
    <>
      <h1>Standings</h1>
      <LeagueStandings leagueName="Champions League" />
    </>
  );
};

export default StandingsPage;
