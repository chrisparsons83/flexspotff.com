import { Entity, Property, Unique } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity';

@Entity()
@ObjectType()
export default class User extends BaseEntity {
  @Field()
  @Property()
  @Unique()
  discordId: string;

  @Field()
  @Property()
  username: string;

  @Field()
  @Property()
  avatar: string;

  constructor(discordId: string, username: string, avatar: string) {
    super();
    this.discordId = discordId;
    this.username = username;
    this.avatar = avatar;
  }
}
