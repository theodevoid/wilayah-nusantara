import { IsString, IsOptional } from 'class-validator';
import { PaginationDTO } from '../pagination/pagination.dto';

export class GetProvincesDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly province: string;

  @IsString()
  @IsOptional()
  readonly code: string;
}
