import { INPUT_NAME } from "@/app/constant/general";

export interface PositionRequest {
    name: string;
}

export const buildPositionRequest = (formData: FormData): PositionRequest => {
    return {
        name: (formData.get(INPUT_NAME) as string) ?? "",
    };
};
