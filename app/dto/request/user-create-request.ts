import { INPUT_NAME, INPUT_PASSWORD, INPUT_ROLE_ID, INPUT_USERNAME } from "@/app/constant/general";

export interface UserCreateRequest {
    name: string;
    username: string;
    password: string;
    roleId: number;
}

export const buildUserCreateRequest = (formData: FormData): UserCreateRequest => {
    return {
        name: (formData.get(INPUT_NAME) as string) ?? "",
        username: (formData.get(INPUT_USERNAME) as string) ?? "",
        password: (formData.get(INPUT_PASSWORD) as string) ?? "",
        roleId: Number(formData.get(INPUT_ROLE_ID)),
    };
};
