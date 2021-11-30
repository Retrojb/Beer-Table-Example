import { GET_BEERS, BEERS_ERROR } from "../types";
import axios from "axios";

const API_URL = 'https://api.punkapi.com/v2/beers?per_page=80';

export const getBeers = () => async dispatch => {
    try {
        const resp = await axios.get(API_URL)
        if( resp.status === 200) {
            console.log('SUCCESS KEGS ARE FULL')
            dispatch({
                type: GET_BEERS,
                payload: resp.data
            })
        }
    }
    catch(e) {
        dispatch({
            type: BEERS_ERROR,
            payload: console.log('ERROR LOADING BEERS', e)
        })
    }
}