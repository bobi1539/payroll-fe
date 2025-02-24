import { DEFAULT_PAGE_SIZE } from "../constant/general";
import { PaginationResponse } from "../dto/response/pagination-response";

export const capitalize = (text: string): string => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getTotalShowItem = <T>(paginationResponse: PaginationResponse<T> | undefined): number => {
    if (paginationResponse === undefined) {
        return 0;
    }
    if (paginationResponse.totalItem < DEFAULT_PAGE_SIZE) {
        return paginationResponse.totalItem;
    }
    return DEFAULT_PAGE_SIZE;
};

export const getItemNumber = (currentPage: number, index: number): number => {
    return (currentPage - 1) * DEFAULT_PAGE_SIZE + index + 1;
};
