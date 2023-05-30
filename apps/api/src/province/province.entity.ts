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
@Index({ properties: ['code'] })
export class Province {
  [EntityRepositoryType]?: ProvinceRepository;

  @PrimaryKey({
    autoincrement: true,
    type: BigIntType,
  })
  id: string;

  @Property()
  @Unique()
  code: number;

  @Property()
  province: string;
}
