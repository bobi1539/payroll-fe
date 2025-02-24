"use client";

import { apiRoleDelete, apiRoleFindAllPagination } from "@/app/api/role";
import ButtonIcon from "@/app/component/button/button-icon";
import InputSearch from "@/app/component/input/input-search";
import LoadingTable from "@/app/component/table/loading-table";
import CustomTable from "@/app/component/table/custom-table";
import ContentSearch from "@/app/component/text/content-search";
import ContentTitle from "@/app/component/text/content-title";
import { DEFAULT_PAGE_SIZE } from "@/app/constant/general";
import { SURE_TO_DELETE } from "@/app/constant/message";
import { Pagination } from "@/app/dto/dto/pagination";
import { Search } from "@/app/dto/dto/search";
import { PaginationResponse } from "@/app/dto/response/pagination-response";
import { RoleResponse } from "@/app/dto/response/role-response";
import { showConfirmDialog, showSuccessDialog } from "@/app/util/sweet-alert";
import { useCallback, useEffect, useState } from "react";
import FooterTable from "@/app/component/table/footer-table";
import CustomDropdown from "@/app/component/dropdown/custom-dropdown";
import DropdownEdit from "@/app/component/dropdown/dropdown-edit";
import DropdownDelete from "@/app/component/dropdown/dropdown-delete";
import { getItemNumber } from "@/app/util/helper";
import RoleCreate from "./create";
import RoleUpdate from "./update";

export default function Role() {
    const [rolePages, setRolePages] = useState<PaginationResponse<RoleResponse>>();
    const [isModalCreateOpen, setIsModalCreateOpen] = useState<boolean>(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
    const [roleIdUpdate, setRoleIdUpdate] = useState<number>(0);
    const [searchValue, setSearchValue] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchApiRole = useCallback(async (): Promise<void> => {
        setIsLoading(true);

        const buildSearch = (): Search => {
            return {
                value: searchValue,
            };
        };

        const buildPagination = (): Pagination => {
            return {
                pageNumber: currentPage,
                pageSize: DEFAULT_PAGE_SIZE,
            };
        };

        apiRoleFindAllPagination(buildSearch(), buildPagination()).then((response) => setRolePages(response));
        setIsLoading(false);
    }, [currentPage, searchValue]);

    useEffect(() => {
        fetchApiRole();
    }, [fetchApiRole]);

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    const handleEditRole = (id: number): void => {
        setIsModalUpdateOpen(!isModalUpdateOpen);
        setRoleIdUpdate(id);
    };

    const handleDeleteRole = async (roleId: number): Promise<void> => {
        const result = await showConfirmDialog(SURE_TO_DELETE);
        if (result.isConfirmed) {
            try {
                await apiRoleDelete(roleId);
                showSuccessDialog();
                fetchApiRole();
            } catch (error) {
                console.error(error);
            } finally {
                fetchApiRole();
            }
        }
    };

    const headsTable = ["no", "nama role", "aksi"];

    return (
        <div>
            <ContentTitle title="User Role" />
            <section className="bg-white relative shadow-md sm:rounded-lg overflow-hidden pb-5">
                <ContentSearch>
                    <InputSearch onChange={(e) => setSearchValue(e.target.value)} />
                    <div className="flex justify-end">
                        <ButtonIcon onClick={() => setIsModalCreateOpen(!isModalCreateOpen)} type="button" icon="fa-solid fa-plus" text="Tambah Role" className="w-full md:w-auto" />
                    </div>
                </ContentSearch>
                <CustomTable heads={headsTable}>
                    {isLoading ? (
                        <LoadingTable colSpan={headsTable.length} />
                    ) : (
                        rolePages?.data.map((role, index) => (
                            <tr key={role.id} className="border-b text-center">
                                <td scope="row" className="px-2.5 py-2 whitespace-nowrap">
                                    {getItemNumber(currentPage, index)}
                                </td>
                                <td scope="row" className="px-2.5 py-2 break-words text-left whitespace-nowrap">
                                    {role.name}
                                </td>
                                <td scope="row" className="px-2.5 py-2 whitespace-nowrap">
                                    <CustomDropdown>
                                        <>
                                            <DropdownEdit onClick={() => handleEditRole(role.id)} />
                                            <DropdownDelete onClick={() => handleDeleteRole(role.id)} />
                                        </>
                                    </CustomDropdown>
                                </td>
                            </tr>
                        ))
                    )}
                </CustomTable>
                <FooterTable totalItem={rolePages?.totalItem ?? 0} totalPage={rolePages?.totalPage ?? 0} handlePageChange={handlePageChange} />
                {isModalCreateOpen && <RoleCreate closeModal={() => setIsModalCreateOpen(false)} fetchApiRole={fetchApiRole} />}
                {isModalUpdateOpen && <RoleUpdate id={roleIdUpdate} closeModal={() => setIsModalUpdateOpen(false)} fetchApiRole={fetchApiRole} />}
            </section>
        </div>
    );
}
