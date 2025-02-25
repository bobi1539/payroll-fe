export const BE_API_URL: string = process.env.NEXT_PUBLIC_BE_API_URL ?? "http://localhost:8080";
export const BE_BASE: string = BE_API_URL + "/api";
export const BE_AUTH: string = BE_BASE + "/auths";
export const BE_ROLE: string = BE_BASE + "/roles";
export const BE_ALLOWANCE_TYPE: string = BE_BASE + "/allowance-types";
export const BE_POSITION: string = BE_BASE + "/positions";
export const BE_BASIC_SALARY: string = BE_BASE + "/basic-salaries";
export const BE_ALLOWANCE: string = BE_BASE + "/allowances";
