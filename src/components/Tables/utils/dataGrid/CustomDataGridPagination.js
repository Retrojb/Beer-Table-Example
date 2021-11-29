import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { gridPaginationSelector, useGridApiContext, useGridApiRef, useGridSelector, useGridState } from '@mui/x-data-grid'
import TablePagination from '@mui/material/TablePagination';

const useStyle = makeStyles({
    root: {
        display: 'flex',
    },
})
const CustomDataGridPagination = () => {
    const [ page, setPage ] = useState(10);
    const [ rowPerPage, setRowsPerPage ] = useState(10);
    const [ pageSize, setPageSize ] = useState(10)
    const apiRef = useGridApiContext();
    const [state] = useGridState(apiRef);
    const pagState = useGridSelector(apiRef, gridPaginationSelector);
    const classes = useStyle();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    console.log(state)
    return (
        <> </>
        // <TablePagination
        //     className={classes.root}
        //     count={pagState.rowCount}
        //     color="secondary"
        //     rowsPerPage={rowPerPage}
        //     rowsPerPageOptions={[10,25,50,100]}
        //     onRowsPerPageChange={handleRowsPerChange}
        //     page={page}
        //     onPageChange={handleChangePage}
        //     onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        // />
    );
}

export default CustomDataGridPagination
