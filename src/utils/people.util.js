// 5)  is at least one person 19 ? true or false
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]
console.log(`5)  is at least one person 19 ? true or false`)
let ban5 = true
for (let i = 0; i < people.length; i++) {
  let age = 2021 - people[i].year
  if (age == 19) {
    ban5 = true
  } else {
    ban5 = false
  }
}
console.log({ ban5 })
const isAdult = people.some(p => new Date().getFullYear() - p.year >= 19)
console.log({ isAdult })

// 6) all are over 19 ? true or false
console.log(`6) all are over 19 ? true or false`)
let ban = true
for (let i = 0; i < people.length; i++) {
  let age = 2021 - people[i].year
  if (age > 19) {
    ban = true
  } else {
    ban = false
  }
}
console.log({ ban })
const allAdults = people.every(p => new Date().getFullYear() - p.year >= 19)
console.log({ allAdults })

// 7) find and return the comment with the id of 823423
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]
let res7 = {}
for (let i = 0; i < comments.length; i++) {
  if (comments[i].id == 823423) {
    res7 = {
      text: comments[i].text,
      id: comments[i].id
    }
  }
}
console.log(`7) find and return the comment with the id of 823423`)
console.log({ res7 })
const comment = comments.find(comment => comment.id === 823423)
console.log({ comment })
