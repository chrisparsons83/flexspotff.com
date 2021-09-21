import { Entity, Property, Unique } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';
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

  @Field(() => Int)
  @Property({ default: 2 })
  tier: number;

  @Field()
  @Property()
  @Unique()
  sleeperLeagueId: string;

  @Field()
  @Property()
  @Unique()
  sleeperDraftId: string;

  constructor(
    name: string,
    year: string,
    sleeperLeagueId: string,
    sleeperDraftId: string,
    tier: number,
  ) {
    super();
    this.name = name;
    this.year = year;
    this.tier = tier;
    this.sleeperLeagueId = sleeperLeagueId;
    this.sleeperDraftId = sleeperDraftId;
  }
}
