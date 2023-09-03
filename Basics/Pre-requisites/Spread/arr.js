let arr = [1,2,3,4];

// let arr2 = arr;
let arr2 = [...arr];

arr2[1] = 5;

console.log(arr);
console.log(arr2);