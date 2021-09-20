import { Entity, Property, Unique } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity';

@Entity()
@ObjectType()
export default class League extends BaseEntity {
  @Field()
  @Property()
  name: string;

  @Field()
  @Property()
  year: string;

  @Field()
  @Property()
  @Unique()
  sleeperLeagueId: string;

  @Field()
  @Property()
  @Unique()
  sleeperDraftId: string;

  constructor(name: string, year: string, sleeperLeagueId: string, sleeperDraftId: string) {
    super();
    this.name = name;
    this.year = year;
    this.sleeperLeagueId = sleeperLeagueId;
    this.sleeperDraftId = sleeperDraftId;
  }
}
