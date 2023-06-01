import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetDistrictsDTO } from '@wilayah-nusantara/dtos';
import { DistrictService } from './district.service';

@Controller('/kecamatan')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Get('/')
  public async getDistricts(@Query() getDistrictsQuery: GetDistrictsDTO) {
    const districts = await this.districtService.getDistricts(
      getDistrictsQuery,
    );

    return districts;
  }

  @Get('/:code')
  public async getDistrict(@Param('code') DistrictCode: string) {
    const district = await this.districtService.getDistrict(DistrictCode);

    return district;
  }
}
