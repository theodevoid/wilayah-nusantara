import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  BigIntType,
  ManyToOne,
  Ref,
  Index,
} from '@mikro-orm/core';
import { DistrictRepository } from './district.repository';
import { Regency } from '~/regency/regency.entity';

@Entity({ tableName: 'districts', customRepository: () => DistrictRepository })
export class District {
  [EntityRepositoryType]?: DistrictRepository;

  @PrimaryKey({
    type: BigIntType,
  })
  code: string;

  @ManyToOne(() => Regency, { fieldName: 'regency_code' })
  regency!: Ref<Regency, 'code'>;

  @Property()
  district: string;
}
