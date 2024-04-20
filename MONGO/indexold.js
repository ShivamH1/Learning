const mongoose = require('mongoose');

main()
    .then((res) => {
    console.log("Connected");
    })
    .catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//schema
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

//model
const User = mongoose.model("User",userSchema);
// const Employee = mongoose.model("Employee",userSchema);

//create/ insertone
// const user1 = new User({
//     name : "Adam",
//     email : "adam@abc.com",
//     age : 18
// });

// const user2 = new User({
//     name : "eve",
//     email : "eve@abc.com",
//     age : 18
// });

//save in db
// user1.save();
// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//insertmany
// User.insertMany ([
//     {name : "Tony", email : "tony@stark.org", age : 35},
//     {name : "Thor", email : "thor@assguard.un", age : 99},
//     {name : "Peter", email : "peter@spider.org", age : 23}
// ]).then((res) => {
//     console.log(res);
// });

//find
// User.find({}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
// User.find({age:{$gt : 30}}).then((res) => {
//   // console.log(res[0]); //res[0] we don't want result in array form
//   console.log(res[0].name); // we want only name
// }).catch((err) => {
//   console.log(err);
// });

// User.findOne({age:{$gt : 30}}).then((res) => { //findOne
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

//findbyid
// User.find({_id:"65e76030bcda951adf9c8785"}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
// User.findById("65e76030bcda951adf9c8785").then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

//update
// User.updateOne({name:"Tony"},{age:49}) //updateOne
//   .then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.updateMany({age : {$gt : 30}}, {age : 55}) //updateMany
//   .then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.findOneAndUpdate({name:"Tony"},{age:42},{new : true}) //findoneandupdate
//   .then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.findByIdAndUpdate("65e76030bcda951adf9c8784",{age:49}) //findbyidandupdate
//   .then((res) => {
//     console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

//delete
// User.deleteOne({name:"eve"}).then((res) => { //deleteone
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({age : {$gt : 35}}).then((res) => { //deleteMany
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndDelete("65e75ecd9942e96ee8dca767").then((res) => { //deletebyid
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete({age : {$gt : 20}}).then((res) => { //findanddelete
//   console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


