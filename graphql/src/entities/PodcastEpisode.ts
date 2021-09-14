import { Entity, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

@Entity()
export default class PodcastEpisode extends BaseEntity {
  @Property()
  title!: string;

  @Property()
  description!: string;
}
