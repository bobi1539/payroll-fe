import { NAME } from "@/app/constant/general";

export interface PositionRequest {
    name: string;
}

export const buildPositionRequest = (formData: FormData): PositionRequest => {
    return {
        name: (formData.get(NAME) as string) ?? "",
    };
};
