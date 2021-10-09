import { Migration } from '@mikro-orm/migrations';

export default class Migration20211009045426 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "week" add column "week_type" varchar not null default \'regular\';');
  }
}

export { Migration20211009045426 };
