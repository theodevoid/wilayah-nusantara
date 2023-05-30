import { Migration } from '@mikro-orm/migrations';

export class Migration20230530161826 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `provinces` (`id` bigint unsigned not null auto_increment primary key, `code` int not null, `province` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `provinces` add unique `provinces_code_unique`(`code`);');
    this.addSql('alter table `provinces` add index `provinces_code_index`(`code`);');
  }

}
