/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = fn(arr[i], i);
        newArr.push(result);
    }
    
    return newArr;
};