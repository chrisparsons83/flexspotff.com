import { PrimaryKey, Property } from '@mikro-orm/core';

export default abstract class BaseEntity {
  @PrimaryKey()
  _id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}
