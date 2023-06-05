import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProvinceRepository } from './province.repository';
import { FilterQuery } from '@mikro-orm/core';
import { Province } from './province.entity';
import { GetProvincesDTO } from '@wilayah-nusantara/dtos';

@Injectable()
export class ProvinceService {
  constructor(private readonly provinceRepo: ProvinceRepository) {}

  public async getProvinces(getProvincesQuery: GetProvincesDTO) {
    const { limit, page, name, code } = getProvincesQuery;

    const whereClause: FilterQuery<Province> = {};

    if (code) {
      return await this.provinceRepo.findOne({
        code,
      });
    }

    if (name) {
      whereClause.province = {
        $like: `%${name}%`,
      };
    }

    const [provinces, provinceCount] = await this.provinceRepo.findAndCount(
      whereClause,
      {
        limit,
        offset: (page - 1) * limit,
      },
    );

    return {
      data: provinces,
      meta: {
        limit,
        page,
        total: provinceCount,
      },
    };
  }

  public async getProvince(provinceCode: string) {
    const province = await this.provinceRepo.findOne({
      code: provinceCode,
    });

    if (!province) {
      throw new HttpException('province not found', HttpStatus.NOT_FOUND);
    }

    return province;
  }
}
