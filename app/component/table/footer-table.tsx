
import PaginationSummary from "./pagination-summary";
import PaginationTable from "./pagination-table";

interface FooterTableProps {
    totalShowItem: number;
    totalItem: number;
    totalPage: number;
    handlePageChange: (page: number) => void;
}

export default function FooterTable(props: Readonly<FooterTableProps>) {
    return (
        <div className="flex flex-col items-end md:flex-row md:justify-between md:items-center gap-2 p-2 mt-2">
            <PaginationSummary totalShowItem={props.totalShowItem} totalItem={props.totalItem} />
            {props.totalItem > 0 && <PaginationTable totalPage={props.totalPage} handlePageChange={props.handlePageChange} />}
        </div>
    );
}
