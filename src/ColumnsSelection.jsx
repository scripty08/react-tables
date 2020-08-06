import React from 'react';
import { IndeterminateCheckbox } from './Checkbox';

export const columnSelection = (columns) => [
    {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
        ),
        Cell: ({ row }) => (
            <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
        ),
    },
    ...columns,
];
