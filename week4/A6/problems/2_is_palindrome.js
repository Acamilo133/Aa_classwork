/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(str) {
    let j = str.length - 1;
    
    for (let i = 0; i <= Math.floor(str.length/2); i++){
        if (str[i] === " ") i++;
        if (str[j] === " ") j--
        if (str[i] !== str[j]) return false;
        j--;
    }

    return true;
}
    
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
