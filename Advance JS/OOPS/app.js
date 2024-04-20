// let arr = [1,2,3];
// arr.sayHello = () => {
//     console.log("Hey I'm arr");
// };

//factory function
// function PersonMaker (name,age) {
//     const person = {
//         name : name,
//         age : age,
//         talk () {
//             console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
//         },
//     };
//     return person;
// }

//constructor - new
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = () => {
//     console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
// }

// let p1 = new Person("adam",23);

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk () {
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// let p1 = new Person("adam",23);
// let p2 = new Person("eve",24);

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk () {
        console.log(`Hi this is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}

let stu1 = new Student("raj",22,80);

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

