import { Migration } from '@mikro-orm/migrations';

export default class Migration20211024063701 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "player" add column "base_position" varchar(255) null;');
  }
}

export { Migration20211024063701 };
