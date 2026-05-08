'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
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
