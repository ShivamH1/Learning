const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("Connected");
    })
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength : 30,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min : [10, "Price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default : 0
    },
    category: {
        type: String,
        enum : ["fiction", "non-fiction"],
    },
    genre : [String]
})

const Book = mongoose.model("Book", bookSchema);

// let book1  = new Book({
//     title : "Mathematics",
//     author : "R.D.Sharma",
//     price : 1200
// })

// let book2 = new Book({
//     title: "How to kill a Mockingbird II",
//     author: "Harper Lee",
//     price: "1200" //parsed into number
// });

// book2.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// let book2 = new Book({
//     title: "West World",
//     price: 399
// });

// book2.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// let book2 = new Book({
//     title: "Marvel Comics",
//     price: 500,
//     category : "fiction", //enum validator
// });

// book2.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// let book2 = new Book({
//     title: "Marvel Comics v2",
//     price: 600, 
//     genre: ["comics","fiction","superheroes"],
// });

// book2.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

//validation in updation and error
Book.findByIdAndUpdate("65e9fffc8b1217fab0eaeacc", {price:-500}, {runValidators : true}) 
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });

