import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Paper, TableContainer, Table, TableCell, TableBody } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BeerTableHeadCells } from '../utils/BeerTableCells';

const BeerTable = () => {

    const [ data, setData ] = useState(null);
    const tableHeadRows = BeerTableHeadCells;
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

    console.log('We got beer', tableHeadRows);

    return (
        <div>
            <h2>Hooray Beer</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Beer Table">
                    <TableHead>
                        <TableRow>
                            {tableHeadRows.map((row) => (
                                <TableCell key={row.id}>{row.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((tableRow) => (
                            <TableRow key={tableRow.id}>
                                <TableCell>{tableRow.name}</TableCell>
                                <TableCell>{tableRow.image_url}</TableCell>
                                <TableCell>{tableRow.tagline}</TableCell>
                                <TableCell>{tableRow.description}</TableCell>
                                <TableCell>{tableRow.abv}</TableCell>
                                <TableCell>{tableRow.ibu}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BeerTable
