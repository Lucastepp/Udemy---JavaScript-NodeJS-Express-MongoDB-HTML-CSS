






fetch('https://api.cryptonator.com/api/ticker/btc-usd')
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