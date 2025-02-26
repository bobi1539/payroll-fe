import { INPUT_PASSWORD, INPUT_USERNAME } from "@/app/constant/general";

export interface LoginRequest {
    username: string;
    password: string;
}

export const buildLoginRequest = (formData: FormData): LoginRequest => {
    return {
        username: (formData.get(INPUT_USERNAME) as string) ?? "",
        password: (formData.get(INPUT_PASSWORD) as string) ?? "",
    };
};
