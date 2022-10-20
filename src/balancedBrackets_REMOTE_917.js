/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

export default function isBalanced(s) {
    let subStr = s.substr();
    const reg = /\[\]|\{\}|\(\)/g;

    for (let i = 0; i < s.length/2; i++) {
            subStr = subStr.replaceAll(reg,'');
    }
    return subStr.length == 0 ? 'YES' : 'NO';
}

const testBalanced = "{{[[(())]]}}"; //balanced
const testUnbalanced = "{(([])[])[]]}}";

console.log(isBalanced(testBalanced));
console.log(isBalanced(testUnbalanced));