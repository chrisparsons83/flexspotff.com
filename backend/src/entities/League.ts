import { Entity, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

@Entity()
export default class League extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  season!: number;
}
