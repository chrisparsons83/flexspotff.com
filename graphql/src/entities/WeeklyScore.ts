import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { Field, Float, Int, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity';
import Team from './Team';
import Week from './Week';

@Entity()
@ObjectType()
export default class WeeklyScore extends BaseEntity {
  @Field(() => Float)
  @Property({ columnType: 'float', default: 0 })
  isAboveMedian = 0;

  @Field(() => Boolean)
  @Property({ columnType: 'boolean' })
  isGameCompleted = false;

  @Field(() => Float)
  @Property({ columnType: 'float', default: 0 })
  isWinning = 0;

  @Field(() => Float)
  @Property({ columnType: 'float' })
  points: number;

  @Field(() => Int)
  @Property({ columnType: 'integer' })
  sleeperMatchupId: number;

  @Field(() => Team)
  @ManyToOne('Team')
  team!: Team;

  @Field(() => Week)
  @ManyToOne('Week')
  week!: Week;

  constructor(sleeperMatchupId: number, points: number, team: Team, week: Week) {
    super();
    this.points = points;
    this.sleeperMatchupId = sleeperMatchupId;
    this.team = team;
    this.week = week;
  }
}
