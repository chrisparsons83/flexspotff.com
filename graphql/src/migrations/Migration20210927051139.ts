import { Migration } from '@mikro-orm/migrations';

export class Migration20210927051139 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "role" varchar(255) null;');
  }

}
