import { INPUT_NAME } from "@/app/constant/general";

export interface RoleRequest {
    name: string;
}

export const buildRoleRequest = (formData: FormData): RoleRequest => {
    return {
        name: (formData.get(INPUT_NAME) as string) ?? "",
    };
};
