import useUser from '../lib/useUser';

const LeaguesPage = (): JSX.Element => {
  const data = useUser();

  console.log(data);

  return <div>Leagues Page</div>;
};

export default LeaguesPage;
