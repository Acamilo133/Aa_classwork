// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log("10")

// // for (let i = 1; i <=10; i++){
// //     console.log(i);
// // }
// // console.log('after the loop')

// // function printRange(start,end){
// //     for (let i = start; i <= end; i++){
// //         console.log(i);
// //     }
// }
//printRange(3,10);

// function printRange1(start,end){
//     let i = start;
//     while(i <= end){
//         console.log(i);
//         i++;
//     }
// }

// printRange1(7,21)

// let i=20;
// while(false){
//     console.log(i);
// }

// function skipfive(num){
//     for(let i = 1; i <= num; i++){
//         if(i === 5){
//             continue
//         }
//             console.log(i);
        
//     }
// }
// skipfive(20);

// function breakAtFive(num){
//     for(let i = 1; i <= num; i++){
//         if(i === 5){
//             break;
//         }
//         console.log(i)
//     }
//     console.log("after the top");
//         }
//     breakAtFive(20)


// function isprime(num){
//     if(num < 2) return false;
//     for(let n=2; n < num; n++){
//         if (num % n === 0){
//             return false 
//         }
//     }
//     return true
// }
// console.log(isprime(5))


// Define a function `logBetween(lowNum, highNum)` that will print every number
// // from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// // `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// // it does not need to return.

function logBetween(lowNum, highNum) {
    for (var i = lowNum; i <= highNum; i += 1) {
      console.log(i);
    }
  }
  
  function logBetween(lowNum, highNum) {
    var i = lowNum;
    while (i <= highNum) {
      console.log(i);
      i++;
    }
  }
  console.log(logBetween)

  //Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6


function logBetween(lowNum, highNum){
    for (var i = lowNum; i <= highNum; i += 1){
          console.log(i);
    }
    }
    logBetween(20,30)