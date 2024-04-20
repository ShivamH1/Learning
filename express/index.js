const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`App is listening in port : ${port}`);
});

// app.use((req, res) => {
    // console.log(req);
    // console.log("Request Received");
    // res.send("This is response");
    // res.send({
    //     name : "fruit",
    //     color : "red"  
    // });

    // res.send("<h1>Fruits</h1><ul><li>Apple</li></ul>")


// });

app.get("/",(req,res) => {
    res.send("hello i am root");
})

app.get("/apple",(req,res) => {
    res.send("you contacted apple path");
})

app.get("/orange",(req,res) => {
    res.send("you contacted orange path");
})

// app.get("*", (req,res) => {
//     res.send("This path does not exist"); 
// })

// app.post("/",(req,res) => {
//     res.send("you sent a post to root path");
// })

app.get("/:username/:id",(req,res) => {
    // console.log(req.params);
    let {username, id} = req.params
    // res.send("Hello i am root");
    let htmlstr = `<h1>Welcome to the page of ${username}!</h1>`;
    res.send(htmlstr);
})

app.get("/search", (req,res) => {
    // console.log(req.query);
    let {q}  = req.query;
    if (!q) {
        res.send(`<h1>Not Found</h1>`);
    }
    // res.send(`search result for : ${q}`);
    res.send(`<h1>Search result for ${q}!</h1>`);
});

