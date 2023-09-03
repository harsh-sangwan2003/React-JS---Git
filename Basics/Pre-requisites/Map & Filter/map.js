let arr = [1,2,3,4];

let narr = [];

// for(let i=0; i<arr.length; i++){

//     narr[i] = arr[i]*2;
// }

// console.log(narr);

narr = arr.map(val=>val*2);
console.log(narr);