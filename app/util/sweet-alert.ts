import Swal, { SweetAlertResult } from "sweetalert2";

export const showConfirmDialog = async (title: string): Promise<SweetAlertResult<null>> => {
    return await Swal.fire({
        title: title,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#15803d",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes",
    });
};

export const showSuccessDialog = async (text?: string): Promise<void> => {
    await Swal.fire({
        title: "Sukses",
        text: text,
        icon: "success",
        confirmButtonColor: "#15803d",
        customClass: {
            popup: "custom-swal",
        },
    });
};

export const showErrorDialog = async (text: string): Promise<void> => {
    await Swal.fire({
        title: "Oops...",
        text: text,
        icon: "error",
        confirmButtonColor: "#15803d",
    });
};

export const showConfirmDeleteDialog = async (): Promise<SweetAlertResult<null>> => {
    return await showConfirmDialog("Are you sure to delete ?");
};

export const showConfirmRestoreDialog = async (): Promise<SweetAlertResult<null>> => {
    return await showConfirmDialog("Are you sure to restore ?");
};
