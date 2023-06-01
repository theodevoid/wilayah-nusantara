import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  BigIntType,
  ManyToOne,
  Ref,
} from '@mikro-orm/core';
import { RegencyRepository } from './regency.repository';
import { Province } from '~/province/province.entity';

@Entity({ tableName: 'regencies', customRepository: () => RegencyRepository })
export class Regency {
  [EntityRepositoryType]?: RegencyRepository;

  @PrimaryKey({
    type: BigIntType,
  })
  code: string;

  @ManyToOne(() => Province, { fieldName: 'province_code' })
  province!: Ref<Province, 'code'>;

  @Property()
  regency: string;
}
