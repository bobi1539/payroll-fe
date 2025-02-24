"use client";

import { apiRoleFindById, apiRoleUpdate } from "@/app/api/role";
import { RoleResponse } from "@/app/dto/response/role-response";
import { useEffect, useState } from "react";
import RoleCreateOrUpdate from "./create-or-update";
import { buildRoleRequest } from "./helper";
import { showSuccessDialog } from "@/app/util/sweet-alert";

interface RoleUpdateProps {
    id: number;
    closeModal: () => void;
    fetchApiRole: () => Promise<void>;
}

export default function RoleUpdate(props: Readonly<RoleUpdateProps>) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [role, setRole] = useState<RoleResponse>();

    useEffect(() => {
        apiRoleFindById(props.id).then((response) => setRole(response));
    }, [props.id]);

    const submitUpdateRole = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const request = buildRoleRequest(formData);
            await apiRoleUpdate(props.id, request);
            await showSuccessDialog();
            await props.fetchApiRole();
            props.closeModal();
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return <RoleCreateOrUpdate isLoading={isLoading} submit={submitUpdateRole} closeModal={props.closeModal} title="Ubah User Role" role={role} />;
}
