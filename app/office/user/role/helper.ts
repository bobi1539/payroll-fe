import { NAME } from "@/app/constant/general";
import { RoleRequest } from "@/app/dto/request/role-request";

export const buildRoleRequest = (formData: FormData): RoleRequest => {
    return {
        name: (formData.get(NAME) as string) ?? "",
    };
};
