/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */


function gradingStudents(grades) {
/*
//The same without arrow functions
    grades.forEach(function (grade) {
        if (grade >= 38) {
            tGrade = Math.ceil(grade / 5) * 5;
            tGrade - grade < 3 ? grades.splice(grades.indexOf(grade), 1, tGrade) : grade;
        }
    });
    return grades;*/

    grades.map(
        (grade) =>
        (
            grade >= 38 ? 
                (Math.ceil(grade / 5) * 5 - grade < 3 ? 
                    grades.splice(grades.indexOf(grade), 1, Math.ceil(grade / 5) * 5 ) : 
                    grade) :
                grade
        )
    )
    return grades;
}

function testResult(foo, result) {
    var f = foo;
    if (JSON.stringify(foo) === JSON.stringify( result)) {
        console.log("Test completed!");
    }
    else console.log("Test failed!\n The waiting result is " + result);
}

let testArray = [73, 67, 38, 33];
let resArray = [75, 67, 40, 33];
//miniMaxSum(testArray);
testResult(gradingStudents(testArray), resArray);
