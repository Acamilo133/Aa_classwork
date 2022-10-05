// nested array 

function everyCombination(){
    for (let i = 0; i < 3; i++){
        console.log(`outerloop $ {i}`); //the back tik (``) lets you use the dollar sign to console to print the value instead..
        // i is = to 0
        for (let j = 0; j < 5; j++)
        //console.log(i + ' ' + j );
        console.log(`innerloop $ {i}`);
    }

}
    everyCombination();

    let students = ['kevin','jesse','jason','simon'];

function pairStudents(arr){
    for (let i = 0; i < arr.length; i++){ // i is 0
        let student1 = arr[i]; //kevin

        for(let j = i + 1; j< arr.length; j++){  // 1 
            let student2 = arr[j] // jesse
            console.log (`${student1} will be paired with ${student2}`);
        }
    }
}
pairStudents(students);

function twoSum(arr,target){
    for (let i = 0; i < arr.length; i++){ // j=1
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] + arr[j]=== target){
            console.log(i,j)
        }
    }
    }
}
twoSum([0,1,2,3,4,5,6],5);


let matrix = [
    [1,2,3],
    [4,5,6],     //<------This is a SubArray
    [7,8,9],
];

for (let i = 0; i< matrix.length; i++){
    let subArray = matrix [i];
    for (let j = 0; j < subArray.length; j++){
        let ele = matrix [i] [j];
        console.log(ele);
    }
}


let geography = [
    [0,2,3,0],
    [1,4,3,1],
    [1,5,6,],
    [0,4,3,2,1]
]

function gethighestcordinateonAPlane(plane){
    let biggest = plane[0][0];
    let currentBiggestIndex = [0,0];
    for(let i = 0; i < plane.length; i++){
        let subArray = plane[i];
        for (let j = 0; j < subArray.length; j++){
            if (subArray[i] > biggest){
                biggest = subArray[j]
                currentBiggestIndex = [i,j]
            }
        }
    }
    return currentBiggestIndex;
}
console.log(gethighestcordinateonAPlane(geography))

let peopleArr = [
    {
        name: 'ry',
        favFoods: [ 'brownies','sushi','tacos']
    },
    {
        name: 'Brooke',
        favFoods: [ 'Apples','Bananas','pears']
    }
]
function printFaveriteFoods(array){
    for(let i = 0; i < array.length; i++){
        let obj = array[i]
        let arrayInObj = obj.favFoods;
        for (let j = 0; j < arrayInObj.length; j++){
            console.log(arrayInObj[j])
        }
    }
}
printFaveriteFoods(peopleArr)