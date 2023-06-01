import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginationDTO {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly page: number = 1;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  readonly limit: number = 10;
}
