"use client"

import { BE_AUTH } from "../constant/endpoint-be";
import { LoginRequest } from "../dto/request/login-request";
import { LoginResponse } from "../dto/response/login-response";
import { createHeadersWithoutSession, handleResponse, makePostRequest } from "./helper";

export const apiLogin = async (request: LoginRequest): Promise<LoginResponse> => {
    const LOGIN = BE_AUTH + "/login";
    const headers = await createHeadersWithoutSession();
    const response = await makePostRequest(LOGIN, headers, request);
    return handleResponse(response);
};
