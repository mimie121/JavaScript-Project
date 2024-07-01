// this = reference to the object where This is used (the boject depends on the immediate context)
//        person.name = this.name


const person1 = {
    name: "Peter",
    favFood: "Pizza",
    sayHello: function(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

person1.sayHello();