/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

export default function encryption(s) {
    //remove spaces
    const newStr = s.replaceAll(' ', '');
    //cashing the sqare root 
    const _cashRoot = Math.sqrt(newStr.length);

    let colLength = Math.ceil(_cashRoot);
    let rowNum = Math.floor(_cashRoot);
    //special check for the task
    if (colLength * rowNum < newStr.length) rowNum++;
   
    let resultArray = [];


    for (let i = 0; i < colLength; i++) {

        for (let j = 0; j < rowNum; j++) {
            //calculate every row and extract each symbol 
            const _s = newStr.slice(j * colLength, colLength * (j + 1)).at(i);
            //add border case for the 1st undefined string and last undefined symbols
            if (_s != undefined) resultArray[i] = (resultArray[i] != undefined ? resultArray[i] + _s : _s);

        }

    }
    return resultArray.toString().replaceAll(',',' ');
}
