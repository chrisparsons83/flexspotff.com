import { Migration } from '@mikro-orm/migrations';

export default class Migration20210927042155 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_avatar_check";');
    this.addSql(
      'alter table "user" alter column "avatar" type varchar(255) using ("avatar"::varchar(255));',
    );
    this.addSql('alter table "user" alter column "avatar" drop not null;');
  }
}

export { Migration20210927042155 };
