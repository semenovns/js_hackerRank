function findMedian(arr) {
     
    arr.sort();

    console.log(arr.sort());
    return arr.sort()[Math.ceil(arr.length/2)-1];
    

}

console.log(findMedian([0,1,5,2,6,3,4,7,9]));