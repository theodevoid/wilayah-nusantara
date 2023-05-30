import { EntityRepository } from '@mikro-orm/mysql';
import { Province } from './province.entity';

export class ProvinceRepository extends EntityRepository<Province> {}
