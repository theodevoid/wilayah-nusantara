import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetRegenciesDTO } from '@wilayah-nusantara/dtos';
import { RegencyService } from './regency.service';

@Controller('/kabupaten')
export class RegencyController {
  constructor(private readonly regencyService: RegencyService) {}

  @Get('/')
  public async getRegencies(@Query() getRegenciesQuery: GetRegenciesDTO) {
    const regencies = await this.regencyService.getRegencies(getRegenciesQuery);

    return regencies;
  }

  @Get('/:code')
  public async getRegency(@Param('code') regencyCode: string) {
    const regency = await this.regencyService.getRegency(regencyCode);

    return regency;
  }
}
