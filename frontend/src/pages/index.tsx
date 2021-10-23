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
        Hi, we're a Fantasy Football Discord community and have been around since 2016. We do fun
        things like running a small promo/relegation set of FF leagues, season-long side games, and
        make awful football takes when we probably should be working.
      </p>
      <p style={{ marginTop: '1em' }}>
        <a href="https://discord.gg/bJdbk4hewF" style={{ textDecoration: 'underline' }}>
          Join Server
        </a>
      </p>
    </div>
  );
};

export default Home;
