import { PaginationDTO } from '../pagination/pagination.dto';
export declare class GetRegenciesDTO extends PaginationDTO {
    readonly provinceCode: string;
    readonly code: string;
    readonly regency: string;
}
