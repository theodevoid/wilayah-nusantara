import { IsString, IsOptional } from 'class-validator';
import { PaginationDTO } from '~/pagination/dto/pagination.dto';

export class GetRegenciesDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly provinceCode: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly regency: string;
}
