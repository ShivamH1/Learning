const mongoose = require("mongoose");
const Chat = require("./models/chat")
main()
    .then(()=>{console.log("Connection successful");})    
    .catch((err) => {console.log(err);});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let chats = [
    {
        from : "Neha",
        to : "Priya",
        message : "Send HPC notes",
        created_at : new Date(),
    },
    {
        from: "Priya",
        to: "Neha",
        message: "I will share by 8",
        created_at: new Date(),
    },
    {
        from: "Neha",
        to: "Priya",
        message: "Okay try to send them in least time",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        message: "Tmw at turf at 7 morning",
        created_at: new Date()
    },
    {
        from: "mohit",
        to: "rohit",
        message: "Done",
        created_at: new Date(),
    },
];

Chat.insertMany(chats);