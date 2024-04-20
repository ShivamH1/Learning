const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'shiv@17.com'
});

// let q = "SHOW TABLES";

//Inserting data into table
// let q = "INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";
// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [
//     ["123b","123_newuserb","abc@gmail.comb","abcb"],
//     ["123c","123_newuserc","abc@gmail.comc","abcc"],
// ];

//inserting in bulk
// let getRandomUser = () => {
//     return [
//       faker.string.uuid(),
//       faker.internet.userName(),
//       faker.internet.email(),
//       faker.internet.password(),
//     ];
// };

// let q = "INSERT INTO user(id, username, email, password) VALUES ?";
// let data = [];

// for (let i = 1; i <= 100; i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q, [data], (err,res) => {
//         if(err) throw err;
//         console.log(res);
//     });
// }catch (err){
//     console.log(err);
// }

// connection.end();

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
};

//Home Route
app.get("/", (req,res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(res);
            // res.send(result);
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs",{ count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in db");
    }
});

//Show Route
app.get("/user", (req,res) => {
    let q = "SELECT * FROM user";
    try{
        connection.query(q,(err,users) => {
            if (err) throw err;
            res.render("show.ejs", { users });
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

//edit Route
app.get("/user/:id/edit", (req,res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
            // console.log(result);
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

//update route
app.patch("/user/:id",(req,res) => {
    let {id} = req.params;
    let {password:formPass, username:newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass!=user.password){
                res.send("Wrong Password");
            }else{
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
            // res.send(user);
            // console.log(result);
        });
    }catch(err){
        console.log(err);
        res.send("some error in db");
    }
});

//Add route
app.get("/user/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/user/new", (req,res) => {
    let {username, email, password} = req.body;
    let id = uuidv4();

    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}')`;

    try{
        connection.query(q,(err,result) => {
            if (err) throw err;
            // console.log("added new user");
            res.redirect("/user");
        })
    }catch(err) {
        res.send("some error in db");
    }

});

//delete route
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    connection.query(q, (err, result) => {
        if (err) {
            res.send("Some error in db");
        } else {
            let user = result[0];
            res.render("delete.ejs");
        }
    });
});

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    connection.query(q, (err, result) => {
        if (err) {
            res.send("Some error in db");
        } else {
            let user = result[0];

            if (user.password != password) {
                res.send("Wrong Password");
            } else {
                let q2 = `DELETE FROM user WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) {
                        res.send("Some error in db");
                    } else {
                        res.redirect("/user");
                    }
                });
            }
        }
    });
});


app.listen(port, () => {
    console.log("Server listening to ",port);
});












// let getRandomUser = () => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
// };

// console.log(getRandomUser());