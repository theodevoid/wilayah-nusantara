import { IsString, IsOptional } from 'class-validator';
import { PaginationDTO } from '../pagination/pagination.dto';

export class GetRegenciesDTO extends PaginationDTO {
  @IsString()
  @IsOptional()
  readonly provinsiCode: string;

  @IsString()
  @IsOptional()
  readonly code: string;

  @IsString()
  @IsOptional()
  readonly name: string;
}
