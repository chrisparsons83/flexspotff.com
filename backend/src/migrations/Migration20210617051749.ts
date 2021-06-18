import { Migration } from '@mikro-orm/migrations';

export class Migration20210617051749 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "league" add column "created_at" timestamptz(0) not null, add column "updated_at" timestamptz(0) not null;');
  }

}