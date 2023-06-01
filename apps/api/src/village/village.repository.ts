import { EntityRepository } from '@mikro-orm/mysql';
import { Village } from './village.entity';

export class VillageRepository extends EntityRepository<Village> {}
