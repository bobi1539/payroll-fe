interface CustomTableProps {
    heads: string[];
    children: React.ReactNode;
}

export default function CustomTable(props: Readonly<CustomTableProps>) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-black uppercase bg-gray-50">
                    <tr className="text-center">
                        {props.heads.map((head, index) => (
                            <th key={index + 1} scope="col" className="px-2 py-2 font-bold whitespace-nowrap">
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="relative">{props.children}</tbody>
            </table>
        </div>
    );
}
