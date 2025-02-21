"use client";

import { Suspense, useEffect, useState } from "react";
import LoadingOffice from "./loading";
import OfficeSidebar from "../component/sidebar/office-sidebar";
import { useRouter } from "next/navigation";
import OfficeTopbar from "../component/topbar/office-topbar";

interface OfficeLayoutProps {
    children: React.ReactNode;
}

export default function OfficeLayout(props: Readonly<OfficeLayoutProps>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const router = useRouter();

    const handleSidebarOpen = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const validateIsLogin = async () => {
            console.log("Validate login");
        };

        validateIsLogin();
    }, [router]);
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
