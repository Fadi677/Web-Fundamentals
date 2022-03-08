// always hungry
function alwaysHungry(arr) {
    var z=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy")
            z++;
        }

    }
    if(z===0) console.log("I'm Hungry")
}
var arr=[3.14, "food", "food", true, "food"];
alwaysHungry(arr);

// highpass filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 7);
console.log(result); // we expect back [6, 8, 10, 9]

// better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
        var avg=sum/arr.length
    }
    var count = 0
    for(var j=0;j<arr.length;j++){
        if(arr[j]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// array reverse
function reverse(arr) {
    var rev=[];
    for(var i=arr.length-1;i>=0;i--){
        rev.push(arr[i]);
    }
    arr=rev;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2;i<n;i++){
        var fib=fibArr[i-2]+fibArr[i-1];
        fibArr.push(fib);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]