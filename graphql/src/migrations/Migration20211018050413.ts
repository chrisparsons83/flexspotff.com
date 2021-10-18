import { Migration } from '@mikro-orm/migrations';

export default class Migration20211018050413 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "player" ("sleeper_id" varchar(255) not null, "first_name" varchar(255) not null, "full_name" varchar(255) not null, "last_name" varchar(255) not null, "team" varchar(255) not null);',
    );
    this.addSql('alter table "player" add constraint "player_pkey" primary key ("sleeper_id");');
  }
}

export { Migration20211018050413 };
