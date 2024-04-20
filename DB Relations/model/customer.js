const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
    .then(()=>console.log("connection established"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    items : String,
    price : Number,
});

const customerSchem = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order"
        }
    ]
});

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchem);

const addCustomer = async () => {
    let Customer1 = new Customer({
        name : "Rahul",
    });
    let order1 = await Order.findOne({item : "Chips"});
    let order2 = await Order.findOne({item : "Chocolate"});
    Customer1.orders.push(order1);
    Customer1.orders.push(order2);

    let res = await Customer1.save();
    console.log(res);
};

addCustomer();

// const addOrder = async () => {
//     let res = await Order.insertMany([
//         {item : "Samosa", price : 20},
//         {item : "Chips", price : 10},
//         {item : "Chocolate", price : 50}
//     ]);
//     console.log(res);
// };

// addOrder();