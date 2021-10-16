import Podcast from 'podcast';
import { mkdirSync, writeFileSync } from 'fs';

import feedEpisodes from './data/podcast-episodes';

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
      itunesSummary: episode.shownotes,
      itunesTitle: episode.title,
      url: `https://www.flexspotff.com/podcast/${episode.season}/${episode.episode}`,
    };
    podcast.addItem(episodeFormat);
  }

  mkdirSync('./public/rss', { recursive: true });
  writeFileSync('./public/rss/trash-turtle-football.xml', podcast.buildXml());
};
