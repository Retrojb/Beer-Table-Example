import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { BeerDataGridColumns } from '../../utils/BeerTableColumns';
import CustomDataGridPagination from './utils/dataGrid/CustomDataGridPagination';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

const BeerDataGrid = () => {
    
    const columns = BeerDataGridColumns;
    const [ data, setData ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage] = useState(10);
    const [ pageSize ,setPageSize] = useState(10);

    const [ order, setOrder ] = useState('asc');
    const [ orderBy, setOrderBy ] = useState('abv');
    const [ modalInfo, setModalInfo ] = useState([]);
    const [ showModal, setShowModal ] = useState(false);
    const [ show, setShow ] = useState(false);

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
    }, [setData]);

    const handleRowsPerChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    console.log('DataGrid', data)
    return (
       <Paper 
            style={{ 
                height: 500, 
                width: "100%", 
                border: 'black solid 1px'
            }} 
            pb={{ xs: 5, sm: 10}} 
            m={3}
        >
            <h3>Data Grid</h3>
            <DataGrid 
                columns={columns}
                rows={data}
                page={page}
                pageSize={pageSize}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[ 10, 25, 50, data.length ]}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onRowsPerPageChange={handleRowsPerChange}
                pagination
                { ...data}
            /> 
       </Paper>
    )
}

export default BeerDataGrid
