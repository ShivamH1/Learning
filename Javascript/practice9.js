let arr = [5,10,2,6,8,3];
let largest = 0;
for (let i=0; i<=arr.length;i++){
    if (arr[i] > largest){
        largest = arr[i];
    }
}
console.log(`The largest number is ${largest}`);
// let n = 7;
// let fact = 1;
// if (n == 0){
//     console.log(1);
// }
// for (let i = 1; i <= n; i++){
//     fact *= i;
// }
// console.log(fact);

// let number = 287152;
// let sum = 0;
// x = number;
// while (x > 0){
//     let digit = x % 10;
//     sum += digit;
//     x = Math.floor(x/10);
// }
// console.log(sum);

// let number = 287152;
// let count = 0;
// let x = number;
// while (x > 0){
//     count++;
//     x = Math.floor(x/10);
// }
// console.log(count);

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);