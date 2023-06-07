import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  BigIntType,
  ManyToOne,
  Ref,
  PrimaryKeyProp,
  PrimaryKeyType,
  Enum,
} from '@mikro-orm/core';
import { RegencyRepository } from './regency.repository';
import { Province } from '~/province/province.entity';
import { RegencyType } from './types';

@Entity({ tableName: 'regencies', customRepository: () => RegencyRepository })
export class Regency {
  [EntityRepositoryType]?: RegencyRepository;
  [PrimaryKeyProp]?: 'code';
  [PrimaryKeyType]?: string;

  @PrimaryKey({
    type: BigIntType,
  })
  code: string;

  @ManyToOne(() => Province, { fieldName: 'province_code' })
  province!: Ref<Province, 'code'>;

  @Property()
  regency: string;

  @Enum(() => RegencyType)
  type!: RegencyType;
}
