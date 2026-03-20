const user = { name: 'A', password: 'x' };

const { password, ...changed} = user;

console.log(changed); 