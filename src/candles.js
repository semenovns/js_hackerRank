/*
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each 
year of their total age. They will only be able to blow 
out the tallest of the candles. Count how many candles 
are tallest.*/

function birthdayCakeCandles(candles) {
    var maxValue =  candles.sort((a,b)=>b-a)[0];
    return candles.filter((x)=> x==maxValue ).length;
    
}

function testResult(foo, result) {
    var f = foo;
    if (f === result){
        console.log("Test completed!");}
    else console.log("Test failed!\n The waiting result is "+result);
}

testArray = [3 , 3, 1,0, 3,2,-1,1,3,3,2,1,0,-5,3];

testResult(birthdayCakeCandles(testArray), 6);