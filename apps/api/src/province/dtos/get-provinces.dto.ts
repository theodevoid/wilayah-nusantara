import { PaginationDTO } from '~/pagination/dto/pagination.dto';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetProvincesDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly province: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly code: number;
}
