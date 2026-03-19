const arr = ['a', 'b', 'a', 'c'];
let freq = {};

for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (freq[val]) {
        freq[val]++;
    } else {
        freq[val] = 1;
    }
}

console.log(freq);