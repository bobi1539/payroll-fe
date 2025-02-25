import { INPUT_POSITION_ID, INPUT_SALARY_AMOUNT, INPUT_TOTAL_YEAR } from "@/app/constant/general";
import { removeDot } from "@/app/util/helper";

export interface BasicSalaryRequest {
    salaryAmount: number;
    totalYear: number;
    positionId: number;
}

export const buildBasicSalaryRequest = (formData: FormData): BasicSalaryRequest => {
    return {
        salaryAmount: Number(removeDot(formData.get(INPUT_SALARY_AMOUNT) as string)),
        totalYear: Number(removeDot(formData.get(INPUT_TOTAL_YEAR) as string)),
        positionId: Number(formData.get(INPUT_POSITION_ID)),
    };
};
