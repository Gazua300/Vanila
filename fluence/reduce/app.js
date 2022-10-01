const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Dectective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'House M. D.', releaseYear: 2004 },
    { name: 'Watchman', releaseYear: 2019 }
]

const serieNames = tvShows.reduce((accumulator, { releaseYear })=>{
    accumulator[releaseYear] = accumulator[releaseYear] + 1 || 1
    
    return accumulator 
})

console.log(serieNames)