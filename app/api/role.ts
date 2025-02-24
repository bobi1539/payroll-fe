import { BE_ROLE } from "../constant/endpoint-be";
import { Pagination } from "../dto/dto/pagination";
import { Search } from "../dto/dto/search";
import { PaginationResponse } from "../dto/response/pagination-response";
import { RoleResponse } from "../dto/response/role-response";
import { buildUrlFindAll, createHeadersWithSession, handleResponse, makeDeleteRequest, makeGetRequest } from "./helper";

export const apiRoleFindAllPagination = async (search: Search, pagination: Pagination): Promise<PaginationResponse<RoleResponse>> => {
    const headers = await createHeadersWithSession();
    const response = await makeGetRequest(buildUrlFindAll(BE_ROLE, search, pagination), headers);
    return await handleResponse(response);
};

export const apiRoleDelete = async (id: number): Promise<RoleResponse> => {
    const headers = await createHeadersWithSession();
    const response = await makeDeleteRequest(id, BE_ROLE, headers);
    return await handleResponse(response);
};
