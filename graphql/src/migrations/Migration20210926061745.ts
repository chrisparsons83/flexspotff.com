import { Migration } from '@mikro-orm/migrations';

export default class Migration20210926061745 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "discord_id" varchar(255) not null, "username" varchar(255) not null, "avatar" varchar(255) not null);',
    );
    this.addSql(
      'alter table "user" add constraint "user_discord_id_unique" unique ("discord_id");',
    );
  }
}

export { Migration20210926061745 };
