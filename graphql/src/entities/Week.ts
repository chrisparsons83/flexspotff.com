import { Entity, Property } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity';

@Entity()
@ObjectType()
export default class Week extends BaseEntity {
  @Field()
  @Property()
  endDate: Date;

  @Field()
  @Property()
  startDate: Date;

  @Field(() => Int)
  @Property()
  weekNumber: number;

  constructor(weekNumber: number, startDate: Date, endDate: Date) {
    super();
    this.endDate = endDate;
    this.startDate = startDate;
    this.weekNumber = weekNumber;
  }
}
