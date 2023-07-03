function titleCase(title, minorWords) {
if (typeof minorWords === undefined)
    return undefined;

}

console.log(titleCase(''));
// should return --> ''
console.log(titleCase('a clash of KINGS', "a an the of"));
// should return --> 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
// should return --> 'The Wind in the Willows'
console.log(titleCase('the quick brown fox', 'The Quick Brown Fox'));
// should return --> 'The Quick Brown Fox'

