import Podcast from 'podcast';
import { mkdirSync, writeFileSync } from 'fs';

const feedOptions = {
  title: 'Trash Turtle Football',
  description:
    'Unleashed from the iconic Flexspot Fantasy Football Discord server, Dr. Trashdad and Bootz bring the next generation of a fantasy football podcast. A conversation between a numbers and spreadsheets analyst and a film room or gut drafter, Bootz and Trashdad talk about fantasy relevant topics to help you get the edge you need in your league. Redraft, dynasty, bestball, and even some sportsbetting are common topics. Listen to us to get in-depth and less talked-about fantasy knowledge without the fluff.',
  language: 'English',
  itunesCategory: ['Sports', 'Fantasy Sports'],
  itunesExplicit: false,
  itunesAuthor: 'DrTrashdad and Bootzfantasy',
  itunesType: 'episodic',
};

export const generatePodcastFeed = async () => {
  const podcast = new Podcast(feedOptions);

  // Start adding episodes here

  mkdirSync('./public/rss', { recursive: true });
  writeFileSync('./public/rss/podcast.rss', podcast.buildXml());
};
