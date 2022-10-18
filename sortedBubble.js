

function sortBubble(arr) {

    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                isSorted = false;
            }
        }
    }
    return arr;
}

console.log(sortBubble([5, 4, 8, 2, 17, 0, -76, 13]));
