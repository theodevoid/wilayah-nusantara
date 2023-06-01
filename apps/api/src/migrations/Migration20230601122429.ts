import { Migration } from '@mikro-orm/migrations';

export class Migration20230601122429 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `provinces` (`code` bigint unsigned not null auto_increment primary key, `province` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists `provinces`;');
  }

}
