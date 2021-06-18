import { Entity, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

@Entity()
export default class League extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  season!: number;

  @Property()
  sleeperId!: string;

  @Property()
  isActive = true;

  constructor(name: string, season: number, sleeperId: string) {
    super();
    this.name = name;
    this.season = season;
    this.sleeperId = sleeperId;
  }
}
