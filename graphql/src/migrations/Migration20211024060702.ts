import { Migration } from '@mikro-orm/migrations';

export default class Migration20211024060702 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "weekly_score_starters" ("weekly_score__id" int4 not null, "player_sleeper_id" varchar(255) not null);',
    );
    this.addSql(
      'alter table "weekly_score_starters" add constraint "weekly_score_starters_pkey" primary key ("weekly_score__id", "player_sleeper_id");',
    );

    this.addSql(
      'alter table "weekly_score_starters" add constraint "weekly_score_starters_weekly_score__id_foreign" foreign key ("weekly_score__id") references "weekly_score" ("_id") on update cascade on delete cascade;',
    );
    this.addSql(
      'alter table "weekly_score_starters" add constraint "weekly_score_starters_player_sleeper_id_foreign" foreign key ("player_sleeper_id") references "player" ("sleeper_id") on update cascade on delete cascade;',
    );
  }
}

export { Migration20211024060702 };
