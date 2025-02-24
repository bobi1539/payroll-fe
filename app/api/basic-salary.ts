"use client";

import { BE_BASIC_SALARY } from "../constant/endpoint-be";
import { Pagination } from "../dto/dto/pagination";
import { BasicSalaryRequest } from "../dto/request/basic-salary-request";
import { BasicSalaryResponse } from "../dto/response/basic-salary-response";
import { PaginationResponse } from "../dto/response/pagination-response";
import { BasicSalarySearch } from "../dto/search/basic-salary-search";
import { buildUrlFindAll, createHeadersWithSession, handleResponse, makeDeleteRequest, makeGetRequest, makePostRequest, makePutRequest } from "./helper";

export const apiBasicSalaryFindAllPagination = async (search: BasicSalarySearch, pagination: Pagination): Promise<PaginationResponse<BasicSalaryResponse>> => {
    const url = buildBasicSalaryUrlFindAll(search, pagination);
    const headers = await createHeadersWithSession();
    const response = await makeGetRequest(url, headers);
    return await handleResponse(response);
};

export const apiBasicSalaryFindAll = async (search: BasicSalarySearch): Promise<BasicSalaryResponse[]> => {
    const url = buildBasicSalaryUrlFindAll(search);
    const headers = await createHeadersWithSession();
    const response = await makeGetRequest(url, headers);
    return await handleResponse(response);
};

export const apiBasicSalaryFindById = async (id: number): Promise<BasicSalaryResponse> => {
    const headers = await createHeadersWithSession();
    const response = await makeGetRequest(BE_BASIC_SALARY + "/id/" + id, headers);
    return await handleResponse(response);
};

export const apiBasicSalaryCreate = async (request: BasicSalaryRequest): Promise<BasicSalaryResponse> => {
    const headers = await createHeadersWithSession();
    const response = await makePostRequest(BE_BASIC_SALARY, headers, request);
    return await handleResponse(response);
};

export const apiBasicSalaryUpdate = async (id: number, request: BasicSalaryRequest): Promise<BasicSalaryResponse> => {
    const headers = await createHeadersWithSession();
    const response = await makePutRequest(id, BE_BASIC_SALARY, headers, request);
    return await handleResponse(response);
};

export const apiBasicSalaryDelete = async (id: number): Promise<BasicSalaryResponse> => {
    const headers = await createHeadersWithSession();
    const response = await makeDeleteRequest(id, BE_BASIC_SALARY, headers);
    return await handleResponse(response);
};

const buildBasicSalaryUrlFindAll = (search: BasicSalarySearch, pagination?: Pagination): string => {
    const url = buildUrlFindAll(BE_BASIC_SALARY, search, pagination);
    const newUrl = new URL(url);
    newUrl.searchParams.append("positionId", search.positionId.toString());
    return newUrl.toString();
};
