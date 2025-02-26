import { INPUT_NAME, INPUT_ROLE_ID, INPUT_USERNAME } from "@/app/constant/general";

export interface UserUpdateRequest {
    name: string;
    username: string;
    roleId: number;
}

export const buildUserUpdateRequest = (formData: FormData): UserUpdateRequest => {
    return {
        name: (formData.get(INPUT_NAME) as string) ?? "",
        username: (formData.get(INPUT_USERNAME) as string) ?? "",
        roleId: Number(formData.get(INPUT_ROLE_ID)),
    };
};
