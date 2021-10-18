import { Migration } from '@mikro-orm/migrations';

export default class Migration20211018051402 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "player" drop column "full_name";');
  }
}
export { Migration20211018051402 };
