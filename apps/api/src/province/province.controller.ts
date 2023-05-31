import { Controller, Get } from '@nestjs/common';
import { ProvinceService } from './province.service';

@Controller('/provinsi')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get('/')
  public async getHello() {
    return await this.provinceService.getProvinces();
  }
}
