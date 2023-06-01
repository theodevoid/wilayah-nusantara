import { Migration } from '@mikro-orm/migrations';

export class Migration20230601124009 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `regencies` (`code` bigint unsigned not null auto_increment primary key, `province_code` bigint unsigned not null, `regency` varchar(255) not null) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `regencies` add index `regencies_province_code_index`(`province_code`);',
    );

    // this.addSql(
    //   'alter table `regencies` add constraint `regencies_province_code_foreign` foreign key (`province_code`) references `provinces` (`code`) on update cascade;',
    // );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `regencies`;');
  }
}
