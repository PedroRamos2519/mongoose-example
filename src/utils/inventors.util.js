// Array.prototype.reduce()
// 4. How many years did all the inventors live?
export const totalYears = inventor =>
  inventor.reduce((acc, cur) => acc + (cur.passed - cur.year), 0)
