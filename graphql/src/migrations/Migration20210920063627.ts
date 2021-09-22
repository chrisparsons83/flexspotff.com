import { Migration } from '@mikro-orm/migrations';

export default class Migration20210920063627 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "league" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "year" varchar(255) not null, "sleeper_league_id" varchar(255) not null, "sleeper_draft_id" varchar(255) not null);',
    );
    this.addSql(
      'alter table "league" add constraint "league_sleeper_league_id_unique" unique ("sleeper_league_id");',
    );
    this.addSql(
      'alter table "league" add constraint "league_sleeper_draft_id_unique" unique ("sleeper_draft_id");',
    );
  }
}

export { Migration20210920063627 };
