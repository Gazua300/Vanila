const people = [
    { id: 1, name: 'Nena', age: 58 },
    { id: 2, name: 'Ronaldinho', age: 27 },
    { id: 3, name: 'Flamarion', age: 38 },
    { id: 4, name: 'Dona Ana', age: 89 },
    { id: 5, name: 'Linda', age: 60 }
]

const agesFrenquency = people.reduce((accumulator, { age })=>{
    accumulator[age] = accumulator[age] + 1 || 1

    return accumulator

}, {})

console.log(agesFrenquency)