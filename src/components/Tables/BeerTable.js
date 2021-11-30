import React, { useState, useEffect } from 'react'
import { Paper, TableContainer, Table, TableCell, TableBody } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { BeerTableColumns } from '../../utils/BeerTableColumns';
import TableHeader from './utils/TableHeader';
import { stableSort, getCompare } from '../../utils/TableSortHandler';
import TableToolbarRow from './utils/TableToolbarRow';

const BeerTable = ( props ) => {

    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage] = useState(10);
    const [ order, setOrder ] = useState('asc');
    const [ orderBy, setOrderBy ] = useState('abv');

    const tableHeadRows = BeerTableColumns;
   
    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    const handleTableSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <div>
                <h2>Hooray Beer</h2>
            </div>
            <TableContainer component={Paper}>
                <TableToolbarRow />
                <Table sx={{ minWidth: 650 }} aria-label="Beer Table">
                    <TableHeader 
                        onRequestSort={handleTableSort}
                        order={order}
                        orderBy={orderBy}
                    />
                    <TableBody>
                        {stableSort(data, getCompare(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow 
                                        hover 
                                        role="checkbox" 
                                        tabIndex={-1} 
                                        key={row.field} 
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    {tableHeadRows.map((column) => {
                                        const value = row[column.field];
                                        return (
                                            <TableCell key={column.field} align="left">
                                                {column.format &&  typeof value === 'number'
                                                ? column.format(value): value
                                                }
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10,25,50,100]}
                component="div"
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleRowsPerChange}
                count={data.length}
            >
            </TablePagination>
        </Paper>
    )
}

export default BeerTable
