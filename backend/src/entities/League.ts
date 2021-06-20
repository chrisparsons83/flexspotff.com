import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

import Team from './Team';

@Entity()
export default class League extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  season!: number;

  @Property()
  sleeperId!: string;

  @Property({ default: 2 })
  tier!: number;

  @OneToMany({ entity: () => Team, mappedBy: 'league', orphanRemoval: true })
  teams = new Collection<Team>(this);

  @Property({ type: 'boolean' })
  isActive = true;

  constructor(name: string, season: number, sleeperId: string, tier?: number) {
    super();
    this.name = name;
    this.season = season;
    this.sleeperId = sleeperId;
    if (tier) this.tier = tier;
  }
}
