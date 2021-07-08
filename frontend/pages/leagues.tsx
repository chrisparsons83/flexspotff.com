import useUser from '../lib/useUser';

const LeaguesPage: React.FC = () => {
  const data = useUser();

  if (data.isError) return data.isError;
  return <h1>Leagues Page</h1>;
};

export default LeaguesPage;
