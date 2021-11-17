import axios from 'axios';

const API_URL = "https://api.punkapi.com/v2/beers?per_page=80";

async function getBeers() {
    try {
        await axios.get(API_URL).then(resp => {
            if (resp.status === 200) {
                const result = resp.data;
                console.log(result);
                return result
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export default { getBeers };
