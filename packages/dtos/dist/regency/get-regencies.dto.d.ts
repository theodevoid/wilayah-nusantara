import { PaginationDTO } from '../pagination/pagination.dto';
export declare class GetRegenciesDTO extends PaginationDTO {
    readonly provinsiCode: string;
    readonly code: string;
    readonly name: string;
}
