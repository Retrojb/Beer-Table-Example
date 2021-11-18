import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Paper, TableContainer, Table, TableCell, TableBody } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination, TableSortLabel } from '@material-ui/core';
import { Box } from '@mui/system';
import { BeerTableColumns } from '../utils/BeerTableColumns';
import TableHeader from './TableHeader';
import { stableSort, getCompare } from '../utils/TableSortHandler';
const BeerTable = () => {

    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage] = useState(10);
    const [ order, setOrder ] = useState('asc');
    const [ orderBy, setOrderBy ] = useState('abv');

    const tableHeadRows = BeerTableColumns;
    const API_URL = "https://api.punkapi.com/v2/beers?per_page=80";

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await axios.get(API_URL).then(resp => {
                    if (resp.status === 200) {
                        const result = resp.data;
                        return result;
                    }
                });
                setData(result);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

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

    console.log(data.length)
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <h2>Hooray Beer</h2>
            <TableContainer component={Paper}>
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
                                        key={row.id} 
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    {tableHeadRows.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align="left">
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
