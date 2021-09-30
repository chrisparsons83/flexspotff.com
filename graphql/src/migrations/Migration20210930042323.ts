import { Migration } from '@mikro-orm/migrations';

export class Migration20210930042323 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "team" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "league__id" int4 not null, "losses" jsonb not null, "name" varchar(255) not null, "points_against" float not null, "points_for" float not null, "ties" jsonb not null, "wins" jsonb not null);');

    this.addSql('alter table "team" add constraint "team_league__id_foreign" foreign key ("league__id") references "league" ("_id") on update cascade;');
  }

}
