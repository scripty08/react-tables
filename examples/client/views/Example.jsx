import React, { Fragment, useState, useEffect } from 'react';
import { Modal } from '@scripty/react-modal';
import { Table } from '../../../src';
import { useStore } from '@scripty/react-store';
import './Example.scss';

export const Example = () => {
    const { exampleStore } = useStore('exampleStore');

    useEffect(() => {
        exampleStore.proxy.read({pagination: {size: 3, page: 0}});
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Title',
                accessor: (row, idx) => {
                    if (row.content !== null) {
                        if (typeof row.content.title !== 'undefined') {
                            return row.content.title
                        }
                    }
                    return ''
                },
            },
        ],
        []
    );

    const onSelectionChange = (data) => {
        console.log(data, ' data ---------------------- ');
    };

    const onPaginationChange = async (page, size) => {
        await exampleStore.proxy.read({pagination: {size, page}});
    };

    return (
        <Fragment>
            <Modal
                title={'Choose Cards'}
                visible={true}
            >
                <Table
                    columns={columns}
                    data={exampleStore.rawData}
                    onSelectionChange={onSelectionChange}
                    pagination={exampleStore.pagination}
                    onPaginationChange={onPaginationChange}
                />
            </Modal>
        </Fragment>
    )

}
