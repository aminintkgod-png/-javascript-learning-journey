'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
*/
// Enhanced Object literal : copute properties/keys of objects ---> [any expression]

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`,
    );
  },
  /* Old way 
  orderPizza: function (mainIngrediant, ...otherIngrediant) {
    console.log();
  },
  */

  // Enhanced object literal way
  orderPizza(mainIngrediant, ...otherIngrediant) {
    console.log();
  },
};

// DESTRUCTRING ARRAY
/*

const birthyears = [1999, 2007, 1989];

const [amin, mel, cara] = birthyears;
console.log(amin, mel, cara);

// const [first, second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching values
console.log(`Before Swapping: main:${main}, secondary:${secondary} `);
[main, secondary] = [secondary, main];
console.log(` Swapping: main:${main}, secondary:${secondary} `);

console.log(restaurant.order(1, 2));

const [starterFood, mainFood] = restaurant.order(1, 2);
console.log(starterFood, mainFood);

const nested = [2, 3, [5, 6]];

// const [a, , b] = nested;
const [a, , [b, c]] = nested;
console.log(a, b, c);

// Default values
const [c1, c2, c3 = 'No customer'] = ['amin', 'mmad'];
console.log(c1, c2, c3);
*/

// --------------------------------------------------------------
// DESTRUCTRING OBJECTS
/*
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: businessHours,
  categories: tags,
} = restaurant;

console.log(restaurantName, businessHours, tags);

// Default values
const { menu = [], starterMenu: starter = [] } = restaurant;

// Mutating variables
let a = 11;
let b = 99;

const obj = { a: 7, b: 5 };

({ a, b } = obj);
console.log(`a: ${a}, b: ${b}`);

// Nested objects
const { sat } = businessHours;
console.log(sat);

// Passing an object as argument to a function and destruct that object inside function's parameter section
restaurant.orderDelivery({
  address: 'Takane 124-18',
});
*/

// -----------------------------------------------------
// Spread operator
/*
console.log(...[1, 2, 3, 4, 5]);
const arr = [1, 2, 3];

const newArr = [20, 21, ...arr];
console.log('newArr: ', newArr);
console.log('arr: ', arr);

const newMenu = [...restaurant.mainMenu, 'Goconi'];

// 2 main usecases of spread operator
// - Merge two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'amin';
const letters = [...str, ' ', 'mmm'];
console.log(letters);

restaurant.orderPasta('tomato', 'pinaple', 'chesee');

const ingrediants = [];
prompt("Let's create your favorite pizza ;)\nClick ok please...");
for (let i = 0; i < 3; i++) {
  ingrediants.push(prompt(`Ingrediant ${i + 1}`));
}

console.log(ingrediants);

restaurant.orderPasta(...ingrediants);
*/

// ----------------------------------------------------
// Rest operator: used for packed or collected  rest of elements iniside an array or object inside another array or object
/*
const friends = ['God', 'parents', 'mmad', 'arman'];
const [bestFriends1, bestFriends2, ...niceFriends] = friends;
console.log(bestFriends1, bestFriends2, niceFriends);

// objects
const { openingHours: businessHours } = restaurant;
const { sat, ...weekdays } = businessHours;
console.log(sat, weekdays);

const add = function (...numbers) {
  console.log(numbers);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

console.log(add(2, 3, 4, 5, 6));
console.log(add(1, 4));
console.log(add(...[2, 3]));
*/

// ------------------------------------------------------ Logical Assigment
/*
const rest1 = {
  name: 'la pizza',
  // numOfGuests: 20,
  numOfGuests: 0,
};

const rest2 = {
  name: 'gionio',
  owner: 'mmad',
};

// rest1.numOfGuests = rest1.numOfGuests || 10;
// rest2.numOfGuests = rest2.numOfGuests || 10;

// rest1.numOfGuests ||= 10;
// rest2.numOfGuests ||= 10;

rest1.numOfGuests ??= 10;
rest2.numOfGuests ??= 10;

// rest1.owner = rest1.owner || 'God';
// rest2.owner = rest2.owner || 'God';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//SOLUTION OF Challenge #1

// 1.
const {
  players: [players1, players2],
} = game;
// const players = game.players

// console.log(players);

// const [players1, players2] = players;
// const players1 = players[0];
// const players2 = players[1];
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'cotinio', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`Number of goals that were scored in total: ${players.length}`);
};

printGoals(...game.scored);

// 7.
console.log((team1 < team2 && 'team1') || (team2 < team1 && 'team2'));
*/

//----------------------------------------------------- loop over arrays and Array.entries()
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, v] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${v} `);
}


// -------------------------------------------------------- Optional Chaining ?.

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
const weekdays = ['mon', 'tue', 'wedn', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  console.log(
    (restaurant.openingHours[day]?.open && `We are open on ${day}`) ??
      `${day} is closed.`,
  );
}

console.log(restaurant.order?.(1, 0) ?? 'Method not exict');
console.log(restaurant.order23?.(1, 0) ?? 'Method not exict');

const users = [{ name: 'amin', email: 'God@email' }];

console.log(users[0]?.name);
console.log(users[20]?.name ?? 'User not find');


// --------------------------------------------------------------- Loop over objects
const properties = Object.keys(openingHours);
const values = Object.values(openingHours);
const entries = Object.entries(openingHours);

console.log(properties);
console.log(values);
console.log(entries);

let str = `we are open on ${properties.length} days: `;

for (const day of properties) {
  str += `${day} `;
}

console.log(str);

for (const [day, { open: openHour, close: closeHour }] of entries) {
  console.log(`On ${day} we are open at ${openHour} and close at ${closeHour}`);
}
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// SOLUTION

// Task #1

const { scored } = game;

for (const [scoreNumber, player] of scored.entries()) {
  console.log(`Goal ${scoreNumber + 1}: ${player}`);
}

// Task #2

const { odds } = game;
let sum = 0;

const entries = Object.entries(odds);
console.log(entries);

for (const [key, value] of entries) {
  sum += value;
}

console.log(sum / entries.length);

// Task #3
const { team1, team2 } = game;

for (const [key, oddValue] of entries) {
  console.log(
    `Odd of ${(key === 'x' && 'Draw') || (key !== 'x' && 'Victory')} ${game[key] || ''}: ${oddValue} `,
  );
}

// Task #4
const scores = {};
const duplicate = [];

for (let i = 0; i < scored.length; i++) {
  if (duplicate.includes(scored[i])) continue;
  scores[scored[i]] = 1;
  for (let j = i + 1; j < scored.length; j++) {
    if (scored[i] === scored[j]) {
      scores[scored[i]] += scores[scored[i]];
      duplicate.push(scored[i]);
    }
  }
}

console.log(scores);


// -------------------------------------------------- Sets: Data Structure used for collet UNIQUE RELATED VALUES

const goalsScored = [
  'Lewanowski',
  'Yamal',
  'Yamal',
  'Rashford',
  'Raphinia',
  'Rashford',
  'Gavi',
  'Gavi',
];

const uniqueScorres = new Set(goalsScored).add('pedri');

uniqueScorres.delete('Gavi');
console.log(uniqueScorres);

for (const player of uniqueScorres) {
  console.log(player);
}

console.log(uniqueScorres.has('pedri'));

const uniqueScorresArray = [...uniqueScorres];
console.log(uniqueScorresArray);

// -------------------------------------------------------------------------- New Methods for Sets
// New Operations to Make Sets Useful!

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Find common values inside two Sets
const commonIngeridients = italianFoods.intersection(mexicanFoods);

console.log(commonIngeridients);

console.log([...commonIngeridients]);

console.log(italianFoods.union(mexicanFoods));

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueItalianAndMexica = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexica);


// ------------------------------------------------------------------------- MAPS

// ADD (set) new Elements to Map
const rest = new Map();
rest
  .set('name', 'Ghafar')
  .set(1, 'Imam Reza Squre')
  .set(2, 'piruzi Square')
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(rest);

// To Read(get) elements from Map
const resturantName = rest.get('name');
console.log(resturantName);

const arr = [2, 3];
rest.set(arr, 'test');

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr));


// -----------------------------------------------------------------------------
const question = new Map([
  ['question', 'Best Programming Language ?'],
  [1, 'C'],
  [2, 'JAVA'],
  [3, 'Python'],
  [4, 'JS'],
  ['answer', 4],
  [false, 'Try again'],
  [true, 'Correct'],
]);

console.log(question);

// Convert Objects to Maps
const hourMaps = new Map(Object.entries(openingHours));

console.log(hourMaps);

// Quiz app

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
  // typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Please Enter Your Answer: '));
const answer = 2;
const correctAnswer = question.get('answer');
console.log(question.get(answer === correctAnswer));

// console.log(question.get(answer === question.get('answer')));
console.log([...question.entries()]);
console.log([...question]);

console.log(question.keys());
console.log(question.values());

*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
console.log(gameEvents.keys());
console.log(gameEvents.values());
// console.log(gameEvents.entries());

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`,
);
// Precise version
// solution-1
// const gameEventsArr = [...gameEvents];
// console.log(gameEventsArr[gameEventsArr.length - 1][0] / gameEvents.size);

// solution-2
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes.`,
);
// Task 4
// console.log([...gameEvents].sort((a, b) => a - b));
// const gameEventsAscending = [...gameEvents].sort((a, b) => a - b);
for (const [min, event] of gameEvents) {
  const half = min > 45 ? '[SECOND HALF]' : '[FIRST HALF]';
  console.log(`${half} ${min}: ${event}`);
}


// --------------------------------------------------------------- Working with Strings
// Part 1
const airLine = 'Japan Air line';
const plane = 'B4088';

console.log(airLine[0]);
console.log(plane.length);

console.log(airLine.indexOf('a'));
console.log(airLine.lastIndexOf('a'));

console.log(airLine.indexOf('Air'));

console.log(airLine.slice(6));
console.log(airLine.slice(0, 5));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(0, airLine.lastIndexOf(' ')));

console.log(airLine.slice(-4));
console.log(airLine.slice(-4, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  // (s === 'B' || s === 'E') && console.log('Middle Seat');
  s === 'B' || s === 'E' ? console.log('Middle Seat') : console.log('Lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('21C');

// ------------------------------------------------------------------
// Part 2

const passenger = 'amIn';

// Fix capitalization
const passengerLower = passenger.toLowerCase();

const capializeName = name => {
  name = name.toLowerCase();
  return name[0].toUpperCase() + name.slice(1);
};

const correctPassengerName =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctPassengerName);

console.log(capializeName(passengerLower));

// Comparing Emails

const email = 'hello@gmail.com';
const loggedInEmail = '   HEllo@gmail.com \n';

console.log(email === loggedInEmail);

const normalizedEmail = loggedInEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

// Replace

const priceJP = '210,58#';
const priceUS = priceJP.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'come to door 22, door 22';

console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Boolean value methods (includes(), startsWith(), endsWith())

const plane = 'AirBus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));
*/

// ------------------------------------------------------------------
// Part 3
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Amin gharibshah'.split(' ');

const passangerName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(passangerName);

const capitalizeName = function (name) {
  const lowerCaseName = name.toLowerCase();
  // console.log('lower Case name  =  ', lowerCaseName);
  // console.log(lowerCaseName.split(' '));

  const capitalWords = [];
  for (const word of lowerCaseName.split(' ')) {
    // capitalWords.push(word[0].toUpperCase() + word.slice(1));
    capitalWords.push(word.replace(word[0], word[0].toUpperCase()));
  }
  // console.log(capitalWords);

  return capitalWords.join(' ');
};

console.log(capitalizeName('amin gHAribshah'));
console.log(capitalizeName('cara delevingen mEn'));

const str = 'Hello';

console.log(str.padStart(3, '*'));

const maskCreditCard = function (number) {
  const str = number + '';
  // const str = String(number)

  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(45861234));

const warningMessage = 'Earthquake... Run to Evacuation ';
console.log(warningMessage.repeat(3));
