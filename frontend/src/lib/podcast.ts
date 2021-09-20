import Podcast from 'podcast';
import { mkdirSync, writeFileSync } from 'fs';

const feedOptions = {
  author: 'DrTrashdad and Bootzfantasy',
  categories: ['Sports', 'Fantasy Sports'],
  copyright: 'Copyright 2021, DrTrashdad and Bootzfantasy',
  description:
    'Unleashed from the iconic Flexspot Fantasy Football Discord server, Dr. Trashdad and Bootz bring the next generation of a fantasy football podcast. A conversation between a numbers and spreadsheets analyst and a film room or gut drafter, Bootz and Trashdad talk about fantasy relevant topics to help you get the edge you need in your league. Redraft, dynasty, bestball, and even some sportsbetting are common topics. Listen to us to get in-depth and less talked-about fantasy knowledge without the fluff.',
  feedUrl: 'https://www.flexspotff.com/rss/trash-turtle-football.xml',
  imageUrl: 'http://flexspotff-podcast.ewr1.vultrobjects.com/ttflogosq.jpg',
  itunesAuthor: 'DrTrashdad and Bootzfantasy',
  itunesCategory: [
    {
      text: 'Sports',
      subcats: [
        {
          text: 'Fantasy Sports',
        },
      ],
    },
  ],
  itunesExplicit: false,
  itunesOwner: {
    name: 'DrTrashdad and Bootzfantasy',
    email: 'trashturtlefootball@flexspotff.com',
  },
  itunesType: 'episodic',
  language: 'en-us',
  siteUrl: 'https://www.flexspotff.com/',
  title: 'Trash Turtle Football',
};

const feedEpisodes = [
  {
    description: `Bootz and trashdad take a look the flaming garbage heap that was a preseason and try to read the ashes like tea leaves to see what we can figure out for the upcoming 2021 season. DUME returns as our voiceover! We're glad to have him back. Get your kiddie pools back out because a.) summer isn't quite over yet and you still haven't fulfilled your dream of filling the entire thing with mojito and drinking yourself into nirvana and b.) these hot takes will make you want to drink a kiddie pool full of mojito. Still not as bad as Twitter. Enjoy!`,
    duration: 3751,
    episode: 2,
    filepath: 'https://ewr1.vultrobjects.com/flexspotff-podcast/TTF_S02E02_-_2021_Hot_Takes.mp3',
    filesize: 58347221,
    filetype: 'audio/mpeg',
    publishDate: '2021-09-06',
    season: 2,
    shownotes: '',
    title: `2021 Hot Takes`,
  },
  {
    description: `Bootz and trashdad return for Season 2! We discuss parts of the draft, Bootz's shower habits, CDCarter's intern bathroom habits, rookie feelings, best ball, draft ADP changes, Brando's milk tastes, Discord league announcements, and Over/Under hype reactions. We're so happy to be back and we're really hoping that you're reading this on Spotify or Apple podcasts!!!`,
    duration: 2678,
    episode: 1,
    filepath: 'https://ewr1.vultrobjects.com/flexspotff-podcast/TTF_S02E01_-_The_Return.mp3',
    filesize: 41400335,
    filetype: 'audio/mpeg',
    publishDate: '2021-08-31',
    season: 2,
    shownotes: '',
    title: `The Return`,
  },
];

export const generatePodcastFeed = async () => {
  const podcast = new Podcast(feedOptions);

  // Start adding episodes here
  for (const episode of feedEpisodes) {
    const episodeFormat = {
      ...episode,
      customElements: [{ 'content:encoded': episode.shownotes }],
      date: episode.publishDate,
      enclosure: {
        url: episode.filepath,
        size: episode.filesize,
        type: episode.filetype,
      },
      itunesAuthor: feedOptions.author,
      itunesDuration: episode.duration,
      itunesTitle: episode.title,
      url: `https://www.flexspotff.com/podcast/${episode.season}/${episode.episode}`,
    };
    podcast.addItem(episodeFormat);
  }

  mkdirSync('./public/rss', { recursive: true });
  writeFileSync('./public/rss/trash-turtle-football.xml', podcast.buildXml());
};
