import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegencyRepository } from './regency.repository';
import { FilterQuery } from '@mikro-orm/core';
import { Regency } from './regency.entity';
import { ProvinceRepository } from '~/province/province.repository';
import { GetRegenciesDTO } from '@wilayah-nusantara/dtos';

@Injectable()
export class RegencyService {
  constructor(
    private readonly regencyRepo: RegencyRepository,
    private readonly provinceRepo: ProvinceRepository,
  ) {}

  public async getRegencies(getRegenciesQuery: GetRegenciesDTO) {
    const { limit, page, provinceCode, code, regency } = getRegenciesQuery;

    const whereClause: FilterQuery<Regency> = {};

    if (code) {
      return await this.regencyRepo.findOne({
        code,
      });
    }

    if (regency) {
      whereClause.regency = {
        $like: `%${regency}%`,
      };
    }

    if (provinceCode) {
      whereClause.province = this.provinceRepo.getReference(provinceCode);
    }

    const [regencies, regencyCount] = await this.regencyRepo.findAndCount(
      whereClause,
      {
        limit,
        offset: (page - 1) * limit,
      },
    );

    return {
      data: regencies,
      meta: {
        limit,
        page,
        total: regencyCount,
      },
    };
  }

  public async getRegency(regencyCode: string) {
    const regency = await this.regencyRepo.findOne({
      code: regencyCode,
    });

    if (!regency) {
      throw new HttpException('regency not found', HttpStatus.NOT_FOUND);
    }

    return regency;
  }
}
