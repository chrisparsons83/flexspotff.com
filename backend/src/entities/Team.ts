import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

import League from './League';

@Entity()
export default class Team extends BaseEntity {
  @Property()
  name!: string;

  @ManyToOne(() => League)
  league!: League;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
