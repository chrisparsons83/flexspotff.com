import { Migration } from '@mikro-orm/migrations';

export default class Migration20211007052821 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "week" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "end_date" timestamptz(0) not null, "start_date" timestamptz(0) not null, "week_number" int4 not null);',
    );
  }
}

export { Migration20211007052821 };
