import { IsString, IsOptional } from 'class-validator';
import { PaginationDTO } from '../pagination/pagination.dto';

export class GetDistrictsDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly kabkotCode: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly name: string;
}
