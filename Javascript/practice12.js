let length = 4;

function callback() {
    console.log(this.length);
}

const obj = {
    length : 5,
    method(callback){
        callback();
    },
};

obj.method(callback(),1,2);

// const object = {
//     message : "Hello",
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 2000);

// const isEven = (n) => n % 2 == 0;

// let arrayAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
