import { Migration } from '@mikro-orm/migrations';

export class Migration20210617051732 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "league" drop column "created_at";');
    this.addSql('alter table "league" drop column "updated_at";');
  }
}
