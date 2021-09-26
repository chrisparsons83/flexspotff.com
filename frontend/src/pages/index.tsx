import { GetStaticProps } from 'next';
import { generatePodcastFeed } from '../lib/podcast';

export const getStaticProps: GetStaticProps = async (_context) => {
  await generatePodcastFeed();

  return {
    props: {},
  };
};

const Home: React.FC = () => {
  return (
    <div>
      <p>
        Homepage still TBD. <a href="/login">Test Login</a>
      </p>
    </div>
  );
};

export default Home;
