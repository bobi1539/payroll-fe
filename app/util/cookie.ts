"use client";

import Cookies from "js-cookie";
import { COOKIE_EXPIRED_IN_DAYS } from "../constant/general";

export function setCookie(name: string, value: string) {
    Cookies.set(name, value, { expires: COOKIE_EXPIRED_IN_DAYS, path: "/" });
}

export function getCookie(name: string): string | undefined {
    return Cookies.get(name);
}

export function removeCookie(name: string) {
    Cookies.remove(name);
}
