import { Collection, Entity, OneToMany, Property, Unique } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity';
import Team from './Team';

@Entity()
@ObjectType()
export default class League extends BaseEntity {
  @Field()
  @Property()
  name: string;

  @Field()
  @Property()
  @Unique()
  sleeperDraftId: string;

  @Field()
  @Property()
  @Unique()
  sleeperLeagueId: string;

  @Field(() => [Team])
  @OneToMany('Team', 'league')
  teams = new Collection<Team>(this);

  @Field(() => Int)
  @Property({ default: 2 })
  tier: number;

  @Field()
  @Property()
  year: string;

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
