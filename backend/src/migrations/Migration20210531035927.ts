import { Migration } from '@mikro-orm/migrations';

export class Migration20210531035927 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "league" add column "sleeper_url" varchar(255) not null, add column "is_active" bool not null;',
    );
  }
}

export default Migration20210531035927;
