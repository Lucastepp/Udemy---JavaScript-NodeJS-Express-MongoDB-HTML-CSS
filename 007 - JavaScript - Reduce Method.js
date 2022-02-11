

//Reduce method


const prices = [9.99, 1.50, 19.99, 49.99]


// for of 

let total = 0;
for (let price of prices) {
    total += price
}
console.log(total)

// reduce method

const total = prices.reduce((total, price) => {
    return total + price
})

// or shorter

const total = prices.reduce((total, price) => total + price)