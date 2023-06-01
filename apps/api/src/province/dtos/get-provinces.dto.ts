import { PaginationDTO } from '~/pagination/dto/pagination.dto';
import { IsString, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetProvincesDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly province: string;

  @IsString()
  @IsOptional()
  readonly code: string;
}
