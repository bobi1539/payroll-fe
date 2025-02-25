import { INPUT_ALLOWANCE_AMOUNT, INPUT_ALLOWANCE_TYPE_ID, INPUT_POSITION_ID } from "@/app/constant/general";
import { removeDot } from "@/app/util/helper";

export interface AllowanceRequest {
    positionId: number;
    allowanceTypeId: number;
    allowanceAmount: number;
}

export const buildAllowanceRequest = (formData: FormData): AllowanceRequest => {
    return {
        positionId: Number(formData.get(INPUT_POSITION_ID)),
        allowanceTypeId: Number(formData.get(INPUT_ALLOWANCE_TYPE_ID)),
        allowanceAmount: Number(removeDot(formData.get(INPUT_ALLOWANCE_AMOUNT) as string)),
    };
};
