const arr = [5, 12, 8, 130, 44];
const res = arr.reduce((min, v) => v < min ? v : min, Infinity);
console.log(res);