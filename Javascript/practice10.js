let max = 6;
let dice = Math.floor(Math.random() * max) + 1;
console.log(dice);

const car = {
    name : "MG ASTOR",
    model : "Sharp Manual",
    color : "Havanna Grey"
};

let nameofcar = car.name;
console.log(nameofcar);

const Person = {
    name : "Peter Parker",
    age : 19,
    city : "Chicago"
};
console.log(Person);
Person.city = "New York";
Person.country = "United States";
console.log(Person);