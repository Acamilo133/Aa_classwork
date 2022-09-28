// console.log("something".indexOf("o"))
function fool(){
    return "bar";
}
// console.log(fool())
// console.log(fool)
function fool(p1 , p2 ){
    return p1 + " " + p2
}
// console.log(fool("aaron", "camilo"));
let foo1 = function(){
    return "bar";
}
let cool =()=> {
    return "bar";
}
function average(num1,num2){
    let sum = num1+num2;
    let avg=sum/2;
    return avg;
}
function average2(num1,num2){
    let sum=sumnums(num1,num2)
    let avg=sum/2;
    return avg;
}
function sumnums(num1,num2){
    return num1+num2;
}
// console.log(average(1,3))
// console.log(average2(1,2))
// console.log(sumnums(4,8))
//an odd number is any number that cannot be evenly divided by the number 2
//if a number can be evenly divided by 2 then we know it's even
function isOdd(num) {
    // if (num % 2 === 1) {
    //     return true;
    // } else {
    //     return false;
    // }
    return num % 2 === 1
}
console.log(isOdd(3))
console.log(isOdd(4))
console.log(isOdd(5))
console.log(isOdd(6))
console.log(isOdd(7))

// console.log(3 % 2)
// console.log(4 % 2)
// console.log(5 % 2)
// console.log(6 % 2)
// console.log(7 % 2)
// console.log(8 % 2)
function plusFive(num){
    return (num+5)
}
console.log(plusFive(10))
console.log(plusFive(20))
console.log(plusFive(15))
//
function threeOrseven(num){
    if (num % 3 === 0 || 7 === 0){
        return true
    } else {
        return false
    }
}
console.log(threeOrseven(20))

function hello(str) {
    console.log("Hello, " + str + ".");
  }