import { Migration } from '@mikro-orm/migrations';

export class Migration20230607114426 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `villages` add `postal_code` varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `villages` drop `postal_code`;');
  }

}
