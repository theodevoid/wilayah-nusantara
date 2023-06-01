import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  BigIntType,
  ManyToOne,
  Ref,
} from '@mikro-orm/core';
import { VillageRepository } from './village.repository';
import { District } from '~/district/district.entity';

@Entity({ tableName: 'villages', customRepository: () => VillageRepository })
export class Village {
  [EntityRepositoryType]?: VillageRepository;

  @PrimaryKey({
    type: BigIntType,
  })
  code: string;

  @ManyToOne(() => District, { fieldName: 'district_code' })
  district!: Ref<District, 'code'>;

  @Property()
  village: string;
}
