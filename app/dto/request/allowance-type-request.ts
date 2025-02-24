import { NAME } from "@/app/constant/general";

export interface AllowanceTypeRequest {
    name: string;
}

export const buildAllowanceTypeRequest = (formData: FormData): AllowanceTypeRequest => {
    return {
        name: (formData.get(NAME) as string) ?? "",
    };
};
