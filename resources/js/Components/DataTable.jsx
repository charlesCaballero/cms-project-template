import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
    getKeyValue,
} from "@nextui-org/react";

const DataTable = () => {
    const [page, setPage] = React.useState(1);

    const rowsPerPage = 10;

    const pages = useMemo(() => {
        return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
    }, [data?.count, rowsPerPage]);

    const loadingState =
        isLoading || data?.results.length === 0 ? "loading" : "idle";
    return (
        <Table
            aria-label="Example table with client async pagination"
            bottomContent={
                pages > 0 ? (
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="primary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                ) : null
            }
            {...args}
        >
            <TableHeader>
                <TableColumn key="name">Name</TableColumn>
                <TableColumn key="height">Height</TableColumn>
                <TableColumn key="mass">Mass</TableColumn>
                <TableColumn key="birth_year">Birth year</TableColumn>
            </TableHeader>
            <TableBody
                items={data?.results ?? []}
                loadingContent={<Spinner />}
                loadingState={loadingState}
            >
                {(item) => (
                    <TableRow key={item?.name}>
                        {(columnKey) => (
                            <TableCell>
                                {getKeyValue(item, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default DataTable;
