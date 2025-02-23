"use client";

import { Suspense, useEffect, useState } from "react";
import LoadingOffice from "./loading";
import OfficeSidebar from "../component/sidebar/office-sidebar";
import OfficeTopbar from "../component/topbar/office-topbar";
import { getCookie } from "../util/cookie";
import { COOKIE_JWT_TOKEN } from "../constant/general";
import { redirect } from "next/navigation";
import { FE_LOGIN } from "../constant/endpoint-fe";

interface OfficeLayoutProps {
    children: React.ReactNode;
}

export default function OfficeLayout(props: Readonly<OfficeLayoutProps>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        validateIsLogin();
    }, []);

    const validateIsLogin = (): void => {
        const jwtToken = getCookie(COOKIE_JWT_TOKEN);
        if (!jwtToken) {
            redirect(FE_LOGIN);
        }
    };

    const handleSidebarOpen = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <OfficeTopbar setIsSidebarOpen={handleSidebarOpen} />
            <OfficeSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={handleSidebarClose} />
            <main className="bg-gray-50 md:ml-64 min-h-screen p-4 pt-20">
                <Suspense fallback={<LoadingOffice />}>{props.children}</Suspense>
            </main>
            <div onClick={handleSidebarOpen} className={`${isSidebarOpen ? "bg-gray-900/50 fixed inset-0 z-30" : ""}`} />
        </div>
    );
}
