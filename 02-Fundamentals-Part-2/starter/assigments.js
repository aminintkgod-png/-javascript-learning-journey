// ASSIGMENT 1

/*
const country = 'JAPAN'
const continent = 'ASIA'
const population = 150

console.log(country)
console.log(continent)
console.log(150)
*/

// ASSIGMENT 2
/*
const isIsland = true
let population = 150
const country = 'JAPAN'
let language

console.log(typeof isIsland, typeof population, typeof country, typeof language)
*/

// ASSIGMENT 3
/*

const isIsland = true
let population = 150
const country = 'JAPAN'
const language = 'Japanese'

language = 'English'

*/

// Assigment 4
/*
let population = 150
const country = 'JAPAN'
const language = 'Japanese'
// language = 'English'
const continent = 'ASIA'
let description =
  country +
  ' is in ' +
  continent +
  ', ' +
  'and its ' +
  population +
  ' million people speak ' +
  language

console.log(population / 2)
console.log(population++)
console.log(population > 6)
console.log(population < 33)
console.log(description)
*/

//------------------------------------------------//
let population = 150
const country = 'JAPAN'
const language = 'Japanese'
// language = 'English'
const continent = 'ASIA'
const capital = 'Tokyo'

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

console.log(describeCountry(country, population, capital))

// -------------------

console.log(percentageOfWorld1(150))
console.log(percentageOfWorld1(90))
console.log(percentageOfWorld1(1450))

function percentageOfWorld1(population) {
  return (population / 8300) * 100
}

const percentageOfWorld2 = function (population) {
  return (population / 8300) * 100
}

console.log(percentageOfWorld2(2300))

// ---------------------
const percentageOfWorld3 = (population) => (population / 8300) * 100
console.log(percentageOfWorld3(5200))

// ----------------------
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
}

console.log(describePopulation(country, population))

// ----------------------------------------- Array
const populations = [150, 90, 65, 1409]

console.log(populations.length === 4)

const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
]

console.log(percentages)

// -------------------------------------- Array methods
neighbours = ['Russia', 'South Korea', 'North Korea', 'China']

neighbours.push('Utophia')
neighbours.pop()

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central european country :D')
}

neighbours[neighbours.indexOf('Russia')] = 'SRSI'
console.log(neighbours)

// ----------------------------------------- Objects

const myCountry = {
  country: 'Japan',
  capital: 'Tokyo',
  language: 'Japanese',
  population: 150,
  neighbours: neighbours,
}

console.log(myCountry)
