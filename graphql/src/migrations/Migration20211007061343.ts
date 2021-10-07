import { Migration } from '@mikro-orm/migrations';

export default class Migration20211007061343 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "weekly_score" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "is_above_median" float not null default 0, "is_game_completed" jsonb not null, "is_winning" float not null default 0, "points" float not null, "sleeper_matchup_id" integer not null, "team__id" int4 not null, "week__id" int4 not null);',
    );

    this.addSql(
      'alter table "weekly_score" add constraint "weekly_score_team__id_foreign" foreign key ("team__id") references "team" ("_id") on update cascade;',
    );
    this.addSql(
      'alter table "weekly_score" add constraint "weekly_score_week__id_foreign" foreign key ("week__id") references "week" ("_id") on update cascade;',
    );
  }
}

export { Migration20211007061343 };
