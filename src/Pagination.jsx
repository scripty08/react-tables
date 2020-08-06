import React from 'react';
import { DoubleLeftButton, LeftButton, RightButton, DoubleRightButton } from '@scripty/react-buttons';

export const Pagination = (props) => {

    const {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageSize,
        onPaginationChange,
        showPaginationGoTo = false
    } = props;

    const first = (e) => {
        onPaginationChange(0, pageSize);
        gotoPage(0);
    };

    const previous = () => {
        onPaginationChange(pageIndex - 1, pageSize);
        previousPage();
    };

    const next = () => {
        onPaginationChange(pageIndex + 1, pageSize);
        nextPage();
    };

    const last = () => {
        onPaginationChange(pageCount -1, pageSize);
        gotoPage(pageCount -1);
    };

    const getGoTo = () => {
        if (showPaginationGoTo) {
            return (
                <span>
          | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                            onPaginationChange(Number(e.target.value), pageSize);
                        }}
                        style={{ width: '100px' }}
                    />
        </span>
            );
        }
    }

    return (
        <div className="pagination">
            <DoubleLeftButton onClick={first} disabled={!canPreviousPage} iconBtn color={'#08587F'}>
            </DoubleLeftButton>{' '}
            <LeftButton onClick={previous} disabled={!canPreviousPage} iconBtn color={'#08587F'}>
            </LeftButton>{' '}
            <RightButton onClick={next} disabled={!canNextPage} iconBtn color={'#08587F'}>
            </RightButton>{' '}
            <DoubleRightButton onClick={last} disabled={!canNextPage} iconBtn color={'#08587F'}>
            </DoubleRightButton>{' '}
            <span>
          Page{' '}
                <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
            {getGoTo()}{' '}
            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                    onPaginationChange(Number(e.target.value), pageSize);
                }}
            >
                {[3, 5, 10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
}
