const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// ------------------------------------------------
// 1
/*
// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

console.log(`First book: ${firstBook}
    second book: ${secondBook}`);
// 1.2
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(`rating: ${rating}
ratingsCount: ${ratingsCount}`);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/

// -------------------------------------------------------
// 2
/*
const [firstBook, , , , , , , seventhBook] = books;

// 2.1
const { title, author, ISBN } = firstBook;
console.log(title, author, ISBN);

// 2.2
const { keywords: tags } = firstBook;
console.log('Tags: ', tags);

// 2.3
const { language, programmingLanguage = 'unknown' } = seventhBook;
console.log(language, programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = firstBook);
console.log(bookTitle, bookAuthor, firstBook);

// 2.5

const {
  thirdParty: {
    goodreads: { rating },
  },
} = firstBook;

console.log(rating);

// 2.6

const printBookInfo = function ({ author, title, year = 'year unkmown' }) {
  console.log(`${title} by ${author}, ${year}.`);
};

printBookInfo({
  year: 1999,
  title: 'prison break',
  author: 'Michecl chophiled',
});

printBookInfo({
  title: 'breaking bad',
  author: 'vanc kiligan',
});
*/

// -----------------------------------------------
// 3
/*
const [firstBook, secondBook] = books;
// 3.1
const bookAuthors = [...firstBook.author, ...secondBook.author];
console.log(bookAuthors);
// 3.2
const spellword = function (word) {
  let str = '';
  const letters = [...word];

  for (let i = 0; i < letters.length; i++) {
    str += letters[i] + ' ';
  }

  console.log(str);
};

spellword('Amin');

const spellWord2 = function (word) {
  console.log(...word);
};

spellWord2('mmad');
*/

// ----------------------------------------
// 4
/*
// 4-1
const [firstBook, secondBook] = books;
const {
  keywords: [mainKeyword, ...rest],
} = firstBook;

// const [mainKeyword, ...rest] = keywords;

console.log(mainKeyword, rest);

// 4-2
const { publisher: bookPublisher, ...restOfTheBook } = secondBook;
console.log(bookPublisher, restOfTheBook);

// 4-3
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors.`);
};

printBookAuthorsCount('Algorithm', 'amin', 'mmad', 'arman');
*/

// ----------------------------------------
//5
/*
// 5-1

const hasExamplesInJava = function (...books) {
  for (let i = 0; i < books.length; i++) {
    // console.log(books[i]);
    console.log(books[i].programmingLanguage === 'Java' || 'No data find');
  }
};

hasExamplesInJava(...books);

// 5-2
const hasOnlineContent = function (books) {
  for (let i = 0; i < books.length; i++) {
    books[i].onlineContent &&
      console.log(
        `book number ${i + 1}, ${books[i].title} provides online content.`,
      );
  }
};

hasOnlineContent(books);
*/

// ----------------------------------------------
// 6
/*
// 6-1
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provides no data about its online content.`);
}
*/

// ----------------------------------------------
// 7
/*
// 7-1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  if (books[i].edition === 1) {
    // console.log(i);
  }
}

// 7-2
for (let i = 0; i < books.length; i++) {
  // books[i].thirdParty.goodreads.rating < 4.2 && (books[i].highlighted = false);
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  if (!books[i].highlighted) {
    console.log(i);
  }
}
*/

// ----------------------------------------------
// 8
/*
// 8-1
let pageSum = 0;
const bookPages = [];
for (const { pages } of books) {
  bookPages.push(pages);
  pageSum += pages;
}

console.log(bookPages);
console.log(pageSum);

// 8-2
const allAuthors = [];

for (const { author } of books) {
  typeof author === 'object'
    ? allAuthors.push(...author)
    : allAuthors.push(author);
}

console.log(allAuthors);
const test = [...allAuthors.entries()];
console.log(test);

// 8.3
for (const [i, author] of allAuthors.entries()) {
  console.log(i + 1, author);
}
*/

// ----------------------------------------------
// 9
/*
// 9-1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

// for (const [property, value] of bookData) {
//   newBook[property] = value;
// }

console.log(newBook);

// 9-2
const pages = 880;
const newBook2 = {
  newBook,
  pages,
};
console.log(newBook2);
*/

// ---------------------------------------------------------
// 10
/*
// 10-1
const getFirstKeyword = function (books) {
  for (const book of books) console.log(book.keywords?.[0]);
};

// console.log(getFirstKeyword(books));
getFirstKeyword(books);
*/
// ------------------------------------------------------------
// 11
/*
// 11-1
const entries = [];

const [
  {
    thirdParty: { goodreads },
  },
] = books;

for (const key of Object.keys(goodreads)) {
  entries.push([key]);
}

// console.log([...Object.values(goodreads).entries()]);

console.log(entries);

for (const [index, value] of Object.values(goodreads).entries()) {
  entries[index].push(value);
}

console.log(Object.entries(goodreads));
console.log(entries);


// ----------------------------------------------------------------
// 12

// 12-1
const allKeywords = [];

for (const { keywords } of books) {
  typeof keywords === 'object'
    ? allKeywords.push(...keywords)
    : allKeywords.push(keywords);
}

console.log(allKeywords);

// 12-2
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);
console.log(uniqueKeywords.has('science'));

// 12-3
uniqueKeywords.add('coding').add('science');
console.log(uniqueKeywords);

// 12-4
uniqueKeywords.delete('business');
// console.log(uniqueKeywords.has('business'));

// 12-5
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 12-6
uniqueKeywords.clear();
console.log(uniqueKeywords);


// -------------------------------------------------------------
// 13

// 13-1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(bookMap);

// bookMap.set('title', 'Clean Code').set('author', 'Robert');

// 13-2
bookMap.set('pages', 464);
console.log(bookMap);

// 13-3
const title = bookMap.get('title');
// const title = bookMap.get('title');
const author = bookMap.get('author');
console.log(`${title} by ${author}`);

// 13-4
console.log(bookMap.size);

// 13-5
// console.log(`Author of this book is ${bookMap.has('author') && 'known'}`);
console.log(
  `Author of this book is ${bookMap.has('author') ? 'known' : 'Unknown'}`,
);

// ------------------------------------------------------------------------
// 14

// 14-1
const [firstBook] = books;
console.log(Object.entries(firstBook));
const firstBookMap = new Map(Object.entries(firstBook));
console.log(firstBookMap);

// 14-2
for (const [key, value] of firstBookMap) {
  // typeof value === 'number' && console.log(key);
  if (typeof value === 'number') console.log(key);
}
*/

// --------------------------------------------------------------------------
// 15

// 15-1
const [{ ISBN }] = books;

console.log(ISBN[6]);
console.log(ISBN[4]);
console.log(ISBN[9]);
console.log(ISBN[8]);

// 15-2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'));

// 15-3
console.log(quote.slice(quote.indexOf('boxing')));

// 15-4
const isContributor = function (author) {
  // return (author.indexOf('Contributor') !== -1 && true) || false;
  if (author.indexOf('Contributor') !== -1) return true;
  else return false;
};

console.log(isContributor('AMIN (Contributor)'));
console.log(isContributor('Mel'));
console.log(isContributor('Fueki (Contributor)'));
