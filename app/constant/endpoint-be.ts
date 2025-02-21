export const BE_API_URL: string = process.env.NEXT_PUBLIC_BE_API_URL ?? "http://localhost:8080";
export const BE_BASE: string = BE_API_URL + "/api";
export const BE_AUTH: string = BE_BASE + "/auths";