function findMedian(arr) {
    arr.sort((a,b)=> a-b);
    
    const middle = arr[Math.ceil((arr.length-1)/2)];

    return middle;

    
}


const arr = [-5, 2,-4,0,5,7,1,5355,-2];
arr

console.log(findMedian(arr));