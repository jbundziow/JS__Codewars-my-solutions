/*
 * In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 * 
 * Example
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */
function filter_list(arr) {
    const isNumber = (item) => {
        return typeof(item) === 'number' ? true : false;
    }

    let result = [];
    for (element in arr) {
        if (isNumber(arr[element]) && arr[element] >= 0) {
            result.push(arr[element]);
        }
}
    return result;
}

const x = [36,'12',23,91,'15',-12,12];
console.log(filter_list(x));