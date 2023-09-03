let obj = {

    name: 'Harsh',

    // Sol - 1 bind method 
    fn() {

        function abc() {
            console.log(this.name);
            console.log(this);
        }
        let ret = abc.bind(this);
        ret();
    },

    // Sol -2 arrow function
    fn2() {

        let abc2 = () => {
            console.log(this.name);
            console.log(this);
        }
        abc2();
    }
}

obj.fn();
obj.fn2();