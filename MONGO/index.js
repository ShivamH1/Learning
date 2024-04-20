const express = require("express");
const app = express();
const port = 8080;

const mongoose = require("mongoose");
main()
    .then(()=>{console.log("Connection successful");})    
    .catch((err) => {console.log(err);});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
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
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{ chats });
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

app.listen(port, () => {
    console.log("Server is Listening to port",port);
});

