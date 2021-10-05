import { Migration } from '@mikro-orm/migrations';

export default class Migration20211005071106 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "team" add column "sleeper_owner_id" varchar null;');
  }
}

export { Migration20211005071106 };
