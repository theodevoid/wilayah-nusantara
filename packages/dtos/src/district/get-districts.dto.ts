import { IsString, IsOptional } from 'class-validator';
import { PaginationDTO } from '../pagination/pagination.dto';

export class GetDistrictsDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly regencyCode: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly district: string;
}
