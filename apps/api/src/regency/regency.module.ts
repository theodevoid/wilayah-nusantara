import { Module } from '@nestjs/common';
import { RegencyService } from './regency.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Regency } from './regency.entity';
import { RegencyController } from './regency.controller';
import { Province } from '~/province/province.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Regency, Province],
    }),
  ],
  providers: [RegencyService],
  exports: [RegencyService],
  controllers: [RegencyController],
})
export class RegencyModule {}
