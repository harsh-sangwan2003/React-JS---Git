let obj = {

    name: 'Udai',
    state: 'New Delhi',
    country: 'India'
}

let { name: firstName, state, country, extra = 'default' } = obj;

console.log(firstName);
console.log(state);
console.log(country);