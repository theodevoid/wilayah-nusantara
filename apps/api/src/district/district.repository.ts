import { EntityRepository } from '@mikro-orm/mysql';
import { District } from './district.entity';

export class DistrictRepository extends EntityRepository<District> {}
