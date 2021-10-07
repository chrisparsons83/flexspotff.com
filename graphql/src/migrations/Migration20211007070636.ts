import { Migration } from '@mikro-orm/migrations';

export default class Migration20211007070636 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "weekly_score" drop constraint if exists "weekly_score_is_game_completed_check";',
    );
    this.addSql(
      'alter table "weekly_score" alter column "is_game_completed" type boolean using ("is_game_completed"::boolean);',
    );
  }
}

export { Migration20211007070636 };
