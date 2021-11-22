import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { getBeers } from '../api/api';

const TablePage = () => {

    const [ data, setData ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    // let response = async () => {
    //     let res = api.getBeers();
    //     let resp = await res.data;
    //     console.log('foo', resp);
    //     setData(resp);

    // } 

    useEffect(() => {
       const fetchBeerTableData = async () => {
           setIsLoading(true)
           const results = await getBeers()
           console.log('SUCCESS', results);
           setData(results);
           setIsLoading(false);
       }
       if(!isLoading) {
           console.log(isLoading)
        fetchBeerTableData();
       }
    }, [setData, setIsLoading]);
    // const API_URL = "https://api.punkapi.com/v2/beers?per_page=80";

    // useEffect(() => {
    //     try {
    //         const fetchData = async () => {
    //             const result = await axios.get(API_URL).then(resp => {
    //                 if (resp.status === 200) {
    //                     const result = resp.data;
    //                     return result;
    //                 }
    //             });
    //             setData(result);
    //         };
    //         fetchData();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    console.log('Data in beer page', data);
    return (
        <div>
            Table page
        </div>
    )
}

export default TablePage
