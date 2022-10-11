/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
    let strSplit = sentence.split(' ');
    let longestWord = "";
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length >= longestWord.length){
        longestWord = strSplit[i];
       }
    }
    return longestWord;
  }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
