// let arr =['c','a','t']
// let str = "cat"
// str[0] = "x"
// console.log(str)
// arr[0]="x"
// console.log(arr)

// let arr =['h',10,9,true,undefined,null,[1,2]]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[6][1])

//  let fruits =["apple","orange","pear"]
//  fruits.length
//  fruits.indexOf("pear");
// fruits.includes("watermelon");
// fruits.push("watermolon")- //push ,pushes to the end 
// console.log(fruits)
// fruits.pop() //-Pop removes from the end 
// console.log(fruits)
// fruits.unshift("grape")  - //unshift places in the front 
//  console.log(fruits)
// fruits.shift()
// console.log(fruits)

let numbers = [10,2,32,4,5,6,7,88,9,10]
for (let i = 0; i< numbers.length; i++){
    let ele = numbers[i];
    console.log(ele);
}
//  console.log(fruits.concat(numbers));   //-concat does not mutate the original array
//  console.log(fruits)

// console.log(numbers.slice())
// console.log(numbers.slice(1))    //-.slice is the first argument is inclusive and the second argument is exclusive 
// console.log(numbers.slice(5,10))

// let string = "hi my name is xander"
// console.log(string.split(" "))
// console.log(string);

// console.log(numbers.join("___"));