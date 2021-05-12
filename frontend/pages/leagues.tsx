import useUser from '../lib/useUser';

const LeaguesPage = (): JSX.Element => {
  const data = useUser();

  if (data.isError) return data.isError;
  return <div>Leagues Page</div>;
};

export default LeaguesPage;
