const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

const mongoose = require("mongoose");
main()
    .then(()=>{console.log("Connection successful");})    
    .catch((err) => {console.log(err);});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
};

const path = require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

const Chat = require("./models/chat");

app.use(express.static(path.join(__dirname,"public"))); //to use css file or js

app.use(express.urlencoded({ extended:true })); //parsing data for post req

const methodOverride = require("method-override"); //for put and delete
app.use(methodOverride("_method")); //same as above to use it

//index route
app.get("/chats",async (req,res) =>{
    try{ //try catch
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs",{ chats });
    }catch(err){
        next(err);
    }
});

//new route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});

//create route
app.post("/chats",(req,res) => {
    let {from, to, message} = req.body; //parsing express.urlencoder
    let newChat = new Chat({
        from : from,
        message : message,
        to : to,
        created_at : new Date()
    });
    // console.log(newChat);
    newChat
    .save()
    .then(res => {console.log("new chat was saved")})
    .catch((err) => {console.log(err)});
    res.redirect("/chats");
});

//async wrap multiple async error handling
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    }
}

//NEW-SHOW ROUTE async error handling
app.get("/chats/:id", asyncWrap(async(req,res,next) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next(new ExpressError(404,"Chat not Found!")); //handling async error
    }
    res.render("edit.js", {chat});
}));

//edit route
app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{ chat });
});

//update route
app.put("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let {message : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {message:newMsg},
        {runValidators:true, new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//destroy route
app.delete("/chats/:id",async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

//mongoose error handling
const handleValidationErr = (err) => {
    console.log("This was validation error");
    console.dir(err)
    return err;
} 

app.use((err,req,res,next) => {
    console.log(err.name);
    if (err.name == "Validation"){
        // console.log("This was validation error");
        err = handleValidationErr(err);
    }
    next(err);
});


//error handling middleware
app.use((err,req,res,next) => {
    let {status=500,message='Error'} = err;
    res.status(status).send(message);
});

app.listen(port, () => {
    console.log("Server is Listening to port",port);
});

