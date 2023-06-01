import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  OneToMany,
  Property,
  BigIntType,
  Collection,
  PrimaryKeyProp,
  PrimaryKeyType,
} from '@mikro-orm/core';
import { ProvinceRepository } from './province.repository';
import { Regency } from '~/regency/regency.entity';

@Entity({ tableName: 'provinces', customRepository: () => ProvinceRepository })
export class Province {
  [EntityRepositoryType]?: ProvinceRepository;
  [PrimaryKeyProp]?: 'code';
  [PrimaryKeyType]?: string;

  @PrimaryKey({
    type: BigIntType,
  })
  code: string;

  @Property()
  province: string;

  @OneToMany(() => Regency, (regency) => regency.province)
  regencies = new Collection<Regency>(this);
}
