// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
export const fifteen = inventor => inventor.filter(inventor.year >= 1500 && inventor.year < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
export const fullNames = inventor => inventor.map(`${inventor.first} ${inventor.last}`);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
export const totalYears = inventor =>
  inventor.reduce((acc, cur) => acc + (cur.passed - cur.year), 0)
