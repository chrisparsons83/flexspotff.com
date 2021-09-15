import { DateType, Entity, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

@Entity()
export default class PodcastEpisode extends BaseEntity {
  @Property()
  title!: string;

  @Property()
  description!: string;

  @Property()
  season!: number;

  @Property()
  episode!: number;

  @Property()
  filepath!: string;

  @Property({ type: DateType })
  publishDate!: Date;

  constructor(
    title: string,
    description: string,
    season: number,
    episode: number,
    filepath: string,
    publishDate: Date,
  ) {
    super();
    this.title = title;
    this.description = description;
    this.season = season;
    this.episode = episode;
    this.filepath = filepath;
    this.publishDate = publishDate;
  }
}
