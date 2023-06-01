import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { VillageRepository } from './village.repository';
import { FilterQuery } from '@mikro-orm/core';
import { GetVillagesDTO } from '@wilayah-nusantara/dtos';
import { DistrictRepository } from '~/district/district.repository';
import { Village } from './village.entity';

@Injectable()
export class VillageService {
  constructor(
    private readonly districtRepo: DistrictRepository,
    private readonly villageRepo: VillageRepository,
  ) {}

  public async getVillages(getVillagesQuery: GetVillagesDTO) {
    const { limit, page, code, districtCode, village } = getVillagesQuery;

    const whereClause: FilterQuery<Village> = {};

    if (code) {
      return await this.villageRepo.findOne({
        code,
      });
    }

    if (village) {
      whereClause.village = {
        $like: `%${village}%`,
      };
    }

    if (districtCode) {
      whereClause.district = this.districtRepo.getReference(districtCode);
    }

    const [villages, villageCount] = await this.villageRepo.findAndCount(
      whereClause,
      {
        limit,
        offset: (page - 1) * limit,
      },
    );

    return {
      data: villages,
      meta: {
        limit,
        page,
        total: villageCount,
      },
    };
  }

  public async getVillage(villageCode: string) {
    const village = await this.villageRepo.findOne({
      code: villageCode,
    });

    if (!village) {
      throw new HttpException('village not found', HttpStatus.NOT_FOUND);
    }

    return village;
  }
}
