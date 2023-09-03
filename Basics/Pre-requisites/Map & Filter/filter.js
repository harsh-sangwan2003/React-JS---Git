let arr = [1, 2, 3, 4, 5];

let narr = [];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 === 0)
//         narr.push(arr[i]);
// }

// console.log(narr);

narr = arr.filter(val=>val%2===0);
console.log(narr);