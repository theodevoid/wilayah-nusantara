import { Migration } from '@mikro-orm/migrations';

export class Migration20230601165838 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `districts` (`code` bigint unsigned not null auto_increment primary key, `regency_code` bigint unsigned not null, `district` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `districts` add index `districts_regency_code_index`(`regency_code`);');

    this.addSql('alter table `districts` add constraint `districts_regency_code_foreign` foreign key (`regency_code`) references `regencies` (`code`) on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `districts`;');
  }

}
