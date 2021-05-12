 import axios from 'axios'

async function getDogecoinPrice(){
    try {
        return await axios.get('https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt')
    } catch (error) {
        console.log(error);
    }
};



export default getDogecoinPrice