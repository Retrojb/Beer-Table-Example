import React, { useState } from 'react'
import { Paper, TableContainer, Table, TableCell, TableBody } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination, TableSortLabel } from '@material-ui/core';
import { visuallyHidden } from '@mui/utils';
import { Box } from '@mui/system';
import { BeerTableColumns } from '../utils/BeerTableColumns';

const TableHeader = (props) => {
    const { onRequestSort } = props;
    const [ order, setOrder ] = useState('asc');
    const [ orderBy, setOrderBy ] = useState('abv');
    const tableHeadRows = BeerTableColumns;

    const handleTableSort = (event, property) => {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(property);
    };

    const sortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    return (
        <TableHead>
            <TableRow>
                {tableHeadRows.map((row) => (
                    <TableCell 
                        key={row.id}
                        align={row.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === row.id ? order : false}
                    >
                        <TableSortLabel 
                            active={orderBy === row.id} 
                            direction={orderBy === row.id ? order: 'asc'} 
                            onClick={sortHandler(row.id)}
                        >
                            {row.label}
                            {orderBy === row.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending' }
                                </Box>
                            ) : null }
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default TableHeader
