const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
    .then(()=>console.log("connection established"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username : String,
    addresses : [
        {
            // _id : false, //no id allocated
            location : String,
            city : String,
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUsers = async () => {
    let user1 = User({
        username : "sherlock holmes",
        addresses : [
            {
                location : "221B Baker Street",
                city : "London"
            }
        ]
    });
    user1.addresses.push({location:"P32 Wallstreet",city: "London"});
    let res = await user1.save();
    console.log(res);
}

addUsers();