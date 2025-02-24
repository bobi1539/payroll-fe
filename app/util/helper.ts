import { DEFAULT_PAGE_SIZE } from "../constant/general";

export const capitalize = (text: string): string => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getItemNumber = (currentPage: number, index: number): number => {
    return (currentPage - 1) * DEFAULT_PAGE_SIZE + index + 1;
};
