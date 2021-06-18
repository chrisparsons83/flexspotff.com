import { Migration } from '@mikro-orm/migrations';

export class Migration20210618043625 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "league" add column "tier" int4 not null default 2;');
  }
}

export default Migration20210618043625;
