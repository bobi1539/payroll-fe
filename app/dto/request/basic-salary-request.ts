import { POSITION_ID, SALARY_AMOUNT, TOTAL_YEAR } from "@/app/constant/general";
import { removeDot } from "@/app/util/helper";

export interface BasicSalaryRequest {
    salaryAmount: number;
    totalYear: number;
    positionId: number;
}

export const buildBasicSalaryRequest = (formData: FormData): BasicSalaryRequest => {
    return {
        salaryAmount: Number(removeDot(formData.get(SALARY_AMOUNT) as string)),
        totalYear: Number(removeDot(formData.get(TOTAL_YEAR) as string)),
        positionId: Number(formData.get(POSITION_ID)),
    };
};
