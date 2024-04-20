const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view enginer","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res) => {
    // res.send("this is home");
    res.render("home.ejs")
})

app.get("/ig/:username",(req,res) => {
    const followers = ["adam","adam","adam","adam","grace"];
    let {username} = req.params;
    // console.log(username);
    let instaData = require("./data.json");
    let data = instaData[username]
    res.render("insta.ejs",{data});
});

app.get("/rolldice",(req,res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num : diceVal});
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});