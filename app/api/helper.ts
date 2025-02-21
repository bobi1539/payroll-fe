"use client"

import { HTTP_CODE_UNAUTHORIZED } from "../constant/general";
import { showErrorDialog } from "../util/sweet-alert";

export const createHeadersWithoutSession = async (): Promise<Headers> => {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    return new Headers(headers);
};

export const createHeadersWithSession = async (): Promise<Headers> => {
    const headersObj: Record<string, string> = {
        "Content-Type": "application/json",
        Authorization: `Bearer `,
    };
    return new Headers(headersObj);
};

export const makeGetRequest = async (url: string, headers: Headers): Promise<Response> => {
    const response = await fetch(url, {
        method: "GET",
        headers: headers,
    });
    if (response.status === HTTP_CODE_UNAUTHORIZED) {
        await handleTokenExpired();
        return makeGetRequest(url, await createHeadersWithSession());
    }
    return response;
};

export const makePostRequest = async <T>(url: string, headers: Headers, body: T): Promise<Response> => {
    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: createRequestBody(body),
    });
    if (response.status === HTTP_CODE_UNAUTHORIZED) {
        await handleTokenExpired();
        return makePostRequest(url, await createHeadersWithSession(), body);
    }
    return response;
};

export const makePutRequest = async <T>(id: number, url: string, headers: Headers, body: T): Promise<Response> => {
    const response = await fetch(url + "/" + id, {
        method: "PUT",
        headers: headers,
        body: createRequestBody(body),
    });
    if (response.status === HTTP_CODE_UNAUTHORIZED) {
        await handleTokenExpired();
        return makePutRequest(id, url, await createHeadersWithSession(), body);
    }
    return response;
};

export const makePutRequestWithoutId = async <T>(url: string, headers: Headers, body: T): Promise<Response> => {
    const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: createRequestBody(body),
    });
    if (response.status === HTTP_CODE_UNAUTHORIZED) {
        await handleTokenExpired();
        return makePutRequestWithoutId(url, await createHeadersWithSession(), body);
    }
    return response;
};

export const makeDeleteRequest = async (id: number, url: string, headers: Headers): Promise<Response> => {
    const response = await fetch(url + "/" + id, {
        method: "DELETE",
        headers: headers,
    });
    if (response.status === HTTP_CODE_UNAUTHORIZED) {
        await handleTokenExpired();
        return makeDeleteRequest(id, url, await createHeadersWithSession());
    }
    return response;
};

export const handleResponse = async <T>(response: Response): Promise<T> => {
    const result = await response.json();
    if (!response.ok) {
        showErrorDialog(result.message);
        throw new Error(`Error : ${result.message}`);
    }
    return result.data as T;
};

export const createRequestBody = <T>(body: T): string => {
    return JSON.stringify(body);
};

export const handleTokenExpired = async (): Promise<void> => {
    console.log("error")
};
