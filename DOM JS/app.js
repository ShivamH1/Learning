let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div was clicked");
})

ul.addEventListener("click",function(){
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click",function(){
        console.log("li was clicked");
    })
}

// let inp = document.querySelector('input');
// let p = document.querySelector('p');

// inp.addEventListener("input",function(event){
//     console.log(this.value);
//     p.innerText = this.value;
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//         event.preventDefault();
// })
// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("Final value =",this.value);
// })
// user.addEventListener("input",function(){
//     console.log("Input event");
//     console.log("Final value =",this.value);
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     user = document.querySelector('#user');
//     pass = document.querySelector('#pass');
//     console.log(user.value,pass.value);
//     alert(`Hi ${user.value} your password is ${pass.value}`);
//     // alert("Form Submitted");
// })

// let input = document.querySelector("input");
// let btn = document.querySelector("button"); 

// input.addEventListener("keydown",function (event) {
//     console.log(event.key);
//     console.log("Key was pressed");
// })

// input.addEventListener("keyup",function (event) {
//     console.log("Key was released");
// })


// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "red";
// })


// let btns = document.querySelectorAll("button");
// for(btn of btns){
//         // btn.addEventListener("click",sayHello)
//         // btn.addEventListener("click",sayName);
//         btn.addEventListener("dblclick",() => {
//             console.log("You double clicked");
//         })
//     }

// function sayHello(){
//     alert("Hey! Wassupppp");
// }

// function sayName(){
//     alert("Shivam");
// }

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("You entered a button");
//     }
// }

// // let btn = document.querySelector('button');
// // console.dir(btn);

// function sayHello(){
//     alert("Hello, How are you?");
// }

// btn.onclick = sayHello;

// btn.onclick = () =>{
//     alert("Button was clicked");
// }

// btn.onclick = () =>{
//     console.log("Button was clicked");
// }

// let input = document.createElement("input");
// let btn = document.createElement("button");
// btn.innerText = "Click me!";
// document.querySelector('body').append(input);
// document.querySelector('body').append(btn);

// input.setAttribute("placeholder","username");
// btn.setAttribute("id","#btn");

// btn.style.backgroundColor = "blue";
// btn.style.color = "white";

// let h1 = document.createElement('h1');
// h1.innerHTML = "<u>DOM Practice</u>";
// h1.style.color = "purple";
// document.querySelector('body').append(h1);

// let p = document.createElement('p');
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector('body').append(p);


// let p = document.createElement('p');
// p.innerText = "Hey I'm red";
// p.style.color = 'red';
// document.querySelector('body').append(p);

// let h3 = document.createElement('h3');
// h3.innerText = "I'm blue h3";
// h3.style.color = "blue";
// document.querySelector('body').append(h3);

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p1 = document.createElement('p');

// h1.innerText = "I'm a div";
// p1.innerText = "ME too";

// div.append(h1);
// div.append(p1);
// document.querySelector('body').append(div);
// div.style.border = "black";
// div.style.backgroundColor = "pink";


// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector(".oldimg"));