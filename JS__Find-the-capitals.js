/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/


//MY SOLUTION:
const isUpperCase = (c) => {
    if (c.length === 1) {
        if (c === c.toUpperCase())
        {
            return true;
        }
    }
    return false;
};


const capitals = function (word) {
  const result = [];
  for (let i=0; i<word.length; i++) {
      console.log(word[i]);
    if (isUpperCase(word[i]) === true) {
      result.push(i);
    }
  }
  return result;
};

//test
//console.log(capitals('CodeWars'));