import { Migration } from '@mikro-orm/migrations';

export default class Migration20211007040928 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "team" add column "roster_id" integer not null default 0;');
  }
}

export { Migration20211007040928 };
