import Podcast from 'podcast';
import { mkdirSync, writeFileSync } from 'fs';

const feedOptions = {
  author: 'DrTrashdad and Bootzfantasy',
  copyright: 'Copyright 2021, DrTrashdad and Bootzfantasy',
  description:
    'Unleashed from the iconic Flexspot Fantasy Football Discord server, Dr. Trashdad and Bootz bring the next generation of a fantasy football podcast. A conversation between a numbers and spreadsheets analyst and a film room or gut drafter, Bootz and Trashdad talk about fantasy relevant topics to help you get the edge you need in your league. Redraft, dynasty, bestball, and even some sportsbetting are common topics. Listen to us to get in-depth and less talked-about fantasy knowledge without the fluff.',
  feedUrl: 'https://www.flexspotff.com/rss/trash-turtle-football.xml',
  imageUrl: 'http://flexspotff-podcast.ewr1.vultrobjects.com/ttf.jpg',
  itunesCategory: ['Sports', 'Fantasy Sports'],
  itunesExplicit: false,
  itunesAuthor: 'DrTrashdad and Bootzfantasy',
  itunesType: 'episodic',
  language: 'en-us',
  siteUrl: 'https://www.flexspotff.com/',
  title: 'Trash Turtle Football',
};

const feedEpisodes = [
  {
    description: `Bootz and trashdad return for Season 2! We discuss parts of the draft, Bootz's shower habits, CDCarter's intern bathroom habits, rookie feelings, best ball, draft ADP changes, Brando's milk tastes, Discord league announcements, and Over/Under hype reactions. We're so happy to be back and we're really hoping that you're reading this on Spotify or Apple podcasts!!!`,
    episode: 1,
    filepath: 'https://ewr1.vultrobjects.com/flexspotff-podcast/TTF_S02E01_-_The_Return.mp3',
    publishDate: '2021-08-31',
    season: 2,
    title: `The Return`,
  },
];

export const generatePodcastFeed = async () => {
  const podcast = new Podcast(feedOptions);

  // Start adding episodes here
  for (const episode of feedEpisodes) {
    const episodeFormat = {
      ...episode,
      enclosure: {
        url: episode.filepath,
      },
      itunesAuthor: feedOptions.author,
      itunesDuration: 2678,
      itunesTitle: episode.title,
      url: `https://www.flexspotff.com/podcast/${episode.season}/${episode.episode}`,
    };
    podcast.addItem(episodeFormat);
  }

  mkdirSync('./public/rss', { recursive: true });
  writeFileSync('./public/rss/trash-turtle-football.xml', podcast.buildXml());
};
