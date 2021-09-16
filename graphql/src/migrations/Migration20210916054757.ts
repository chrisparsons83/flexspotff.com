import { Migration } from '@mikro-orm/migrations';

export default class Migration20210916054757 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "podcast_episode" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" varchar(255) not null, "season" int4 not null, "episode" int4 not null, "filepath" varchar(255) not null, "publish_date" date not null);',
    );
  }
}

export { Migration20210916054757 };
