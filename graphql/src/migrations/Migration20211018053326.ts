import { Migration } from '@mikro-orm/migrations';

export default class Migration20211018053326 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "player" drop constraint if exists "player_team_check";');
    this.addSql(
      'alter table "player" alter column "team" type varchar(255) using ("team"::varchar(255));',
    );
    this.addSql('alter table "player" alter column "team" drop not null;');
  }
}

export { Migration20211018053326 };
