import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProvinceRepository } from './province.repository';
import { GetProvincesDTO } from './dtos/get-provinces.dto';
import { FilterQuery } from '@mikro-orm/core';
import { Province } from './province.entity';

@Injectable()
export class ProvinceService {
  constructor(private readonly provinceRepo: ProvinceRepository) {}

  public async getProvinces(getProvincesQuery: GetProvincesDTO) {
    const { limit, page, province, code } = getProvincesQuery;

    const whereClause: FilterQuery<Province> = {};

    if (code) {
      return await this.provinceRepo.findOne({
        code,
      });
    }

    if (province) {
      whereClause.province = {
        $like: `%${province}%`,
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

  public async getProvince(provinceId: string) {
    const province = await this.provinceRepo.findOne({
      id: provinceId,
    });

    if (!province) {
      throw new HttpException('province not found', HttpStatus.NOT_FOUND);
    }

    return province;
  }
}
