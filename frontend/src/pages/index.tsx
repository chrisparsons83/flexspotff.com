import { GetStaticProps } from 'next';
import { generatePodcastFeed } from '../lib/podcast';

export const getStaticProps: GetStaticProps = async (_context) => {
  await generatePodcastFeed();

  return {
    props: {},
  };
};

const Home: React.FC = () => {
  return <div>Homepage still TBD.</div>;
};

export default Home;
