import { Migration } from '@mikro-orm/migrations';

export class Migration20210620035009 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "team" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "league__id" int4 not null);',
    );

    this.addSql(
      'alter table "team" add constraint "team_league__id_foreign" foreign key ("league__id") references "league" ("_id") on update cascade;',
    );
  }
}
