import { Migration } from '@mikro-orm/migrations';

export class Migration20210530035303 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "league" ("_id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "name" varchar(255) not null, "season" int4 not null);',
    );
  }
}

export default Migration20210530035303;
