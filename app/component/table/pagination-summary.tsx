interface PaginationSummaryProps {
    totalShowItem?: number;
    totalItem?: number;
}

export default function PaginationSummary(props: Readonly<PaginationSummaryProps>) {
    return (
        <span className="text-sm font-normal text-gray-500 mr-2 md:ml-2">
            Menampilkan{" "}
            <span className="font-semibold text-gray-900">
                {props.totalShowItem} dari {props.totalItem}
            </span>
        </span>
    );
}
