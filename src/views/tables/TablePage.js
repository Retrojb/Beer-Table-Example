import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';import axios from 'axios';
import BeerTable from '../../components/tables/BeerTable';
import { Paper } from '@mui/material';
import { getBeers } from '../../store/actions/beersActions';

const TablePage = () => {

    const dispatch = useDispatch();

    const beerData  = useSelector((state) => state.beers.value);
    const store = useSelector((state) => state.beers);

    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        dispatch(getBeers())      
    }, 
        [dispatch, isLoading, store.beers.value]
    );

    
    return (
        <Paper sx={{ m:3, p:2, bgcolor:'violet'}}>
            <BeerTable data={beerData} />
        </Paper>
    )
}

export default TablePage
