import axios from 'axios';

const API_URL = "https://api.punkapi.com/v2/beers?per_page=80";


const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2',
    timeout: 1000,
});

