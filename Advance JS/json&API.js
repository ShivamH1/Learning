let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);
})

let url = "http://universities.hipolabs.com/search?name=";

function show(colArr){
    let list = document.querySelector("#list");
    for (col of colArr){
        console.log(col.name);
        
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data
    }
    catch(err){
        console.log(err);
        return [];
    }
}

// const url = "https://icanhazdadjoke.com/";
// async function getJoke(){
//     try{
//         const config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         return res.data.joke;
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let joke = await getJoke();
//     console.log(joke);
//     let p = document.querySelector("p");
//     p.innerText = joke;
// });


// let btn = document.querySelector("button");
// let url1 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click",async ()=>{
//     let image = await getFetch();
//     console.log(image);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",image);
// })

// btn.addEventListener("click",async ()=>{
//     let fact = await getFetch();
//     console.log(fact);
//     let p = document.querySelector("#output");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFetch(){
//     try{
//         let res = await axios.get(url1);
//         return res.data.message;
//         // return res.data;
//         // return res.data.fact;
//     }
//     catch(err){
//         console.log(err);
//         return "No Image found";
//     }
// }

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch(e){
//         console.log("error--",e);
//     }
// }

// fetch(url)
//     .then((response)=>{
//         // console.log(response);
//         // response.json().then((data)=>{
//         //     console.log(data);
//         // });
//         return response.json();
//     })
//     .then((data)=>{
//         // console.log(data);
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// let jsonRes = 
// '{"fact":"The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.","length":136}';
// console.log(jsonRes);


// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// let string = JSON.stringify(validRes);
// console.log(string);