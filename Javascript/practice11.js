let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start,end));
// function countvowel(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str.charAt(i) == "a" ||
//         str.charAt(i) == "e" ||
//         str.charAt(i) == "i" ||
//         str.charAt(i) == "o" ||
//         str.charAt(i) == "u"){
//             count ++;
//         }
//     return count;
//     }
// }

// let string = "apnacollege";
// console.log(countvowel(string));

// function largest(country){
//     let ans;
//     for(let i = 0; i<country.length; i++){
//         // ans = Math.max(ans,country[i].length);
//     }
//     return ans;
// }

// function longest(country){
//     let ansIdx = 0;
//     for(let i = 0; i<country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let curlen = country[i].length;
//         if(curlen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }

// let country = ["Australia", "Germany", "United States of America"];
// console.log(longest(country));

// function unique(str){
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         currchar = str[i];
//         if(ans.indexOf(currchar) == -1){
//             ans += currchar;
//         }
//     }
//     return ans;
// }

// let str = "abcdabcdefgggh";
// console.log(unique(str));


// function getelement(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// getelement(arr,5);