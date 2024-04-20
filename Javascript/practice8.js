tic_tak_toe = [["X"," ", "O"], [" ","O", " "],["O"," ","X"]];
console.log(tic_tak_toe);
let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);

m = 3;
let a = arr.slice(-n);
console.log(a);

let str = prompt("Enter name: ");
if (str.length == 0){
    console.log("blank");
}
else{
    console.log("correct");
}

let str1 = "AppiE";
let idx = 3;

if (str1[idx] == str[idx].toLowerCase()){
    console.log("Lowercase");
}
else{
    console.log("Uppercase");
}

let greet = "          Hello      ";
let core = greet.trim();
console.log(core)

let alpha = ['a','b','c','d','e'];
console.log(alpha.includes('b'));