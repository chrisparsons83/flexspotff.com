import { Migration } from '@mikro-orm/migrations';

export class Migration20210930044659 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "team" drop constraint if exists "team_losses_check";');
    this.addSql('alter table "team" alter column "losses" type integer using ("losses"::integer);');
    this.addSql('alter table "team" drop constraint if exists "team_ties_check";');
    this.addSql('alter table "team" alter column "ties" type integer using ("ties"::integer);');
    this.addSql('alter table "team" drop constraint if exists "team_wins_check";');
    this.addSql('alter table "team" alter column "wins" type integer using ("wins"::integer);');
  }

}
