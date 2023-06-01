import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetVillagesDTO } from '@wilayah-nusantara/dtos';
import { VillageService } from './village.service';

@Controller('/kelurahan')
export class VillageController {
  constructor(private readonly villageService: VillageService) {}

  @Get('/')
  public async getVillages(@Query() getVillagesQuery: GetVillagesDTO) {
    const villages = await this.villageService.getVillages(getVillagesQuery);

    return villages;
  }

  @Get('/:code')
  public async getVillage(@Param('code') DistrictCode: string) {
    const village = await this.villageService.getVillage(DistrictCode);

    return village;
  }
}
