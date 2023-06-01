import { PaginationDTO } from '../pagination/pagination.dto';
export declare class GetDistrictsDTO extends PaginationDTO {
    readonly regencyCode: string;
    readonly code: string;
    readonly district: string;
}
