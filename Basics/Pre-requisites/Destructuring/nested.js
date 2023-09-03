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

let { name, add: { country }, add } = obj;

console.log(name, country, add);