

// let arr = ["tony", "mony", "rony"];

// let [winner,runnerup] = arr;

// console.log(winner,runnerup);

// let arr = [1,2,3,4];

// function sum(...arr){
//     return arr.reduce( (res,el) => res + el);
// }

// console.log(sum(...arr));

// let data = {
//     email : "shivamhonrao2002@gmail.com",
//     password : "1245",
// };

// let datacopy = {...data, id:123};

// console.log(data,datacopy);

// let arr = [1,2,3,5,6,8,2,1,8,0,6];

// console.log(Math.min(...arr));

// function add(a,b = 3){
//     return a+b;
// }

// console.log(add(2,4));

// let arr = [2,5,100, 40 ,35, 50, 45];
// let arr = [20,30,40,50];
// let check = arr.every( (el) => el % 10 == 0);
// console.log(check);

// let multten = arr.filter( (el) =>{
//     return el%10 == 0;
// });

// let min = arr.reduce( (mini,el) => {
//     if (el < mini){
//         return el;
//     }else{
//         return mini;
//     }
// })
// console.log(multten);
// console.log(min);

// let arr = [2,3,4,5,3,4,7,8,1,2,10];

// let res = arr.reduce( (maxi,el) => {
//     if (el > maxi){
//         return el;
//     }
//     else{
//         return maxi;
//     }
    // if(el > maxi){
    //     maxi = el;
    // }
    // return maxi;
    // return Math.max(maxi,el);
// });

// console.log(res);

// let arr = [1,2,3,4];
// let sum = arr.reduce( (res,el) => {
//     return (res + el)
// });
// console.log(sum);

// let arr = [2,4];
// let arr1 = [1,2,3,4,5];

// let bool = arr.every((el) => (el%2 == 0))

// let bool1 = arr.every((el) => {
//     return(el % 2 == 0)
// })

// console.log(bool)
// console.log(bool1)

// let arr = [2,1,4,7,3,6,9,8];

// let even = arr.filter((el) => {
//     return el % 2 == 0
// });

// let odd = arr.filter((el) => {
//     return el % 2 == 1
// });

// console.log(even);
// console.log(odd);

// let arr = [{
//     name : "Shivam",
//     marks : 97
// }, {
//     name : "Shubham",
//     marks : 95
// }, {
//     name : "Aman",
//     marks : 92
// }];

// let gpa = arr.map((el) => {
//     return el.marks / 10;
// })

// console.log(gpa);

// let num = [1,2,3,4,5];

// let double = num.map( (el) => {
//     return el*2;
// });

// console.log(double);
// let arr = [{
//     name : "Shivam",
//     marks : 97
// }, {
//     name : "Shubham",
//     marks : 95
// }, {
//     name : "Aman",
//     marks : 92
// }]

// arr.forEach((el) => {
//     console.log(el.marks);
// })
// let arr = [1,2,3,4,5];
// // function print(el){
// //     console.log(el);
// // }
// arr.forEach((el) => {
//     console.log(el);
// })
// arr.forEach(print)
// arr.forEach(function(el){
//     console.log(el);
// })

// let id = setInterval ( () => {
//     console.log("Hello World");
// },2000);

// setTimeout( () => {
//     clearInterval(id)
// },11000);
// const sq = (n) => (n*n);
// console.log(sq(2));

// const student = {
//     name : "aman",
//     marks : 95,
//     prop : this,
//     getName : function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks : () => {
//         console.log(this);
//         return this.marks;
//     }
// }

// console.log("Hi there!");

// setInterval( () => {
//     console.log("Shivam");
// }, 4000);

// console.log("How are you?");

// console.log("Hi there!");

// setTimeout( () => {
//     console.log("Shivam");
// }, 4000);

// console.log("How are you?");

// const sum = (a,b) => (a + b);
// const cube = (n)  => n*n*n;
// console.log(cube(2));
// console.log(sum(2,5));

// const sub = (a,b) => {
//     console.log(a-b);
// };
// sub(2,1);


// console.log("Hello");
// console.log("Hello");
// try{
//     console.log(a);
// }catch{
//     console.log("variable error");
// }

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// const calculator = {
//     num : 55,
//     add : function(a,b){
//         return a + b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mult : function(a,b){
//         return a*b;
//     }
// };

// function oddorEvenFactory(req){
//     if(req == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }else if(req == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong Request!");
//     }
    
// }

// let req = "odd";

// let odd = function(n){
//     console.log(!(n%2==0));
// }

// let even = function(n){
//     console.log(n%2==0);
// }

// let greet = "Hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innergreet(){
//         console.log(greet);
//     }
//     innergreet();
// }

// console.log(greet);
// changeGreet();

// let sum = 54;

// function calSum(a,b){
//     let sum = a + b;
//     return sum;
// }

// console.log(sum);
// calSum(1,2);
// console.log(sum);

// function concat(str){
//     let arr = "";
//     for(let i = 0; i < str.length; i++){
//         arr += str[i];
//     }
//     return arr;
// }

// let str = ['a','b','c','d'];
// concat(str);

// function sum1ton(n){
//     let sum = 0;
//     for(let i = 0; i<= n; i++){
//         sum += i;
//     }
//     return sum
// }

// function sum(a,b){
//     let res = a + b;
//     return res;
// }

// sum(3,5);

// function multiplication(number){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${number} x ${i} : `,number*i);
//     }
// }

// multiplication(4);

// function average(a,b,c){
//     let avg = (a+b+c) / 3;
//     console.log(avg);
// }

// average(2,4,6);

// function dice(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// dice();

// function poem(){
//     console.log("Twinkle Twinkle Little Star How I wonder what you are. ");
// }

// poem();
// let no = Math.floor( Math.random() * 100 + 1)

// let no1 = Math.floor(Math.random() * 5 + 1) + 20
// const classinfo = {
//     raj : {
//         grade : "A",
//         div : 'C'
//     },
//     yash : {
//         grade : "B",
//         div : 'B'
//     },
//     sid : {
//         grade : "A",
//         div : 'A'
//     }
// };

// obj = {
//     1 : 'a',
//     2 : 'b',
//     null : 'c',
//     undefined : 'd',
//     true : 'e',
//     abc : 'f'
// };

// const tweet = {
//     username : "Shivam",
//     content : "Daily Life",
//     likes : 5,
//     repost : 2,
//     tags : ["striver","apna college", "harkirat"]
// };

// const student = {
//     firstname : "Shivam",
//     age : 22,
//     place : "Pune"
// };

// const arr = [1,2,3,4,5];

// let fruits = ["apple","banana","mango","watermelon",'litchi'];

// for(fruit of fruits){
//     console.log(fruit);
// }

// let heroes = [["ironman","spiderman","thor"],["superman","batman","wonder women"]];

// for(let i = 0; i < heroes.length; i++){
//     console.log(`List #${i}`);
//     for (let j=0; j < heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// let favorite = 'avenger';
// let guess = prompt("Guess the movie")
// while ((guess!=favorite) && (guess!='quit')){
//     guess = prompt("Guess again?");
// }

// if (guess == favorite){
//     console.log("Yuppeeee");
// }

// let n = prompt("Write your number");
// n = parseInt(n)

// for (let i = n; i<=n*10; i = i+n){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++){
//     console.log("5 X 1 = ",5*i);
// }

// for (let i = 1; i <= 15; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 15; i++){
//     if (i%2 == 1){
//         console.log(i);
//     }
// }

// let colors = ["red","yellow","blue","orange","purple"];

// let cars = ["audi","merc","bmw","mg"];

// let firstname = prompt("Enter your first name: ");
// let lastname = prompt("Enter your last name: ");
// let msg = (`Welcome ${firstname+ lastname}`);
// alert(msg);

// let name1 = prompt("Enter your name");
// console.log(name1);
// alert("Error 404");
// console.log("This is simple");
// console.warn("Check");
// console.error("Something is wrong");

// let color = "orange";
// switch(color){
//     case "red":
//         console.log("Kon tu");
//         break;
//     case "orange":
//         console.log("Jai Shree Ram");
//         break;
//     default:
//         console.log("Sanatan dharma");
// }

// if (""){
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// let firstname = "Shivam";
// if (firstname == "Shivam"){
//     console.log(`Welcome ${firstname}`);
//     console.log("Welcome "+firstname);
// }

// let pencil = 15;
// let erasor = 5;
// let output = `The total price is: ${pencil+erasor} Rupees.`;
// console.log(output);

// console.log("Hello World!");
// console.log("Let's Learn");
// let a = 10;
// let b = 20;
// console.log("The sum of a & b is ",a + b);