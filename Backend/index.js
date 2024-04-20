const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});

app.get("/register",(req,res) => {
    let {user,pass} = req.query;
    res.send(`Get Response. Welcome ${user}!`);
})

app.post("/register",(req,res) => {
    let {user,pass} = req.body;
    res.send(`Post Response. Welcome ${user}!`);
})