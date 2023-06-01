import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DistrictRepository } from './district.repository';
import { FilterQuery } from '@mikro-orm/core';
import { GetDistrictsDTO } from '@wilayah-nusantara/dtos';
import { RegencyRepository } from '~/regency/regency.repository';
import { District } from './district.entity';

@Injectable()
export class DistrictService {
  constructor(
    private readonly regencyRepo: RegencyRepository,
    private readonly districtRepo: DistrictRepository,
  ) {}

  public async getDistricts(getDistrictsQuery: GetDistrictsDTO) {
    const { limit, page, code, district, regencyCode } = getDistrictsQuery;

    const whereClause: FilterQuery<District> = {};

    if (code) {
      return await this.districtRepo.findOne({
        code,
      });
    }

    if (district) {
      whereClause.district = {
        $like: `%${district}%`,
      };
    }

    if (regencyCode) {
      whereClause.regency = this.regencyRepo.getReference(regencyCode);
    }

    const [districts, districtCount] = await this.districtRepo.findAndCount(
      whereClause,
      {
        limit,
        offset: (page - 1) * limit,
      },
    );

    return {
      data: districts,
      meta: {
        limit,
        page,
        total: districtCount,
      },
    };
  }

  public async getDistrict(districtCode: string) {
    const district = await this.districtRepo.findOne({
      code: districtCode,
    });

    if (!district) {
      throw new HttpException('district not found', HttpStatus.NOT_FOUND);
    }

    return district;
  }
}
