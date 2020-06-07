// //Day 7: (1)apply functions to collection of data & (2)miscellaneous js features

// //forEach
const nums = [2,3,4,5,6,7,8,9];

// // nums.forEach(function(bird) {
// //   console.log(bird);
// // })

// // let student = [{
// //   name: "subomi",
// //   age: 21,
// //   'date of birth': '21/02/1999',
// //   status: 'single'
// // }];

// // student.forEach(function(dits) {
// //   console.log(dits);
// // }) didn't work as ex[ected]

// // function double(dub) {
// //   console.log(dub * 2);
// // }
// // nums.forEach(double);//callback

// const books = [
//   {
//     title: 'things fall apart',
//     author: 'chinua achebe'
//   },
//   {
//     title: 'no longer at ease',
//     author: 'chinua achebe'
//   },
//   {
//     title: 'broken ladders',
//     author: 'lekan oyegoke'
//   },
//   {
//     title: 'the hous that jack built',
//     author: 'graham masterton'
//   },
//   {
//     title: 'startup nation',
//     author: 'dan senor and saul singer'
//   }
// ];

// books.forEach(function(book) {
//   console.log('title: ' + book.title.toUpperCase());
// })

// // to add an index to each value, pass in two parameters to the forEach function
// function bookie(book, idx) {
//   console.log(idx, book.author.toUpperCase());
// }

// books.forEach(bookie);


// Map
const auth = ['achebe', 'dansaul', 'graham', 'lekan']; 

const anew = auth.map(function(author) {
  return author.toUpperCase();
});
// using other array methods on the function above in addition to map

const anew2 = auth.map(function(author2) {
  return author2.toUpperCase().split("").join('*');
});

//doing maths with map
const numbers = nums.map(function(c) {
  return {
    value: c,
    isOdd: c % 3 == 0
  };
});

console.log('map',anew);
console.log('original',auth);
console.log('original',anew2);
console.log('original',numbers);

//arrow functions

const isOdd = x => {
  return x % 2 >= 1;
}

console.log(isOdd(10))