import { Injectable } from '@nestjs/common';
import { ProvinceRepository } from './province.repository';

@Injectable()
export class ProvinceService {
  constructor(private readonly provinceRepo: ProvinceRepository) {}

  public async getProvinces() {
    return {
      data: await this.provinceRepo.findAll(),
    };
  }
}
