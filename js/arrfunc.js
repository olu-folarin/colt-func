//Day 7: (1)apply functions to collection of data & (2)miscellaneous js features

//forEach
// const nums = [2,3,4,5,6,7,8,9];

// nums.forEach(function(bird) {
//   console.log(bird);
// })

// let student = [{
//   name: "subomi",
//   age: 21,
//   'date of birth': '21/02/1999',
//   status: 'single'
// }];

// student.forEach(function(dits) {
//   console.log(dits);
// }) didn't work as ex[ected]

// function double(dub) {
//   console.log(dub * 2);
// }
// nums.forEach(double);//callback

const books = [
  {
    title: 'things fall apart',
    author: 'chinua achebe'
  },
  {
    title: 'no longer at ease',
    author: 'chinua achebe'
  },
  {
    title: 'broken ladders',
    author: 'lekan oyegoke'
  },
  {
    title: 'the hous that jack built',
    author: 'graham masterton'
  },
  {
    title: 'startup nation',
    author: 'dan senor and saul singer'
  }
];

books.forEach(function(book) {
  console.log('title: ' + book.title.toUpperCase());
})

// to add an index to each value, pass in two parameters to the forEach function
function bookie(book, idx) {
  console.log(idx, book.author.toUpperCase());
}

books.forEach(bookie);