"use client";

import { showSuccessDialog } from "@/app/util/sweet-alert";
import RoleCreateOrUpdate from "./create-or-update";
import { buildRoleRequest } from "./helper";
import { apiRoleCreate } from "@/app/api/role";
import { useState } from "react";

interface RoleCreateProps {
    closeModal: () => void;
    fetchApiRole: () => Promise<void>;
}

export default function RoleCreate(props: Readonly<RoleCreateProps>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitCreateRole = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const request = buildRoleRequest(formData);
            await apiRoleCreate(request);
            await showSuccessDialog();
            await props.fetchApiRole();
            props.closeModal();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return <RoleCreateOrUpdate isLoading={isLoading} submit={submitCreateRole} closeModal={props.closeModal} title="Tambah User Role" />;
}
