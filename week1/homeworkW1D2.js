// function plusFive(num){
//     return (num+5)
// }
// console.log(plusFive(10))
// console.log(plusFive(20))
// console.log(plusFive(15))
// //
// function threeOrseven(num){
//     if (num % 3 === 0 || 7 === 0){
//         console.log("hi");
//         return true
//     } else {
//         return false
//     }
// }
// console.log(threeOrseven(20))

// function hello(str) {
//     console.log("Hello, " + str + ".");
// }
// hello("rex");

function isSubstring(searchString, subString) {
    if (searchString.indexOf(subString) > -1) {
        return true;
    } else {
        return false;
    }
}
console.log(isSubstring('something', 'some'));
