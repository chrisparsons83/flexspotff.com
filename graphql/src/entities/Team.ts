import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { Field, Float, Int, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity';
import League from './League';

@Entity()
@ObjectType()
export default class Team extends BaseEntity {
  @Field(() => League)
  @ManyToOne('League')
  league!: League;

  @Field(() => Int)
  @Property({ columnType: 'integer' })
  losses = 0;

  @Field()
  @Property()
  name: string;

  @Field(() => Float)
  @Property({ columnType: 'float' })
  pointsAgainst = 0.0;

  @Field(() => Float)
  @Property({ columnType: 'float' })
  pointsFor = 0.0;

  @Field(() => Int)
  @Property({ columnType: 'integer' })
  ties = 0;

  @Field(() => Int)
  @Property({ columnType: 'integer' })
  wins = 0;

  constructor(name: string, league: League) {
    super();
    this.name = name;
    this.league = league;
  }
}
