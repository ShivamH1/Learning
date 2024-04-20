let h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if (num > 3){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color Changed");
        },delay);
    });
}

async function demo(){
    try{
        await changecolor("red",1000);
        await changecolor("orange",1000);
        await changecolor("green",1000);
        await changecolor("blue",1000);
    }catch(err){
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("New number: ", a+3);
}

// function getNum(){
//     // console.log(5);
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();  
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

// async function greet(){
//     // abc.acb();
//     // throw "404";
//     return "Hello";
// }

// let demo = async () => {
//     console.log("DEMO");
//     return "Successful";
// }


// greet()
// .then((result)=>{
//     console.log("Success",result);
// })
// .catch((err) =>{
//     console.log(err);
// })

// let h1 = document.querySelector("h1");

// function changecolor(color,delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color Changed");
//         },delay);
//     });
// }

// changecolor("red",1000)
//     .then(()=>{
//         console.log("red color was completed");
//         return changecolor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color was completed");
//         return changecolor("blue",1000);
//     })
//     .then(()=>{
//         console.log("blue color was completed");
//         return changecolor("grey",1000);
//     })
//     .then(()=>{
//         console.log("grey color was changed");
//     })
//     .catch(()=>{
//         console.log("No color changed");
//     })


// changecolor("red",1000, () => {
//     changecolor("orange",1000, () => {
//         changecolor("blue",1000 , () => {
//             changecolor("yellow",1000, () => {
//                 changecolor("grey",1000);
//             });
//         });
//     });
// });


//Promise
// function savetodb(data) {
//     return new Promise((resolve,reject) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         if (internetspeed > 4){
//             resolve("Success : data was saved");
//         }else{
//             reject("Failure : Weak connection. Data not saved");
//         }
//     })
// }

// //Error and result
// savetodb("Promise Chaining")
//     .then( (result) => { // result here refers to resolve in function savetodb
//         console.log("data saved.");
//         console.log(result);
//         return savetodb("Chaining");
//     })
//     .then( (result) =>{
//         console.log("data2 saved.");
//         console.log(result);
//         return savetodb("Chained");
//     })
//     .then( (result) =>{
//         console.log("data3 saved.");
//         console.log(result);
//     })
//     .catch( (error) => { // error here refers to reject in function savetodb
//         console.log("promise was rejected");
//         console.log(error);
//     });


//Promise chaining
// savetodb("Promise Chaining")
//     .then( () => {
//         console.log("data saved.");
//         // savetodb("Chaining").then(()=>{
//         //     console.log("data2 saved.")
//         // });
//         return savetodb("Chaining");
//     })
//     .then( () =>{
//         console.log("data2 saved.");
//         return savetodb("Chained");
//     })
//     .then( () =>{
//         console.log("data3 saved.");
//     })
//     .catch( () => {
//         console.log("promise was rejected");
//     });


//promise
// function savetodb(data) {
//     return new Promise((resolve,reject) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         if (internetspeed > 4){
//             resolve("Success : data was saved");
//         }else{
//             reject("Failure : Weak connection. Data not saved");
//         }
//     })
// }

// savetodb("Promise")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })
// let request = savetodb("Promise");
// request.then( () => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch( () => {
//     console.log("promise was rejected");
//     console.log(request);
// })

// callback hell
// function savetodb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//         success(data);
//     }
//     else {
//         failure();
//     }
// }
// savetodb("Promise", (data) => {
//     console.log("Success: Data saved to db : ", data);
//     savetodb("Concept", (data) => {
//         console.log("Success2: Data saved to db : ", data);
//         savetodb("To avoid Callback Hell", (data) => {
//             console.log("Success3: Data saved to db : ", data);
//         }, () => {
//             console.log("Failure 3: Weak connection, Data not saved");
//         })
//     }, () => {
//         console.log("Failure 2: Weak connection, Data not saved");
//     })
// }, () => {
//     console.log("Failure: Weak connection, Data not saved");
// })

// let h1 = document.querySelector("h1");

// function changecolor(color,delay,nextcolorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextcolorChange) nextcolorChange();
//     },delay);
// }

// changecolor("red",1000, () => {
//     changecolor("orange",1000, () => {
//         changecolor("blue",1000 , () => {
//             changecolor("yellow",1000, () => {
//                 changecolor("grey",1000);
//             });
//         });
//     });
// });


// setTimeout(() => {
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// },2000);

// setTimeout(() => {
//     h1.style.color = "blue";
// },3000);


// setTimeout(() => {
//     console.log("Shivam");
// },2000);

// setTimeout(() => {
//     console.log("Honrao");
// },2000);

// console.log("Hello...");

// function hello (){
//     console.log("inside hello fnc");
//     console.log("Hello");
// }

// function demo(){
//     console.log("inside demo fnc");
//     hello();
// }

// console.log("calling demo");
// demo();
// console.log("done");