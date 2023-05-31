import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Province } from './province.entity';
import { ProvinceController } from './province.controller';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Province],
    }),
  ],
  providers: [ProvinceService],
  exports: [ProvinceService],
  controllers: [ProvinceController],
})
export class ProvinceModule {}
