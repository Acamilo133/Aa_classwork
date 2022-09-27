console.log("something".indexOf("o"))
function fool(){
    return "bar";
}
console.log(fool())
console.log(fool)
function fool(p1 , p2 ){
    return p1 + " " + p2
}
console.log(fool("aaron", "camilo"));
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
console.log(average(1,3))
console.log(average2(1,2))
console.log(sumnums(4,8))