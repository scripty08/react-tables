import React from 'react';
import { useTable, useRowSelect, usePagination } from 'react-table'
import { Styles } from './Styles';
import { columnSelection } from './ColumnsSelection';
import { Pagination } from './Pagination';

export const Table = (props) => {

    const { columns, data, pagination, onPaginationChange = () => {}, onSelectionChange = () => {}, showPaginationGoTo } = props;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { selectedRowIds, pageIndex = pagination.page, pageSize = pagination.size },
    } = useTable(
            {
                columns,
                data,
                initialState: {pageIndex: pagination.page, pageSize: pagination.size},
                manualPagination: true,
                pageCount: pagination.count,
            },
            useRowSelect,
            hooks => {hooks.visibleColumns.push(columnSelection)},
            usePagination
        );

    onSelectionChange(selectedFlatRows);

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => {
                    return (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => {
                               if (column.id === 'selection') {
                                   return (<th className={'selectionColumn'} {...column.getHeaderProps()}>{column.render('Header')}</th>)
                               }
                            return (<th {...column.getHeaderProps()}>{column.render('Header')}</th>)
                        })}
                    </tr>
                )})}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.slice(0, 10).map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <Pagination
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                pageCount={pagination.count}
                gotoPage={gotoPage}
                nextPage={nextPage}
                previousPage={previousPage}
                setPageSize={setPageSize}
                pageIndex={pageIndex}
                pageSize={pageSize}
                onPaginationChange={onPaginationChange}
                showPaginationGoTo={showPaginationGoTo}
            />

        </Styles>
    )
}
