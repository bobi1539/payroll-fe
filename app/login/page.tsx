"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import InputLabel from "../component/input/input-label";
import ButtonLoading from "../component/button/button-loading";
import ButtonIcon from "../component/button/button-icon";
import { LoginRequest } from "../dto/request/login-request";
import { apiLogin } from "../api/auth";
import { redirect, useRouter } from "next/navigation";
import { FE_DASHBOARD } from "../constant/endpoint-fe";
import { getCookie, setCookieLogin } from "../util/cookie";
import { COOKIE_JWT_TOKEN } from "../constant/general";

const USERNAME: string = "username";
const PASSWORD: string = "password";

export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        validateIsLogin();
    }, []);

    const validateIsLogin = (): void => {
        const jwtToken = getCookie(COOKIE_JWT_TOKEN);
        if (jwtToken) {
            redirect(FE_DASHBOARD);
        }
    };

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            setIsLoading(true);
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const request = buildLoginRequest(formData);
            const response = await apiLogin(request);
            setCookieLogin(response.jwtToken, response.refreshToken);
            router.push(FE_DASHBOARD);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const buildLoginRequest = (formData: FormData): LoginRequest => {
        return {
            username: (formData.get(USERNAME) as string) ?? "",
            password: (formData.get(PASSWORD) as string) ?? "",
        };
    };

    return (
        <section className="bg-gray-200">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen pt:mt-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 md:p-8">
                        <div className="flex justify-center gap-3">
                            <Image key={"payroll-logo"} className="w-auto h-9" src={"/images/payroll-logo.png"} alt="Payroll Logo" width={100} height={36} priority unoptimized />
                            <span className="self-center text-primary-700 text-xl font-semibold whitespace-nowrap">Applikasi Penggajian</span>
                        </div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-6">Masuk ke akun anda</h1>
                        <form onSubmit={submitLogin} className="flex flex-col gap-4">
                            <InputLabel label="Username" name={USERNAME} type="text" isRequired={true} />
                            <InputLabel label="Password" name={PASSWORD} type="password" placeHolder="••••••••" isRequired={true} />
                            {isLoading ? <ButtonLoading text="Proses Login..." className="mt-2" /> : <ButtonIcon type="submit" icon="fa-solid fa-right-to-bracket" text="Masuk" className="mt-2 py-2.5" />}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
