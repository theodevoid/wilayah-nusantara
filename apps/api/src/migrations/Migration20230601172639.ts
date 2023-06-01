import { Migration } from '@mikro-orm/migrations';

export class Migration20230601172639 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `villages` (`code` bigint unsigned not null auto_increment primary key, `district_code` bigint unsigned not null, `village` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `villages` add index `villages_district_code_index`(`district_code`);');

    // this.addSql('alter table `villages` add constraint `villages_district_code_foreign` foreign key (`district_code`) references `districts` (`code`) on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `villages`;');
  }

}
