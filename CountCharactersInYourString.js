// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

//function count (string) {  
//return 0;
//}

function count (string) {  

    let chars = string.split('');
    
    let uniqueChars = [];
    chars.forEach((element) => {
        if (!uniqueChars.includes(element)) {
            uniqueChars.push(element);
        }
    });
    
    let result = {};
    uniqueChars.forEach((element) => {
    let i = 0;
    chars.forEach((item) => {
    if (item === element ) {i++;}
    });
    result[`${element}`] = i;
    });
      
       return result;
    }

    const str = 'abba';
    console.log(count(str));