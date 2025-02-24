import { POSITION_ID, SALARY_AMOUNT, TOTAL_YEAR } from "@/app/constant/general";

export interface BasicSalaryRequest {
    salaryAmount: number;
    totalYear: number;
    positionId: number;
}

export const buildBasicSalaryRequest = (formData: FormData): BasicSalaryRequest => {
    return {
        salaryAmount: Number(formData.get(SALARY_AMOUNT)),
        totalYear: Number(formData.get(TOTAL_YEAR)),
        positionId: Number(formData.get(POSITION_ID)),
    };
};
