





// filter Method //

const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.filter(num => {
    return num < 5  
})


//

movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Lola',
        score: 92,
        year: 1981
    },
    {
        title: 'Bisciutubg',
        score: 77,
        year: 1999
    },
    {
        title: 'Jonas',
        score: 81,
        year: 2000
    },

]



const goodMovies = movies.filter(movie => {
    return movie.score > 85
})

//shorter Function - same result

const badMovies = movies.filter(mov => mov.score < 90)
const recentMovies = movies.filter(mov => mov.year > 1990)

// Usaing map to get only eg titles

const goodTitles = goodMovies.map(mov => mov.title)