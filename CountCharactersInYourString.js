// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.


//function count (string) {  
//return 0;
//}

const input = 'aba';

let chars = input.split('');

let uniqueChars = [];
chars.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});

console.log(chars);
console.log(uniqueChars);

let result = {};
uniqueChars.forEach((element) => {
let i = 0;
chars.forEach((item) => {
if (item === element ) {i++;}
})
//result.push(`'${element}': ${i}`);
result[`${element}`] = i;
});

console.log(result);