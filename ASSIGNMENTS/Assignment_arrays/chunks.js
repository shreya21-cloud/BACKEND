let a = [1,2,3,4,5];
let chunk = 2;

let result = [];

for (let i = 0; i < a.length; i += chunk) {
    result.push(a.slice(i, i + chunk));
}

console.log(result);