import { Migration } from '@mikro-orm/migrations';

export default class Migration20210921043843 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "league" add column "tier" int4 not null default 2;');
  }
}

export { Migration20210921043843 };
