import { EntityRepository } from '@mikro-orm/mysql';
import { Regency } from './regency.entity';

export class RegencyRepository extends EntityRepository<Regency> {}
