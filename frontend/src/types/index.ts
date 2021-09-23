export type PodcastEpisode = {
  description: string;
  duration: number;
  episode: number;
  filepath: string;
  filesize: number;
  filetype: string;
  publishDate: string;
  season: number;
  shownotes?: string;
  title: string;
};
