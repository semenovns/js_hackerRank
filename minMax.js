/*
Given five positive integers, find the minimum and maximum values that 
can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line 
of two space-separated long integers.*/

function miniMaxSum(arr) {
    let minSum, maxSum = 0;
    minSum = arr.sort((a, b) => a - b).slice(0, -1).reduce((prev, cur) => prev + cur);
    maxSum = arr.reverse().slice(0, -1).reduce((prev, cur) => prev + cur);
    console.log(minSum + " " + maxSum);
    return minSum + " " + maxSum;
}

function testResult(foo, result) {
    var f = foo;
    if (f === result) {
        console.log("Test completed!");
    }
    else console.log("Test failed!\n The waiting result is " + result);
}

let testArray = [34, -5, 11, 0, 7, 2, 1];
//miniMaxSum(testArray);
testResult(miniMaxSum(testArray), "16 55");

