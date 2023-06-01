import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { District } from './district.entity';
import { DistrictController } from './district.controller';
import { Regency } from '~/regency/regency.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [District, Regency],
    }),
  ],
  providers: [DistrictService],
  exports: [DistrictService],
  controllers: [DistrictController],
})
export class DistrictModule {}
