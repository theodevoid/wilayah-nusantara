import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';
import { MikroORM } from '@mikro-orm/core';
import { ProvinceModule } from './province/province.module';
import { RegencyModule } from './regency/regency.module';
import { DistrictModule } from './district/district.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...mikroOrmConfig,
    }),
    ProvinceModule,
    RegencyModule,
    DistrictModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
