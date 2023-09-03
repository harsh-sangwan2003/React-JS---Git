let arr = ['Hi', 'I', 'am', 'Udai'];

let [a, b, , d, e = 'default'] = arr;

console.log(a);
console.log(b);
console.log(d);
console.log(e);