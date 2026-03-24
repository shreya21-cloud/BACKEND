const obj = { a: 1, b: 2 };

const inverted = {};

for (let key in obj) {
  const value = obj[key];
  inverted[value] = key;
}

console.log(inverted); 