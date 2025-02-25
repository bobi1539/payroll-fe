"use client";

import { POSITION_ID_PARAM } from "@/app/constant/general";
import { useSearchParams } from "next/navigation";

export default function BasicSalary() {
    const searchParams = useSearchParams();
    const positionId = searchParams.get(POSITION_ID_PARAM);

    
    return <h1>Hello {positionId} </h1>;
}
