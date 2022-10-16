
/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  
places after the decimal.
*/
function plusMinus(arr) {

    let ratios = {
        positive: 0,
        negative: 0,
        zero: 0
    };

    arr.forEach(element => { element > 0 ? ratios.positive++ : element < 0 ? ratios.negative++ : ratios.zero++ });
    for (var key in ratios) {
        ratios[key] = Number(ratios[key] / arr.length).toPrecision(6);
    }
    console.log(ratios.positive + '\n' + ratios.negative + '\n' + ratios.zero)


}

function testResult(foo, result) {
    var f = foo;
    if (f === result) {
        console.log("Test completed!");
    }
    else console.log("Test failed!\n The waiting result is " + result);
}

let testArray = [-4, 3, -9, 0, 4, 1];
plusMinus(testArray);
testResult(plusMinus(testArray), 0.500000 + '\n' + 0.333333 + '\n' + 0.166667);
