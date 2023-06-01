import { IsString, IsOptional } from 'class-validator';
import { PaginationDTO } from '../pagination/pagination.dto';

export class GetVillagesDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly districtCode: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly village: string;
}
