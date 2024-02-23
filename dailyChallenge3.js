const prompt = require("prompt-sync")();
function fibonacci_sequence(n){
    let fibArray = [0,1];
    for(i=2; i<n; i++){
        let nextNum=fibArray[i-2] + fibArray[i-1];
        fibArray.push(nextNum);
    }
    return fibArray;
}
let n = prompt("Input an integer: ");
let fibsequence = fibonacci_sequence(n);
console.log("The Fibonacci Sequece is : ", fibsequence);

