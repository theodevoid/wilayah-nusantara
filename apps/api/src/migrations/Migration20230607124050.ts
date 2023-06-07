import { Migration } from '@mikro-orm/migrations';

export class Migration20230607124050 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      "alter table `regencies` add `type` enum('Kota', 'Kabupaten') not null;",
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table `regencies` drop `type`;');
  }
}
