function interleave (arr, arr2) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArr.push(arr[i], arr2[j]);
        }
    }
    
    
    
    return newArr;
};