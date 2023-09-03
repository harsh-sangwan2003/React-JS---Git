let obj = {

    name: 'Udai',
    add: {

        country: 'India',
        state: {

            code: 'DL',
            pin: '110045'
        }
    }
}

// let obj2 = obj;

// Shallow Copy
// let obj2 = { ...obj, add: { ...obj.add } };

// Deep copy
let obj2 = JSON.parse(JSON.stringify(obj));

obj2.name = 'Steve';
obj2.add.country = 'USA';

console.log(obj);
console.log(obj2);