


// for loop

// for(let i = 1; i <= 20; i++) {
//   console.log('HNGi7', i)
// }

// for (let i = 50; i >= 0; i-= 10) {
//   console.log('it is now ', i);
// }

// let dots = ['*'];
// for (let i = 1; i <= 0; i++) {
//   console.log('*',[i]);
// }//i want to make the asterisk form a pyramid

// let anims = ['bird', 'cat', 'cow', 'snake'];

// // for (let i = 0; i <= anims.length-1; i++) {
// //   console.log(anims[i]);
// // }

// let scores = [
//   {
//     name: 'tola',
//     score: 76
//   },
//   {
//     name: 'segun',
//     score: 85
//   },
//   {
//     name: 'wale',
//     score: 54
//   },
//   {
//     name: 'tolu',
//     score: 92
//   },
//   {
//     name: 'sola',
//     score: 63
//   }
// ];


// // for (let i = 0; i < scores.length; i++){
//   //   let dits = scores[i];
//   //   console.log(dits);
//   // }

// let ave = 0;

// for (let i = 0; i < scores.length; i++){
//   let dits = scores[i];
//   ave += dits.score;
// }
// console.log(ave/scores.length);

const gameBoard = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13]
];

// let total = 0;
// }//nested loop

// for (let i = 0; i < gameBoard.length; i++) {
//   let gb = gameBoard[i];
//   console.log(gb);
//   for (let k = 0; k < gb.length; k++) {
//     total += gb[k];
//     console.log(total);
//   }

// while loop

// let i = 0;

// while(i < gameBoard.length) {
//   let result = gameBoard[i];
//   console.log(result);
//   i++;
// }

// const goal = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(guess !== goal) {
//   console.log(`Goal: ${goal} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }

// console.log(`Goal: ${goal} Guess: ${guess}`);
// console.log(`You win!`);
// the code above could be rewritten as follows
// const goal = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(true) {
//     if (goal === guess) break;
//   console.log(`Goal: ${goal} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }

// console.log(`Goal: ${goal} Guess: ${guess}`);
// console.log(`You win!`);
//break
// for (let i = 0; i <10; i++) {
//   console.log('this is it ', i);
//   if (i === 7) {
//     break;
//   }
// };

// scope
// let cars = ['toyota', 'peugot', 'mercedes', 'audi', 'bmw'];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// lexical scope
// function one() {
//   let car = 'volvo';
//   let gender = 'female';
//   function two () {
//     let car = 'audi';
//     console.log(gender);
    
//     function three() {
//       let gender = 'male';
//       console.log(car);
//       console.log(gender);
//     }
//     three();
//   }
//   two();
// }

// one();

//higher order functions


// functions as arguments
// function callThree(caller) {
//   for (let i = 0; i < 4; i++) {
//     caller();
//   }
// }

// function yell() {
//   console.log('welp welp');
// }

// function mood() {
//   console.log('you know that feeling!!');
// }

// function rand(f1, f2) {
//   let ran = Math.floor(Math.random() * 2);
//   if (ran < 1) {
//     f1();
//   } else {
//     f2();
//   }
// }

// rand(yell, mood);


//functions as return values
// function varyingOutcomes(num) {
//   return function (v) {
//     return v * num;
//   }
// }


// const mult = varyingOutcomes(3);
// const multi = varyingOutcomes(10);
// const three = varyingOutcomes(.5);
// const four = varyingOutcomes(-5);

// console.log(mult(3));
// console.log(multi(3));
// console.log(three(3));
// console.log(four(3));


//callback function
function clicker() {
  alert('welcome back!');
}
const btn = document.querySelector('button');
btn.addEventListener('click', clicker);

setTimeout(function() {
  alert('nice to have you back.');
}, 4000);

//hositing treated