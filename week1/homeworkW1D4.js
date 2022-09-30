// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array) {
    for (var i = 0; i < array.length; i += 1) {
      console.log(i + ": " + array[i]);
    }
  }
  logEach(["Anthony", "John", "Carson"])
    




// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
console.log(range(1,4)) //=> [1,2,3,4]
// range(4,2) => []


function range(start,end){
    let arr = [];
    for (let i = start; i <= end; i++) {
        console.log(i);
        arr.push(i);
    }

    return arr;
}