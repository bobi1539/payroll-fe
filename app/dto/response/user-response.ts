import { BaseDomainResponse } from "./base-domain-response";

export interface UserResponse extends BaseDomainResponse {
    id: number;
    name: string;
    username: string;
}
