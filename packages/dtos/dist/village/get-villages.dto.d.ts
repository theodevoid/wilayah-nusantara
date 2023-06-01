import { PaginationDTO } from '../pagination/pagination.dto';
export declare class GetVillagesDTO extends PaginationDTO {
    readonly districtCode: string;
    readonly code: string;
    readonly village: string;
}
