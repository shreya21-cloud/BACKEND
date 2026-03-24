const obj = { a: { b: 2 } };

const deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.a.b = 100;

console.log(obj.a.b);    
console.log(deepCopy.a.b); // 