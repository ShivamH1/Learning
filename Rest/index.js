const express = require("express");
const app = express(); 
const port = 8080;
const path = require("path"); //to use the folder(directory)
const {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override");
//app.use() loads a function to be used as middleware.
app.use(express.urlencoded({extended: true})); //parsing the data for post req
app.use(methodOverride('_method')); //delete and update i.e patch, put, and delete

app.set("view engine","ejs"); //to use ejs
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public"))); //express.static() is a function that takes a path, and returns a middleware that serves all files in that path to /
//(If you wanted to prefix it with /public or whatever, you'd write app.use('/public', express.static(path.join(__dirname, 'public'))), where the first /public is the web path and the second is the filesystem path of the files being served).

let posts = [
    {
        id : uuidv4(),
        name : 'Shivam',
        content : "I love coding! and developing s/w"
    },
    {
        id : uuidv4(),
        name : 'Shubham',
        content : "I love networking!"
    },
    {
        id : uuidv4(),
        name : 'Codenator',
        content : "I love coding!"
    }
];

app.get("/posts",(req,res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) => {
    res.render("new.ejs")
});

app.post("/posts", (req,res) => {
    let {name,content} = req.body;
    let id = uuidv4();
    posts.push({id,name,content});
    // console.log("Working",req.body);
    // res.send("Post working");
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    // res.send(post);
    res.render("show.ejs",{post});
    // res.send("request working");
});

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.get("/",(req,res) => {
    res.send("Server Working well!");
});

app.listen(port,() => {
    console.log("listening to the port",port);
});