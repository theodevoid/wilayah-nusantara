import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Unique,
  Index,
  Property,
  BigIntType,
} from '@mikro-orm/core';
import { ProvinceRepository } from './province.repository';

@Entity({ tableName: 'provinces', customRepository: () => ProvinceRepository })
export class Province {
  [EntityRepositoryType]?: ProvinceRepository;

  @PrimaryKey({
    type: BigIntType,
  })
  code: string;

  @Property()
  province: string;
}
