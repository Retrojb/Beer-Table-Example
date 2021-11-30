import axios from 'axios';

const API_URL = "https://api.punkapi.com/v2/beers?per_page=80";


const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2',
    timeout: 1000,
});

export function fetchMockApi () {
    try {
        const fetchData = async () => {
            const result = await axios.get(API_URL).then(resp => {
                if (resp.status === 200) {
                    const result = resp.data;
                    return result;
                }
            });
        };
        fetchData();
    } catch (error) {
        console.log(error);
    }
}

