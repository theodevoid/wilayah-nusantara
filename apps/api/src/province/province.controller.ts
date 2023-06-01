import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { GetProvincesDTO } from './dtos/get-provinces.dto';

@Controller('/provinsi')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get('/')
  public async getProvinces(@Query() getProvincesQuery: GetProvincesDTO) {
    const provinces = await this.provinceService.getProvinces(
      getProvincesQuery,
    );

    return provinces;
  }

  @Get('/:code')
  public async getProvince(@Param('code') provinceCode: string) {
    const province = await this.provinceService.getProvince(provinceCode);

    return province;
  }
}
