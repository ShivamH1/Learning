const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//defining/creating middleware using app.use
// app.use( (req,res) => {
//     console.log('Hi I am Middleware');
//     res.send("Middleware finished");
// });

//next()
// app.use( (req,res,next) => {
//     console.log('Hi I am Middleware');
//     next();
// });
//next()
// app.use( (req,res,next) => {
//     console.log('Hi I am 2nd Middleware');
//     next();
// });

//utility middleware or logger-morgan
// app.use( (req,res,next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req);
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

//access token for apis
// app.use("/api",(req,res,next) =>{ //middleware for authentication
//     let {token} = req.query;
//     if (token === "give access"){
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });

// app.get("/api",(req,res) => { //calling middleware for authentication
//     res.send("data");
// });

//error class and multiple middleware passing
const checkToken = (req,res,next) =>{ //middleware for authentication
    let {token} = req.query;
    if (token === "give access"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api",checkToken,(req,res) => { //calling middleware for authentication
    res.send("data");
});



app.get("/",(req,res) => {
    res.send("Hi I am root!");
});

app.get("/random",(req,res) => {
    res.send("This is random page");
});

//error
//error handling using middleware
app.get("/err",(req,res) => {
    abcd = abcd;
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403,"Access Prohibited!");
});

// app.use((err,req,res,next) => {
//     // console.log(err);
//     console.log("------------ERROR-----------");
//     // next(err);
//     res.send(err);
// });

//default status and message
app.use((err,req,res,next) => {
    let {status=500,message="some error"} = err; //default assigning of error
    res.status(status).send(message);
});

//404 error
app.use((req,res) => {
    res.status(404).send("Page not found!");
});

app.listen(8080, () => {
    console.log("server starting at port 8080");
});