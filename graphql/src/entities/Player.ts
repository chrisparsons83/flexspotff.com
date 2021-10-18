import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export default class Player {
  @Field()
  @PrimaryKey()
  sleeperId: string;

  @Field()
  @Property()
  firstName: string;

  @Field()
  @Property()
  lastName: string;

  @Field()
  @Property({ nullable: true })
  team: string;

  constructor(sleeperId: string, firstName: string, lastName: string, team: string) {
    this.sleeperId = sleeperId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.team = team;
  }
}
