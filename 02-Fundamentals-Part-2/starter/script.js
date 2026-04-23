'use strict'
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('You can drive.')


function logger(text) {
  console.log(text)
}

logger()
logger()
logger()

function fruitprocessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

logger(fruitprocessor(5, 0))
logger(fruitprocessor(2, 4))


function calcAge1(currentYear, birthYear) {
  return currentYear - birthYear
}

console.log(calcAge1(2026, 1999))

const calcAge2 = function (currentYear, birthYear) {
  return currentYear - birthYear
}

console.log(calcAge2(2026, 1999))


const calcAge3 = (birthYear) => 2026 - birthYear

console.log(calcAge3(1999))

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2050 - birthYear
  return `${firstName} retires in ${65 - age} years`
}

console.log(yearsUntillRetirement(1999, 'amin'))
console.log(yearsUntillRetirement(1989, 'mmad'))


function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
}

console.log(fruitProcessor(4, 2))


// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2050 - birthYear
//   return `${firstName} retires in ${65 - age} years`
// }

const calcAge = (birthYear) => 2037 - birthYear

const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  return retirement > 0 ? retirement : 'Already retired'
}

console.log(yearsUntillRetirement(1999, 'Amin'))
console.log(yearsUntillRetirement(1949, 'Mmad'))


const friends = ['Mmad', 'Arman', 'Daniel', 'Sahiru', 'Silva']
console.log(friends)

// const years = new Array(1991, 1984, 1976, 2000)
// console.log(years)

console.log(friends[0], friends[2])
console.log(friends.length)
// Get last elemtn of any array
console.log(friends[friends.length - 1])

friends[1] = 'Arman2'

const amin = ['amin', 'gharibshah', 2026 - 1999, friends]

const calcAge = (birthYear) => 2026 - birthYear

const years = [1990, 1995, 1989, 1968, 1987]



console.log(calcAge(years[0]))
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [age1, age2, age3]


const friends = ['Mmad', 'Arman', 'Daniel', 'Sahiru', 'Silva']

// Add element
const newLength = friends.push('Jay')
// push function return value is length of new array
console.log(friends)

console.log(friends.unshift('John'))

// Remove elements
// friends.pop()
console.log(friends.pop())

const popped = friends.shift()
console.log(friends)

console.log(friends.indexOf('Sahiru'))
console.log(friends.includes('bob'))
console.log(friends.includes('Mmad'))

if (friends.includes('Mmad')) {
  console.log('You have a friend called Mmad')
}
*/

const jonas = {
  firstName: 'Jonas',
  lastName: 'sched',
  birthYear: 1999,
  job: 'teacher',
  friends: ['amin', 'mmad', 'arman', 'silva'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2026 - this.birthYear
    return this.age
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  },
}

console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'

console.log(jonas['first' + nameKey])

// const interstedIn = prompt(
//   'What do you want to know about Jonas? Choodr between firstName, lastName, age, job, and friends'
// )

// console.log(interstedIn)

// console.log(
//   jonas[interstedIn] ? jonas[interstedIn] : 'Invalid Input, try again with provided input list'
// )

jonas.location = 'Prortugal'
jonas['twitter'] = 'test'

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
)

console.log(jonas.calcAge())
// console.log(jonas['calcAge'](1991))

console.log(jonas.getSummary())
