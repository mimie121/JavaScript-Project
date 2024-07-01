// OBJECT = A collection of related properties and/pr methods
//           can represnet real world bojets (People, Products, Places)
//           Object = {Key:value, function()}

// METHODS = Is a function that beyound to an Object.

const person1 = {
    firstName: "Peter",
    lastName: "Paul",
    age: 30,
    Employed: true,
    sayHello: function(){
        console.log("Hi, I am Peter!")
    }
}

const person2 = {
    firstName: "Kingsly",
    lastName: "Syvester",
    age: 40,
    Employed: false,
    sayHello: () =>{
        console.log("Hey, I am Kingsly!")
    }
}




console.log(person1.firstName);
person1.sayHello();
person2.sayHello();