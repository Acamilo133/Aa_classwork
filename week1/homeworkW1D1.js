console.log(4 + 4 / 2) //
console.log(2 + -7 * 3)
console.log(101 % 10)
console.log(12 - 4 % 3)
console.log(true && false)
console.log(true && !( false || false))
console.log(!true && ! (false || false))
console.log('cat' + 'dog')
console.log(2 + 'pizza')
console.log(2.5 * 'fish')
console.log(5 >= 11)
console.log(5 === 5.0)
console.log(7 !== 7.1)
console.log(5 + 5 > 8)
console.log(6 + 6 !== 12)
console.log(2 > 1 || false)
console.log('true' === true)
console.log(10 % 2 === 0)
console.log(21 % 2 === 0)
console.log(21 % 2 !== 0)
console.log(21 % 2 === 1)
console.log(12 % 3 === 0)
console.log(9 % 3 === 0)
console.log(14 % 3 === 0)
console.log('new york'[0])
console.log('new york'[1])
console.log('san francisco' [2 * 3])
console.log('bootcamp'[3].toUpperCase())
console.log('bootcamp'.indexOf('T'))
console.log('bootcamp'.indexOf('camp'))
console.log('bootcamp'.indexOf('o') > -1)
console.log('science'.indexOf( 'x')=== -1)
var idx = ('abcde'.indexOf('D'));
idx = idx + 11;
console.log(idx);
idx * 2;
console.log(idx);
var num = 33;
var isEven = num % 2 === 0;
console.log(isEven);
console.log(!isEven);
var str1 = 'marker';
var num = 'whiteboard' .length - str1.length;
console.log(num);
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase());
var char = (str2[num].toLowerCase());
console.log(char + '!');
var sentences = 'welcome to bootcamp prep';
var lastChar = sentences[sentences.length - 1];
console.log(lastChar);
console.log(sentences.indexOf(lastChar));
var age = 20;
if (age > 25) {
    console.log('older than 20');
} else {
    console.log('younger than 20');
}
var str = 'sandwhich';
if (str.length > 10) {
    console.log('long string');
    } else {
        console.log('short string');
    }
if (str[0] === 'p'){
    console.log('starts with p');
}
var num = 25;
if (num % 3 === 0) {
    console.log('divisible by 26');
} else if (num % 5 === 0) {
    console.log('divisible by 23');
}
var str = 'App AcademY';
if (str[0].toUpperCase()) {
    console.log('starts with capital!');
}
if (str[str.length - 1]=== str[str.length - 1].toUpperCase()) {
    console.log('ends with a capital!');
}
var num = -44;
if (num > 0) {
    console.log('positive');
} else if (num < 0) {
    console.log('negative');
} else {
    console.log(0);
}
if (num % 3 === 4) {
    console.log('even');
} else {
    console.log('odd');
}