"use client";

import Image from "next/image";
import { useState } from "react";
import InputLabel from "../component/input/input-label";
import ButtonLoading from "../component/button/button-loading";
import ButtonIcon from "../component/button/button-icon";

export default function Login() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            console.log("Hello");
        } catch (error) {
            console.error(error);
        } finally {
            // setIsLoading(false);
        }
    };

    return (
        <section className="bg-gray-200">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 md:p-8">
                        <div className="flex justify-center gap-3">
                            <Image key={"payroll-logo"} className="w-auto h-9" src={"/images/payroll-logo.png"} alt="Payroll Logo" width={100} height={36} priority unoptimized />
                            {/* <img src="/images/payroll-logo.png" alt="Payroll Logo" className="w-auto h-9" /> */}
                            <span className="self-center text-primary-700 text-xl font-semibold whitespace-nowrap">Applikasi Penggajian</span>
                        </div>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-6">Masuk ke akun anda</h1>
                        <form onSubmit={submitLogin} className="flex flex-col gap-4">
                            <InputLabel label="Username" name={"username"} type="text" isRequired={true} />
                            <InputLabel label="Password" name={"password"} type="password" placeHolder="••••••••" isRequired={true} />
                            {isLoading ? <ButtonLoading text="Proses Login..." className="mt-2" /> : <ButtonIcon type="submit" icon="fa-solid fa-right-to-bracket" text="Login" className="mt-2 py-2.5" />}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
