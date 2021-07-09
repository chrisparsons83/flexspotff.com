import LeagueStandings from '../../components/LeagueStandings';

const StandingsPage: React.FC = () => {
  return (
    <>
      <h1>Standings</h1>
      <LeagueStandings leagueName="Champions League" />
      <LeagueStandings leagueName="Admiral League" />
      <LeagueStandings leagueName="Dragon League" />
      <LeagueStandings leagueName="Galaxy League" />
      <LeagueStandings leagueName="Monarch League" />
    </>
  );
};

export default StandingsPage;
