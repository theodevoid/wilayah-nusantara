import { Module } from '@nestjs/common';
import { VillageService } from './village.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { VillageController } from './village.controller';
import { Village } from './village.entity';
import { District } from '~/district/district.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Village, District],
    }),
  ],
  providers: [VillageService],
  exports: [VillageService],
  controllers: [VillageController],
})
export class VillageModule {}
