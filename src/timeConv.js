/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.*/


function timeConversion(s) {
    let amPm = s.slice(-2);
    let hours = Number(s.slice(0, 2));
    if (amPm === "PM") { hours == 12 ? hours = 12 : hours += 12; } //correct 12PM time border case
    else { hours == 12 ? hours = 0 : hours; } //correct 12AM time border case
    return (hours < 10 ? ("0" + hours) : (hours)) + s.slice(2, -2); //add zero before hours less than 10
}

function testResult(foo, result) {
    var f = foo;
    if (f === result) {
        console.log("Test completed!");
    }
    else console.log("Test failed!\n The waiting result is " + result);
}

let testTime = "12:05:45PM";
console.log(timeConversion(testTime));
testResult(timeConversion(testTime), "12:05:45");