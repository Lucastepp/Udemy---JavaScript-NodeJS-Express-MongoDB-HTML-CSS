






/*fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Response, waiting to parse...", res)
        return res.json()
    })
    .then(data => {
        console.log("Data parsed...")
        console.log(data.ticker.price)
    })
    .catch(err => {
        console.log('Oh No!!! Error!', err)
    });
*/

/*const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch (err) {
        console.log("Something Went Wrong!!!", err)
    }
};
*/

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (err) {
        console.log("ERRORRR!!!", err)
    }
}