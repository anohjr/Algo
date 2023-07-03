function titleCase(title, minorWords) {
if (typeof minorWords === "undefined")
    return undefined;
    
const minWordsArr = minorWords.toLowerCase().split(' ');
console.log("minWord array :", minWordsArr);

const titleArr = title.toLowerCase().split(' ');
console.log("title array :", titleArr);

const firstWord = titleArr[0];
const result = [];
result.push(firstWord.charAt(0).toUpperCase() + firstWord.slice(1))
console.log("result :", result);

for (let i = 0 ; i < minWordsArr.length ; i++) {
    for (let j = 1 ; j < titleArr.length ; j++) {
        
    }
}

}

console.log(titleCase(''));
// should return --> ''
console.log(titleCase('a clash of KINGS', "a an the of"));
// should return --> 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
// should return --> 'The Wind in the Willows'
console.log(titleCase('the quick brown fox'));
// should return --> 'The Quick Brown Fox'

