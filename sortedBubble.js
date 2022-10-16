

function sortBubble(arr) {

    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let t = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = t;
                isSorted = false;
            }
        }
    }
    return arr;
}

console.log(sortBubble([5, 4, 8, 2, 17, 0, -76, 13]));
